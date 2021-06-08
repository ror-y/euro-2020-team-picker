import styled from "styled-components";

interface Props {
  shirtMainColor: string;
  shirtNumberColor: string;
  shirtRimColor: string;
  titleColor: string;
}

const Container = styled.div<Props>`
  color: ${({ titleColor }) => titleColor};
  text-transform: uppercase;
  font-weight: bold;
`;

const Title = styled.h2`
  background-color: #fff;
  position: absolute;
  padding: 0 20px;
  font-size: 40px;
  margin: 0;
  z-index: 10;
`;

const Formation = styled.p`
  margin: 0;
  font-size: 20px;
  position: absolute;
  right: 0;
  background-color: #fff;
  padding: 0 10px;
  z-index: 10;
`;

export const BigTeamTitle = ({
  shirtMainColor,
  shirtNumberColor,
  shirtRimColor,
  titleColor,
  title,
  formation,
}: {
  shirtMainColor: string;
  shirtNumberColor: string;
  shirtRimColor: string;
  titleColor: string;
  title: string;
  formation: string;
}) => {
  return (
    <Container
      {...{ shirtMainColor }}
      {...{ shirtNumberColor }}
      {...{ shirtRimColor }}
      {...{ titleColor }}
    >
      <Title>{title}</Title>
      <Formation>{formation}</Formation>
    </Container>
  );
};
