import  MdPreview from  "@/components/shared/MdPreview";

export default function MarkdownPage( ) {
    const source = `
# OOP
# সাধারণ প্রশ্ন এটা 
# C# - What is OOP?

OOP stands for Object-Oriented Programming.

Procedural programming is about writing procedures or methods that perform operations on the data, while object-oriented programming is about creating objects that contain both data and methods.

Object-oriented programming has several advantages over procedural programming:

- OOP is faster and easier to execute
- OOP provides a clear structure for the programs
- OOP helps to keep the C# code DRY "Don't Repeat Yourself", and makes the code easier to maintain, modify and debug
- OOP makes it possible to create full reusable applications with less code and shorter development time

**Tip:** The "Don't Repeat Yourself" (DRY) principle is about reducing the repetition of code. You should extract out the codes that are common for the application, and place them at a single place and reuse them instead of repeating it.

---

# C# - What are Classes and Objects?

Classes and objects are the two main aspects of object-oriented programming.

Look at the following illustration to see the difference between class and objects:

![Untitled](Untitled.png)

So, a class is a template for objects, and an object is an instance of a class.

When the individual objects are created, they inherit all the variables and methods from the class.

\`\`\`csharp
class Car
{
  string color = "red";
  static void Main(string[] args)
  {
    Car myObj1 = new Car();
    Car myObj2 = new Car();
    Console.WriteLine(myObj1.color);
    Console.WriteLine(myObj2.color);
  }
}
\`\`\`

Multi Calass

\`\`\`csharp
using System;

namespace MyApplication
{
class Car
{
public string color = "red";
}
}

// Second 
class Program
{
  static void Main(string[] args)
  {
    Car myObj = new Car();
    Console.WriteLine(myObj.color); // red 
  }
}

\`\`\`

## Access object

variables inside a class are called fields, and that you can access them by creating an object of the class, and by using the dot syntax (\`.\`).

\`\`\`csharp
class Car
{
  string color = "red";
  int maxSpeed = 200;

  static void Main(string[] args)
  {
    CarmyObj = new Car();
    Console.WriteLine(myObj.color);
    Console.WriteLine(myObj.maxSpeed);
  }
\`\`\`

Create multi object and changing value 

\`\`\`csharp
class Car
{
  string model;
  string color;
  int year;

  static void Main(string[] args)
  {
    Car Ford = new Car();
    Ford.model = "Mustang";
    Ford.color = "red";
    Ford.year = 1969;

    Car Opel = new Car();
    Opel.model = "Astra";
    Opel.color = "white";
    Opel.year = 2005;

    Console.WriteLine(Ford.model);
    Console.WriteLine(Opel.model);
  }
}
\`\`\`

### **Object Methods**

\`\`\`csharp
class Car
{
  string color;                 // field
  int maxSpeed;                 // field
  public void fullThrottle()    // method
  {
    Console.WriteLine("The car is going as fast as it can!");
  }

  static void Main(string[] args)
  {
    CarmyObj = new Car();
    myObj.fullThrottle();  // Call the method
  }
}
\`\`\`

 a \`static\` method can be accessed without creating an object of the class, while \`public\` methods can only be accessed by objects.

# Constructors

A constructor is a **special method** that is used to initialize objects. The advantage of a constructor, is that it is called when an object of a class is created. It can be used to set initial values for fields:

Example

Create a constructor:

\`\`\`csharp
// Create a Car class
class Car
{
  public string model;  // Create a field

  // Create aclass constructor for the Car class
  public Car()
  {
    model = "Mustang"; // Set the initial value for model
  }

  static void Main(string[] args)
  {
    Car Ford = new Car();  // Create an object of the Car Class (this willcall the constructor)
    Console.WriteLine(Ford.model);  // Print the value of model
  }
}

// Outputs "Mustang"
\`\`\`

the constructor name must **match the class name**, and it cannot have a **return type** (like \`void\` or \`int\`).

Also note that the constructor is called when the object is created.

All classes have constructors by default: if you do not create a class constructor yourself, C# creates one for you. However, then you are not able to set initial values for fields.

### Constructors can also take parameters, which is used to initialize fields.

\`\`\`java
class Car
{
  public string model;
  public string color;
  public int year;

  // Create a class constructor with multiple parameters
  public Car(string modelName, string modelColor, int modelYear)
  {
    model = modelName;
    color = modelColor;
    year = modelYear;
  }

  static void Main(string[] args)
  {
    Car Ford = new Car("Mustang", "Red", 1969);
    Console.WriteLine(Ford.color + " " + Ford.year + " " + Ford.model);
  }
}

// Outputs Red 1969 Mustang
\`\`\`

## **Access Modifiers**

![Untitled](Untitled%201.png)

If you declare a field with a \`private\` access modifier, it can only be accessed within the same class:

Example of private ,

\`\`\`csharp
class Car
{
  private string model = "Mustang";
}

class Program
{
  static void Main(string[] args)
  {
    Car myObj = new Car();
    Console.WriteLine(myObj.model);
  }
}
\`\`\`

If you declare a field with a \`public\` access modifier, it is accessible for all classes:

\`\`\`csharp
class Car
{
  public string model = "Mustang";
}

class Program
{
  static void Main(string[] args)
  {
    Car myObj = new Car();
    Console.WriteLine(myObj.model);
  }
}
\`\`\`

**Note: By default, all members of a class are \`private\` if you don't specify an access modifier:**

\`\`\`csharp
class Car
{
  string model;  // private
  string year;   // private
}
\`\`\`

# Why Encapsulation?

- Better control of class members (reduce the possibility of yourself (or others) to mess up the code)
- Fields can be made **read-only** (if you only use the \`get\` method), or **write-only** (if you only use the \`set\` method)
- Flexible: the programmer can change one part of the code without affecting other parts
- Increased security of data

### **Properties (Get and Set)**

The meaning of **Encapsulation**, is to make sure that "sensitive" data is hidden from users. To achieve this, you must:

- declare fields/variables as \`private\`
- provide \`public\` \`get\` and \`set\` methods, through **properties**, to access and update the value of a \`private\` field

Example: 

\`\`\`csharp
class Person
{
  private string name; // field
  public string Name   // property
  {
    get { return name; }
    set { name = value; }
  }
}

class Program
{
  static void Main(string[] args)
  {
    Person myObj = new Person();
    myObj.Name = "Liam";
    Console.WriteLine(myObj.Name);
  }
}
\`\`\`

Another example in Stack overflow:

1: 

\`\`\`csharp
using System;
using System.Collections.Generic;
using System.Text;

namespace MyFirstProject
{
    class Student
    {
        public string name;
        public string gender;
        public Student(string cName, string cGender)
        {
            name = cName;
            gender= cGender;
        }

     }
}
\`\`\`

In Main

\`\`\`csharp
 Student s = new Student("Some name", "Superman"); //Gender is superman, It works but it is meaningless
 Console.WriteLine(s.Gender);
\`\`\`

2: 

**With setters and getters**

\`\`\`csharp
using System;
using System.Collections.Generic;
using System.Text;

namespace MyFirstProject
{
    class Student
    {
        public string name;
        private string gender;
        public Student(string cName, string cGender)
        {
            name = cName;
            Gender = cGender;
        }

        public string Gender
        {
            get { return gender; }
            set
            {
                if (value == "Male" || value == "Female" || value == "Other")
                {
                    gender = value;
                }
                else
                {
                    throw new ArgumentException("Invalid value supplied");
                }
            }
        }
    }
}

\`\`\`

In Main:

\`\`\`csharp
  Student s = new Student("somename", "Other"); // Here you can set only those three values otherwise it throws ArgumentException.
Console.WriteLine(s.Gender);
\`\`\`

# Need of Public and Private

public : // is read and writeable from any whera

private : /* not readable and writeable ; **to modify only readable or writeable, we should use getter and setter**

# Inheritance (Derived and Base Class)

In C#, it is possible to inherit fields and methods from one class to another. We group the "inheritance concept" into two categories:

- **Derived Class** (child) - the class that inherits from another class
- **Base Class** (parent) - the class being inherited from

To inherit from a class, use the \`:\` symbol.

In the example below, the \`Car\` class (child) inherits the fields and methods from the \`Vehicle\` class (parent):

Example : 

\`\`\`csharp
class Vehicle  // base class (parent)
{
  public string brand = "Ford";  // Vehicle field
  public void honk()             // Vehicle method
  {
    Console.WriteLine("Tuut, tuut!");
  }
}

class Car : Vehicle  // derived class (child)
{
  public string modelName = "Mustang";  // Car field
}

class Program
{
  static void Main(string[] args)
  {
    // Create a myCar object
    Car myCar = new Car();

    // Call the honk() method (From the Vehicle class) on the myCar object
    myCar.honk();

    // Display the value of the brand field (from the Vehicle class) and the value of the modelName from the Car class
    Console.WriteLine(myCar.brand + " " + myCar.modelName);
  }
}
\`\`\`

It is useful for code reusability: reuse fields and methods of an existing class when you create a new class.

## The sealed Keyword

If you don't want other classes to inherit from a class, use the \`sealed\` keyword:

\`\`\`csharp
sealed class Vehicle
{
  ...
}

class Car : Vehicle{
  ...
}

// output: 'Car': cannot derive from sealed type 'Vehicle'
\`\`\`

# Polymorphism and Overriding Methods

Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance.

Like we specified in the previous chapter; [**Inheritance**](https://www.w3schools.com/cs/cs_inheritance.php) lets us inherit fields and methods from another class. **Polymorphism** uses those methods to perform different tasks. This allows us to perform a single action in different ways.

For example, think of a base class called \`Animal\` that has a method called \`animalSound()\`. Derived classes of Animals could be Pigs, Cats, Dogs, Birds - And they also have their own implementation of an animal sound (the pig oinks, and the cat meows, etc.):

\`\`\`csharp
class Animal  // Base class (parent)
{
  publicvirtual void animalSound()
  {
    Console.WriteLine("The animal makes a sound");
  }
}

class Pig : Animal  // Derived class (child)
{
  publicoverride void animalSound()
  {
    Console.WriteLine("The pig says: wee wee");
  }
}

class Dog : Animal  // Derived class (child)
{
  publicoverride void animalSound()
  {
    Console.WriteLine("The dog says: bow wow");
  }
}

class Program
{
  static void Main(string[] args)
  {
    Animal myAnimal = new Animal();  // Create a Animal object
    Animal myPig = new Pig();  // Create a Pig object
    Animal myDog = new Dog();  // Create a Dog object

    myAnimal.animalSound();
    myPig.animalSound();
    myDog.animalSound();
  }
}
\`\`\`

The output will be:

\`The animal makes a soundThe pig says: wee weeThe dog says: bow wow\`

\`virtual\` keyword to the method inside the base class, and by using the \`override\` keyword for each derived class methods:

if we don’t use virtual , it will override buy the base classe’s  function . then output will be 

The animal makes a sound

The animal makes a sound

The animal makes a sound

# Abstract Classes and Methods

Data **abstraction** is the process of hiding certain details and showing only essential information to the user.

Abstraction can be achieved with either **abstract classes** or [**interfaces**](https://www.w3schools.com/cs/cs_interface.php)

Example: 

\`\`\`csharp
// Abstract class
abstract class Animal
{
  // Abstract method (does not have a body)
  public abstract void animalSound();
  // Regular method
  public void sleep()
  {
    Console.WriteLine("Zzz");
  }
}

// Derived class (inherit from Animal)
class Pig : Animal{
  public override void animalSound()
  {
    // The body of animalSound() is provided here
    Console.WriteLine("The pig says: wee wee");
  }
}

class Program
{
  static void Main(string[] args)
  {
    Pig myPig = new Pig(); // Create a Pig object
    myPig.animalSound();  // Call the abstract method
    myPig.sleep();  // Call the regular method
  }
}
\`\`\`

# Interfaces

Another way to achieve [abstraction](https://www.w3schools.com/cs/cs_abstract.php) in C#, is with interfaces.

An \`interface\` is a completely "**abstract class**", which can only contain abstract methods and properties

\`\`\`csharp
// Interface
interface IAnimal
{
  void animalSound(); // interface method (does not have a body)
}

// Pig "implements" the IAnimal interface
class Pig : IAnimal
{
  public void animalSound()
  {
    // The body of animalSound() is provided here
    Console.WriteLine("The pig says: wee wee");
  }
}

class Program
{
  static void Main(string[] args)
  {
    Pig myPig = new Pig();  // Create a Pig object
    myPig.animalSound();
  }
}
\`\`\`

### Notes on Interfaces:

- Like **abstract classes**, interfaces **cannot** be used to create objects (in the example above, it is not possible to create an "IAnimal" object in the Program class)
- Interface methods do not have a body - the body is provided by the "implement" class
- On implementation of an interface, you must override all of its methods
- Interfaces can contain properties and methods, but not fields/variables
- Interface members are by default \`abstract\` and \`public\`
- An interface cannot contain a constructor (as it cannot be used to create objects)

### Why And When To Use Interfaces?

1) To achieve security - hide certain details and only show the important details of an object (interface).

2) C# does not support "multiple inheritance" (a class can only inherit from one base class). However, it can be achieved with interfaces, because the class can **implement** multiple interfaces. **Note:** To implement multiple interfaces, separate them with a comma (see example below).

### **Multiple Interfaces**

\`\`\`csharp
interface IFirstInterface
{
  void myMethod(); // interface method
}

interface ISecondInterface
{
  void myOtherMethod(); // interface method
}

// Implement multiple interfaces
class DemoClass : IFirstInterface, ISecondInterface
{
  public void myMethod()
  {
    Console.WriteLine("Some text..");
  }
  public void myOtherMethod()
  {
    Console.WriteLine("Some other text...");
  }
}

class Program
{
  static void Main(string[] args)
  {
    DemoClass myObj = new DemoClass();
    myObj.myMethod();
    myObj.myOtherMethod();
  }
}
\`\`\`

# C# Enums

An \`enum\` is a special "class" that represents a group of **constants** (unchangeable/read-only variables).

To create an \`enum\`, use the \`enum\` keyword (instead of class or interface), and separate the enum items with a comma:

# Example

\`\`\`java
class Program
{
  enum Level
  {
    Low,
    Medium,
    High
  }
  static void Main(string[] args)
  {
    Level myVar = Level.Medium;
    Console.WriteLine(myVar);
  }
}
\`\`\`

\`\`\`java
enum Months
{
  January,    // 0
  February,   // 1
  March=6,    // 6
  April,      // 7
  May,        // 8
  June,       // 9
  July        // 10
}

static void Main(string[] args)
{
  int myNum = (int) Months.April;
  Console.WriteLine(myNum);
}
\`\`\`
`;

    return (
        <div>
            <h1>Markdown Preview</h1>

            <MdPreview source={source} />

        </div>
    );
}

