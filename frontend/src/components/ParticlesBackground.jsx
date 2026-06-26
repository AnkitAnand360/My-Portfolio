import Particles from "react-tsparticles";

function ParticlesBackground() {
  return (
    <Particles
      options={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}

export default ParticlesBackground;