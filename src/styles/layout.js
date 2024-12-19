import { createGlobalStyle } from "styled-components";
import { styleReset } from "react95";

// Import cursors
import arrowCursor from "@assets/cursor/arrow.cur";
import helpCursor from "@assets/cursor/help_win95.cur";
import workingCursor from "@assets/cursor/busy.cur";
import textCursor from "@assets/cursor/ibeam.cur";
import unavailableCursor from "@assets/cursor/no.cur";
import preciseCursor from "@assets/cursor/cross.cur";
import handCursor from "@assets/cursor/link.cur";
import resizeNSCursor from "@assets/cursor/size-ns.cur";
import resizeEWCursor from "@assets/cursor/size-we.cur";
import resizeNWSECursor from "@assets/cursor/size-nwse.cur";
import resizeNESWCursor from "@assets/cursor/size-nesw.cur";
import moveCursor from "@assets/cursor/move.cur";
import alternateCursor from "@assets/cursor/pen.cur";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  body {
    background: linear-gradient(to bottom, #D3CCBA, #C9C3AD);
  }

  /* Default cursor */
  * {
    cursor: url(${arrowCursor}), auto;
  }

  /* Text selection cursor */
  input, textarea, [contenteditable="true"], p, span, h1, h2, h3, h4, h5, h6 {
    cursor: url(${textCursor}), text;
  }

  /* Link and clickable elements */
  a, button, [role="button"], .clickable {
    cursor: url(${handCursor}), pointer;
  }

  /* Disabled elements */
  button:disabled, [disabled], .disabled {
    cursor: url(${unavailableCursor}), not-allowed;
  }

  /* Help cursor */
  [title], [data-tooltip], .help {
    cursor: url(${helpCursor}), help;
  }

  /* Loading state */
  .loading, .processing {
    cursor: url(${workingCursor}), progress;
  }

  /* Precise selection */
  input[type="radio"], input[type="checkbox"], .precise {
    cursor: url(${preciseCursor}), default;
  }

  /* Resize cursors */
  .resize-ns, [data-resize="ns"] {
    cursor: url(${resizeNSCursor}), ns-resize;
  }
  
  .resize-ew, [data-resize="ew"] {
    cursor: url(${resizeEWCursor}), ew-resize;
  }
  
  .resize-nwse, [data-resize="nwse"] {
    cursor: url(${resizeNWSECursor}), nwse-resize;
  }
  
  .resize-nesw, [data-resize="nesw"] {
    cursor: url(${resizeNESWCursor}), nesw-resize;
  }

  /* Move cursor */
  .moveable, [data-moveable] {
    cursor: url(${moveCursor}), move;
  }

  /* Alternate cursor */
  .alternate, [data-alternate] {
    cursor: url(${alternateCursor}), crosshair;
  }
`;

export default GlobalStyles;
