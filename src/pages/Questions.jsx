import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useState } from "react";

export default function Questions() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem(id));
  const q = data.questions[0];

  const [sad, setSad] = useState(false);

  const celebrate = () => {
    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      navigate(`/love/${id}/reveal`);
    }, 1300);
  };

  const check = (opt) => {
    if (
      opt.trim().toLowerCase() ===
      q.correct.trim().toLowerCase()
    ) {
      celebrate();
    } else {
      setSad(true);
      setTimeout(() => setSad(false), 2000);
    }
  };

  return (
    <div className="card">
      {/* SAD HEART FALL */}
      {sad && (
        <motion.div
          className="sad-hearts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {"💔 😢 💔 😭".split(" ").map((h, i) => (
            <motion.span
              key={i}
              animate={{ y: ["-10vh", "90vh"] }}
              transition={{ duration: 2 }}
            >
              {h}
            </motion.span>
          ))}
        </motion.div>
      )}

      <h3>{q.q}</h3>

      {q.options.map((o) => (
        <button key={o} onClick={() => check(o)}>
          {o}
        </button>
      ))}

      {sad && <p style={{ marginTop: "12px" }}>{q.wrong}</p>}
    </div>
  );
}
