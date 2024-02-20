import footer_return_icon from "../images/footerImages/myntra-footer-return-icon.png"
import footer_original_icon from "../images/footerImages/myntra-footer-original-icon.png"
import social_icon4 from "../images/footerImages/social-icon4.png"
import social_icon3 from "../images/footerImages/social-icon3.png"
import social_icon2 from "../images/footerImages/social-icon2.png"
import social_icon1 from "../images/footerImages/social-icon1.png"
import android_download from "../images/footerImages/android-download-logo.png"
import ios_download from "../images/footerImages/ios-download-logo.png"
import "./App.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-first-container">
                    <div className="footer-container">
                        <div className="column-footer">
                            <div className="first-div">ONLINE SHOPPING</div>
                            <a href="$" className="first-footer-link">Men</a>
                            <a href="$">Women</a>
                            <a href="$">Kids</a>
                            <a href="$">Home &amp; Living</a>
                            <a href="$">Beauty</a>
                            <a href="$">Gift Cards</a>
                            <a href="$" id="single-anchor">Myntra Insider</a>
                            <div className="first-div">USEFUL LINKS</div>
                            <a href="$" className="first-footer-link">Blog</a>
                            <a href="$">Careers</a>
                            <a href="$">Site Map</a>
                            <a href="$">Corporate Information</a>
                            <a href="$">Whitehat</a>
                            <a href="$">Gift Cards</a>
                            <a href="$">Myntra Insider</a>
                        </div>
                        <div className="column-footer">
                            <div className="first-div">CUSTOMER POLICIES</div>
                            <a href="$" className="first-footer-link">Contact Us</a>
                            <a href="$">FAQ</a>
                            <a href="$">T&amp;C</a>
                            <a href="$">Terms Of Use</a>
                            <a href="$">Track Orders</a>
                            <a href="$">Shipping</a>
                            <a href="$">Cancellation</a>
                            <a href="$">Returns</a>
                            <a href="$">Privacy Policy</a>
                            <a href="$">Grievance Officer</a>
                        </div>
                        <div className="column-footer">
                            <div className="first-div">EXPERIENCE MYNTRA APP ON MOBILE</div>
                            <div className="app-download-container">
                            <a href="https://play.google.com/store/apps/details?id=com.myntra.android&pcampaignid=web_share"><img src={android_download} width="140px" className="for-curser" id="android-logo" /></a>
                            <a href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059"><img src={ios_download} width="122px" className="for-curser" /></a>
                            </div>
                            <div className="keepInTouch">KEEP IN TOUCH</div>
                            <div className="social-icons-container">
                                <a href="https://facebook.com" target="_blank"><img src={social_icon1} width="20px" className="for-curser" /></a>
                                <a href="https://twitter.com" target="_blank"><img src={social_icon2} width="20px" className="for-curser" /></a>
                                <a href="https://youtube.com" target="_blank"><img src={social_icon3} width="28px" className="for-curser" /></a>
                                <a href="https://instagram.com" target="_blank"><img src={social_icon4} width="20px" className="for-curser" /></a>
                            </div>
                        </div>
                        <div className="column-footer">
                            <div className="footer-promises-div for-padding">
                                <img src={footer_original_icon} width="48px" />
                                <div><strong>100% ORIGINAL</strong> guarantee for all products at myntra.com</div>
                            </div>
                            <div className="footer-promises-div">
                                <img src={footer_return_icon} width="48px" />
                                <div><strong>Return within 14days</strong> of receiving your order</div>
                            </div>
                        </div>
                    </div>
                    <div className="concern-copyright-container">
                        <div className="contact-concern">In case of any concern, <span id="second-contactUs">Contact Us</span></div>
                        <div className="copyright">© 2023 www.myntra.com. All rights reserved.</div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer