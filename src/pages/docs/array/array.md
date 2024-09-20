# Array

অ্যারে (array) হল একই টাইপের একাধিক ভেরিয়েবল এর সংগ্রহ যা মেমরির কাছাকাছি লোকেশনে ডাটা স্টোর করে।

একই টাইপের একের অধিক ভ্যারিয়েবল নিয়ে কাজ করার জন্য প্রোগ্রামিং এ আমরা অ্যারে ব্যবহার করি।

যেমন প্রথম পাঁচটা প্রাইম নাম্বার হচ্ছে 2, 3, 5, 7, 11। এখন আমরা এই পাঁচটা নাম্বার আমাদের প্রোগ্রামে ব্যবহার করব। আমরা যদি সাধারণ ভ্যারিয়েবল এর মাধ্যমে ব্যবহার করতে চাই, তাহলে পাঁচটা ভ্যারিয়েবল ডিক্লেয়ার করতে হবে। কিন্তু অ্যারে ব্যবহার করে আমরা একটা ভ্যারিয়েবল ব্যবহার করেই এই পাঁচটা প্রাইম নাম্বার প্রোগ্রামে ব্যবহার করতে পারি।

অ্যারেকে মনে করতে পারেন একটা বাক্স এর মত, যার মধ্যে অনেক গুলো ছোট ছোট খোপ  থাকতে পারে।

প্রত্যেকটি খোপ কে আলাদা আলাদা সিরিয়াল দেওয়া যেতে পারে , একে ইন্ডেক্স বলে । সি# প্রোগ্রামিং এ এই ইনডেক্স গণনা শুরু হয় 0 থেকে। 

