"use client";
import React, { useState } from 'react'
import {
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalContent,
    Modal,
    Skeleton,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { PublicKey } from '@metaplex-foundation/umi';
import { JsonMetadata } from '@metaplex-foundation/mpl-token-metadata';
import { ShowNft } from "./components/ShowNFT";

import LandingPage from './pages/LandingPage';
function page() {
    const {
        isOpen: isShowNftOpen,
        onOpen: onShowNftOpen,
        onClose: onShowNftClose,
    } = useDisclosure();
    const [mintsCreated, setMintsCreated] = useState<
        | { mint: PublicKey; offChainMetadata: JsonMetadata | undefined }[]
        | undefined
    >();
    return (
        <div>
            <div className="min-h-screen text-white relative">
                {/* Parallax Background */}
                <div className="parallax-bg" />
                <div className="parallax-overlay" />
                <div className="animated-grid" />

                <LandingPage />

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
        </div>
    )
}

export default page
