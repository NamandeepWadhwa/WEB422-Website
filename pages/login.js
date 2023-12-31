import { Card, Form, Button } from "react-bootstrap";
import { useState } from 'react';
import { authenticateUser, readToken } from "@/lib/authenticate";
import { useRouter } from 'next/router';
import Alert from 'react-bootstrap/Alert';
import { useAtom } from "jotai";
import {getHistory} from "@/lib/userData";
import  {getFavourites}  from "@/lib/userData";
import { favoritesAtom } from "@/store";
import {searchHistoryAtom } from "@/store";





export default function Login(props){

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [history,setHistory]=useAtom(searchHistoryAtom);
  const [favourites,setFavourites]=useAtom(favoritesAtom);
  const[warning,setWarning]=useState("");

  async function updatAtomms(){
    
    setFavourites(await getFavourites());
    
    setHistory(await getHistory());
  
  
  }

  async function handleSubmit(e) {
    e.preventDefault();
   try{
    await authenticateUser(user, password);
   
    await updatAtomms();
    
    router.push("/favourites");
   }
   catch(err){
    setWarning(err.message);
   }
  }
  return (
    <>
      <Card bg="light">
        <Card.Body><h2>Login</h2>Enter your login information below:</Card.Body>
      </Card>
      <br />
      { warning && ( <><br /><Alert variant="danger">{warning}</Alert></> )}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>User:</Form.Label><Form.Control type="text" value={user} id="userName" name="userName" onChange={e => setUser(e.target.value)} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Password:</Form.Label><Form.Control type="password" value={password} id="password" name="password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <br />
        <Button variant="primary" className="pull-right" type="submit">Login</Button>
      </Form>
    </>
  );
}