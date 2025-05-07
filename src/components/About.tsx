import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Download, MapPin, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/yourusername",
    label: "GitHub"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn"
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:your.email@example.com",
    label: "Email"
  }
];

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 py-12 px-4 bg-gradient-to-b from-background to-background/50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-2xl"
      >
        <Card className="shadow-2xl border-0 bg-white/80 dark:bg-black/60 backdrop-blur-xl relative overflow-hidden group hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-300">
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent bg-gradient-to-tr from-violet-400 via-emerald-400 to-cyan-400 bg-clip-padding opacity-80 group-hover:opacity-100 transition-opacity" style={{zIndex:1}} />
          <CardContent className="py-8 sm:py-12 flex flex-col items-center gap-4 relative z-10">
            <Badge className="mb-2 bg-gradient-to-r from-violet-500 to-emerald-500 text-white shadow-lg hover:shadow-violet-500/20 transition-shadow">About Me</Badge>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 font-sans bg-gradient-to-r from-violet-500 via-emerald-500 to-cyan-500 bg-clip-text text-transparent"
            >
              Sachin Deshmukh
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-700 dark:text-gray-200 mb-2 font-medium leading-relaxed"
            >
              Dedicated and detail-oriented software professional with a strong foundation in Python, Django, MySQL, and automation. Experienced in developing scalable applications, automating processes, and managing database operations.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-2 leading-relaxed"
            >
              Passionate about continuous learning, problem-solving, and collaborating with dynamic teams. I enjoy building solutions that make processes more efficient and help organizations grow.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mt-2"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold text-sm sm:text-base">Pune, Maharashtra</span>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 mt-4"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 group"
                  aria-label={link.label}
                >
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {link.icon}
                  </span>
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="mt-6 bg-gradient-to-r from-violet-500 to-emerald-500 text-white shadow-lg hover:shadow-violet-500/20 hover:scale-105 transition-all duration-300"
              >
                <a 
                  href="/resume/sachin-resume.pdf" 
                  download="Sachin_Deshmukh_Resume.pdf"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" /> Download Resume
                </a>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
} 