import facebook from "../assets/social/facebook.png";
import whatsapp from "../assets/social/whatsapp.png";
import instagram from "../assets/social/instagram.png";
import youtube from "../assets/social/youtube.png";

function SocialMedia() {
  const socialMediaData = [facebook, whatsapp, instagram, youtube];
  return (
    <article className="hidden md:block mt-3">
      <ul className="flex gap-3">
        {socialMediaData.map((link) => (
          <li key={link}>
            <img src={link} />
          </li>
        ))}
      </ul>
    </article>
  );
}

export default SocialMedia;
