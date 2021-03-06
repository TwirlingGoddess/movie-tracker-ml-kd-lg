export const addFavoriteMovieReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.favorite];
    case 'RESET_FAVORITE':
      return [];
    case 'DELETE_FAVORITE':
      return state.filter(movie => {
        return movie.title !== action.favorite.title;
      });
    default:
      return state;
  }
};
