# Mermaid Viewer

Preview [Mermaid](https://mermaid-js.github.io/mermaid/) diagrams and Markdown files directly inside Azure DevOps Repos and Pull Requests.

This FlintsLabs fork is based on the original project by [DanieleCas](https://github.com/daniecas/azure-devops-mermaid-viewer). Credit is intentionally preserved here for the original implementation and idea.

This extension works with `.mmd` and `.md` files.

## Usage

Install this extension to your Azure DevOps Organization.

Go to Repos:
- in Files: if you select a Mermaid (`.mmd` or `.md`) file you can find a new Preview tab
  
  ![Code: Preview Diagram](doc/code_preview_diagram.png)

- in Pull Requests: if you select a Mermaid (`.mmd` or `.md`) file you can find a Raw Content/Preview toggle button
  
  ![Pull Request: Preview Diagram](doc/pr_preview_diagram.png)

## Supported Markdown

For Markdown preview, the extension supports common repository documentation structures including:
- headings
- paragraphs
- lists
- links
- inline code
- fenced code blocks
- blockquotes
- tables
- Mermaid blocks using ```` ```mermaid ```` or `:::mermaid`

An example is available in `src/test/markdown-test.md`.

## How It Works

The renderer is registered as an Azure DevOps content renderer for `.mmd` and `.md` files:
- `.mmd` content is rendered as Mermaid directly
- `.md` content is parsed into HTML
- Mermaid blocks inside Markdown are detected and rendered as diagrams
- the extension resizes itself to fit the content and follows the active Azure DevOps theme

The extension is based on Mermaid 11.12.2, so Mermaid rendering remains stable and under the control of this extension.

## Feedback

Please let me know how the extension can be improved! Contributions are also welcome!

- Create an issue in [GitHub](https://github.com/FlintsLabs/azure-devops-mermaid-viewer/issues)


<br/><br/>
<a href="https://www.flaticon.com/free-icons/mermaid" title="mermaid icons">Mermaid icons created by Freepik - Flaticon</a>
