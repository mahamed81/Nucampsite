import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import SubHeader from '../components/SubHeader';
import CommentsList from '../features/comments/CommentsList';



const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = selectCampsiteById(campsiteId);

    return (
      <Container>
          <Row>
             <SubHeader current={campsite.name} detail={true} />
              <CampsiteDetail campsite={campsite} />
              <CommentsList campsiteId={campsiteId} />
          </Row>
      </Container>
  );
    }
export default CampsiteDetailPage;