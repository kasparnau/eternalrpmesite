import "./App.scss";
import { motion } from "framer-motion";

const Arrow = () => {
  return (
    <span className="ArrowContainer" aria-hidden="true">
      <svg
        className="Arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        aria-hidden="true"
      >
        <path
          d="M7 1.167L12.833 7 7 12.833M12.25 7H1.167"
          fill="transparent"
          strokeWidth="2"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
};

const Link = ({ href, text }) => {
  return (
    <a className="Link" href={href}>
      <motion.div
        whileHover={{
          opacity: 0.6,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        {text}
        <Arrow />
      </motion.div>
    </a>
  );
};

function App() {
  return (
    <div className="App">
      <motion.div
        className="Title"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="Header">
          <div className="Gradient">Eternal</div>
          <div className="Default">RP</div>
        </div>
        <div className="Description">
          A fully made-from-scratch FiveM roleplay server. No ESX. <br />
          No more buggy 2017 code.
        </div>
        <div className="Links">
          <Link href="https://discord.gg/AZA9K5nMta" text="Join our discord" />
        </div>
      </motion.div>
    </div>
  );
}

export default App;
