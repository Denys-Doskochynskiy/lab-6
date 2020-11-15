import '../style/HeaderFooter/footer.css';
function Footer() {
    return (
        <div className="footer">
            <div className="text-section">
                <p className="footer-main-text">Anibook</p>
                <div className="footer-line"></div>
                <p className="footer-text">The first Ukrainian online manga store</p>
            </div>

            <img src="https://img.icons8.com/ios/75/000000/physics-book.png" className="footer-img-section" alt="FUCK" />
            <div className="social">
                <img src="https://img.icons8.com/metro/45/000000/instagram-new.png" />
                <img src="https://img.icons8.com/android/45/000000/facebook-new.png" />
                <img src="https://img.icons8.com/android/45/000000/linkedin.png" />
                <img src="https://img.icons8.com/fluent/48/000000/github.png" />
            </div>
            <div className="social-line"></div>
            <p className="reserved-text"><footer>2020 IoT &copy;Copyright all rights reserved</footer>
            </p>
        </div>);
}
export default Footer