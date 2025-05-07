import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Github, ExternalLink, Database, BarChart2 } from "lucide-react";

const projects = [
  {
    title: "Feasibility Portal (Django, Python, MySQL)",
    description:
      "Developed a web-based feasibility portal using Django, enabling users to submit and track project feasibility requests. Implemented user authentication, role-based access control, and automated report generation for streamlined operations. Reduced manual feasibility analysis time by 40% through workflow automation and process optimization.",
    tags: ["Django", "Python", "MySQL"],
    icon: <Database className="w-6 h-6 text-amber-500" />,
    github: "#",
    demo: "#",
  },
  {
    title: "Customer Circuit ID Data Analysis & Reporting",
    description:
      "Created and delivered comprehensive Excel reports by analyzing and visualizing customer data using Python, Jupyter Notebook, Pandas, NumPy, Matplotlib, PyInstaller. Automated the reporting process with PyInstaller to generate user-friendly executable files.",
    tags: ["Python", "Pandas", "Jupyter", "Matplotlib", "PyInstaller"],
    icon: <BarChart2 className="w-6 h-6 text-amber-500" />,
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2 w-full max-w-5xl">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
          >
            <Card className="shadow-xl border-0 bg-white/60 dark:bg-black/40 backdrop-blur-lg relative overflow-hidden hover:scale-[1.03] hover:shadow-2xl transition-transform">
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                {project.icon}
                <div className="flex flex-col items-start">
                  <CardTitle className="text-lg font-bold text-amber-700 dark:text-amber-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 mt-auto">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} className="bg-amber-100 text-amber-700 border border-amber-300 dark:bg-amber-900 dark:text-amber-200 dark:border-amber-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" className="border-amber-400 text-amber-700 dark:text-amber-200">
                    <a href={project.github} target="_blank" className="flex items-center gap-1">
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm" className="bg-amber-500 text-white hover:bg-amber-600">
                    <a href={project.demo} target="_blank" className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 