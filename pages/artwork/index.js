import React from 'react';
import {useState,useEffect} from 'react'; 
import {useRouter} from 'next/router';
import useSWR from 'swr';
import Error from 'next/error';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArtworkCard from '@/components/ArtworkCard';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import validObjectIDList from '@/public/data/validObjectIDList.json';

export default  function Artwork(props){

    const PER_PAGE =12;
    const [artworklist, setArtworklist]=useState([]);
    const [page, setpage]=useState(1);
    const router=useRouter();
    let finalQuery=router.asPath.split('?')[1];
    

    const {data,error}=useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/search?${finalQuery}`);
  
    
    function perviousPage(){
        if(page>1) setpage(page-1);
    }
    function nextPage(){
      if(page<artworklist.length)
      {
        setpage(page+1);
      }
        
    }
    useEffect(()=>{
    
      if (data){
        let filteredResults=validObjectIDList.objectIDs.filter(x=>data.objectIDs?data.objectIDs.includes(x):null)
        let results=[];
        for (let i = 0; i < filteredResults.length; i += PER_PAGE) {
            const chunk = filteredResults.slice(i, i + PER_PAGE);
            results.push(chunk);
          };
        
          setArtworklist(results);
         
          setpage(1);
          
      }


    },[data]);

    if (error){
        return <Error statusCode={404}/>
    }
   
        
        return<> 
        <Row className="gy-4">
            
            {artworklist.length>0?
            artworklist[page-1].map(oject=>{
              

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

            {artworklist.length>0?

<Pagination>
<Pagination.Prev onClick={perviousPage}/>

<Pagination.Item>{page}</Pagination.Item>

<Pagination.Next onClick={nextPage}/>




</Pagination>
            
            
            :null}
        
        </>
    
    return null;

}
