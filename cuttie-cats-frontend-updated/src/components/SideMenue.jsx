import { ArrowUpRight, Heart, PawPrint, X } from "lucide-react";
import "./SideMenue.css";

const links = [
  ["Home", "home"],
  ["Available Cats", "cats"],
  ["Happy Families", "families"],
  ["How It Works", "how-it-works"],
  ["FAQ", "faq"],
  ["Visit & Contact", "contact"],
];

export default function SideMenu({ isOpen, onClose, onNavigate }) {
  return (
    <>
      <button
        className={`side-menu-overlay ${isOpen ? "visible" : ""}`}
        aria-label="Close navigation menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={onClose}
      />

      <aside
        className={`side-menu ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
        aria-label="Main navigation"
      >
        <div className="menu-topline">
          <span className="menu-brand"><PawPrint size={21} /> Cuttie <b>Cats</b></span>
          <button className="close-menu" onClick={onClose} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <p className="menu-kicker">A LITTLE LOVE, A LIFETIME OF PURRS</p>
        <nav className="side-menu-nav">
          {links.map(([label, section], index) => (
            <button
              key={section}
              className="side-menu-link"
              tabIndex={isOpen ? 0 : -1}
              onClick={() => {
                onNavigate?.(section);
                onClose();
              }}
            >
              <span className="menu-link-number">0{index + 1}</span>
              <span>{label}</span>
              <ArrowUpRight size={17} />
            </button>
          ))}
        </nav>

        <div className="menu-bottom">
          <span className="menu-heart"><Heart size={18} fill="currentColor" /> Made for cat people</span>
          <p>Ready to meet your new best friend?</p>
          <button className="menu-contact" onClick={() => {
            onNavigate?.("contact");
            onClose();
          }}>
            Send an enquiry <PawPrint size={17} />
          </button>
        </div>
      </aside>
    </>
  );
}
