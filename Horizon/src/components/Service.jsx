import "../styles/Services.css";

function Services() {
  return (
    <section className="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          Explore our full range of coaching, training, and tennis experiences.
          From first serve to match point — we’ve got the right program for you.
        </p>
      </div>

      <div className="service-cards">
        <div className="service">
          <img src="https://i.pinimg.com/1200x/57/ce/4b/57ce4bf1b3cd9c7868e79d68c6e6cc67.jpg" alt="Training Program" />
          <h3>Training Programs</h3>
          <p>Programs designed for all ages and abilities.</p>
          <button>Explore</button>
        </div>

        <div className="service">
          <img src="https://i.pinimg.com/1200x/2e/a8/93/2ea8937cb117fd9180cdc070fecce342.jpg" alt="Group Coaching" />
          <h3>Group Coaching</h3>
          <p>Build confidence and teamwork with group lessons.</p>
          <button>Explore</button>
        </div>

        <div className="service">
          <img src="https://i.pinimg.com/1200x/50/fb/65/50fb650014d982f2ed5ca43f24b25515.jpg" alt="Healthy Snacks" />
          <h3>Healthy Court Snacks</h3>
          <p>Stay fresh and energized between games and training.</p>
          <button>Explore</button>
        </div>
      </div>
    </section>
  );
}

export default Services;
