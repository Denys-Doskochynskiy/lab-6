import React from 'react'
import './style/info.css';
import { NavigationButtonBuy } from './manga-list-button'
function InfoItem(props) {

    var manga = props.manga
    const pathname = window.location.pathname.split("/").pop()
    var mangaSelected = manga.filter(tutorial => tutorial.key.includes(pathname))


    return (

        <div className="conteiner">
            <p className="maim-info-text">Item info</p>
            <ul className={"grid-list"}>
                {
                    mangaSelected.map((tutorial) => (
                        <div className="main-info-container">

                            <div className="img-container">
                                <div className="row-img-first">
                                    <iframe className="img-radius" src={tutorial.val().img} height="500" width="350" frameborder="0" scrolling="no"> </iframe>
                                    <iframe className="img-radius" src={tutorial.val().img_second} height="500" width="345" frameborder="0" scrolling="no" ></iframe>
                                </div>
                                <div className="row-img-second">
                                    <iframe className="img-radius" src={tutorial.val().img_third} height="500" width="345" frameborder="0" scrolling="no" ></iframe>
                                    <iframe className="img-radius" src={tutorial.val().img_four} height="500" width="345" frameborder="0" scrolling="no" ></iframe>
                                </div>
                            </div>
                                         
                                       <p className="name-item" text-align="center">{tutorial.val().name}</p>

                                <div className="rating-price">
                                    <p className="producer" text-align="center">Producer: {tutorial.val().producer}</p>
                                    <p className="rating" text-align="center">Rating: {tutorial.val().rating}</p>
                                    <p className="price" text-align="center"  >Price: {tutorial.val().price}</p></div>
                                <div className="desc-container">
                                    <p className="description-main">Short description</p>
                                    <p className="description-info"   >{tutorial.val().short__descript}</p>
                                    <a href={"/buy/" + tutorial.val().id} className='a-buy-item'>
                                        Buy this manga?
        </a>
                                </div>


                            </div>
                        


                    ))}
            </ul>
        </div>
    )
}
export default InfoItem