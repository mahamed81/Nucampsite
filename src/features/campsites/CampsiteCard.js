import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const CampsiteCard = ({campsite}) => {
  const {name, image} = campsite;
  return (
    <Card>
      <CardImg
        width="100%" src={image} alt={name}/>
      <CardImgOverlay>
      <CardTitle>{name}</CardTitle>
      </CardImgOverlay>

    </Card>
    
  );
};

export default CampsiteCard;