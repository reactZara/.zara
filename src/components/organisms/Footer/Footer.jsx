import './footer.scss';
import Newsletter from '../footerItems/Newsletter/Newsletter';
import Sociallinks from '../footerItems/Sociallinks/Sociallinks';
import Sitemap from '../footerItems/Sitemap/Sitemap';
import PageInformation from '../footerItems/PageInformation/PageInformation';
import Copyright from '../footerItems/Copyright/Copyright';

const Footer = () => {
    return (
        <section className="Footer">
            <Newsletter />
            <Sociallinks />
            <Sitemap />
            <PageInformation />
            <Copyright />
        </section>
    );
};

export default Footer;
