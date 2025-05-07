import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { Code, Database, BarChart2, Globe, GitBranch, Cpu, Network } from "lucide-react";

const skills = [
  { name: "Django", icon: <Code className="w-5 h-5 text-cyan-500" /> },
  { name: "Python", icon: <Code className="w-5 h-5 text-cyan-500" /> },
  { name: "Advanced Excel", icon: <BarChart2 className="w-5 h-5 text-cyan-500" /> },
  { name: "Matplotlib", icon: <BarChart2 className="w-5 h-5 text-cyan-500" /> },
  { name: "NumPy", icon: <BarChart2 className="w-5 h-5 text-cyan-500" /> },
  { name: "Pandas", icon: <BarChart2 className="w-5 h-5 text-cyan-500" /> },
  { name: "MySQL", icon: <Database className="w-5 h-5 text-cyan-500" /> },
  { name: "SQLite", icon: <Database className="w-5 h-5 text-cyan-500" /> },
  { name: "CSS", icon: <Globe className="w-5 h-5 text-cyan-500" /> },
  { name: "HTML", icon: <Globe className="w-5 h-5 text-cyan-500" /> },
  { name: "Git", icon: <GitBranch className="w-5 h-5 text-cyan-500" /> },
  { name: "Jupyter Notebook", icon: <Cpu className="w-5 h-5 text-cyan-500" /> },
  { name: "VS Code", icon: <Code className="w-5 h-5 text-cyan-500" /> },
  { name: "CCNA", icon: <Network className="w-5 h-5 text-cyan-500" /> },
  { name: "Networking Basics", icon: <Network className="w-5 h-5 text-cyan-500" /> },
  { name: "Machine Learning (Beginner)", icon: <Cpu className="w-5 h-5 text-cyan-500" /> },
];

export default function Skills() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent"
      >
        Skills
      </motion.h2>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full max-w-5xl">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 * idx }}
          >
            <Card className="shadow-lg border-0 bg-white/60 dark:bg-black/40 backdrop-blur-lg hover:scale-105 transition-transform">
              <CardContent className="flex flex-col items-center gap-2 py-6">
                <div>{skill.icon}</div>
                <span className="font-semibold text-cyan-700 dark:text-cyan-300 text-base">
                  {skill.name}
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 