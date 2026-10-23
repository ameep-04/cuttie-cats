
import { useEffect, useState } from "react";
import {
  Menu, 
  Heart, 
  PawPrint, 
  MessageCircle, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles, 
  ShieldCheck, 
  House, 
  Send, 
  Cat as CatIcon
} from "lucide-react";
import SideMenu from "./components/SideMenue";
import CatDetails from "./components/CatDetails.jsx";
import { getCats, submitEnquiry } from "./services/api.js";
import "./App.css";

const sampleCats = [
  {
    id: 1, name: "Max", breed: "Persian", age: "3 months",
    gender: "Male", price: "Contact us",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=900",
    images: [
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=900",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900",
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=900"
    ],
    description: "A sweet, curious companion who loves attention and cosy naps."
  },
  {
    id: 2, name: "Luna", breed: "British Shorthair", age: "4 months",
    gender: "Female", price: "Contact us",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900",
    images: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=900"
    ],
    description: "A gentle and playful friend with a calm, affectionate personality."
  },
  {
    id: 3, name: "Milo", breed: "Ragdoll", age: "2 months",
    gender: "Male", price: "Contact us",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=900",
    images: [
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=900",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900"
    ],
    description: "A fluffy little explorer who loves playtime and companionship."
  },
  {
  id: 4,
  name: "Coco",
  breed: "Maine Coon",
  age: "3 months",
  gender: "Female",
  price: "Contact us",
  image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=900",
  images: ["https://images.unsplash.com/photo-1574158622682-e40e69881006?w=900"],
  description: "A curious little sweetheart who loves to watch the world go by."
},
{
  id: 5,
  name: "Oreo",
  breed: "Domestic Shorthair",
  age: "2 months",
  gender: "Male",
  price: "Contact us",
  image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=900",
  images: ["https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=900"],
  description: "A playful bundle of joy who is always ready for a new adventure."
},
{
  id: 6,
  name: "Mochi",
  breed: "Persian",
  age: "4 months",
  gender: "Female",
  price: "Contact us",
  image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=900",
  images: ["https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=900"],
  description: "A soft little cuddle bug who enjoys gentle attention and cosy naps."
},
{
  id: 7,
  name: "Peaches",
  breed: "Mixed Breed",
  age: "3 months",
  gender: "Female",
  price: "Contact us",
  image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=900",
  images: ["https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=900"],
  description: "A bright-eyed darling with a sweet face and a big little personality."
}
];

const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // Replace with your number

export default function App() {
  const [pawPrints, setPawPrints] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);
  const [cats, setCats] = useState(sampleCats);
  const [notice, setNotice] = useState("");
  const [sending, setSending] = useState(false);

  
useEffect(() => {
  getCats()
    .then((data) => {
      const apiCats = Array.isArray(data)
        ? data
        : data?.data ?? data?.content ?? [];

      if (apiCats.length >= 7) {
        setCats(
          apiCats.map((cat) => ({
            ...cat,
            image:
              cat.image ||
              cat.images?.[0] ||
              "https://placehold.co/400x500?text=Cute+Cat",
            images: cat.images?.length
              ? cat.images
              : [cat.image || "https://placehold.co/400x500?text=Cute+Cat"],
          }))
        );
      } else {
        // If the API returns fewer than 7 cats, show all 7 sample cats
        setCats(sampleCats);
      }
    })
    .catch(() => {
      setCats(sampleCats);
    });
}, []);

  //-------------------
  useEffect(() => {
  let lastPrint = 0;
  let nextId = 0;
  const timers = new Set();

  const addPaw = (event) => {
    const now = Date.now();

    // Avoid creating too many footprints at once
    if (now - lastPrint < 95) return;
    lastPrint = now;

    const paw = {
      id: nextId++,
      x: event.clientX,
      y: event.clientY,
      rotate: Math.random() * 50 - 25
    };

    setPawPrints((current) => [...current.slice(-13), paw]);

    const timer = window.setTimeout(() => {
      setPawPrints((current) =>
        current.filter((item) => item.id !== paw.id)
      );
      timers.delete(timer);
    }, 950);

    timers.add(timer);
  };

  window.addEventListener("pointermove", addPaw, { passive: true });

  return () => {
    window.removeEventListener("pointermove", addPaw);
    timers.forEach((timer) => window.clearTimeout(timer));
  };
}, []);

