import {useDispatch} from "react-redux";
import {addFav, removeFav} from "../../redux/actions/index"

const handleFavorite = () => {
    if (isFav){
        setIsFav(false)
        dispatch(removeFav(id))
    } else {
        setIsFav(true)
        dispatch(addFav(personaje))
    }
}