export default function WavyBackground() {
  return (
    <div className="wavy-bg fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden>
      <div
        style={{
          position: "absolute",
          inset: "-100%",
          backgroundImage: "url('/wavy-line.svg')",
          backgroundSize: "120px 30px",
          backgroundRepeat: "repeat",
          transform: "rotate(-35deg)",
          opacity: 0.07,
        }}
      />
    </div>
  )
}
