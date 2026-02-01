"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ValentineCard() {
    const [noBtnPosition, setNoBtnPosition] = useState<{ top: string; left: string } | null>(null);
    const phrases = [
        "I'll be sad 😢",
        "Pleaseeee...",
        "Are you sure?",
        "Don't go!",
        "Lie Lie 🙄",
    ];

    const [tooltipText, setTooltipText] = useState<string | null>(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const timeoutsRef = useRef<number[]>([]);

    const handleNoHover = () => {
        // Generate random position within mostly safe bounds (10% to 80%)
        const randomTop = Math.floor(Math.random() * 80) + 10;
        const randomLeft = Math.floor(Math.random() * 80) + 10;
        setNoBtnPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
    };

    const handleNoHoverWithPopup = () => {
        const phrase = phrases[Math.floor(Math.random() * phrases.length)];
        setTooltipText(phrase);
        setShowTooltip(true);
        const hideId = window.setTimeout(() => setShowTooltip(false), 1500);
        timeoutsRef.current.push(hideId);
        const moveId = window.setTimeout(() => handleNoHover(), 700);
        timeoutsRef.current.push(moveId);
    };

    useEffect(() => {
        return () => {
            timeoutsRef.current.forEach((id) => clearTimeout(id));
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl max-w-xl w-full border-4 border-pink-200">
                <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-8 font-serif">
                    Will you be my Valentine Judy? 🌹🥹
                </h1>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative h-40 md:h-auto">
                    <Link
                        href="/celebration"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-transform transform hover:scale-110 shadow-lg"
                    >
                        Yes! 💖
                    </Link>

                    <button
                        onMouseEnter={handleNoHoverWithPopup}
                        onClick={handleNoHoverWithPopup} // Handle touch/click attempt too
                        style={
                            noBtnPosition
                                ? { position: "absolute", top: noBtnPosition.top, left: noBtnPosition.left }
                                : {}
                        }
                        className={`bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-xl shadow-lg transition-all duration-200 ${noBtnPosition ? "absolute" : ""
                            }`}
                    >
                        No 😢
                    </button>

                    {showTooltip && tooltipText && (
                        <div
                            className="absolute z-50 px-3 py-2 bg-pink-100 text-pink-700 rounded-full text-sm shadow-md transition-opacity"
                            style={
                                noBtnPosition
                                    ? { top: `calc(${noBtnPosition.top} - 3rem)`, left: noBtnPosition.left }
                                    : { top: "50%", left: "60%" }
                            }
                        >
                            {tooltipText}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
