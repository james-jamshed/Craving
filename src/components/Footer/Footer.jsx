/* eslint-disable react/prop-types */
import "./Footer.scss";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const SocialIcons = () => (
  <div className="social-logo">
   <a href="https://www.facebook.com/people/Jamshed-Alam/pfbid02HqkYyfrbM1Y4fmT4R2je9xNwM3Nqv2xEzRMYrShBG6oWU9KhtFQC55uaRGABDdYxl/?mibextid=qi2Omg&rdid=3Zzsdl9bdzj7jeot&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FAnsHSmQpW7groJNZ%2F%3Fmibextid%3Dqi2Omg" target="_blank" rel="noopener noreferrer">
  <img src={facebook} alt="Facebook logo" />
</a>

<a href="https://twitter.com/jamshedalam1777" target="_blank" rel="noopener noreferrer">
  <img src={twitter} alt="Twitter logo" />
</a>

    <a href="https://www.instagram.com/james_jamshed" target="_blank" rel="noopener noreferrer">
  <img src={instagram} alt="Instagram logo" />
</a>

  </div>
);

const FooterColumn = ({ title, items }) => (
  <div>
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const SubscribeForm = () => (
  <div className="mail">
    <input type="text" placeholder="text123@gmail.com" />
    <button>Send</button>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const aboutItems = ["About Us", "Service Us", "Contact", "Company"];
  const companyItems = ["Partnership", "Terms of Use", "Privacy", "Achievements"];

  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <h3>Craving</h3>
          <p>
          As we move forward in this technological age,
           we look to the future of our company with
            certainty and pride
          </p>
          <SocialIcons />
        </div>
        <FooterColumn title="About Us" items={aboutItems} />
        <FooterColumn title="Company" items={companyItems} />
        <div>
          <h3>Connect With Us</h3>
          <p>
          We're Always Here for You
          </p>
          <SubscribeForm />
        </div>
      </div>
      <p className="copyright">Copyright © {currentYear} Jamshed.</p>
    </div>
  );
};

export default Footer;
