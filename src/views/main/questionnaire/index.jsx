import {
  Typography,
  Form,
  InputNumber,
  Radio,
  Switch,
  Checkbox,
  Button,
  Select,
  message,
} from 'antd';
import { useUser } from '@providers/user';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import Box from '@components/box';

const { Text, Title } = Typography;
const { Item } = Form;

const Questionnaire = () => {
  const { setForm, form } = useUser();

  const onFinish = (values) => {
    setForm(values);
    message.success('Se ha actualizado tu score');
  };

  return (
    <Box p={20}>
      <Title level={4}>Conoce tu score</Title>
      <Text>
        Utiliza este formulario para que podamos aproximar una puntuación de
        riesgo COVID basado en tus respuestas
      </Text>
      <Box mt={20}>
        <Form initialValues={form} layout="vertical" onFinish={onFinish}>
          <Item label="Edad en años" name="age">
            <InputNumber style={{ width: '100%' }} min={1} max={100} />
          </Item>
          <Item label="Sexo" name="sex">
            <Radio.Group
              options={[
                {
                  value: 'male',
                  label: 'Masculino',
                },
                {
                  value: 'female',
                  label: 'Femenino',
                },
              ]}
              optionType="button"
            />
          </Item>
          <Item
            name="countries"
            label="¿Qué países o ciudades has visitado en los últimos 14 días?"
          >
            <Select
              mode="tags"
              style={{ width: '100%' }}
              placeholder="Ciudades"
            />
          </Item>
          <Item
            label="¿Has tenido contacto con alguna persona confirmada de COVID19 durante los últimos 14 días?"
            name="hadContact"
            valuePropName="checked"
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Item>
          <Item
            name="symptoms"
            label="Selecciona aquellos síntomas que hayas presentado durante los últimos 14 días"
          >
            <Checkbox.Group>
              <Checkbox value="temperature">Temperatura mayor a 38º C</Checkbox>
              <br />
              <Checkbox value="musclePain">Dolor muscular</Checkbox>
              <br />
              <Checkbox value="jointPain">Dolor articular</Checkbox>
              <br />
              <Checkbox value="cough">Tos y/o estornudos fuertes</Checkbox>
              <br />
              <Checkbox value="headache">Dolor de cabeza</Checkbox>
              <br />
              <Checkbox value="respiratoryProblems">
                Dificultades respiratorias
              </Checkbox>
              <br />
              <Checkbox value="senseLoose">
                Pérdida del gusto y del olfato
              </Checkbox>
            </Checkbox.Group>
          </Item>
          <Item
            label="¿Padeces de hipertensión?"
            name="hypertension"
            valuePropName="checked"
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Item>
          <Item
            label="¿Padeces de diabetes?"
            name="diabetes"
            valuePropName="checked"
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Item>
          <Item
            label="¿Padeces de obesidad?"
            name="obesity"
            valuePropName="checked"
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Item>
          <Item
            label="¿Alguna vez te ha dado pulmonía?"
            name="pulmony"
            valuePropName="checked"
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Item>
          <Item label="¿Fumas?" name="tabaquism" valuePropName="checked">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Item>
          <Item label="¿Padeces de asma?" name="asma" valuePropName="checked">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Item>
          <Item
            label="¿Padeces de insuficiencia renal crónica?"
            name="renalInsufficiency"
            valuePropName="checked"
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Item>
          <Item style={{ marginTop: 20 }}>
            <Button size="large" block type="primary" htmlType="submit">
              Guardar
            </Button>
          </Item>
        </Form>
      </Box>
    </Box>
  );
};

export default Questionnaire;
