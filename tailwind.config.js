module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f0f3ff",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          900: "#1e1b4b",
        },
      },
      animation: {
        "float-reaction":
          "floatReaction 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "pulse-glow": "pulseGlow 2s infinite ease-in-out",
      },
      keyframes: {
        floatReaction: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) scale(0.6)",
          },
          "15%": {
            opacity: "1",
            transform: "translateY(-30px) scale(1.3)",
          },
          "75%": {
            opacity: "0.9",
            transform: "translateY(-180px) scale(1.1)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-260px) scale(0.8)",
          },
        },
        pulseGlow: {
          "0%, 100%": {
            opacity: "1",
            filter:
              "drop-shadow(0 0 12px rgba(99, 102, 241, 0.6))",
          },
          "50%": {
            opacity: "0.7",
            filter:
              "drop-shadow(0 0 4px rgba(99, 102, 241, 0.2))",
          },
        },
      },
    },
  },
  plugins: [],
};
