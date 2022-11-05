import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalfavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props){
    const [userFavorite, setUserFavorites] = useState([]);
    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites)=> {
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }
    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites=> {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        })

    }
    function itemIsFavoriteHandler(meetupId){
        return userFavorite.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorite,
        totalfavorites: userFavorite.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };
    return(
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );

}

export default FavoritesContext;