[//]: # (![c-array-memory-location-1024x173.png]&#40;c-array-memory-location-1024x173.png&#41;)

নিচে অ্যারে ঘোষণা এবং আরম্ভীকরণের কয়েকটি সাধারণ উপায় দেওয়া হলো:

```csharp
// 
টাইপ[] ভেরিএবল = new টাইপ[সাইজ];

// 01 
int[] numbers; // শুধু ডিক্লেয়ার করা 

// ০২ 
string[] array = new string[2]; 
// মান ও বলে দেওয়া
string[] array = new string[] { "A", "B" };
string[] array = { "A" , "B" }; 
string[] array = new[] { "A", "B" }; 
string[] array = ["A", "B"];

// একসেস 
string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
cars[0] = "Opel";
Console.WriteLine(cars[0]);

Console.WriteLine(cars.Length); // সাইজ 
// Outputs 4
```

## মাল্টি ডাইমেনশন এরে

Multidimension Array বলতে ঐধরনের Array কে বুঝায় যার মধ্যে এক বা তার অধিক Array থাকে,  

```csharp
/*
0 10 0
0 0 20
30 0 0
*/

এটা একটি আরে, যা x,y Axis বরা বরাবর চলে । এটা একটি 2D Array;

int[,] arr=new int[3,3];//declaration of 2D array  

// একখানে int[] এ , দিয়ে বলা হয়েছে এটা 2D বা দ্বিমাত্রিক । এভাবে int[, ,] মানে 3D Array. এভাবে মাল্টিডাইমেন্সশন ডিক্লেয়ার করা যায় ।

// size সহ 
int[,] arr = new int[3,3]= { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };  

// or 
int[,] arr = new int[,]{ { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };  

// or 
int[,] arr = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };  

/*
1 2 3
4 5 6
7 8 9
*/

```

example 

```csharp
using System;  
public class MultiArrayExample  
{  
    public static void Main(string[] args)  
    {  
        int[,] arr = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };//declaration and initialization  
  
        //traversal  
        for(int i=0;i<3;i++){  
            for(int j=0;j<3;j++){  
                Console.Write(arr[i,j]+" ");  
            }  
            Console.WriteLine();//new line at each row  
        }  
    }  
}  
```

## Judge Array

এটাও এক ধরণের মাল্টি ডাইমেনশন এরের এরে । 

 কিন্তু প্রধান পার্থক্য হচ্ছে,মাল্টি ডাইমেনশন এরেতে প্রত্যেকটি এরে সমান হয়। মানে, একটা সারি ২ টি অন্য সারি ৪ টি মান রাখতে পারে না 

example 

```csharp
/*
1 2 3
4 5 6
7 8 9
*/ 
এটা সম্ভব, কিন্ত 
/*
1 2 3
4 5 6 7
8 9
*/ এটা সম্ভব নয়  । 

/*
1 2 3
4 5 6 7
8 9 
/* এটাই জাজ এরে । 

```

```csharp
//Declaration
int[][] jagged_arr = new int[4][] // একখানে, [][] দ্বারা 2D বুজঝানো হয়েছে, আর [4][] একখানে বলা হয়েছে এটাতে মোট ৪ টা এরে থাকতে পারে । 

এবার ভিতরে থাকা প্রতিটি এরের সাইজ বলে দিবো । 
// Assigning size of array
jagged_arr[0] = new int[2];
jagged_arr[1] = new int[4];
jagged_arr[2] = new int[6];
jagged_arr[3] = new int[7];

আমরা চাইলে সাইজ না বলে সরাসরি মানও বলে দিতে পারি, 
// second method 
jagged_arr[0] = new int[] {1, 2, 3, 4};
jagged_arr[1] = new int[] {11, 34, 67};
jagged_arr[2] = new int[] {89, 23};
jagged_arr[3] = new int[] {0, 45, 78, 53, 99};

// আরো উপায় আছে সরাসরি মান বলে দেওয়া । 

int[][] jagged_arr = new int[][]
{
    new int[] {1, 2, 3, 4}, //jagged_arr[0]
    new int[] {11, 34, 67}, //jagged_arr[1]
    new int[] {89, 23},//jagged_arr[2]
    new int[] {0, 45, 78, 53, 99}//jagged_arr[3]
};

// or 

int[][] jagged_arr =
{
    new int[] {1, 2, 3, 4},
    new int[] {11, 34, 67},
    new int[] {89, 23},
    new int[] {0, 45, 78, 53, 99}
};
```

Example:

```csharp
int[][] ja = new int[3][];

// initialization 
ja[0] = new int[3];
ja[1] = new int[2];
ja[2] = new int[2];

for (int i = 0; i < ja[0].Length;i++)
    ja[0][i] = i + 1;

for (int i = 0; i < ja[1].Length; i++)
    ja[1][i] = i + 3;

for (int i = 0; i < ja[2].Length; i++)
    ja[2][i] = i + 5;

// Accessing and print 

for(int i = 0;i < ja.Length; i++)
{
    for(int j = 0; j < ja[i].Length;j++)
        Console.Write(ja[i][j]+" ");
    Console.Write("\n");
}

//Output: 
/*
1 2 3
3 4
5 6
*/

```

Example02: 

```csharp

```

### Jagged Arrays With Multidimensional Arrays

```csharp
// C# program to illustrate the Mixing of 1-D
// Jagged Array with the four 2-D array
using System;
namespace geeksforgeeks {

class GFG {

    // Main Method
    public static void Main()
    {

        // Declaration and Initialization of
        // Jagged array with 4 2-D arrays
        int[][, ] jagged_arr1 = new int[4][, ] {
            new int[, ] { { 1, 3 }, { 5, 7 } },
            new int[, ] { { 0, 2 }, { 4, 6 }, { 8, 10 } },
            new int[, ] { { 7, 8 }, { 3, 1 }, { 0, 6 } },
            new int[, ] { { 11, 22 }, { 99, 88 }, { 0, 9 } }
        };

        // Display the array elements:
        // Length method returns the number of
        // arrays contained in the jagged array
        for (int i = 0; i < jagged_arr1.Length; i++) {

            int x = 0;

            // GetLength method takes integer x which
            // specifies the dimension of the array
            for (int j = 0; j < jagged_arr1[i].GetLength(x);j++) {

                // Rank is used to determine the total
                // dimensions of an array
                for (int k = 0; k < jagged_arr1[j].Rank;
                     k++)
                    Console.Write("Jagged_Array[" + i + "]["
                                  + j + ", " + k + "]: "
                                  + jagged_arr1[i][j, k]
                                  + " ");
                Console.WriteLine();
            }
            x++;
            Console.WriteLine();
        }
    }
}
}

```

**Output:**

```csharp
Jagged_Array[0][0, 0]: 1 Jagged_Array[0][0, 1]: 3
Jagged_Array[0][1, 0]: 5 Jagged_Array[0][1, 1]: 7
Jagged_Array[1][0, 0]: 0 Jagged_Array[1][0, 1]: 2
Jagged_Array[1][1, 0]: 4 Jagged_Array[1][1, 1]: 6
Jagged_Array[1][2, 0]: 8 Jagged_Array[1][2, 1]: 10
Jagged_Array[2][0, 0]: 7 Jagged_Array[2][0, 1]: 8
Jagged_Array[2][1, 0]: 3 Jagged_Array[2][1, 1]: 1
Jagged_Array[2][2, 0]: 0 Jagged_Array[2][2, 1]: 6
Jagged_Array[3][0, 0]: 11 Jagged_Array[3][0, 1]: 22
Jagged_Array[3][1, 0]: 99 Jagged_Array[3][1, 1]: 88
Jagged_Array[3][2, 0]: 0 Jagged_Array[3][2, 1]: 9
```

## Method

কোন এরেকে সহজেই রিভার্স বা  বিপরীত হয়ে হয়ে আপডেট হয়ে যাবে । 

```csharp
```cs
 // Reverses the sort of the values of the Array.
      Array.Reverse( myArray );
```