import * as React from "react";
import type { PageProps } from "gatsby";
import Button from "../components/ui/button";
import TextInput from "../components/ui/textInput";
import TextAreaInput from "../components/textAreaInput";

const mainStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 30,
};

const tableStyles = {
  fontFamily: "Arial",
  width: 100,
};

const tableRowStyles = {
  width: `250px`,
};

const tableDataStyles = {
  border: `1px solid #000000`,
  textalign: `center`,
  padding: 20,
};

const header = {
  fontFamily: `Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
  sans-serif`,
  fontWeight: 400,
  textTransform: `Uppercase`,
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      {/* https://github.com/cssinjs/jss/issues/1344 */}
      <div style={mainStyles as React.CSSProperties}>
        <h3 style={header as React.CSSProperties}>Button Component</h3>
        <table style={tableStyles}>
          <tr style={tableRowStyles}>
            <th></th>
            <th>Primary</th>
            <th>Outline</th>
          </tr>
          <tr style={tableRowStyles}>
            <td style={tableDataStyles}>Default</td>
            <td style={tableDataStyles}>
              <Button variant="Primary">Primary</Button>
            </td>
            <td style={tableDataStyles}>
              <Button variant="Outline">Outline</Button>
            </td>
          </tr>
          <tr style={tableRowStyles}>
            <td style={tableDataStyles}>Danger</td>
            <td style={tableDataStyles}>
              <Button variant="Primary" danger="Danger">
                Primary
              </Button>
            </td>

            <td style={tableDataStyles}>
              <Button variant="Outline" danger="Danger">
                Outline
              </Button>
            </td>
          </tr>
        </table>
      </div>
      <hr />
      <div style={mainStyles as React.CSSProperties}>
        <h3 style={header as React.CSSProperties}>Text Input Component</h3>
        <TextInput label="email" placeholder="Enter Email"></TextInput>
        <br />
        <TextInput label="password" placeholder="Enter Password"></TextInput>
      </div>
      <hr />
      <div style={mainStyles as React.CSSProperties}>
        <h3 style={header as React.CSSProperties}>Text Area Input Component</h3>
        <br />
        <TextAreaInput label="content" size="Large">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </TextAreaInput>
      </div>
    </>
  );
};

export default IndexPage;

export function Head() {
  return <title>UI Components</title>;
}
