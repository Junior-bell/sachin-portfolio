import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-xl"
      >
        <Card className="shadow-2xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-lg relative overflow-hidden">
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent bg-gradient-to-tr from-violet-400 via-emerald-400 to-cyan-400 bg-clip-padding" style={{zIndex:1}} />
          <CardContent className="py-12 flex flex-col items-center gap-4 relative z-10">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-violet-400 to-emerald-400 flex items-center justify-center text-5xl font-bold text-white mb-2 shadow-2xl border-4 border-white dark:border-black">
              SD
            </div>
            <Badge className="mb-2 bg-gradient-to-r from-violet-500 to-emerald-500 text-white shadow">About Me</Badge>
            <h2 className="text-3xl font-extrabold tracking-tight mb-2 font-sans">Sachin Deshmukh</h2>
            <p className="max-w-md text-lg text-gray-700 dark:text-gray-200 mb-2 font-medium">
              Dedicated and detail-oriented software professional with a strong foundation in Python, Django, MySQL, and automation. Experienced in developing scalable applications, automating processes, and managing database operations.
            </p>
            <p className="max-w-md text-base text-gray-600 dark:text-gray-300 mb-2">
              Passionate about continuous learning, problem-solving, and collaborating with dynamic teams. I enjoy building solutions that make processes more efficient and help organizations grow.
            </p>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-300 mt-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Pune, Maharashtra</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
} 