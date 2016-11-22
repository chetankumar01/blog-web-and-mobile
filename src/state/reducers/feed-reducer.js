import { FeedActions } from '../actions'

const initialState = {
  feedItems: [],
  isFeedLoaded: false,
};

export default function (state = initialState, action) {
  switch(action.type) {
    case FeedActions.SET_FEED:
      state.feedItems = action.feedItems;
      state.isFeedLoaded = true;
      return state;

    case FeedActions.ADD_FEED:
      let newState = {
        isFeedLoaded: state.isFeedLoaded,
        feedItems: [...state.feedItems, action.blog]
      };
      return newState;
      
    default:
      return state;
  }
}
