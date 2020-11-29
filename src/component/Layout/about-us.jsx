import '../style/Layout/about-us.css';
import NavigationButton from './about-us-button'
function AboutUs() {
  return (
    <div className="about-us-section">
      <p className="about-us-main-text">About us</p>
      <div className="about-us-description">
        <iframe src="https://assets.pinterest.com/ext/embed.html?id=5840674502501879" height="600" width="490" frameborder="0" scrolling="no" className="about-us-img" alt="FUCK" title="Anistore foto"></iframe>
        <div className="center-block">
          <span className="about-us-text">
            Hello...</span>
<span className="about-us-text-hiden">&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; welcome to the first Ukrainian online store of manhwa and manga.
            Here you will find exactly what you like, because our range is extremely diverse and interesting.

            Here you can find such manhvas as "Solo leveling" ,"Tower of God" ,"Demon Slayer"

            ,and much more truly unique and exciting reading
<br></br>
So thank you for visiting and enjoy your shopping)))</span>

          <NavigationButton rref="/catalog" class="go-to-catalog" text="Go to catalog" />
        </div>
        <iframe src="https://assets.pinterest.com/ext/embed.html?id=168110998580326289" height="600" width="490" frameborder="0" scrolling="no" className="about-us-img-second" alt="FUCK" title="Anistore foto"></iframe>
      </div>

    </div>);
}
export default AboutUs