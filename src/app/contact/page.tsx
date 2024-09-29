import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div>
          <p> Developer: <span> Najmul Islam Naeem</span>  </p> 
            <p> Email: <Link href={"mailto:csenajmulislamnaeem@gmail.com" }>csenajmulislamnaeem@gmail.com</Link> </p>
            <p> Phone: <Link href={"tel:+88 018 672 10 892"}>018 672 10 892</Link> </p>
           <p> Github: <Link href={"https://github.com/naeemcse"}> github/naeemcse </Link>   </p>
            <p> Portfolio: <Link href={"https://naeemjs.vercel.app/"}> https://naeemjs.vercel.app/ </Link>  </p>
        </div>
    );
};

export default Page;