import * as actionTypes from './reducer-type'

const INITIAL_STATE = {
    products: [{ "id": 0, img: "https://assets.pinterest.com/ext/embed.html?id=45458277478070067", img_four: "https://assets.pinterest.com/ext/embed.html?id=16677461110132339", img_second: "https://assets.pinterest.com/ext/embed.html?id=26106872830582334", img_third: "https://assets.pinterest.com/ext/embed.html?id=76490893659284294", name: "TowerOfGod", price: 4, producer: "Japan", published: true, rating: "4.8 point", short__descript: "Is a 2013 Japanese anime television series produced by Trigger. It follows vagrant schoolgirl Ryuko Matoi on her search for her father's killer, which brings her into violent conflict with Satsuki Kiryuin, the iron-willed student council president of Honnouji Academy, and her mother's fashion empire." }, { id: 1, img: "https://assets.pinterest.com/ext/embed.html?id=15410823713908939", img_four: "https://assets.pinterest.com/ext/embed.html?id=801500064917853780", img_second: "https://assets.pinterest.com/ext/embed.html?id=563018687723019", img_third: "https://assets.pinterest.com/ext/embed.html?id=106819822399386815", name: "It", price: 6, producer: "USA", published: true, rating: "4.6 point", short__descript: "It is a 1986 horror novel by American author Stephen King. It was his 22nd book, and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey. " }, { id: 2, img: "https://assets.pinterest.com/ext/embed.html?id=76209418683642467", img_four: "https://assets.pinterest.com/ext/embed.html?id=564779609519323729", img_second: "https://assets.pinterest.com/ext/embed.html?id=411375747220612679", img_third: "https://assets.pinterest.com/ext/embed.html?id=712765078503969245", name: "KillLaKill", price: 3.50, producer: "Japan", published: true, rating: "3.2 point", short__descript: "Is a 2013 Japanese anime television series produced by Trigger. It follows vagrant schoolgirl Ryuko Matoi on her search for her father's killer, which brings her into violent conflict with Satsuki Kiryuin, the iron-willed student council president of Honnouji Academy, and her mother's fashion empire.Is a 2013 Japanese anime television series produced by Trigger. It follows vagrant schoolgirl Ryuko Matoi on her search for her father's killer, which brings her into violent conflict with Satsuki Kiryuin." }, { "id": 3, img: "https://assets.pinterest.com/ext/embed.html?id=557461260131794351", img_four: "https://assets.pinterest.com/ext/embed.html?id=645985140289207554", img_second: "https://assets.pinterest.com/ext/embed.html?id=64598575894765664", img_third: "https://assets.pinterest.com/ext/embed.html?id=571957221432089684", name: "DemonSlayer", price: 5.50, producer: "Japan", published: true, rating: "4.6 point", short__descript: "Is a Japanese manga series written and illustrated by Koyoharu Gotōge. It follows Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon. The manga was serialized in Shueisha's Weekly Shōnen Jump from February 2016 to May 2020, and its chapters collected in 22 tankōbon volumes as of October 2020. It is published in English by Viz Media and simulpublished by Shueisha in English and Spanish on their Manga Plus platform." }],
    cart: [],
    currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:

            // Great Item data from products array
            const item = state.products.find(
                (product) => product.id === action.payload.id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +action.payload.qty }
                        : item
                ),
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer;