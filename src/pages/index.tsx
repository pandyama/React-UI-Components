import * as React from "react";
import type { PageProps } from "gatsby";
import Button from "../components/ui/button";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div>
        <Button variant="Primary">Primary</Button>
        <Button variant="Primary" danger="Danger">
          Danger
        </Button>
      </div>
      <div>
        <Button variant="Outline">Outline</Button>
        <Button variant="Outline" danger="Danger">
          Outline Danger
        </Button>
      </div>
    </main>
  );
};

export default IndexPage;

export function Head() {
  return <title>UI Components</title>;
}
