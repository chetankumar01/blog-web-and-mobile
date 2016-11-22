export const SET_FEED = 'SET_FEED'
export const APPEND_TO_FEED = 'APPEND_TO_FEED'
export const ADD_FEED = 'ADD_FEED'


export function addFeed(blog){
  return {
    type: ADD_FEED,
    blog: blog
  }
}
