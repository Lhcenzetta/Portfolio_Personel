"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LocalGreeting() {
    const [greeting, setGreeting] = useState("Hello");

    useEffect(() => {
        const hour = new Date().getHours();
        const greetings = {
            morning: ["Good Morning", "Marhaba", "Bonjour", "Sabah al-khair"],
            afternoon: ["Good Afternoon", "Welcome", "Bonjour", "Masa al-khair"],
            evening: ["Good Evening", "Welcome", "Bonsoir", "Masa al-khair"]
        };

        let selected = greetings.afternoon;
        if (hour < 12) selected = greetings.morning;
        else if (hour > 18) selected = greetings.evening;

        const random = selected[Math.floor(Math.random() * selected.length)];
        setGreeting(random);
    }, []);

    return (
        <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald-400 font-mono font-bold tracking-tighter"
        >
            {greeting}!
        </motion.span>
    );
}
