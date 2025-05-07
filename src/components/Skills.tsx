import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { Code, Database, BarChart2, Globe, GitBranch, Cpu, Network } from "lucide-react";

const skills = [
  { name: "Django", icon: <Code className="w-5 h-5 text-blue-500 dark:text-blue-400" />, category: "Backend" },
  { name: "Python", icon: <Code className="w-5 h-5 text-blue-500 dark:text-blue-400" />, category: "Language" },
  { name: "Advanced Excel", icon: <BarChart2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />, category: "Tools" },
  { name: "Matplotlib", icon: <BarChart2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />, category: "Data Science" },
  { name: "NumPy", icon: <BarChart2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />, category: "Data Science" },
  { name: "Pandas", icon: <BarChart2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />, category: "Data Science" },
  { name: "MySQL", icon: <Database className="w-5 h-5 text-violet-500 dark:text-violet-400" />, category: "Database" },
  { name: "SQLite", icon: <Database className="w-5 h-5 text-violet-500 dark:text-violet-400" />, category: "Database" },
  { name: "CSS", icon: <Globe className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />, category: "Frontend" },
  { name: "HTML", icon: <Globe className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />, category: "Frontend" },
  { name: "Git", icon: <GitBranch className="w-5 h-5 text-orange-500 dark:text-orange-400" />, category: "Tools" },
  { name: "Jupyter Notebook", icon: <Cpu className="w-5 h-5 text-purple-500 dark:text-purple-400" />, category: "Tools" },
  { name: "VS Code", icon: <Code className="w-5 h-5 text-blue-500 dark:text-blue-400" />, category: "Tools" },
  { name: "CCNA", icon: <Network className="w-5 h-5 text-red-500 dark:text-red-400" />, category: "Networking" },
  { name: "Networking Basics", icon: <Network className="w-5 h-5 text-red-500 dark:text-red-400" />, category: "Networking" },
  { name: "Machine Learning (Beginner)", icon: <Cpu className="w-5 h-5 text-purple-500 dark:text-purple-400" />, category: "AI/ML" },
];

const categories = Array.from(new Set(skills.map(skill => skill.category)));

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 py-20 bg-gradient-to-b from-background to-background/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl px-4 sm:px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 md:mb-12 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>

        {/* Category Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category, index) => (
            <span
              key={category}
              className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
            >
              {category}
            </span>
          ))}
        </motion.div>

        <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className="h-full"
            >
              <Card className="shadow-lg border-0 bg-white/80 dark:bg-black/60 backdrop-blur-xl hover:scale-105 transition-all duration-300 h-full group hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5">
                <CardContent className="flex flex-col items-center justify-center gap-2 sm:gap-3 py-4 sm:py-6 h-full">
                  <div className="mb-1 sm:mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-200 text-center group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {skill.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {skill.category}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 