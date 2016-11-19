import { FeedActions } from '../actions'

const initialState = {
  feedItems: [],
  isFeedLoaded: false,
};

export default function (state = initialState, action) {
  switch(action.type) {
    case FeedActions.SET_FEED:
      return {
        isFeedLoaded: true,
        feedItems: [...action.feedItems]
      };

    case FeedActions.APPEND_TO_FEED:
      return {
        isFeedLoaded: state.isFeedLoaded,
        feedItems: [...state.feedItems, ...action.feedItems]
      };
      
    default:
      return state;
  }
}
