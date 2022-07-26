import {Col} from 'reactstrap';
import Partner from './Partner';
import {selectAllPartners} from './partnersSlice';

import React from 'react';

const PartnersList = () => {
  const parterns = selectAllPartners();

  return (
    <>
    <Col className='mt-4'> 
      {parterns.map((partner)=>{
        return(  
        <div className='d-flex mb-5' key={partner.id}>
            <Partner partner={partner}/>
        </div>
        )
      })}
    
    </Col>
    </>
  );
}

export default PartnersList;
