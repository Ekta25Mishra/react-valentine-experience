import { useNavigate, useParams } from "react-router-dom";
import FloatingHearts from "../components/FloatingHearts";

export default function Wish() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="center">
      <FloatingHearts />
      <div className="card">
        <h1>Happy Valentine’s Day 💕</h1>
        <p>A little surprise for you 🌸</p>
        <button onClick={() => navigate(`/love/${id}/valentine`)}>
          Continue 💌
        </button>
      </div>
    </div>
  );
}
