"use client"
import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
type Props = {
    source: string;
};

export default function Demo({source}:any) {

    return (
        // <MarkdownPreview source={source} style={{ padding: 16 }} />
    <MarkdownPreview
        source={source}
        wrapperElement={{
              "data-color-mode": "light"
        }}
        style={{ padding: 16,fontFamily:'SolaimanLipi'}}
        rehypeRewrite={(node:any, index, parent:any) => {
            if (node.tagName === "a" && parent && /^h(1|2|3|4|5|6)/.test(parent.tagName)) {
                parent.children = parent.children.slice(1)
            }
        }}
    />
    )
}