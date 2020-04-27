export default function convertStringToJSX(str) {
  const HtmlToReactParser = require("html-to-react").Parser;
  const htmlToReactParser = new HtmlToReactParser();
  let reactElement = htmlToReactParser.parse(str);

  return reactElement;
}
