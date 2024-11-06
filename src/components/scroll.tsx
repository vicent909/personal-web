"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Scroll() {
  const { scrollYProgress } = useScroll();
  const background = useTransform(scrollYProgress, [0, 1], ['rgb(181, 181, 181)', 'rgb(191, 214, 255)'])
  return (
    <motion.div
      style={{
        background,
        width: "100%",
        position: "sticky",
        top: "4em",
        height: "5px",
        zIndex: 99,
        transformOrigin: "left",
        scaleX: scrollYProgress
      }}
    ></motion.div>
  );
}
