import {StackNavigator} from "react-navigation";
import CharacterList from "../character/CharacterList";
import CharacterDetail from "../character/CharacterDetail";

const Home = StackNavigator({
    List: {
        screen: CharacterList,
    },
    Detail: {
        screen: CharacterDetail,
    },
}, {
    headerMode: 'none'
});

export default Home;