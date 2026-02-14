import { useEffect, useState } from "react";

const hearts = ["💖", "💕", "💘", "💝", "💗"];

export default function FloatingHearts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 16,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      icon: hearts[Math.floor(Math.random() * hearts.length)]
    }));

    setItems(generated);
  }, []);

  return (
    <div className="floating-hearts">
      {items.map(h => (
        <span
          key={h.id}
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`
          }}
        >
          {h.icon}
        </span>
      ))}
    </div>
  );
}
