import styled from "styled-components";
import { FlagIcon, FlagIconCode } from "react-flag-kit";

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
  padding: 0 10px;
  font-size: 22px;
  margin: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  > *:first-child {
    margin-right: 10px;
  }
`;

const Formation = styled.p`
  margin: 0;
  font-size: 12px;
  position: absolute;
  right: 0px;
  background-color: #fff;
  padding: 0 5px;
  z-index: 10;
`;

export const BigTeamTitle = ({
  shirtMainColor,
  shirtNumberColor,
  shirtRimColor,
  titleColor,
  title,
  formation,
  flagCode,
}: {
  shirtMainColor: string;
  shirtNumberColor: string;
  shirtRimColor: string;
  titleColor: string;
  title: string;
  formation: string | undefined;
  flagCode: FlagIconCode;
}) => {
  return (
    <Container
      {...{ shirtMainColor }}
      {...{ shirtNumberColor }}
      {...{ shirtRimColor }}
      {...{ titleColor }}
    >
      <Title>
        <FlagIcon code={flagCode} size={36} />
        <div>{title}</div>
      </Title>
      <Formation>{formation}</Formation>
    </Container>
  );
};
