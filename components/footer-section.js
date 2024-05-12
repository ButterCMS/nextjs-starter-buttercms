import Image from "next/image";

export default function FooterSection({ mainMenu }) {
    const links = mainMenu.map(link => ({
        ...link,
        url: link.url[0] === "#" ? `/${link.url}` : link.url})
    )

    return (
        <footer className="footer pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                        <div className="footer-widget">
                            <div className="logo">
                                <a href="https://buttercms.com">
                                    <Image
                                        width={200}
                                        height={50}
                                        src="https://cdn.buttercms.com/PBral0NQGmmFzV0uG7Q6"
                                        alt="logo"
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }} />
                                </a>
                            </div>
                            <p className="desc">ButterCMS is your content backend. Build better with Butter.</p>
                            <ul className="social-links">
                                <li><a href="#0"><i className="lni lni-facebook"></i></a></li>
                                <li><a href="#0"><i className="lni lni-linkedin"></i></a></li>
                                <li><a href="#0"><i className="lni lni-instagram"></i></a></li>
                                <li><a href="#0"><i className="lni lni-twitter"></i></a></li>
                                <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/66405d0207f59932ab3e9c9a/1htlmml37';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12 offset-xl-1">
                        <div className="footer-widget">
                            <h3>About Us</h3>
                            <ul className="links">
                                {links.map((navLink) => (
                                    <li key={navLink.url}>
                                        <a href={navLink.url}>{navLink.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="footer-widget">
                            <h3>Subscribe Newsletter</h3>
                            <form action="#">
                                <input type="email" placeholder="Email" />
                                <button className="main-btn btn-hover">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
