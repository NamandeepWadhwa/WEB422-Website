import Card from 'react-bootstrap/Card';
import Error from 'next/error';
import useSWR from 'swr';
import {useState} from 'react';
import { useEffect } from 'react';
import {useAtom} from 'jotai';
import {favoritesAtom }from '@/store';
import Button from 'react-bootstrap/Button';
import { addToFavourites } from '@/lib/userData';
import { removeFromFavourites } from '@/lib/userData';

export default function ArtworkCardDetail(props){
  const[favouritesList,setFavouritesList]=useAtom(favoritesAtom );
  const[showAdded,setShowAdded]=useState(false);
  useEffect(()=>{

setShowAdded(favouritesList?.includes(props.objectId));


  },[favouritesList,props.objectId]);
 async function favouritesClicked () {

    if(showAdded==true)
    {
      setFavouritesList(await removeFromFavourites(props.objectId));
      setShowAdded(false);

    }
    else if(showAdded==false)
    {
      setFavouritesList(await addToFavourites(props.objectId));
      setShowAdded(true);
    }
  }


const {data,error}=useSWR(props.objectId?"https://collectionapi.metmuseum.org/public/collection/v1/objects/"+props.objectId:null);
if (error) return <Error statusCode={404}/>
if(data)
{
   return <>
   

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.primaryImage? data.primaryImage:"https://via.placeholder.com/375x375.png?text=%5b+Not+Available+%5d"} />
    </Card>

    <br />
      <br />
      <div>
        <strong>Medium:</strong> {data.medium}
      </div>
      <br />
    <div>
        <strong>Artist:</strong> {data.artistDisplayName +" " || 'N/A'}
        {data.artistDisplayName && data.artistWikidata_URL && (
          <a href={data.artistWikidata_URL} target="_blank" rel="noreferrer">
            wiki
          </a>
        )}
      </div>
    
      <div>
        <strong>Credit Line:</strong> {data.creditLine || 'N/A'}
      </div>
      <div>
        <strong>Dimensions:</strong> {data.dimensions || 'N/A'}
      </div>
      <div>
        <Button variant={showAdded?"primary":"outline-primary"} onClick={favouritesClicked}>{showAdded?"+ Favourite (added)" :"+ Favourite" }</Button>
        </div>
   </>
}
return null;
}