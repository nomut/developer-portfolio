import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import classnames from 'classnames';
import Alert from './Alerts';

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [alert, setAlert] = useState<{
    color: string;
    icon: string;
    message: string;
  } | null>(null);

  const successAlert = {
    color: 'success',
    icon: 'ni ni-like-2',
    message: ' Your message has been sent successfully!',
  };

  const errorAlert = {
    color: 'danger',
    icon: 'ni ni-bell-55',
    message: ' Oops! Something went wrong. Please try again later.',
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitting');

    console.log(form.current);

    const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

    const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (
      emailJsServiceId &&
      emailJsTemplateId &&
      emailJsPublicKey &&
      form.current
    ) {
      emailjs
        .sendForm(
          emailJsServiceId,
          emailJsTemplateId,
          form.current,
          emailJsPublicKey
        )
        .then(
          (result) => {
            console.log(result.text);
            setAlert(successAlert);
          },
          (error) => {
            console.log(error.text);
            setAlert(errorAlert);
          }
        );
    }
  };

  return (
    <>
      <section className="section section-lg section-shaped">
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <Row className="justify-content-center">
                        <Col lg="4">
                            <img
                            src="/img/logo.png"
                            style={{ width: '200px' }}
                            alt="Pemuda Pemudi Nusantara"
                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4 p-4"
                            />
                        </Col>
                        <Col lg="8">
                        <h2 className="mb-3">Contacts Us</h2>
                            <h6>Email: contact@pemudapemudi.com</h6>
                            <a href="https://g.page/r/CbellkBVx4YFEAI" target="_blank" rel="noreferrer" className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                                <i className="ni ni-pin-3 text-info mr-2" /> Yogyakarta, Indonesia
                            </a>
                        </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
      </section>
      <section className="text-center p-2 m-2">
        © Pemuda Pemudi Nusantara, ALL RIGHTS RESERVED.
      </section>
    </>
  );
};

export default ContactUs;
