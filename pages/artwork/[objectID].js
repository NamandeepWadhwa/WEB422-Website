import { useRouter } from "next/router";
import ArtworkCardDetail from "@/components/ArtworkCardDetail";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ArtworkDetail() {

  const router = useRouter();
    const { objectID } = router.query;
    console.log(objectID);
    return <>
    <Row>
     <Col>  
    <ArtworkCardDetail objectId={objectID}/>
    </Col> 
    </Row>

    </>


}