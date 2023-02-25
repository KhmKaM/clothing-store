import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function FormProfile() {
  return (<Container style={{ width: '20rem' }}>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Адрес пользователя</Form.Label>
        <Form.Control type="email" placeholder="Введите email" />
        <Form.Text className="text-muted">
          Мы не передаем Вашу почту третьим лицам.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Введите пароль" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Отправить
      </Button>
    </Form>
    </Container>
  );
}

export default FormProfile;