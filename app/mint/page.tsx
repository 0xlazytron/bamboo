
"use client"
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';
import Image from 'next/image';
import { PublicKey, publicKey, Umi } from "@metaplex-foundation/umi";
import {
    DigitalAssetWithToken,
    JsonMetadata,
} from "@metaplex-foundation/mpl-token-metadata";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { useUmi } from "../utils/useUmi";
import { GuardReturn } from "../utils/checkerHelper";
// import { image, headerText } from "../settings";
import { useSolanaTime } from "../utils/SolanaTimeContext";
import {
    fetchCandyMachine,
    safeFetchCandyGuard,
    CandyGuard,
    CandyMachine,
    AccountVersion,
} from "@metaplex-foundation/mpl-candy-machine";
import { guardChecker } from "../utils/checkAllowed";
import {
    ModalOverlay,
    ModalBody,
    ModalContent,
    Modal,
    Skeleton,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { ButtonList } from "../components/MintButton";
import { ShowNft } from "../components/ShowNFT";
// import FeaturedNFTs from "./components/FeaturedNFTs";
// import FAQ from "./components/FAQ";
// import Footer from "../components/Footer";
const useCandyMachine = (
    umi: Umi,
    candyMachineId: string,
    checkEligibility: boolean,
    setCheckEligibility: Dispatch<SetStateAction<boolean>>,
    firstRun: boolean,
    setfirstRun: Dispatch<SetStateAction<boolean>>
) => {
    const [candyMachine, setCandyMachine] = useState<CandyMachine>();
    const [candyGuard, setCandyGuard] = useState<CandyGuard>();
    const toast = useToast();

    useEffect(() => {
        (async () => {
            if (checkEligibility) {
                if (!candyMachineId) {
                    console.error("No candy machine in .env!");
                    if (!toast.isActive("no-cm")) {
                        toast({
                            id: "no-cm",
                            title: "No candy machine in .env!",
                            description: "Add your candy machine address to the .env file!",
                            status: "error",
                            duration: 999999,
                            isClosable: true,
                        });
                    }
                    return;
                }

                let candyMachine;
                try {
                    candyMachine = await fetchCandyMachine(
                        umi,
                        publicKey(candyMachineId)
                    );
                    //verify CM Version
                    if (candyMachine.version != AccountVersion.V2) {
                        toast({
                            id: "wrong-account-version",
                            title: "Wrong candy machine account version!",
                            description:
                                "Please use latest sugar to create your candy machine. Need Account Version 2!",
                            status: "error",
                            duration: 999999,
                            isClosable: true,
                        });
                        return;
                    }
                } catch (e) {
                    console.error(e);
                    toast({
                        id: "no-cm-found",
                        title: "The CM from .env is invalid",
                        description: "Are you using the correct environment?",
                        status: "error",
                        duration: 999999,
                        isClosable: true,
                    });
                }
                setCandyMachine(candyMachine);
                if (!candyMachine) {
                    return;
                }
                let candyGuard;
                try {
                    candyGuard = await safeFetchCandyGuard(
                        umi,
                        candyMachine.mintAuthority
                    );
                } catch (e) {
                    console.error(e);
                    toast({
                        id: "no-guard-found",
                        title: "No Candy Guard found!",
                        description: "Do you have one assigned?",
                        status: "error",
                        duration: 999999,
                        isClosable: true,
                    });
                }
                if (!candyGuard) {
                    return;
                }
                setCandyGuard(candyGuard);
                if (firstRun) {
                    setfirstRun(false);
                }
            }
        })();
    }, [umi, checkEligibility]);

    return { candyMachine, candyGuard };
};

const MintPage = () => {

    const umi = useUmi();
    const solanaTime = useSolanaTime();
    const toast = useToast();
    const {
        isOpen: isShowNftOpen,
        onOpen: onShowNftOpen,
        onClose: onShowNftClose,
    } = useDisclosure();
    const {
        isOpen: isInitializerOpen,
        onOpen: onInitializerOpen,
        onClose: onInitializerClose,
    } = useDisclosure();
    const [mintsCreated, setMintsCreated] = useState<
        | { mint: PublicKey; offChainMetadata: JsonMetadata | undefined }[]
        | undefined
    >();
    const [isAllowed, setIsAllowed] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);
    const [ownedTokens, setOwnedTokens] = useState<DigitalAssetWithToken[]>();
    const [guards, setGuards] = useState<GuardReturn[]>([
        { label: "startDefault", allowed: false, maxAmount: 0 },
    ]);
    const [firstRun, setFirstRun] = useState(true);
    const [checkEligibility, setCheckEligibility] = useState<boolean>(true);

    if (!process.env.NEXT_PUBLIC_CANDY_MACHINE_ID) {
        console.error("No candy machine in .env!");
        if (!toast.isActive("no-cm")) {
            toast({
                id: "no-cm",
                title: "No candy machine in .env!",
                description: "Add your candy machine address to the .env file!",
                status: "error",
                duration: 999999,
                isClosable: true,
            });
        }
    }
    const candyMachineId: PublicKey = useMemo(() => {
        if (process.env.NEXT_PUBLIC_CANDY_MACHINE_ID) {
            return publicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID);
        } else {
            console.error(`NO CANDY MACHINE IN .env FILE DEFINED!`);
            toast({
                id: "no-cm",
                title: "No candy machine in .env!",
                description: "Add your candy machine address to the .env file!",
                status: "error",
                duration: 999999,
                isClosable: true,
            });
            return publicKey("11111111111111111111111111111111");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { candyMachine, candyGuard } = useCandyMachine(
        umi,
        candyMachineId,
        checkEligibility,
        setCheckEligibility,
        firstRun,
        setFirstRun
    );

    useEffect(() => {
        const checkEligibilityFunc = async () => {
            if (!candyMachine || !candyGuard || !checkEligibility || isShowNftOpen) {
                return;
            }
            setFirstRun(false);

            const { guardReturn, ownedTokens } = await guardChecker(
                umi,
                candyGuard,
                candyMachine,
                solanaTime
            );

            setOwnedTokens(ownedTokens);
            setGuards(guardReturn);
            setIsAllowed(false);

            let allowed = false;
            for (const guard of guardReturn) {
                if (guard.allowed) {
                    allowed = true;
                    break;
                }
            }

            setIsAllowed(allowed);
            setLoading(false);
        };

        checkEligibilityFunc();
        // On purpose: not check for candyMachine, candyGuard, solanaTime
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [umi, checkEligibility, firstRun]);

    return (
        <div className="pt-24 px-4 container mx-auto min-h-screen max-w-4xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-teal-400 to-orange-400 bg-clip-text text-transparent">
                    Mint Your Bamboo Club NFT
                </h1>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 ">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass card-gradient p-6 rounded-xl md:block hidden"
                >
                    <Image
                        src="/assets/gifs/surare.gif"
                        alt="NFT Preview"
                        width={400}
                        height={400}
                        className="w-fit mx-auto h-72 md:h-full  object-cover rounded-lg "
                    />

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass card-gradient p-6 rounded-xl space-y-6"
                >

                    <div className="absolute top-3  left-6 z-10 flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-emerald-500/50">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-emerald-500 font-semibold text-sm">LIVE</span>
                    </div>


                    <div className="bg-white/20 rounded-3xl p-6 border-2 border-white/20">

                        <div className="grid grid-cols-3 gap-3 mb-4">
                            <div className="bg-black/20 rounded-xl p-3 text-center">
                                <div className="text-xs text-white/70">Supply</div>
                                <div className="text-lg font-bold text-white/70">{candyMachine?.data.itemsAvailable?.toString() ?? '-'}</div>
                            </div>
                            <div className="bg-black/20 rounded-xl p-3 text-center">
                                <div className="text-xs text-white/70">Minted</div>
                                {/* <div className="text-lg font-bold"> {candyMachine?.itemsRedeemed ? (candyMachine.itemsRedeemed + BigInt(63)).toString() : '-'}</div> */}
                                <div className="text-lg font-bold text-white/70"> {candyMachine?.itemsRedeemed?.toString() ?? '-'}</div>
                            </div>
                            <div className="bg-black/20 rounded-xl p-3 text-center">
                                <div className="text-xs text-white/70">Price</div>
                                <div className="text-lg font-bold text-white/70">0.3</div>
                            </div>
                        </div>

                        {loading ? (
                            <div>
                                <Skeleton height="30px" my="10px" />
                                <Skeleton height="30px" my="10px" />
                                <Skeleton height="30px" my="10px" />
                            </div>
                        ) : (
                            <ButtonList
                                guardList={guards}
                                candyMachine={candyMachine}
                                candyGuard={candyGuard}
                                umi={umi}
                                ownedTokens={ownedTokens}
                                setGuardList={setGuards}
                                mintsCreated={mintsCreated}
                                setMintsCreated={setMintsCreated}
                                onOpen={onShowNftOpen}
                                setCheckEligibility={setCheckEligibility}
                            />
                        )}
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-bold text-lg text-white/70">Minting Benefits</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Mint 1: 50% off merchandise + free shipping for life</li>
                            <li>Mint 3: Free exclusive T-shirt</li>
                            <li>Mint 5: $500 USDC prize for mint sellout</li>
                            <li>Mint 7: $1000 USDC prize for mint sellout</li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass card-gradient p-6 rounded-xl md:hidden block "
                >
                    <Image
                        src="/assets/gifs/surare.gif"
                        alt="NFT Preview"
                        width={400}
                        height={400}
                        className="w-fit mx-auto h-72 md:h-full  object-cover rounded-lg "
                    />

                </motion.div>

            </div>
            <Modal isOpen={isShowNftOpen} onClose={onShowNftClose}>
                <ModalOverlay />
                <ModalContent className="bg-transparent">
                    <ModalBody>
                        {/* Only render ShowNft if mintsCreated exists */}
                        {mintsCreated && <ShowNft nfts={mintsCreated} />}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default MintPage;