import { socialImgs } from "../components/constants/index.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p>Terms & Conditions</p>
                </div>
                <div className="socials">
                    {socialImgs.map((img) => (
                        <a className="icon" target="blank" href={img.url} key={img.url}>
                            <img src={img.imgPath} alt={img.name} />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Sahil Mane. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;