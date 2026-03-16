# Azure DevOps Extension: Mermaid Viewer

## Overview

Mermaid Viewer is an Azure DevOps extension for previewing Mermaid diagrams and Markdown files directly in Azure Repos and Pull Requests.

This fork is maintained by FlintsLabs and is based on the original project by [DanieleCas](https://github.com/daniecas/azure-devops-mermaid-viewer). The original repository is credited here with appreciation for the initial implementation and extension structure.


## Usage

Install this extension to your Azure DevOps Organization.

Go to Repos:
- in Files: if you select a Mermaid (`.mmd` or `.md`) file you can find a new Preview tab
  
  ![Preview Diagram](doc/code_preview_diagram.png)

- in Pull Requests: if you select a Mermaid (`.mmd` or `.md`) file you can find a Raw Content/Preview toggle button

  ![Preview Diagram](doc/pr_preview_diagram.png)

## Supported Markdown

For `.md` files, the extension currently supports common documentation patterns such as:
- headings
- paragraphs
- ordered and unordered lists
- links
- inline code and fenced code blocks
- blockquotes
- tables
- Mermaid diagrams in fenced blocks such as ```` ```mermaid ```` or `:::mermaid`

You can see an example in [src/test/markdown-test.md](/Users/kanokpichasonsmacbookair/Documents/GitHub/azure-devops-mermaid-viewer/src/test/markdown-test.md).

## How It Works

At a high level, the extension works as an Azure DevOps content renderer for `.mmd` and `.md` files:
- `.mmd` files are treated as Mermaid source and rendered directly as SVG
- `.md` files are parsed as Markdown and rendered to HTML
- Mermaid code blocks inside Markdown are detected and converted to Mermaid diagrams
- the extension uses the Azure DevOps SDK to resize the preview and follow the active host theme

## Run Locally

To Run Locally:
- install npm packages: `npm install`
- install tfx command line: `npm install -g tfx-cli`

<br/>
To Debug Code:

- Create a new package for development purpose:
    `npx tfx-cli extension create --rev-version --overrides-file configs/dev.json`

- Deploy it on Azure DevOps Extension Marketplace: 
  https://marketplace.visualstudio.com/manage/publishers/danielecas

- And than run local code:
    `npx webpack-dev-server --mode development`

- Access to firefox to debug you extension

## Production Deployment

To build a new dist package:
    `npm run build`

To create a new package for production deployment:
    `npx tfx-cli extension create --rev-version --env mode=production --overrides-file configs/release.json`

## For contributors

Contributions are welcome. Feel free to create a Pull Request or open an issue in this fork.



<br/><br/>
<a href="https://www.flaticon.com/free-icons/mermaid" title="mermaid icons">Mermaid icons created by Freepik - Flaticon</a>
