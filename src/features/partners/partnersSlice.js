import {PARTNERS} from '/Users/mahamedahmed/Desktop/NucampFolder/3-React/nucampsite/src/app/shared/PARTNERS'



export const selectFeaturedPartner = ()=>{
  return PARTNERS.find((partner)=> partner.featured);
}

export const selectAllPartners = ()=>{
  return PARTNERS;
}