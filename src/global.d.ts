// necessary to make scss module work. See https://github.com/gatsbyjs/gatsby/issues/8144#issuecomment-438206866
declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

// Add this file with the ^above content & import style file like below
// import * as styles from "./index.module.scss";
// Command to run gatsby - npm run develop
