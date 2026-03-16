import * as SDK from "azure-devops-extension-sdk";
import Mermaid from "mermaid";
import MermaidViewer from './viewer'
import test from './test/test'
// CSS for markdown styling is now included via <link> in index.html and copied during build

console.log("loading...");

const isTest = false;
const isProduction = process.env.NODE_ENV == 'production'

function isDarkColor(colorValue: string): boolean | null {
    const value = colorValue.trim();
    if (!value) {
        return null;
    }

    const hexMatch = value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (hexMatch) {
        let hex = hexMatch[1];
        if (hex.length === 3) {
            hex = hex.split('').map((char) => char + char).join('');
        }

        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        const luminance = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
        return luminance < 140;
    }

    const rgbMatch = value.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (rgbMatch) {
        const r = parseInt(rgbMatch[1], 10);
        const g = parseInt(rgbMatch[2], 10);
        const b = parseInt(rgbMatch[3], 10);
        const luminance = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
        return luminance < 140;
    }

    return null;
}

function syncMarkdownThemeMode() {
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);
    const themeBackground =
        computedStyle.getPropertyValue('--background-color') ||
        computedStyle.getPropertyValue('--page-background-color');
    const darkFromBackground = isDarkColor(themeBackground);

    let mode = darkFromBackground ? 'dark' : 'light';

    if (darkFromBackground === null) {
        const pageTheme = SDK.getPageContext()?.globalization?.theme ?? '';
        mode = /dark|night|contrast/i.test(pageTheme) ? 'dark' : 'light';
    }

    root.setAttribute('data-theme-mode', mode);
}

if (!isTest)
{

    await (async function() : Promise<void> {

        SDK.init({ loaded: false, applyTheme: true })
        Mermaid.initialize({ securityLevel: 'loose', startOnLoad: false });

        await SDK.ready();
        syncMarkdownThemeMode();
        window.addEventListener('themeApplied', syncMarkdownThemeMode);

        console.log("start");

        SDK.register("mermaid_viewer", function (context) {
            console.log(context);

            const mermaidViewer = new MermaidViewer();
            return mermaidViewer;
        });

        SDK.notifyLoadSucceeded();

    }());
}
else
    test.render();
