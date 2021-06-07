import * as htmlToImage from "html-to-image";
import styled from "styled-components";

/**
 * Convert HTML element to image.
 */
const getImage = () => {
  var node = document.getElementById("capture") as HTMLElement;
  htmlToImage
    .toPng(node)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      document.body.appendChild(img);
    })
    .catch(function (error) {
      console.error("oops, something went wrong!", error);
    });
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-size: 28px;

  button {
    margin-top: 20px;
    font-size: 28px;
  }
`;

export const GenerateImg = () => {
  return (
    <Container>
      <span>Team Chosen! 🍻</span>
      <button onClick={getImage}>Generate Image</button>
    </Container>
  );
};
