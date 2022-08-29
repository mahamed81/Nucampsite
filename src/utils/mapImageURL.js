import {baseUrl} from '/Volumes/easystore/Users/mahamedahmed/Desktop/NucampFolder/3-React/nucampsite/src/app/shared/baseUrl.js'

export const mapImageURL = (arr) => {
  return arr.map((item) => {
      return {
          ...item,
          image: baseUrl + item.image
      };
  });
};