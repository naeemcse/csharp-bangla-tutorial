import React from "react";
const page = () => {
    const topics = [
        {
            title: "ASP.NET Core",
            link: "/tutorial/asp-dotnet-core",
            image: "/aspnetcore.png",
            bg: "bg-cyan-400"
        },
        {
            title: "Blazor",
            link: "/tutorial/blazor",
            image: "/blazor.png",
            bg: "bg-purple-600"
        },
        {
            title: "Entity Framework Core",
            link: "/tutorial/entity-framework-core",
            image: "/efcore.png",
            bg: "bg-green-500"
        },
        {
            title: "SignalR",
            link: "/tutorial/signalr",
            image: "/signalr.png",
            bg: "bg-blue-500"
        },
        {
            title: "Xamarin",
            link: "/tutorial/xamarin",
            image: "/xamarin.png",
            bg: "bg-indigo-600"
        },
        {
            title: "MAUI",
            link: "/tutorial/maui",
            image: "/maui.png",
            bg: "bg-teal-500"
        },
        {
            title: "C#",
            link: "/tutorial/csharp",
            image: "/csharp.png",
            bg: "bg-blue-700"
        },
        {
            title: "Visual Studio",
            link: "/tutorial/visual-studio",
            image: "/visualstudio.png",
            bg: "bg-purple-700"
        },
        {
            title: "Azure",
            link: "/tutorial/azure",
            image: "/azure.png",
            bg: "bg-blue-600"
        },
        {
            title: "NuGet",
            link: "/tutorial/nuget",
            image: "/nuget.png",
            bg: "bg-blue-400"
        },
        {
            title: "Docker",
            link: "/tutorial/docker",
            image: "/docker.png",
            bg: "bg-blue-500"
        },
        {
            title: "GitHub",
            link: "/tutorial/github",
            image: "/github.png",
            bg: "bg-gray-800"
        },
        {
            title: "LINQ",
            link: "/tutorial/linq",
            image: "/linq.png",
            bg: "bg-green-400"
        }
    ];


    return (
    <>
            <div>
           <h4>
               সি# হচ্ছে এমন একটি মর্ডান ও উচ্চস্তরের ভাষা যা দ্বারা ওয়েব সাইট, মোবাইল এবং ডেস্কটপ সহ বিভিন্ন ধরনের অ্যাপ্লিকেশন তৈরী করা যায় ।
           </h4>

    <b className={"mt-2"}> নিচে কয়েকটি ফ্রেম ওয়ার্ক ও টপিকস ভিত্তিক আলোচনা বাংলায় লেখা আছে । আশা করি সকল বাংলা ভাষা-ভাষীদের অনেক উপকারে আসবে ।  </b>
<div className="grid">
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <h3>ফ্রেমওয়ার্ক</h3>
        <ul className="list-none flex flex-wrap">
            {
                topics.map((topic,index)=>{
                    return(
                        <li key={index} className={`m-5 ${topic.bg} w-fit p-2 rounded duration-150 hover:scale-105 hover:cursor-pointer`}>{topic.title}</li>
                    )
                })
            }
        </ul>
    </div>

</div>

        </div>

    
  
    </>
  );
};

export default page;
