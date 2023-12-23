import { useState } from "react";
import "./App.css";
import { marked } from "marked";

let templateMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;

function App() {
  const [text, setText] = useState(templateMarkdown);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App">
      <h1 className="text-center">Markdown Previewer</h1>
      <container>
        <div class="row">
          <div class="col-4">
            <textarea
              className="form-control bg-primary text-white"
              rows="25"
              id="editor"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>

          <div class="col-8 bg-warning text-dark">
            <div
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(text) }}
            ></div>
          </div>
        </div>
      </container>
    </div>
  );
}

export default App;
