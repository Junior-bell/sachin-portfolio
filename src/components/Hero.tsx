import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-6 relative bg-gradient-to-br from-blue-50 via-violet-50 to-cyan-100 dark:from-blue-950 dark:via-violet-950 dark:to-cyan-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-2xl z-10"
      >
        <Card className="shadow-2xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-lg relative overflow-hidden">
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent bg-gradient-to-tr from-blue-400 via-violet-400 to-cyan-400 bg-clip-padding" style={{zIndex:1}} />
          <CardContent className="py-16 flex flex-col items-center gap-6 relative z-10">
            {/* Animated Avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-400 to-violet-400 flex items-center justify-center text-6xl font-bold text-white mb-2 shadow-2xl border-4 border-white dark:border-black"
            >
              SD
            </motion.div>
            <h1 className="text-5xl font-extrabold tracking-tight mb-2 font-sans bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Sachin Deshmukh
            </h1>
            <h2 className="text-2xl text-gray-700 dark:text-gray-200 mb-2 font-semibold">
              Software Professional
            </h2>
            <p className="max-w-lg text-lg text-gray-600 dark:text-gray-300 mb-4 font-medium">
              Dedicated and detail-oriented software professional with a strong foundation in Python, Django, MySQL, and automation. Experienced in developing scalable applications, automating processes, and managing database operations. Passionate about continuous learning, problem-solving, and collaborating with dynamic teams.
            </p>
            <div className="flex gap-4 justify-center mt-2">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg hover:scale-105 transition-transform">
                <a href="/sachin-resume.pdf" download target="_blank" className="flex items-center gap-2">
                  <Download className="w-5 h-5" /> Download Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-400 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 hover:scale-105 transition-transform">
                <a href="/contact" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" /> Contact Me
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
} 