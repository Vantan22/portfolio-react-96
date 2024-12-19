import styled from "styled-components";

export const DesktopContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #008080;
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const IconsContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 70px);
  gap: 20px;
`;

export const DesktopIcon = styled.div`
  width: 70px;
  text-align: center;
  cursor: pointer;

  img {
    width: 32px;
    height: 32px;
    margin-bottom: 5px;
  }

  span {
    color: white;
    font-size: 11px;
    text-shadow: 1px 1px 1px black;
    word-break: break-word;
  }

  &:hover {
    span {
      background: #000080;
    }
  }
`;

export const Taskbar = styled.div`
  height: 35px;
  background: #c0c0c0;
  border-top: 2px solid #ffffff;
  display: flex;
  align-items: center;
  padding: 2px;
`;

export const StartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  height: 28px;
  font-weight: bold;
  font-size: 12px;
  img {
    width: 20px;
    height: 20px;
  }
`; 
