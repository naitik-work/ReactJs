import "../styles/Hero.css";   // apni CSS file link kar rahe hain

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Unleash Your Inner Champion.</h1>
        <p>
          Join the ultimate tennis experience — where precision meets performance,
          and every swing brings you closer to victory.
        </p>
        <button className="hero-btn">Start Your Journey</button>
      </div>

      <div className="hero-img">
        <img src="https://i.pinimg.com/1200x/a8/fb/71/a8fb71ca8fab4f578f3c36f29b5d1f8e.jpg" alt="Tennis players" />
      </div>
    </section>
  );
}

export default HeroSection;
