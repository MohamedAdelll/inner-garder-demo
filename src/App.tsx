function App() {
  return (
    <section className="h-[600px] bg-custom-gradient relative border-[rgba(255,255,255,0.1)]">
      <div className="polygon-container">
        <div className="absolute inset-0 opacity-50">
          <img
            src="/public/section-bg.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default App;
