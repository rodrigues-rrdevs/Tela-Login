import React from 'react'
import {Form,Button, Row, Col} from 'react-bootstrap'

const Login = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <Form style={{width:"80%" , marginLeft:"10%", marginTop: "20%"}}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2} style={{color:"white"}}>
                     Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Digite seu email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" style={{marginTop: "10%"}}>
                    <Form.Label column sm={2} style={{color:"white"}}>
                    Senha
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Digite sua senha" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" style={{marginTop: "15%"}}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg">
                                Entrar
                            </Button>
                        </div>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Login
