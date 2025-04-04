export default function Background({ children }) {
    return (
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-4"
        style={{ backgroundImage: "url('/Images/Background.png')" }}
      >
        <div className="absolute w-full h-full bg-black opacity-75"></div>
        {children}
      </div>
    );
  }
  