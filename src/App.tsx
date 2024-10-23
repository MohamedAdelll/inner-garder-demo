const backgroundHeroStyle = {
  clipPath:
    "polygon(0% 0%, 100% 0%, 100% 90%, 95% 100%, 5% 100%, 0% 90%, 0% 0%)",
};
const polygonStyle = {
  clipPath: "polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)",
};
function App() {
  return (
    <>
      <section className="h-[600px] relative overflow-visible">
        <div
          className="absolute bg-custom-gradient w-full"
          style={backgroundHeroStyle}
        >
          <img
            src="/public/section-bg.jpeg"
            alt="Background"
            className="opacity-50 w-full h-full object-contain"
          />
        </div>
        <div
          className="absolute bg-[#8858B5] bottom-[2px] text-[40px] left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center items-center px-6 py-5"
          style={polygonStyle}
        >
          <span className="font-semibold text-white">Choose your sphere</span>
        </div>
      </section>
    </>
  );
}

export default App;
