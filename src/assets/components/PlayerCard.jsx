import Card from 'react-bootstrap/Card';

function PlayerCard({name, age, nationality, movie, dob, imgUrl}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{age}</Card.Text>
        <Card.Text>{nationality}</Card.Text>
        <Card.Text>{movie}</Card.Text>
        <Card.Text>{dob}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;