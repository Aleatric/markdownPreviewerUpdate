import React from "react";
import { marked, Renderer } from "marked";

document.body.style = 'background: black;';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialMarkdown: `
# Heading

## Subheading

This is a [link](https://example.com).

Inline code: \`console.log('Hello, world!')\`

\`\`\`
// Code block
function greet(name) {
  return "Hello, " + name + "!";
}
\`\`\`

- List item 1
- List item 2

> This is a blockquote.

![Image](https://example.com/image.jpg)

**This text is bold.**

## Practical Examples

### Creating a Function

To create a function in JavaScript, you can use the following syntax:

\`\`\`javascript
function functionName(parameter1, parameter2) {
  // Function body
  // Do something with the parameters
  return result;
}
\`\`\`

### Styling Text

You can style text using various Markdown syntax:

- **Bold text**: Wrap the text with double asterisks (\*\*).
- *Italic text*: Wrap the text with single asterisks (\*).
- ~~Strikethrough text~~: Wrap the text with double tildes (\~\~).

### Creating a List

To create a list in Markdown, use hyphens (-) or asterisks (\*) followed by a space:

- List item 1
- List item 2

### Adding Links

To add a hyperlink, use the following syntax:

\[Link Text\](https://example.com)

Replace "Link Text" with the text you want to display and "https://example.com" with the actual URL.

### Inserting Images

To insert an image, use the following syntax:

\!\[Alt Text\](https://example.com/image.jpg)

Replace "Alt Text" with the alternative text for the image and "https://example.com/image.jpg" with the URL of the image.

These are just a few practical examples to demonstrate the usage of Markdown. You can explore more Markdown syntax and features to create richly formatted and informative content in your Markdown previewer.
`,
      markdown: "",
    };
  }

  componentDidMount() {
    this.resetMarkdown();
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  resetMarkdown() {
    this.setState({ markdown: this.state.initialMarkdown });
  }

  render() {
    const inputStyle = {
      width: "100%",
      height: "600px",
      padding: "1rem",
      color: "#A87D19",
      backgroundColor: "black",
      border: "none",
      borderStyle: "dotted",
      overflow: "auto",
    };

    const outputStyle = {
      width: "100%",
      height: "600px",
      padding: "1rem",
      backgroundColor: "black",
      borderStyle: "dotted",
      overflow: "auto",
    };

    const buttonStyle = {
      backgroundColor: "black",
      fontFamily: "'Courier Prime', monospace",
      color: "#A87D19",
      marginTop: "1rem",
    };

    const containerStyle = {
      backgroundColor: "black",
      fontFamily: "'Courier Prime', monospace",
      color: "#A87D19",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      alignItems: "flex-start",
      height: "50vh",
      padding: "1rem",
      boxSizing: "border-box",
    };

    const headerStyle = {
      textAlign: "center",
      marginTop: "0.5rem",
    };

    return (
       <div style={containerStyle}>
      <div style={{ width: "100%", textAlign: "center" }}>
        <div style={headerStyle}>
          <h1>Markdown Previewer</h1>
        </div>
        <button style={buttonStyle} onClick={() => this.resetMarkdown()}>
          Reset
        </button>
      </div>
      
      <div style={containerStyle}>
        <div style={{ width: "40%", paddingLeft: "3rem" }}>
          <div style={headerStyle}>
            <h1>Markdown Input</h1>
          </div>
          <textarea
            id="editor"
            className="input"
            style={inputStyle}
            value={this.state.markdown}
            onChange={(e) => {
              this.updateMarkdown(e.target.value);
            }}
          />
        </div>
  
        <div style={{ width: "40%", paddingRight:"6rem" }}>
          <div style={headerStyle}>
            <h1>Preview</h1>
          </div>
          <div
            id="preview"
            className="output"
            style={outputStyle}
            dangerouslySetInnerHTML={{
              __html: marked(this.state.markdown, { renderer: new Renderer() }),
            }}
          />
        </div>
      </div>
      </div>
    );
  }
}