import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function Reveal() {
  const { id } = useParams();
  const data = JSON.parse(localStorage.getItem(id));

  return (
    <div className="reveal-screen">
      {/* HEART RAIN BLAST */}
      <motion.div
        className="heart-rain"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {"💖 💕 💘 💝 💗 💓".split(" ").map((h, i) => (
          <motion.span
            key={i}
            animate={{ y: ["-10vh", "110vh"] }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            {h}
          </motion.span>
        ))}
      </motion.div>

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
      >
        Yayyyy 💕
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {data.name}, I love you 😘
      </motion.h2>

      {/* CENTERED PHOTOS */}
      <div className="photo-row">
        {data.photos.slice(0, 3).map((p, i) => (
          <motion.img
            key={i}
            src={p}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.3 }}
          />
        ))}
      </div>

      <p className="final-msg">
        You just made my Valentine’s Day special 💖
      </p>
    </div>
  );
}
