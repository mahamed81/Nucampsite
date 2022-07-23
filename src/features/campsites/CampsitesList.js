import CampsiteCard from "./CampsiteCard";
import { Row, Col} from "reactstrap";
import{selectAllCampsites} from './campsitesSlice';

const CampsitesList = ()=>{
    const campsites = selectAllCampsites();
    return(
      <Row className='ms-auto'>
        {campsites.map((campsite)=>(
          <Col className='m-4' key ={campsite.id} md ='5'>
            <CampsiteCard className = 'choose' campsite={campsite}/>
          </Col>
        ))}
      </Row>

    )
}


export default CampsitesList;