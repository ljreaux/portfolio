"use client";
import React from "react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { AnimatePresence, motion } from "framer-motion";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-orange">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Planning and Design"
          icon={<AceternityIcon order={"Phase 1"} />}
          des="First, we chat with you to get a clear idea of what you need and want for your project. We sketch out some designs and plan how everything will work together, making sure it all fits your vision perfectly."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Development & Testing"
          icon={<AceternityIcon order="Phase 2" />}
          des="Next, we dive into building your project, setting up the tech and coding both the backend and frontend. We run thorough tests to make sure everything works smoothly, fixing any issues that pop up along the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title=" Deployment and Maintenance"
          icon={<AceternityIcon order="Phase 3" />}
          des="Finally, we launch your project and make sure it's running great on the live server. We keep an eye on it, make any needed updates, and listen to your feedback for ongoing tweaks and improvements."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  des,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  des: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-2xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
        <h2 className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-[#e4ecff] mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {des}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-full md:w-60 md:mt-10">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9B3922_0%,#FFE5B4_50%,#9B3922_100%)]" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#2C1E0E]/50 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
