import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import StackPanel from "./components/StackPanel";
import Footer from "./components/Footer";


import Docker from "./assets/technology-icons/Docker.svg";
import Java from "./assets/technology-icons/Java.svg";
import JavaScript from "./assets/technology-icons/JavaScript.svg";
import NextJs from "./assets/technology-icons/Next.js.svg";
import NodeJs from "./assets/technology-icons/Node.js.svg";
import PostgreSQL from "./assets/technology-icons/PostgresSQL.svg";
import ReactIcon from "./assets/technology-icons/React.svg";
import Redis from "./assets/technology-icons/Redis.svg";
import Svelte from "./assets/technology-icons/Svelte.svg";
import TailwindCSS from "./assets/technology-icons/Tailwind-CSS.svg";
import TypeScript from "./assets/technology-icons/TypeScript.svg";
import VueJs from "./assets/technology-icons/Vue.js.svg";

const iconMap = {
  React: ReactIcon,
  "Vue.js": VueJs,
  Svelte: Svelte,
  "Next.js": NextJs,
  "Node.js": NodeJs,
  PostgreSQL: PostgreSQL,
  Redis: Redis,
  JavaScript: JavaScript,
  TypeScript: TypeScript,
  Java: Java,
  "Tailwind CSS": TailwindCSS,
  Docker: Docker,
};

function App() {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        const updatedTechs = data.map((tech) => ({
          ...tech,
          icon: iconMap[tech.name] || tech.icon,
        }));
        setTechs(updatedTechs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const addToStack = (tech) => {
    const already = stack.find((item) => item.id === tech.id);
    if (already) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const removeFromStack = (id) => {
    const item = stack.find((t) => t.id === id);
    setStack(stack.filter((t) => t.id !== id));
    if (item) toast.info(`${item.name} removed from stack`);
  };

  const clearStack = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error("All technologies removed");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      <section
        id="technologies"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Explore the{" "}
            <span
              className="font-inter font-extrabold"
              style={{ color: "#D91B7E" }}
            >
              Technologies
            </span>
          </h2>
          <p className="text-gray-600 mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600">Loading technologies...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {techs.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    onAdd={addToStack}
                    added={stack.some((s) => s.id === tech.id)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <StackPanel
              stack={stack}
              onRemove={removeFromStack}
              onClear={clearStack}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
