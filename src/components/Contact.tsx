import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);
  const [loading, setLoading] = useState(false);

  // Placeholder handler for backend integration
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setStatus('success');
      setLoading(false);
    }, 1200);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 px-2 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-xl"
      >
        <Card className="shadow-xl border-2 border-rose-400/40 bg-rose-50/80 dark:bg-rose-950/60 backdrop-blur-lg w-full max-w-md mx-auto">
          <CardContent className="py-10 flex flex-col items-center gap-4">
            <Badge className="mb-2 bg-rose-500 text-white">Contact</Badge>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <Input type="text" name="name" placeholder="Name" required className="bg-white/80 dark:bg-black/30" />
              <Input type="email" name="email" placeholder="Email" required className="bg-white/80 dark:bg-black/30" />
              <textarea name="message" placeholder="Message" required className="border rounded p-2 min-h-[100px] bg-white/80 dark:bg-black/30" />
              <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
            {status === 'success' && (
              <div className="text-green-600 font-medium mt-2">Message sent! Thank you.</div>
            )}
            {status === 'error' && (
              <div className="text-red-600 font-medium mt-2">Something went wrong. Please try again.</div>
            )}
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 mt-4">
              <a href="mailto:deshmukhsachin2205@gmail.com" className="underline text-rose-600">Email</a>
              <a href="https://www.linkedin.com/in/sachin-deshmukh-/" target="_blank" className="underline text-rose-600">LinkedIn</a>
              <a href="https://github.com/dsachin70" target="_blank" className="underline text-rose-600">GitHub</a>
              <span className="text-muted-foreground">Pune, Maharashtra</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
} 