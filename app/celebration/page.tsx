export default function Celebration() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4 text-center overflow-hidden relative">
            <div className="z-10 bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-2xl border-4 border-red-300 animate-bounce-slow">
                <h1 className="text-5xl md:text-6xl font-extrabold text-red-600 mb-6 drop-shadow-sm">
                    YAAAY! 🎉
                </h1>
                <p className="text-2xl md:text-3xl text-pink-700 font-semibold mb-8">
                    I knew you'd say yes! <br /> ❤️❤️❤️
                </p>
                <div className="text-8xl animate-pulse">
                    🥰
                </div>
                <div className="mt-8 pt-8 border-t-2 border-pink-300">
                    <p className="text-lg text-pink-600 mb-4 font-medium">Listen to our playlist:</p>
                    <iframe
                        src="https://open.spotify.com/embed/playlist/4aijxT2YlZdjzkgYLDD4aP?utm_source=generator"
                        width="100%"
                        height="380"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="rounded-lg"
                    ></iframe>
                </div>
            </div>

            {/* Simple Pure CSS Confetti/Floating Hearts Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-4xl animate-float opacity-70"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `100%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`,
                        }}
                    >
                        {['❤️', '💖', '🌹', '🦋', '💐'][Math.floor(Math.random() * 5)]}
                    </div>
                ))}
            </div>
        </div>
    );
}
