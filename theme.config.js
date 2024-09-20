export default {
    logo: <span> সি# বাংলা টিউটোরিয়াল  </span>,
    project: {
        link: 'https://github.com/naeemcse/csharp-bangla-tutorial'
    },
    docsRepositoryBase: 'https://github.com/naeemcse/csharp-bangla-tutorial/tree/master',
    banner: {
        key: '2.0-release',
        text: (
            <a href="https://github.com/naeemcse" target="_blank">
                🎉 সি# বাংলা টিউটোরিয়াল ডেভোলাপার - নাজমুল ইসলাম নাঈম 🎉
            </a>
        ),},
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="সি# বাংলা টিউটোরিয়াল" />
            <meta name="og:title" content="সি# বাংলা টিউটোরিয়াল" />
            <title>সি# বাংলা টিউটোরিয়াল</title>
        </>
    ),
        toc: {
        title: "কনটেন্ট সূচি",
            backToTop: true,
        },
        sidebar: {
            defaultMenuCollapseLevel: 2,
        },
editLink:{
  text: 'এই পেজটি কন্ট্রিবিউশন করুন',
},
    footer: {
            text: (
                <span>
                copyright {new Date().getFullYear()} ©{" "}
                    <a
                        href='https://github.com/naeemcse'
                        target='_blank'>
                   Najmul Islam Naeem
                </a>
                .
            </span>
            ),
        },
        defaultShowCopyCode: true,

}