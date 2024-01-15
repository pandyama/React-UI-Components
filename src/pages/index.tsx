import * as React from "react";
import type { PageProps } from "gatsby";
import Button from "../components/ui/button";

const mainStyles = {
  display: "flex",
  justifyContent: "center",
  padding: 50,
};

const tableStyles = {
  fontFamily: "Arial",
  width: 100,
};

const tableRowStyles = {
  width: `250px`,
};

const tableDataStyles = {
  // border: `1px solid #000000`,
  textalign: `center`,
  padding: 20,
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={mainStyles}>
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
    </main>
  );
};

export default IndexPage;

export function Head() {
  return <title>UI Components</title>;
}
