import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { searchHistoryAtom } from '@/store';
import { useAtom } from 'jotai';
import { addToHistory } from '@/lib/userData';
import { removeToken, readToken } from '@/lib/authenticate';


export default function MainNav() {

    const [searchHistory,setSearchHistory]=useAtom(searchHistoryAtom);
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchFeild,setSearchFeild]=useState("");
  
    const router = useRouter();

    function logout(){
     
      setIsExpanded(false);
      removeToken();
      
      router.push('/login');
    }
    let token=readToken();
   async function submitform(e){

        e.preventDefault();
        setIsExpanded(false);
        
        setSearchHistory(await addToHistory(`title=true&q=${searchFeild}`));
        router.push(`/artwork?title=true&q=${searchFeild}`);
    }
   function onclickLink(){
    
    setIsExpanded(false);
  
   }
   function onclickToggle(){ 
   
    setIsExpanded(!isExpanded);
   
    
   }
   
  return (
    <>
    <Navbar expand="lg" expanded={isExpanded}className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand >Namandeep Singh Wadhwa</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"  onClick={(e)=>onclickToggle()}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          <Link href="/" passHref legacyBehavior ><Nav.Link onClick={(e) =>onclickLink()} active={router.pathname === "/home"} >Home</Nav.Link></Link>
            {token && <Link href="/search" passHref legacyBehavior ><Nav.Link active={router.pathname === "/search"} onClick={e =>onclickLink()}>Advance Search</Nav.Link></Link>}
            

         </Nav>
         <Nav className="ml-auto">
          {token===null && <Link href="/login" passHref legacyBehavior><Nav.Link onClick={(e)=>onclickLink()}>Login</Nav.Link></Link>}
          {token===null && <Link href="/register" passHref legacyBehavior><Nav.Link onClick={(e)=>onclickLink()}>Register</Nav.Link></Link>}
          
        </Nav>
         &nbsp; {token!=null &&<Form className="d-flex" onSubmit={submitform}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchFeild}
              onChange={(e)=>setSearchFeild(e.target.value)}
            />
            <Button variant="outline-success" type="submit" >Search</Button>
          </Form>}&nbsp;
          <Nav> 

          {token!=null && <NavDropdown title={token.userName} id="basic-nav-dropdown">
          <Link href="/favourites" passHref legacyBehavior >
          <NavDropdown.Item active={router.pathname === "/favourites"} >Favourite</NavDropdown.Item>
             </Link>
             <Link href="/history" passHref legacyBehavior >
          <NavDropdown.Item active={router.pathname === "/history"} >History</NavDropdown.Item>
             </Link>
             <NavDropdown.Item onClick={(e)=>logout()}>Logout</NavDropdown.Item>
              
            </NavDropdown>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br />
    <br />
    </>
  );
}

