import "./Footer.css";
import FullLogo from "../../assets/full-logo.png";
import { Button } from "../";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const links = [
    {
      title: "Information",
      titleLink: "/info",
      subLinks: [
        { subTitle: "About", subTitleLink: "/about-us" },
        { subTitle: "Products", subTitleLink: "/products" },
        { subTitle: "Blog", subTitleLink: "/blog" },
      ],
    },
    {
      title: "Company",
      titleLink: "/company",
      subLinks: [
        { subTitle: "Community", subTitleLink: "/company:community" },
        { subTitle: "Career", subTitleLink: "/company:career" },
        { subTitle: "Our Story", subTitleLink: "/company:our-story" },
      ],
    },
    {
      title: "Contacts",
      titleLink: "/contacts",
      subLinks: [
        { subTitle: "Getting Started", subTitleLink: "" },
        { subTitle: "Pricing", subTitleLink: "" },
        { subTitle: "Resources", subTitleLink: "" },
      ],
    },
  ];

  return (
    <footer className="Footer">
      {/* Lado esquerdo */}
      <div className="Div1">
        <img src={FullLogo} alt="Full Logo" />
        <p>We help you find your dream personal -isation!</p>
        <div className="SocialButtons">
          <Button className="FooterButton">
            <AiOutlineFacebook className="Icon" />
          </Button>
          <Button className="FooterButton">
            <AiOutlineInstagram className="Icon" />
          </Button>
          <Button className="FooterButton">
            <AiOutlineTwitter className="Icon" />
          </Button>
        </div>
        <p className="RightReserved">
          2023 All Right Reserved Term of use Organizações Tabajara
        </p>
      </div>
      {/* Lado direito */}
      <div className="Div2">
        {links.map(({ title, titleLink, subLinks }) => (
          <NavLinkDiv title={title} titleLink={titleLink} subLinks={subLinks} />
        ))}
      </div>
    </footer>
  );
};

const NavLinkDiv = ({ title, titleLink, subLinks }) => {
  return (
    <div className="LinksContainer">
      <NavLink className="NavLink" to={titleLink}>
        {title}
      </NavLink>
      {subLinks.map(({ subTitle, subTitleLink }) => (
        <NavLink className="NavLink" to={subTitleLink}>
          {subTitle}
        </NavLink>
      ))}
    </div>
  );
};

export default Footer;
