import { Progress, Typography } from 'antd';
import Box from '@components/box';
import { useUser } from '@providers/user';

const { Text, Title } = Typography;

const Score = () => {
  const { score } = useUser();
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        mt={40}
        textAlign="center"
        justifyContent="center"
      >
        <Title>Tu puntuación</Title>
        <Progress
          type="circle"
          width={250}
          style={{ padding: 20 }}
          strokeColor={{
            '70%': '#ff0000',
            '15%': '#87d068',
            '45%': '#87d068',
          }}
          percent={score}
          status={score === 100 ? 'exception' : undefined}
          format={(percent) => percent}
        />
        <Box px={20}>
          {score < 20 && (
            <>
              <Title level={5}>Excelente</Title>
              <Text>
                Tu salud y condiciones son excelentes. Puedes salir de casa en
                caso de que los semáforos en tu estado estén en amarillo
              </Text>
            </>
          )}
          {score > 20 && score < 60 && (
            <>
              <Title level={5}>Cuidado</Title>
              <Text>
                Tus condiciones no son precisamente las mejores. Evita arriesgar
                a tu familia y seres queridos, y sólo sal en situaciones de suma
                necesidad
              </Text>
            </>
          )}
          {score > 60 && (
            <>
              <Title level={5}>NO SALGAS DE CASA</Title>
              <Text>
                En tus condiciones, no deberías salir de casa bajo ningún
                motivo, eres de la población de alto riesgo y cualquier
                exposición puede llegar a tener efectos severos
              </Text>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Score;
