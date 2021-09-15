import React from 'react';
import './ProjectCard.css';
// import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-modal';
import { Card ,Button} from 'react-bootstrap';
import TextEffect from '../../home/Header/TextEffect/TextEffect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import Aos from "aos";
// import "aos/dist/aos.css";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const ProjectCard = ({ projects: { name, image, description, download, price } }) => {
    
    console.log(description);
    // const [modalIsOpen, setModealIsOpen] = useState(false)

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
 
        <>



            
                <Card className="col-md-3 ms-5 mt-3 my-2  px-3 box d-flex" style={{ width: '18rem' }}>
                    <Card.Img className="projectImage-area" variant="top" style={{ height: '150px', width: "90%", borderRadius: '5px',marginLeft:'10px' }} src={image} />
                    <Card.Body>
                       <div className="d-flex">
                       <Card.Title className="title-name">{name}</Card.Title>
                        <Button  className="ms-5 view-btn" variant="primary" onClick={openModal}>View</Button>
                       </div>
                    </Card.Body>
                </Card>
   
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button className="close-btn" onClick={closeModal}><FontAwesomeIcon className="icon" icon={faTimes} /></button>
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                    <TextEffect></TextEffect>
                </h2>
                
                <img style={{ height: '350px', width: "100%", borderRadius: '10px' }} src={image} alt="" />
            </Modal>
        </>

    );
};

export default ProjectCard;