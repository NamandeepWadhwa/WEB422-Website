import {useAtom} from 'jotai';
import { searchHistoryAtom } from '@/store';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from 'react-bootstrap';
import styles from '@/styles/History.module.css';
import { removeFromHistory } from '@/lib/userData';
export default function History(){
const [searchHistory,setSearchHistory]=useAtom(searchHistoryAtom);
const router = useRouter();
if(!searchHistory){return null;}
let parsedHistory=[];
searchHistory.forEach((h) => {
    let params=new URLSearchParams(h);
    let entries=params.entries();
    parsedHistory.push(Object.fromEntries(entries));
});


function historyClicked(e,index){
    e.preventDefault();
    router.push(`/artwork?${searchHistory[index]}`)
 
}
async function removeHistoryClicked(e,index){
    e.stopPropagation();
    setSearchHistory(await removeFromHistory(searchHistory[index]));

}

 if (parsedHistory.length>0)
 {

   return <>
   <ListGroup style={{ width: '18rem' }}>
   {parsedHistory.map((history,index)=>{
    return<><ListGroupItem className={styles.historyListItem} onClick={e=>historyClicked(e,index)}>{Object.keys(history).map(key => (<>{key}: <strong>{history[key]}</strong>&nbsp;</>))}</ListGroupItem>
    <Button className="float-end" variant="danger" size="sm" 
    onClick={e => removeHistoryClicked(e, index)}>&times;</Button>
</>
    
    
   })
   
   }
   </ListGroup></>
   

}
 return <>
 
  <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Nothing Here</Card.Title>
        <Card.Text>
        Here Try searching for some artwork
        </Card.Text>
      </Card.Body>
    </Card>


</>

}