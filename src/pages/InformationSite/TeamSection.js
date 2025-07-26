import './TeamSection.css';

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet the Founders</h2>
      <p className="team-intro">
        PharmaYouth is founded and led by two highly experienced professionals:
      </p>

      <div className="founders-grid">
        <div className="founder-card">
          <img src="/Hussain2.jpeg" alt="Hussain Abdeh" className="founder-img" />
          <h3>Mr Hussain Abdeh</h3>
          <h4>Co-Founder & Quality Director</h4>
          <p>
            Hussain has successfully led multiple MHRA inspections, implemented end-to-end pharmaceutical quality systems, and served as RP, RP (Import), and Head of QC for various licensed facilities.
          </p>
        </div>

        <div className="founder-card">
          <img src="/Mehraan2.png" alt="Mehraan Sattar" className="founder-img" />
          <h3>Mr Mehraan Sattar</h3>
          <h4>Co-Founder & Director</h4>
          <p>
            With extensive experience in GDP compliance, regulatory affairs, and pharmaceutical distribution, Mehraan has led MHRA inspections, trained teams, and managed product integrity across distribution chains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
