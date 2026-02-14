import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function Valentine() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const moveNo = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setPos({ x, y });
  };

  return (
    <div className="card" style={{ position: "relative", height: "300px" }}>
      <h2>Will you be my Valentine? 💖</h2>

      <button onClick={() => navigate(`/love/${id}/questions`)}>
        Yes ❤️
      </button>

      <button
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          position: "absolute"
        }}
        onMouseEnter={moveNo}
        onClick={moveNo}
      >
        No 💔
      </button>

      <p style={{ opacity: 0.6, marginTop: "20px" }}>
        Are you sure? 😢
      </p>
    </div>
  );
}
