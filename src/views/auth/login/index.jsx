import React, { useState } from 'react';
import { useUser } from '@providers/user';
import { Card, Form, Input, Button, Typography } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';

const { Item } = Form;
const { Title } = Typography;

const Login = () => {
  const [logging, setLogging] = useState(false);
  const { setLogged, setUser } = useUser();

  const onFinish = async (values) => {
    setLogging(true);
    setUser(values);
    setLogged(true);
    setLogging(false);
  };

  return (
    <Card style={{ maxWidth: 450, width: '100%' }}>
      <Title>Análisis de Riesgo COVID</Title>
      <Form onFinish={onFinish}>
        <Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'Ingresa un correo válido',
            },
            { required: true, message: 'Ingresa un correo' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Item>
        <Item
          name="name"
          rules={[{ required: true, message: 'Ingresa tu nombre' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Name" />
        </Item>
        <Item style={{ marginTop: 20 }}>
          <Button loading={logging} block type="primary" htmlType="submit">
            Ingresar
          </Button>
        </Item>
      </Form>
    </Card>
  );
};

export default Login;
