import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github } from 'lucide-react';

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Emily Parker",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=400",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  }
];

const Team = () => {
  return (
    <div className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass card-gradient p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-400/20"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                {member.name}
              </h3>
              <p className="text-gray-300 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href={member.socials.twitter} 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href={member.socials.linkedin} 
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href={member.socials.github} 
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Team;