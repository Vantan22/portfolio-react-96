import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Window, Button } from "react95";
import original from "react95/dist/themes/original";
import { Outlet } from "react-router-dom";
import GlobalStyles from "@styles/layout";
import { useState } from "react";
import windowsLogo from "../assets/icons/window.svg";
import { Toolbar, MenuList, MenuListItem, Separator } from "react95";

const Wrapper = styled.div`
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Screen = styled.div`
  width: 95%;
  height: 92%;
  border: 30px solid #918878;
  background-color: #008282;
`;

const MainWindow = styled(Window)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [open, setOpen] = useState(false);
  // Update time every minute
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Wrapper>
          <Screen>
            <MainWindow>
              <Outlet />
              <Toolbar style={{ justifyContent: "space-between" }}>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <Button
                    onClick={() => setOpen(!open)}
                    active={open}
                    style={{ fontWeight: "bold" }}
                  >
                    <img
                      src={windowsLogo}
                      alt="react95 logo"
                      style={{ height: "20px", marginRight: 4 }}
                    />
                    Start
                  </Button>
                  {open && (
                    <MenuList
                      style={{
                        position: "absolute",
                        left: "-10%",
                        bottom: "110%",
                      }}
                      onClick={() => setOpen(false)}
                    >
                      <MenuListItem>
                        <span role="img" aria-label="👨‍💻">
                          👨‍💻
                        </span>
                        Profile
                      </MenuListItem>
                      <MenuListItem>
                        <span role="img" aria-label="📁">
                          📁
                        </span>
                        My account
                      </MenuListItem>
                      <Separator />
                      <MenuListItem>
                        <span role="img" aria-label="🔙">
                          🔙
                        </span>
                        Logout
                      </MenuListItem>
                    </MenuList>
                  )}
                </div>

                <Button
                  active={true}
                  variant="thin"
                  style={{ width: "120px", fontWeight: "bold" }}
                >
                  {time}
                </Button>
              </Toolbar>
            </MainWindow>
          </Screen>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
