import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Error from 'next/error';
import Link from 'next/link';
import useSWR from 'swr';

export default function ArtworkCard(props){

const {data,error}=useSWR("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+props.objectID);
if (error) return <Error statusCode={404}/>
if(data)
{
   return <>
   

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.primaryImageSmall? data.primaryImageSmall:"https://via.placeholder.com/375x375.png?text=%5b+Not+Available+%5d"} />
      <Card.Body>
        <Card.Title>{data.title?data.title:'N/A'}</Card.Title>
        <Card.Text>
          {data.objectDate?data.objectDate:'N/A'} {data.classification?data.classification:'N/A'}
        </Card.Text>
        <Link href={`/artwork/${props.objectID}`} passHref><Button variant="primary">{props.objectID}</Button></Link>
      </Card.Body>
    </Card>
   
   
   </>
}
return null;
}