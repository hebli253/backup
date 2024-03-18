import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {post} from 'axios';


function CustomerAdd(){
    //입력된 정보를 가져오기 위한 변수 선언
    const fileRef = useRef(null);
    const usernameRef = useRef(null);
    const jobRef = useRef(null);

    // 모달창을 위한 설정 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //서버에 보낼 파일 정보를 저장하기 위한 함수 및 변수 선언
    const [file, setFile] = useState(null);
    function saveFile(e){
        console.log(e.target.files[0]);
        return setFile(e.target.files[0]);
    }

    //submit 버튼이 눌려지면, 처리하는 함수 선언(handleSubmit())
    function addCustomer(){
        console.log('addCustomer() -> ');
        const url = 'http://localhost:3000/api/customerUpload';
        const formData = new FormData();
        formData.append('filename', file.name);
        console.log(`filename : ${file.name}`);
        formData.append('file',file);
        formData.append('username', usernameRef.current.value);
        formData.append('job', jobRef.current.value);
        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }
        //URL을 이용하여 서버에 formData 전송
        return post(url, formData, config);



    }
    function handleSubmit(e){
        e.preventDefault();
        addCustomer();
        //추가된 데이터를 테이블에서 바로 확인할 수 있도록, 리로드 수행..
        window.location.reload();
    }


    return(
        <>
            <Button variant="primary" onClick={handleShow}>
            고객 정보 추가
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>고객 정보 입력</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>                    
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>파일 업로드</Form.Label>
                            <Form.Control type="file"
                                          name="file"
                                          ref={fileRef}
                                          onChange={saveFile} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>고객 이름</Form.Label>
                            <Form.Control type="text"
                                          placeholder="홍길동"
                                          name="username"
                                          ref={usernameRef} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>고객 직업</Form.Label>
                            <Form.Control type="text" 
                                          placeholder="엔지니어"
                                          name="job"
                                          ref={jobRef} />
                        </Form.Group>                    
                    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type ="submit" variant="primary" onClick={handleClose}>
                            Save
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>                   
                    </Modal.Footer>
                </Form>
            </Modal>  
        </>
    )
}

export default CustomerAdd;