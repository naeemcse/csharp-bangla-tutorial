# class and object

class হচ্ছে একটা কন্টেইনার এর মতো , যেখানে আপনি চাইলে অনেকগুলো variable , data, method ইত্যাদি পেকেট করে রেখে দিতে পারেন । যেমনঃ 

মনে করুন, আপনার কাছে একটা পানির বোতল আছে, সেটার ধারণ ক্ষমতা থাকতে পারে, সেটার রঙ থাকতে পারে বা বর্তমানে কতটুকু পানি আছে সেটাও থাকতে পারে। 

আপনি চাইলেই সেগুলো ভেরিয়েবলের মধ্যে ডিক্লিয়ার করে রেখে দিতে পারেন , কোন সমস্যা নেই । 

এখন যদি আপনাকে অনেকগুলো পানির বোতলের কথা বলা হয় , যেখানে ভিন্ন ভিন্ন সাইজ,ভিন্ন রঙ , ভিন্ন পরিমান , তখন কিন্তু অনেকগুলো ভেরিয়েবল ডিক্লিয়ার করাটা বেশ মুশকিল এবং সময় সাপেক্ষ । 

তখন আমরা এমন একটি class লিখবো যেখানে পানির  বোতলের সকল সাধারণ প্রপার্টি ডিক্লেয়ার করা থাকবে, পরে বার বার এগুলকে বিভিন্ন জায়গায় ব্যাবহার করবো। উদাহরন টি লক্ষ করুন বুঝতে পারবেন। 

ডিক্লেয়ারেশনঃ 

```csharp

class WaterBottle
{
    public double capacity=0;
    public string color;
    public double waterAmount = 0 ;

    public void addWater(int amount)
    {
        waterAmount += amount;
    }
    public void ReleaseWater(int amount)
    {
        waterAmount -= amount;
    }

}

```

> এখানে **public** ব্যবহার করেছে যাতে সব জায়গতেই এটা ব্যাবহার করা যায় , বিস্তারিত জানতে পারবেন পরের টিউটোরিয়ালে Access Modifier এ
> 

উপরের কোডটিকে ব্যাবহার করার জন্য আমরা main প্রোগ্রামে লিখবো, এটাকে বলা হয়ে object

## Object

অবজেক্ট হলো, ক্লাস ব্যবহার করার উপায় ।  object বা ইন্সটেন্টস তৈরি করে আমরা কোন ক্লাসের ভিতরের ভেরিয়েবল,প্রপার্টি, মেথড সহজেই ব্যবহার করতে পারি ।  

```csharp
 static void Main(string[] args)
 {
    
     WaterBottle bottle1 = new WaterBottle();
     bottle1.capacity = 100; 
     bottle1.addWater(100);
     bottle1.color = "green";
     Console.WriteLine(bottle1.color);
     Console.WriteLine(bottle1.waterAmount);

     // এইবার ২য় বোতল বিবেচনা করুন 
     WaterBottle bottle2 = new WaterBottle();
     bottle2.capacity = 100;
     bottle2.addWater(200);
     bottle2.color = "Blue";
     Console.WriteLine(bottle2.color);
     Console.WriteLine(bottle2.waterAmount);

     // ২য় বোতলের পানি কমিয়ে ফেললেও ১ম বোতোলের কোন পরিবর্তন হবে না   
     bottle2.ReleaseWater(50);
     Console.WriteLine("Current Wataer at bottle2: "+bottle2.waterAmount);

     // ১ম বোতলের পানি । 
     Console.WriteLine("Current Wataer at bottle1: "+bottle1.waterAmount);

 }
```

আমরা এখানে নিজের প্রয়োজনমতো ভেরিয়েবল তৈরি করতে পারি এবং পরিবর্তনও করতে পারি । তবে অন্য ভেরিয়েবলের কোন পরিবর্তন হয় না ।  এভাবেই  আমরা OOP ব্যাবহার করে কোড কে সহজ ও বার বার ব্যাবহার এর উপযোগী করে তুলি ।  

আরো অনেক অনেক ফিচারস আছে এই OOP তে আমরা ধীরে ধীরে জানতে পারবো । 

## Property

প্রপার্টি হচ্ছে, একধরনের ভেরিয়েবল যা মূলত মেথড এর ভিত্তি করে তৈরী করা হয়েছে । 

যেমন, আমরা private কোন ভেরিয়েবল কে বাহির থেকে পরিবর্তন করতে পার না , কিন্তু চাইলেই Property ব্যবহার করে সহজেই private কোন ভেরিয়েবল পরিবর্তন করতে পারি । সাধারণত সিকিউরিটি ও সহজে ব্যবহার এর জন্য property ব্যবহার করা হয় । 

প্রপার্টির নাম সাধারণ camel case (প্রতি শব্দের ১ম বর্ণ Upper Case) হয়ে থাকে  । তবে সাধারন ভেরিয়েবল Lower case হয়ে থাকে ।  

যেমনঃ 

```csharp

class WaterBottle
{
    public double capacity=0;
    public string color;
    private double waterAmount ;

    // একখানে waterAmount প্রাইভেট তাই বাহির থেকে এটাকে এক্সেস করা যাবে না 
    
    // কিন্তু আমরা চাইলেই WaterWaterAmount কে কল করবো সামনে থেকে , সে আসলে ভিতরে ভিতরে private double waterAmount ; এর মানকে ব্যবহার করবে । 

	    public double WaterWaterAmount
    {
    // গেট মানে কার ভেলু দেখাবে । 
        get
        {
            return waterAmount;
        }
        // সেট মানে কার মান পরিবরর্তন করবে । 
        set
        {
        // চাইলে বিভিন্ন কন্ডিসশনো এপ্লাই করা যেতে পারে একখানে ।  
            waterAmount = value;
        }
    }
   }
```

> main ফাংশনে ব্যাবহারের সময় সাধারণ ভেরিয়েবল বা ফিল্ডের মতো আচরণ করবে ।
>