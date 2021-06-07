import styled from "styled-components";

interface Props {
  shirtMainColor: string;
  shirtNumberColor: string;
  shirtRimColor: string;
  titleColor: string;
}

const Container = styled.div<Props>`
  background-color: #fff;
  color: ${({ titleColor }) => titleColor};
  font-size: 60px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const BigTeamTitle = ({
  shirtMainColor,
  shirtNumberColor,
  shirtRimColor,
  titleColor,
  children,
}: {
  shirtMainColor: string;
  shirtNumberColor: string;
  shirtRimColor: string;
  titleColor: string;
  children: any;
}) => {
  return (
    <Container
      {...{ shirtMainColor }}
      {...{ shirtNumberColor }}
      {...{ shirtRimColor }}
      {...{ titleColor }}
    >
      {children}
    </Container>
  );
};
