import facebook from "../assets/socialMedia/facebook.png";
import twitter from "../assets/socialMedia/twitter.png";
import linkedin from "../assets/socialMedia/linkedin.png";
import instagram from "../assets/socialMedia/instagram.png";

function SocialMedia() {
  const socialMediaData = [facebook, twitter, linkedin, instagram];
  return (
    <article className="mt-10 mb-6">
      <ul className="flex gap-6">
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
