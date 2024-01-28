import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content flex">
        <aside>
          <p>Made with ❤️ by alanalexxis</p>
        </aside>
        <aside className="ml-auto">
          <a
            href="https://github.com/alanalexxis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm"
          >
            <i className="fab fa-github mr-2"></i>
            GitHub
          </a>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
