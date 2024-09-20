This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


First, clone the repository:

```bash
git clone https://github.com/naeemcse/csharp-bangla-tutorial.git
````
Then, install the dependencies:

```bash
npm install
```

run the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## বিস্তারিত বর্ণনা
pages নামক ফোল্ডারে পেজ গুলো থাকবে। প্রতিটা পেজ এর নাম হবে একই নামের ফাইল নামে। যেমন, about.md বা about.mdx  নামে ফাইল থাকলে এই পেজের লিংক হবে http://localhost:3000/docs/about
আবার ফোল্ডার তৈরি করে রাখলে সেটা একটা path ও তৈরী করবে । যেমনঃ about/index.md বা about/index.mdx নামে ফাইল থাকলে এই পেজের লিংক হবে http://localhost:3000/docs/about 
এবং এই পেজের কন্টেন্ট গুলো একটা সাইডবারে দেখানো হবে। এই সাইডবারে পেজ গুলোর লিংক দেখানো হবে।
এবং পেজ গুলোর মধ্যে লিংক দেওয়া থাকবে।
এই ফোল্ডারে একাধিক md ফাইল থাকলে সেগুলো সাইডবারে দেখানো হবে ও পেজ গুলোর মধ্যে লিংক দেওয়া হবে ও নতুন path তৈরি করা হবে।

## অন্যান্য   বিস্তারিত বর্ণনা
যেকোন পেইজ বা পাথ বা কম্পনেন্ট এ নিম্নের মত কোড ব্যবহার করা যাবে। এটা একটা সাধারণ কম্পনেন্ট যা একটা মার্কডাউন স্ট্রিং কে প্রিভিউ করে।
```jsx
import  MdPreview from  "@/components/shared/MdPreview";

export default function MarkdownPage( ) {
    const source =' # Hello, *world*!';
    return (
        <div>
            <h1>Markdown Preview</h1>
            <MdPreview source={source} />
        </div>
    );
}

```