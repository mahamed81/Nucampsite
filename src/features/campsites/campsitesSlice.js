import {CAMPSITES} from '/Users/mahamedahmed/Desktop/NucampFolder/3-React/nucampsite/src/app/shared/CAMPSITES.js'


export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectRandomCampsite = () => {
const rand =  Math.random() * ((CAMPSITES.length) - 0) + 0;
   // const randObj = CAMPSITES.find((obj)=> obj[rand]);
   return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
};