import { createSelector } from "reselect";
const HomeSelector= (state) =>state.reduxer
export const counterSelector=  createSelector(
    HomeSelector,
    data=>data?.get('count')
)