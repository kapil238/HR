// components/CardWrapper.js
export default function CardWrapper({ children }) {
    return (
      <div
        className="w-full max-w-lg rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 border border-white/20"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(7px)',
        }}
      >
        {children}
      </div>
    );
  }
  