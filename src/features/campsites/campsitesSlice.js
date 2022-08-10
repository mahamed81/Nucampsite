import {CAMPSITES} from '/Users/mahamedahmed/Desktop/NucampFolder/3-React/nucampsite/src/app/shared/CAMPSITES.js'
 import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  campsitesArray: CAMPSITES
};

const campsitesSlice = createSlice({
  name: 'campsites',
  initialState
});


export const campsitesReducer = campsitesSlice.reducer;

export const selectRandomCampsite = () => {
const rand =  Math.random() * ((CAMPSITES.length) - 0) + 0;
   // const randObj = CAMPSITES.find((obj)=> obj[rand]);
   return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
};

export const selectCampsiteById = (id) => (state) => {
  return state.campsites.campsitesArray.find(
      (campsite) => campsite.id === parseInt(id)
  );
};
export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};
export const selectFeaturedCampsite = (state) => {
  return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};