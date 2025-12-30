import React from "react";

const Contact = () => {
  return (
    <section className="py-5 bg-dark" id="contact">
      <div className="container">
        <h2 className="text-light mb-4">Contact</h2>
    <div className="card contact-card mx-auto">
      <div className="row g-0 align-items-center">
        
        <div className="col-md-5 left-panel d-flex flex-column justify-content-center contact-info">
          <div className="d-flex align-items-center gap-3">
            <div className="logo-circle">TR</div>
            <div>
              <h2 className="mb-0">Thabang Rakeng</h2>
              <p className="lead mb-0">Agentic AI Engineer , Full-Stack Development , AWS and Devops Engineer with Gen AI</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-0 text-muted">
              Prefer calls for urgent matters — email for detailed Enquiries.
            </p>
          </div>
        </div>

        {/* Right panel with contacts */}
        <div className="col-md-7">
          <div className="p-4">
            <h5 className="mb-3">Contact Details</h5>

            <div className="contact-list">
              <div className="item">
                <div className="icon-wrap"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <div><strong>Phone</strong></div>
                  <div><a href="tel:+27663913407" className="text-decoration-none">+27 66 3913 407</a></div>
                </div>
              </div>

              <div className="item">
                <div className="icon-wrap"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <div><strong>Email</strong></div>
                  <div><a href="mailto:thabang56@hotmail.com" className="text-decoration-none">thabang56@hotmail.com</a></div>
                </div>
              </div>

              <div className="item">
                <div className="icon-wrap"><i className="fa-solid fa-building"></i></div>
                <div>
                  <div><strong>Home</strong></div>
                  <div>No. 461 Republic Road , Ebony-Park  Midrand 1632</div>
                  <p>Im willing to relocate whenever i needed</p>
                </div>
              </div>
            </div>

            <div className="mt-4 d-flex gap-2 call-actions flex-wrap">
              <a href="tel:+27663913407" className="btn btn-primary">
                <i className="fa-solid fa-phone me-2"></i>Call Now
              </a>
              <a href="sms:+27663913407" className="btn btn-outline-primary">
                <i className="fa-solid fa-sms me-2"></i>Send SMS
              </a>
              <a href="mailto:thabang56@hotmail.com" className="btn btn-outline-secondary">
                <i className="fa-solid fa-envelope me-2"></i>Email
              </a>
              <a href="/Thabang_Rakeng_CV 2-combined.pdf" download className="btn btn-outline-dark">
                <i className="fa-solid fa-download me-2"></i>Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default Contact;
