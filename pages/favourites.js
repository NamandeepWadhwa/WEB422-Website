import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArtworkCard from '@/components/ArtworkCard';
import Card from 'react-bootstrap/Card';
import {useAtom} from 'jotai';
import {favoritesAtom }from '@/store';

export default function Favourites(){

const[favouritesList,setFavouritesList]=useAtom(favoritesAtom );
if(!favouritesList) return null;
return<> 
<Row className="gy-4">
    
    {favouritesList.length>0?
    favouritesList.map(oject=>{
      

      return <Col key={oject}>

        <ArtworkCard objectID={oject}/>
        </Col>

    })
    
    
    
    :<Card style={{ width: '18rem' }}>
    
    <Card.Body>
      
      <Card.Text>
        Nothing Here Try someting else
      </Card.Text>
      </Card.Body>
  </Card>}
    
    </Row>

    
</>



}
