import fs from 'fs';
import path from 'path';

export function getMarkdownContent(fileName) {
    const markdownDirectory = path.join(process.cwd(), 'posts'); // Define the path to markdown files
    const fullPath = path.join(markdownDirectory, `${fileName}.md`);

    // Read the markdown file as a string
    //const fileContents = fs.readFileSync("@/posts/", 'utf8');

    return fileContents; // Return raw markdown content
}
