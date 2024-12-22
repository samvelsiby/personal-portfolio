"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/gradient-text";
import { MailIcon, MessageSquareIcon } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">
          <GradientText>Get in Touch</GradientText>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card className="max-w-md mx-auto bg-card/50 backdrop-blur-sm border border-white/10">
          <div className="p-8">
            <div className="space-y-4">
              <Button className="w-full gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <MessageSquareIcon size={20} />
                Send Message
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or</span>
                </div>
              </div>
              <Button variant="outline" className="w-full gap-2">
                <MailIcon size={20} />
                samvelsiby@gmail.com
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}