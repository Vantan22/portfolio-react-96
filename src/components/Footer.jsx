import styled from "styled-components";
import { Button } from "react95";
import windowLogo from "@assets/icons/window.svg";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: #c0c0c0;
  border-top: 2px solid #ffffff;
  display: flex;
  align-items: center;
  padding: 0 4px;
  box-shadow: inset 0 1px #dfdfdf, 1px 0 #000;
`;

const StartBtn = styled(Button)`
  font-weight: bold;
  font-size: 12px;
  height: 32px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  gap: 4px;

  img {
    width: 20px;
    height: 20px;
  }
`;

const TimeContainer = styled.div`
  margin-left: auto;
  padding: 0 16px;
  height: 32px;
  display: flex;
  align-items: center;
  border: 2px solid;
  border-color: #868a8e #c3c7cb #c3c7cb #868a8e;
  background: #c0c0c0;
  font-size: 12px;
`;

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <FooterContainer>
      <StartBtn>
        <img src={windowLogo} alt="Windows Logo" />
        Start
      </StartBtn>
      <TimeContainer>{time}</TimeContainer>
    </FooterContainer>
  );
};

export default Footer; 