const slideCats = (direction) => {
  document.querySelector(".cat-carousel")?.scrollBy({
    left: direction * 330,
    behavior: "smooth"
  });
};
//-----------

  useEffect(() => {
    if (!selectedCat) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedCat(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedCat]);

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello Cuttie Cats! I would love to know more about your available cats."
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

 
const handleEnquiry = async (event) => {
  event.preventDefault();

  const formElement = event.currentTarget;
  setSending(true);
  setNotice("");

  const form = new FormData(formElement);

  const enquiry = {
    name: form.get("name"),
    phone: form.get("phone"),
    email: form.get("email"),
    area: form.get("area"),
    message: form.get("message"),
  };

  try {
    const result = await submitEnquiry(enquiry);

    console.log("Enquiry API response:", result);

    setNotice(
      "Thank you! Your enquiry has been submitted successfully."
    );

    formElement.reset();
  } catch (error) {
    console.error(
      "Enquiry submission error:",
      error.response?.data || error.message || error
    );

    setNotice(
      "We couldn't confirm your enquiry. Please check the browser console."
    );
  } finally {
    setSending(false);
  }
};


  return (
    <>
      <header className="site-header">
        <a href="#home" className="brand">
          <span className="brand-icon"><PawPrint size={23} /></span>
          <span>Cuttie <b>Cats</b><small>LOVE, PAWS & LITTLE PURRS</small></span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu size={25} /><span>Menu</span>
        </button>
      </header>

      <SideMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={(section) => {
          document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <span className="eyebrow"><Sparkles size={15} /> A LITTLE LOVE, A LIFETIME OF PURRS</span>
            <h1>Find your <em>purrfect</em><br />little companion.</h1>
            <p>
              Tiny paws, warm cuddles and unconditional love.
              Meet the little personality waiting to become part of your family.
            </p>
            <div className="hero-actions">
              <a href="#cats" className="primary-button">View Available Cats <ArrowRight size={18} /></a>
              <button className="secondary-button" onClick={openWhatsApp}>
                <MessageCircle size={18} /> Enquire on WhatsApp
              </button>
            </div>
            <div className="hero-trust">
              <span><Heart size={16} /> Loving care</span>
              <span><ShieldCheck size={16} /> Health information</span>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-image">
              <img src={sampleCats[0].image} alt="Cute cat ready to meet a loving family" />
            </div>
            <div className="floating-note"><Heart size={19} fill="#c66d8c" color="#c66d8c" /><span>Small paws,<br /><b>big love.</b></span></div>
            <span className="hero-sparkle sparkle-one">✳</span>
            <span className="hero-sparkle sparkle-two">✧</span>
          </div>
          <div className="hero-bottom-note"><PawPrint size={17} /> YOUR NEW BEST FRIEND IS WAITING</div>
        </section>

        <section className="intro-section">
          <span className="eyebrow">WELCOME TO CUTTIE CATS</span>
          
          <h2>Every little cat has a <em>big story.</em></h2>
          <p>We believe finding your feline friend should feel as special as the love they bring home.</p>
        </section>

        
<section id="cats" className="cats-section section-pad">
  <div className="section-heading">
    <div>
      <span className="eyebrow">
        <Sparkles size={15} /> OUR LITTLE CAT VILLAGE
      </span>
      <h2>
        Choose your <em>purrfect friend.</em>
      </h2>
      <p className="gallery-note">
        Seven little personalities, seven tiny homes full of love.
        Open a door to meet your new best friend!
      </p>
    </div>

    <div className="cat-count">
      <PawPrint size={18} />
     <strong>7 Cats Available 🐾</strong>
    </div>
  </div>

  <div className="cat-carousel-controls">
    <span className="carousel-hint">
      <PawPrint size={15} />
      Hover to open a door · Swipe to explore
    </span>

    <div className="carousel-arrows">
      <button
        type="button"
        aria-label="Previous cats"
        onClick={() => slideCats(-1)}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        aria-label="Next cats"
        onClick={() => slideCats(1)}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  </div>

  <div className="cat-carousel kitty-village">
    {cats.map((cat, index) => (
      <article
        className="kitty-house-card"
        key={cat.id ?? cat.name}
        style={{ "--card-index": index }}
      >
        <button
          type="button"
          className="kitty-house"
          onClick={() => setSelectedCat(cat)}
          aria-label={`Open ${cat.name}'s house and view details`}
        >
          <span className="house-roof">
            <span className="roof-heart">♥</span>
          </span>

          <span className="house-wall">
            <span className="house-number">
              LITTLE HOME No. {String(index + 1).padStart(2, "0")}
            </span>

            <span className="house-window">
              <img src={cat.image} alt="" loading="lazy" />
            </span>

            <span className="kitty-doorway">
              <span className="kitty-peek">
                <img src={cat.image} alt="" loading="lazy" />
                <span className="kitty-speech">
                  Hi, I'm {cat.name}! 🐾
                </span>
              </span>

              <span className="door-front">
                <span className="door-heart">♥</span>
                <span className="door-knob" />
                <span className="door-invite">
                  Open me!
                </span>
              </span>
            </span>
          </span>

          <span className="house-steps">
            <span />
            <span />
          </span>

          <span className="house-garden garden-left">✿</span>
          <span className="house-garden garden-right">✿</span>
        </button>

        <div className="kitty-house-info">
          <span className="available-dot">
            <span className="status-dot" />
            Available for enquiry
          </span>

          <h3>{cat.name}</h3>
          <p>{cat.breed}</p>

          <div className="house-cat-meta">
            <span>🎂 {cat.age}</span>
            <span>🐾 {cat.gender}</span>
          </div>

          <button
            type="button"
            className="house-details-button"
            onClick={() => setSelectedCat(cat)}
          >
            Meet {cat.name}
            <Heart size={15} />
          </button>
        </div>
      </article>
    ))}
  </div>

  <p className="gallery-note village-footer-note">
    Every little home holds a different personality. Tap any house
    to see photos, details and how to enquire. 💗
  </p>
</section>

      

        <section id="families" className="families-section section-pad">
          <div className="families-copy">
            <span className="eyebrow">HAPPINESS, WITH EXTRA WHISKERS</span>
            <h2>Little paws.<br /><em>Full hearts.</em></h2>
            <p>The best part of a cat finding a home is the love that grows from that very first cuddle.</p>
            <a className="text-link" href="#contact">Let's find your companion <ArrowRight size={17} /></a>
          </div>
          <div className="family-photo">
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900" alt="A sweet cat at home" loading="lazy" />
            <div className="family-caption"><Heart fill="#c66d8c" color="#c66d8c" /> A new chapter of love begins at home.</div>
          </div>
        </section>

        <section id="how-it-works" className="steps-section section-pad">
          <div className="center-heading"><span className="eyebrow">SIMPLE, THOUGHTFUL, FULL OF LOVE</span><h2>How it <em>works</em></h2></div>
          <div className="steps-grid">
            <article><span className="step-icon"><CatIcon /></span><span className="step-number">01</span><h3>Meet the cats</h3><p>Browse the gallery and discover their personalities.</p></article>
            <article><span className="step-icon"><MessageCircle /></span><span className="step-number">02</span><h3>Ask away</h3><p>Enquire about care, health records and availability.</p></article>
            <article><span className="step-icon"><House /></span><span className="step-number">03</span><h3>Prepare for home</h3><p>Discuss the next steps and get ready for your new friend.</p></article>
          </div>
        </section>

        <section id="faq" className="faq-section section-pad">
          <div className="center-heading"><span className="eyebrow">A FEW LITTLE ANSWERS</span><h2>Frequently asked <em>questions</em></h2></div>
          <div className="faq-list">
            <details><summary>How do I enquire about a cat?</summary><p>Select a cat and use the WhatsApp button, or submit the enquiry form below.</p></details>
            <details><summary>Can I see health and vaccination details?</summary><p>Ask us for the specific cat's available veterinary and vaccination records before making a decision.</p></details>
            <details><summary>Are all cats currently available?</summary><p>Availability can change. Contact us to confirm before making arrangements.</p></details>
            <details><summary>Can I visit before deciding?</summary><p>Contact us to discuss visit arrangements and what is best for the cat.</p></details>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="contact-copy">
            <span className="eyebrow">LET'S TALK WHISKERS</span>
            <h2>Your new best friend could be <em>one hello away.</em></h2>
            <p>Tell us a little about yourself and the cat you are interested in. We'll get back to you.</p>
            <button className="secondary-button" onClick={openWhatsApp}><MessageCircle size={18} /> Chat on WhatsApp</button>
          </div>
          <form className="enquiry-form" onSubmit={handleEnquiry}>
            <h3>Send an enquiry <PawPrint size={19} /></h3>
            <p>Fields marked * are required.</p>
            <label>Full name *<input name="name" required minLength={2} maxLength={100} placeholder="Your name" /></label>
            <div className="form-row">
              <label>Phone number *<input name="phone" required type="tel" pattern="[+]?[0-9 ()-]{8,20}" placeholder="Your phone number" /></label>
              <label>Email address *<input name="email" required type="email" maxLength={150} placeholder="you@example.com" /></label>
            </div>
            <label>Your area / city *<input name="area" required maxLength={120} placeholder="Where are you from?" /></label>
            <label>Message *<textarea name="message" required minLength={5} maxLength={2000} rows={4} placeholder="Tell us which cat caught your eye..." /></label>
            <button className="primary-button submit-button" disabled={sending}>{sending ? "Sending..." : "Send Enquiry"} <Send size={17} /></button>
            {notice && <p className="form-notice" role="status">{notice}</p>}
          </form>
        </section>





 






      </main>
      {selectedCat && (
  <CatDetails
    key={selectedCat.id}
    cat={selectedCat}
    onClose={() => setSelectedCat(null)}
  />
)}

      <footer className="site-footer">
        <a href="#home" className="brand footer-brand"><span className="brand-icon"><PawPrint size={23} /></span><span>Cuttie <b>Cats</b><small>LOVE, PAWS & LITTLE PURRS</small></span></a>
        <p>Made with love, for the love of little paws. <Heart size={15} fill="#c66d8c" color="#c66d8c" /></p>
        <div className="footer-links">
          {["cats", "families", "how-it-works", "faq", "contact"].map((id) => (
            <a key={id} href={`#${id}`}>{id === "cats" ? "Available Cats" : id === "families" ? "Happy Families" : id === "how-it-works" ? "How It Works" : id === "faq" ? "FAQ" : "Visit & Contact"}</a>
          ))}
        </div>
        <small>© {new Date().getFullYear()} Cuttie Cats. All rights reserved.</small>
      </footer>

      <div className="paw-trail" aria-hidden="true">
  {pawPrints.map((paw) => (
    <span
      key={paw.id}
      style={{
        left: paw.x,
        top: paw.y,
        transform: `rotate(${paw.rotate}deg)`
      }}
    >
      <PawPrint size={19} fill="currentColor" />
    </span>
  ))}
</div>

<div className="floating-paw" aria-hidden="true">
  <PawPrint />
</div>
    </>
  );
}
