"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Profile = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-transparent p-1">
          <Image
            src="/ProfilePicture.jpeg"
            priority
            quality={100}
            fill
            alt="Profile Picture"
            className="object-cover rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};
