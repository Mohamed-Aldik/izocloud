import styled from 'styled-components'


export const DragStyle = styled.div`
.relati{
position: relative;
height: 250px;
}
width: 100%;
 #main {
  display: flex;
  justify-content: center;
  height: 250px;
  margin:0;
  padding: 0;
  border: 4px dashed;
}
#main p {

  position:absolute;
  top: 50%;
  transform:translateY(-50%) ;
  text-align: center;
  font-family: Arial;
}
#main input {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  display: flex;
  justify-content: center;
  width: 100%;
  opacity: 0;
}
#main button {
  margin: 0;
  color: #fff;
  background: #16a085;
  border: none;
  height: 35px;
  border-radius: 4px;
  border-bottom: 4px solid #117a60;
  transition: all 0.2s ease;
  outline: none;
}
#main button:hover {
  background: #149174;
  color: #0c5645;
}
#main button:active {
  border: 0;
}

.image-order {
  position: relative;
  align-items: center;
  justify-content: center;
}
.delete-icon {
  cursor: pointer;
}

.wrapper {
  align-items: center;
  justify-content: center;
}

div.gallery {
  border: 1px solid #ccc;
  float: left;
  margin: 24px;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  max-width: 250px;
  height: 140px;
}

div.desc {
  padding: 15px;
  text-align: center;
}

.error-msg {
  color: salmon;
}

`;
