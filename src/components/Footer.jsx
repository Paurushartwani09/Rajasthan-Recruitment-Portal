import React from "react";

const CommonFooter = ({ columns = [], logo }) => {
  return (
    <footer className="footer-section position-relative text-white mb-0">
      <div className="footer-top-bg"></div>

      <div className="container position-relative py-5">
        <div className="row align-items-start footer-columns">
          <div className="text-center text-md-start">
            <img
              src={logo}
              alt="State Recruitment Portal logo"
              className="footer-logo mb-3"
            />
            <p className="logo-text mb-0">State Recruitment Portal</p>
          </div>

          {columns.map((col, index) => (
            <div key={index} className="col-12 col-md-3">
              <h5 className="fw-semibold footer-column-title">
                {index === 0
                  ? "State Recruitment Portal"
                  : index === 1
                  ? "Policies"
                  : index === 2
                  ? "Contact Us"
                  : ""}
              </h5>
              <ul className="list-unstyled lh-lg footerlinks">
                {col.map((item) => (
                  <li key={item.key}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.target || "_blank"}
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span
                        className="footer-link"
                        onClick={() => item.onClick?.(item.key)}
                      >
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom border-top border-secondary text-center small">
        © Copyright 2024 Rajasthan State Recruitment Portal. All Rights Reserved
      </div>
    </footer>
  );
};

export default CommonFooter;
