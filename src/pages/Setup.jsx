import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts";


export default function Setup() {
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const id = uuid();

    const data = {
      name: e.target.name.value,
      photos: Array.from(e.target.photos.files).map(f =>
        URL.createObjectURL(f)
      ),
      questions: [
        {
          q: e.target.q1.value,
          options: e.target.o1.value
            .split(",")
            .map(o => o.trim()),
          correct: e.target.correct.value,
          wrong: e.target.wrong.value
        }
      ]
    };

    localStorage.setItem(id, JSON.stringify(data));
    navigate(`/love/${id}/wish`);
  };

  return (
    <div className="setup-wrapper">
      <FloatingHearts/>
      <motion.form
        className="setup-card"
        onSubmit={submit}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1>Create Your Valentine 💖</h1>
        <p className="subtitle">
          Fill this once & send the magic link ✨
        </p>

        <label>Partner’s Name 💕</label>
        <input name="name" placeholder="Eg: Alex" required />

        <label>Upload Cute Photos 📸</label>
        <input name="photos" type="file" multiple required />

        <label>Fun Question 😏</label>
        <input
          name="q1"
          placeholder="Eg: What do I love the most?"
          required
        />

        <label>Options (comma separated)</label>
        <input
          name="o1"
          placeholder="Pizza, Chocolate, You 😌"
          required
        />

        <label>Correct Answer 💘</label>
        <input
          name="correct"
          placeholder="You 😌"
          required
        />

        <label>Emotional Message (Wrong Answer 💔)</label>
        <input
          name="wrong"
          placeholder="Aww 🥺 I thought you knew me better..."
          required
        />

        <button type="submit">
          Generate Love Link 💌
        </button>
      </motion.form>
    </div>
  );
}
