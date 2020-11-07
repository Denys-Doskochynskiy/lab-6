import Element from './top-product-element'
import './style/top-product.css';
function TopProduct() {
    return (
        <div className="section">
            <p className="main-text">Top product</p>
            <div className="product-element">
                <Element name="Tower of God" shortDescription="
            Tower of God centers around a boy named Twenty-Fifth Bam, 
            who has spent most of his life trapped beneath a vast and 
            mysterious Tower, with only his close friend, Rachel,
            to keep him company. When Rachel enters the Tower, 
            Bam is devastated. Somehow, Bam manages to open the
            door to the Tower.Now, he will go any distance to 
            see Rachel again even if it means dying.When he enters the Tower,
            he meets allies that will help him up the tower."
                    img="https://assets.pinterest.com/ext/embed.html?id=45458277478070067" />

                <Element name="Demon Slayer" shortDescription="
            The story takes place in Taishō-era Japan. It follows 
            protagonist Tanjiro Kamado and his sister Nezuko Kamado
            as they seek a cure to Nezuko's demon curse. Tanjiro 
            and Nezuko become entangled in the affairs of a secret 
            society, known as the Demon Slayer Corps, that have been
            waging a secret war against demons for centuries. 
            The demons are former humans who sold their humanity in
            exchange for power, they feed on humans and possess super
            natural abilities such as super strength, magic and regeneration.
                "
                    img="https://assets.pinterest.com/ext/embed.html?id=28077197665646282" />
                <Element name="Solo leveling" shortDescription="
            Since a portal connecting our world to a world full of
            monsters and creatures of all kinds appeared, some people
            have acquired powers and the ability to hunt them: they 
            are called hunters. The protagonist of the story,
            Sung Jin-woo, is the weakest hunter in all of South Korea
            and barely stronger than a normal human. He is nicknamed by                 his fellow hunters as the weakest. One day, he and some other 
            hunters find themselves trapped in an extremely dangerous and
            rare double dungeon, and only a few of them survive and 
            manage to escape. Sung Jin-woo himself dies and, but manages 
            to complete all the trials in this dungeon. 
            He then wakes up in a hospital and find he has turned into
            a player who can now see an interface showing him quests,                  stats, inventory, store, and levels. Will he succeed in 
            leveling up to become the most powerful hunter?"
                    img="https://assets.pinterest.com/ext/embed.html?id=743586588471825193"
                />
            </div>

        </div>
    );
}
export default TopProduct