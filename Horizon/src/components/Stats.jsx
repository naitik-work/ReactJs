import "../styles/Stats.css";

function Stats() {
  return (
    <section className="stats">
      <h2>A Few More Facts About Us</h2>

      <div className="stats-container">
        <div className="stat-box">
          <h3>12,000+</h3>
          <p>Hours of play annually</p>
        </div>

        <div className="stat-box">
          <h3>89%</h3>
          <p>Player Retention Rate</p>
        </div>

        <div className="stat-box">
          <h3>1,200+</h3>
          <p>Active Members</p>
        </div>

        <div className="stat-box">
          <h3>125+</h3>
          <p>Annual Tournaments</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
