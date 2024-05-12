import './Footer.css'

function Footer(){
    return(

        <div className="footer-container">

            <div className="footer-content">
                <a href="#"><i class="bi bi-geo-alt"></i></a>
                <a href=""><i class="bi bi-telephone-fill"></i></a>
                <a href=""><i class="bi bi-envelope"></i></a>
            </div>
            <div className="footer-info">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Blog</a>
                <a href="">Testimonial</a>
            </div>
            <div className="footer-social">
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
            </div>

            <div className="copy-right">
                © 2024 All Rights Reserved By Khosravi-19
            </div>

        </div>
    )
}

export default Footer;