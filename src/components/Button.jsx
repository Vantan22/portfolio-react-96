import { useState } from "react";
import styled from "styled-components";
import {
  Button,
  MenuList,
  MenuListItem,
  ScrollView,
  Separator,
  Toolbar,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.material};

  #default-buttons button {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  #cutout {
    background: ${({ theme }) => theme.canvas};
    padding: 1rem;
    width: 300px;
  }
`;

const ButtonDemo = () => {
  const [shareMenuOpen, setShareMenuOpen] = useState(false);

  const toggleShareMenu = () => setShareMenuOpen(!shareMenuOpen);
  const closeShareMenu = () => setShareMenuOpen(false);

  return (
    <Wrapper>
      <section>
        <h2>Default Buttons</h2>
        <div id="default-buttons">
          <Button>Default</Button>
          <Button primary>Primary</Button>
          <Button disabled>Disabled</Button>
          <Button active>Active</Button>
          <Button square>
            <span role="img" aria-label="recycle">
              ♻︎
            </span>
          </Button>
          <Button fullWidth>Full width</Button>
          <Button size="sm">Size small</Button>
          <Button size="lg">Size large</Button>
        </div>
      </section>

      <section>
        <h2>Raised Buttons</h2>
        <div id="default-buttons">
          <Button variant="raised">Default</Button>
          <Button variant="raised" primary>
            Primary
          </Button>
          <Button variant="raised" disabled>
            Disabled
          </Button>
          <Button variant="raised" active>
            Active
          </Button>
          <Button variant="raised" square>
            <span role="img" aria-label="recycle">
              ♻︎
            </span>
          </Button>
          <Button variant="raised" fullWidth>
            Full width
          </Button>
          <Button variant="raised" size="sm">
            Size small
          </Button>
          <Button variant="raised" size="lg">
            Size large
          </Button>
        </div>
      </section>

      <section>
        <h2>Flat Buttons</h2>
        <Window>
          <WindowContent>
            <ScrollView id="cutout">
              <p style={{ lineHeight: 1.3 }}>
                When you want to use Buttons on a light background (like
                scrollable content), just use the flat variant:
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <Toolbar>
                  <Button
                    variant="flat"
                    primary
                    style={{ marginRight: "0.5rem" }}
                  >
                    Primary
                  </Button>
                  <Button variant="flat" style={{ marginRight: "0.5rem" }}>
                    Regular
                  </Button>
                  <Button variant="flat" disabled>
                    Disabled
                  </Button>
                </Toolbar>
              </div>
            </ScrollView>
          </WindowContent>
        </Window>
      </section>

      <section>
        <h2>Thin Buttons</h2>
        <Window style={{ maxWidth: "250px" }}>
          <WindowHeader>
            <span role="img" aria-label="Kiwi">
              🥝
            </span>
            Kiwi.app
          </WindowHeader>
          <Toolbar noPadding>
            <Button variant="thin" disabled>
              Upload
            </Button>
            <Button variant="thin" disabled>
              Save
            </Button>
            <div
              style={{
                position: "relative",
                display: "inline-block",
                alignSelf: "left",
              }}
            >
              <Button
                variant="thin"
                onClick={toggleShareMenu}
                size="sm"
                active={shareMenuOpen}
              >
                Share
              </Button>
              {shareMenuOpen && (
                <MenuList
                  style={{
                    position: "absolute",
                    right: "0",
                    top: "100%",
                    zIndex: "9999",
                  }}
                  onClick={closeShareMenu}
                >
                  <MenuListItem size="sm">Copy link</MenuListItem>
                  <Separator />
                  <MenuListItem size="sm">Facebook</MenuListItem>
                  <MenuListItem size="sm">Twitter</MenuListItem>
                  <MenuListItem size="sm">Instagram</MenuListItem>
                  <Separator />
                  <MenuListItem size="sm" disabled>
                    MySpace
                  </MenuListItem>
                </MenuList>
              )}
            </div>
          </Toolbar>
          <WindowContent style={{ padding: "0.25rem" }}>
            <ScrollView>
              <img
                style={{ width: "100%", height: "auto", display: "block" }}
                src="https://image.freepik.com/foto-gratuito/la-frutta-fresca-del-kiwi-tagliata-a-meta-con-la-decorazione-completa-del-pezzo-e-bella-sulla-tavola-di-legno_47436-1.jpg"
                alt="kiwi"
              />
            </ScrollView>
          </WindowContent>
        </Window>
      </section>
    </Wrapper>
  );
};

export default ButtonDemo;
