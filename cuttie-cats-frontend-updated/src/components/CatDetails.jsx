
import { useState } from "react";
import { X, Heart, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // Replace with your WhatsApp number

export default function CatDetails({ cat, onClose }) {
  const photos = cat.images?.length
    ? cat.images
    : [cat.image];

  const [activePhoto, setActivePhoto] = useState(0);

  const whatsappMessage = encodeURIComponent(
    `Hello Cuttie Cats! I am interested in ${cat.name}. Please share more details.`
  );

  return (
    <div className="details-overlay" onClick={onClose}>
      <section
        className="details-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${cat.name} details`}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="details-close" onClick={onClose} aria-label="Close details">
          <X />
        </button>

        <div className="details-gallery">
          <img
            className="main-cat-photo"
            src={photos[activePhoto]}
            alt={cat.name}
          />

          <div className="thumbnail-list">
            {photos.map((photo, index) => (
              <button
                key={photo + index}
                className={activePhoto === index ? "selected-thumb" : ""}
                onClick={() => setActivePhoto(index)}
              >
                <img src={photo} alt={`${cat.name} photo ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="details-info">
          <span className="eyebrow">MEET YOUR NEW BEST FRIEND</span>
          <h2>{cat.name} <Heart size={20} fill="#e6a3b5" color="#e6a3b5" /></h2>
          <p className="cat-breed">{cat.breed}</p>

          <div className="detail-stats">
            <span>Age <strong>{cat.age}</strong></span>
            <span>Gender <strong>{cat.gender}</strong></span>
            <span>Price <strong>{cat.price}</strong></span>
          </div>

          <p>{cat.description}</p>

          <h3>What comes with {cat.name}?</h3>
          <ul className="care-list">
            <li>✓ Vaccination records</li>
            <li>✓ Deworming records</li>
            <li>✓ Health-check information</li>
            <li>✓ Feeding and care guidance</li>
          </ul>

          <a
            className="primary-button details-whatsapp"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={19} /> Enquire about {cat.name}
          </a>
        </div>
      </section>
    </div>
  );
}
