
import FoodLogo from '../assets/FoodLogo2.jpg'

const Footer = () => {
    return (
        <footer className="footer bg-base-200 dark:bg-slate-600 dark:text-white text-base-content p-10">
            <aside>
                <img className='h-20 rounded-full w-20' src={FoodLogo} alt="" />
                <p className="font-bold text-gray-500 dark:text-white">
                    Food Sharing
                    <br />
                    {/* Providing reliable tech since 1992 */}
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Quality</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Delivery</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Order</a>
                <a className="link link-hover">Chefs</a>
                <a className="link link-hover">Shops</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;