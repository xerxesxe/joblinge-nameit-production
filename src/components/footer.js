import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <a href="https://www.joblinge.de/impressum" className="footer-link"><p className="link-text">IMPRESSUM</p></a>
                <a href="https://www.joblinge.de/datenschutz" className="footer-link"><p className="link-text">DATENSCHUTZ</p></a>
                <a href="https://www.joblinge.de/transparenz" className="footer-link"><p className="link-text">TRANZPARENZ</p></a>
                <a href="https://www.joblinge.de/ueber-uns" className="footer-link"><p className="link-text">ÜBER UNS</p></a>
            </div>
        </footer>
    );
}