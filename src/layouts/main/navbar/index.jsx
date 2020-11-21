import React from 'react';
import { PageHeader, Dropdown, Menu, Typography, Modal } from 'antd';
import { useLayout } from '@providers/layout';
import { useUser } from '@providers/user';
import { useLocation, Link } from 'react-router-dom';
import {
  DownOutlined,
  LogoutOutlined,
  ReadOutlined,
  ExperimentOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import {
  NavbarContainer,
  NameContainer,
  ProfileButton,
  Avatar,
} from './elements';

const { Item, ItemGroup } = Menu;
const { Text } = Typography;

const NavBar = () => {
  const { title } = useLayout();
  const { user, logout } = useUser();
  const { pathname } = useLocation();

  const handleLogout = async () =>
    Modal.confirm({
      title: '¿Estás seguro que quieres salir?',
      icon: <ExclamationCircleOutlined />,
      content:
        'Al salir de la aplicación, se perderá tu score y tendrás que volver a llenar los datos si regresas',
      onOk: () => logout(),
    });

  return (
    <>
      <NavbarContainer>
        <PageHeader
          backIcon={false}
          style={{
            marginRight: 'auto',
            padding: '0px 20px',
          }}
          title={title}
        />
        <Dropdown
          trigger={['click']}
          overlay={
            <Menu mode="vertical">
              <ItemGroup title="Session">
                <Item onClick={handleLogout} icon={<LogoutOutlined />}>
                  Logout
                </Item>
              </ItemGroup>
            </Menu>
          }
        >
          <ProfileButton type="text">
            <Avatar size={35}>{user.name?.[0]}</Avatar>
            <NameContainer>
              <Text style={{ fontSize: 12 }} type="secondary">
                Bienvenido
              </Text>
              <Text style={{ marginTop: -5 }} strong>
                {user.name}
              </Text>
            </NameContainer>
            <DownOutlined />
          </ProfileButton>
        </Dropdown>
      </NavbarContainer>
      <Menu
        style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 100 }}
        mode="horizontal"
        selectedKeys={[pathname]}
      >
        <Item key="/" icon={<ExperimentOutlined />}>
          <Link to="/">Score</Link>
        </Item>
        <Item key="/questionnaire" icon={<ReadOutlined />}>
          <Link to="/questionnaire">Cuestionario</Link>
        </Item>
      </Menu>
    </>
  );
};

export default NavBar;
