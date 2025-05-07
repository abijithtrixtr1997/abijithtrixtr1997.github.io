import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="footer w-full bg-black text-white items-center justify-between py-5 px-10 flex">
      <ul className="social-links flex items-end sm:justify-end justify-center w-full gap-10">
        <li className="hover:scale-110 transition-all duration-300">
          <a
            href="https://www.linkedin.com/in/abijith-asokan-286927b3/"
            target="_blank"
          >
            <IconBrandLinkedin size={32} />
          </a>
        </li>
        <li className="hover:scale-110 transition-all duration-300">
          <a
            href="https://www.instagram.com/abijith.01/?locale=de&hl=am-et"
            target="_blank"
          >
            <IconBrandInstagram size={32} />
          </a>
        </li>

        <li className="hover:scale-110 transition-all duration-300">
          <a href="https://github.com/abijithtrixtr1997" target="_blank">
            <IconBrandGithub size={32} />
          </a>
        </li>
        <li className="hover:scale-110 transition-all duration-300">
          <a href="mailto:abijithasokan@gmail.com">
            <IconBrandGmail size={32} />
          </a>
        </li>
        <li className="hover:scale-110 transition-all duration-300">
          <a href="https://wa.me/qr/RI7PZLNXJQCFG1" target="_blank">
            <IconBrandWhatsapp size={32} />
          </a>
        </li>
      </ul>
    </footer>
  );
};
