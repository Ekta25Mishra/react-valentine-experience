import { motion } from "framer-motion";

export default function Balloons() {
  return (
    <motion.div
      animate={{ y: [-100, -1200] }}
      transition={{ duration: 10, repeat: Infinity }}
    >
      🎈 😘 🎈 💕
    </motion.div>
  );
}
