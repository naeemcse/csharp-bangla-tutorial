// @ts-ignore
// @ts-nocheck
import React from 'react';
import {markdownToHtml} from "@/lib/markdown";
// import "../loop/style.css";


async function getMarkdownContent() {
    const markdownContent = '# OOP\n' +
        '\n' +
        '# C# - What is OOP? শুরতেই আমাদের বুঝতে হবে OOP কি \n' +
        '\n' +
        'OOP stands for Object-Oriented Programming.\n' +
        '\n' +
        'Procedural programming is about writing procedures or methods that perform operations on the data, while object-oriented programming is about creating objects that contain both data and methods.\n' +
        '\n' +
        'Object-oriented programming has several advantages over procedural programming:\n' +
        '\n' +
        '- OOP is faster and easier to execute\n' +
        '- OOP provides a clear structure for the programs\n' +
        '- OOP helps to keep the C# code DRY "Don\'t Repeat Yourself", and makes the code easier to maintain, modify and debug\n' +
        '- OOP makes it possible to create full reusable applications with less code and shorter development time\n' +
        '\n' +
        '**Tip:** The "Don\'t Repeat Yourself" (DRY) principle is about reducing the repetition of code. You should extract out the codes that are common for the application, and place them at a single place and reuse them instead of repeating it.\n' +
        '\n' +
        '---\n' +
        '\n' +
        '# C# - What are Classes and Objects?\n' +
        '\n' +
        'Classes and objects are the two main aspects of object-oriented programming.\n' +
        '\n' +
        'Look at the following illustration to see the difference between class and objects:\n' +
        '\n' +
        '![Untitled](Untitled.png)\n' +
        '\n' +
        'So, a class is a template for objects, and an object is an instance of a class.\n' +
        '\n' +
        'When the individual objects are created, they inherit all the variables and methods from the class.\n' +
        '\n' +
        '```csharp\n' +
        'class Car\n' +
        '{\n' +
        '  string color = "red";\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    Car myObj1 = new Car();\n' +
        '    Car myObj2 = new Car();\n' +
        '    Console.WriteLine(myObj1.color);\n' +
        '    Console.WriteLine(myObj2.color);\n' +
        '  }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        'Multi Calass\n' +
        '\n' +
        '```csharp\n' +
        'using System;\n' +
        '\n' +
        'namespace MyApplication\n' +
        '{\n' +
        'class Car\n' +
        '{\n' +
        'public string color = "red";\n' +
        '}\n' +
        '}\n' +
        '\n' +
        '// Second \n' +
        'class Program\n' +
        '{\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    Car myObj = new Car();\n' +
        '    Console.WriteLine(myObj.color); // red \n' +
        '  }\n' +
        '}\n' +
        '\n' +
        '```\n' +
        '\n' +
        '## Access object\n' +
        '\n' +
        'variables inside a class are called fields, and that you can access them by creating an object of the class, and by using the dot syntax (`.`).\n' +
        '\n' +
        '```csharp\n' +
        'class Car\n' +
        '{\n' +
        '  string color = "red";\n' +
        '  int maxSpeed = 200;\n' +
        '\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    CarmyObj = new Car();\n' +
        '    Console.WriteLine(myObj.color);\n' +
        '    Console.WriteLine(myObj.maxSpeed);\n' +
        '  }\n' +
        '```\n' +
        '\n' +
        'Create multi object and changing value \n' +
        '\n' +
        '```csharp\n' +
        'class Car\n' +
        '{\n' +
        '  string model;\n' +
        '  string color;\n' +
        '  int year;\n' +
        '\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    Car Ford = new Car();\n' +
        '    Ford.model = "Mustang";\n' +
        '    Ford.color = "red";\n' +
        '    Ford.year = 1969;\n' +
        '\n' +
        '    Car Opel = new Car();\n' +
        '    Opel.model = "Astra";\n' +
        '    Opel.color = "white";\n' +
        '    Opel.year = 2005;\n' +
        '\n' +
        '    Console.WriteLine(Ford.model);\n' +
        '    Console.WriteLine(Opel.model);\n' +
        '  }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '### **Object Methods**\n' +
        '\n' +
        '```csharp\n' +
        'class Car\n' +
        '{\n' +
        '  string color;                 // field\n' +
        '  int maxSpeed;                 // field\n' +
        '  public void fullThrottle()    // method\n' +
        '  {\n' +
        '    Console.WriteLine("The car is going as fast as it can!");\n' +
        '  }\n' +
        '\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    CarmyObj = new Car();\n' +
        '    myObj.fullThrottle();  // Call the method\n' +
        '  }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        ' a `static` method can be accessed without creating an object of the class, while `public` methods can only be accessed by objects.\n' +
        '\n' +
        '# Constructors\n' +
        '\n' +
        'A constructor is a **special method** that is used to initialize objects. The advantage of a constructor, is that it is called when an object of a class is created. It can be used to set initial values for fields:\n' +
        '\n' +
        'Example\n' +
        '\n' +
        'Create a constructor:\n' +
        '\n' +
        '```csharp\n' +
        '// Create a Car class\n' +
        'class Car\n' +
        '{\n' +
        '  public string model;  // Create a field\n' +
        '\n' +
        '  // Create aclass constructor for the Car class\n' +
        '  public Car()\n' +
        '  {\n' +
        '    model = "Mustang"; // Set the initial value for model\n' +
        '  }\n' +
        '\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    Car Ford = new Car();  // Create an object of the Car Class (this willcall the constructor)\n' +
        '    Console.WriteLine(Ford.model);  // Print the value of model\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        '// Outputs "Mustang"\n' +
        '```\n' +
        '\n' +
        'the constructor name must **match the class name**, and it cannot have a **return type** (like `void` or `int`).\n' +
        '\n' +
        'Also note that the constructor is called when the object is created.\n' +
        '\n' +
        'All classes have constructors by default: if you do not create a class constructor yourself, C# creates one for you. However, then you are not able to set initial values for fields.\n' +
        '\n' +
        '### Constructors can also take parameters, which is used to initialize fields.\n' +
        '\n' +
        '```java\n' +
        'class Car\n' +
        '{\n' +
        '  public string model;\n' +
        '  public string color;\n' +
        '  public int year;\n' +
        '\n' +
        '  // Create a class constructor with multiple parameters\n' +
        '  public Car(string modelName, string modelColor, int modelYear)\n' +
        '  {\n' +
        '    model = modelName;\n' +
        '    color = modelColor;\n' +
        '    year = modelYear;\n' +
        '  }\n' +
        '\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    Car Ford = new Car("Mustang", "Red", 1969);\n' +
        '    Console.WriteLine(Ford.color + " " + Ford.year + " " + Ford.model);\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        '// Outputs Red 1969 Mustang\n' +
        '```\n' +
        '\n' +
        '## **Access Modifiers**\n' +
        '\n' +
        '![Untitled](Untitled%201.png)\n' +
        '\n' +
        'If you declare a field with a `private` access modifier, it can only be accessed within the same class:\n' +
        '\n' +
        'Example of private ,\n' +
        '\n' +
        '```csharp\n' +
        'class Car\n' +
        '{\n' +
        '  private string model = "Mustang";\n' +
        '}\n' +
        '\n' +
        'class Program\n' +
        '{\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    Car myObj = new Car();\n' +
        '    Console.WriteLine(myObj.model);\n' +
        '  }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        'If you declare a field with a `public` access modifier, it is accessible for all classes:\n' +
        '\n' +
        '```csharp\n' +
        'class Car\n' +
        '{\n' +
        '  public string model = "Mustang";\n' +
        '}\n' +
        '\n' +
        'class Program\n' +
        '{\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    Car myObj = new Car();\n' +
        '    Console.WriteLine(myObj.model);\n' +
        '  }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '**Note: By default, all members of a class are `private` if you don\'t specify an access modifier:**\n' +
        '\n' +
        '```csharp\n' +
        'class Car\n' +
        '{\n' +
        '  string model;  // private\n' +
        '  string year;   // private\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '# Why Encapsulation?\n' +
        '\n' +
        '- Better control of class members (reduce the possibility of yourself (or others) to mess up the code)\n' +
        '- Fields can be made **read-only** (if you only use the `get` method), or **write-only** (if you only use the `set` method)\n' +
        '- Flexible: the programmer can change one part of the code without affecting other parts\n' +
        '- Increased security of data\n' +
        '\n' +
        '### **Properties (Get and Set)**\n' +
        '\n' +
        'The meaning of **Encapsulation**, is to make sure that "sensitive" data is hidden from users. To achieve this, you must:\n' +
        '\n' +
        '- declare fields/variables as `private`\n' +
        '- provide `public` `get` and `set` methods, through **properties**, to access and update the value of a `private` field\n' +
        '\n' +
        'Example: \n' +
        '\n' +
        '```csharp\n' +
        'class Person\n' +
        '{\n' +
        '  private string name; // field\n' +
        '  public string Name   // property\n' +
        '  {\n' +
        '    get { return name; }\n' +
        '    set { name = value; }\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'class Program\n' +
        '{\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    Person myObj = new Person();\n' +
        '    myObj.Name = "Liam";\n' +
        '    Console.WriteLine(myObj.Name);\n' +
        '  }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        'Another example in Stack overflow:\n' +
        '\n' +
        '1: \n' +
        '\n' +
        '```csharp\n' +
        'using System;\n' +
        'using System.Collections.Generic;\n' +
        'using System.Text;\n' +
        '\n' +
        'namespace MyFirstProject\n' +
        '{\n' +
        '    class Student\n' +
        '    {\n' +
        '        public string name;\n' +
        '        public string gender;\n' +
        '        public Student(string cName, string cGender)\n' +
        '        {\n' +
        '            name = cName;\n' +
        '            gender= cGender;\n' +
        '        }\n' +
        '\n' +
        '     }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        'In Main\n' +
        '\n' +
        '```csharp\n' +
        ' Student s = new Student("Some name", "Superman"); //Gender is superman, It works but it is meaningless\n' +
        ' Console.WriteLine(s.Gender);\n' +
        '```\n' +
        '\n' +
        '2: \n' +
        '\n' +
        '**With setters and getters**\n' +
        '\n' +
        '```csharp\n' +
        'using System;\n' +
        'using System.Collections.Generic;\n' +
        'using System.Text;\n' +
        '\n' +
        'namespace MyFirstProject\n' +
        '{\n' +
        '    class Student\n' +
        '    {\n' +
        '        public string name;\n' +
        '        private string gender;\n' +
        '        public Student(string cName, string cGender)\n' +
        '        {\n' +
        '            name = cName;\n' +
        '            Gender = cGender;\n' +
        '        }\n' +
        '\n' +
        '        public string Gender\n' +
        '        {\n' +
        '            get { return gender; }\n' +
        '            set\n' +
        '            {\n' +
        '                if (value == "Male" || value == "Female" || value == "Other")\n' +
        '                {\n' +
        '                    gender = value;\n' +
        '                }\n' +
        '                else\n' +
        '                {\n' +
        '                    throw new ArgumentException("Invalid value supplied");\n' +
        '                }\n' +
        '            }\n' +
        '        }\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        '```\n' +
        '\n' +
        'In Main:\n' +
        '\n' +
        '```csharp\n' +
        '  Student s = new Student("somename", "Other"); // Here you can set only those three values otherwise it throws ArgumentException.\n' +
        'Console.WriteLine(s.Gender);\n' +
        '```\n' +
        '\n' +
        '# Need of Public and Private\n' +
        '\n' +
        'public : // is read and writeable from any whera\n' +
        '\n' +
        'private : /* not readable and writeable ; **to modify only readable or writeable, we should use getter and setter**\n' +
        '\n' +
        '# Inheritance (Derived and Base Class)\n' +
        '\n' +
        'In C#, it is possible to inherit fields and methods from one class to another. We group the "inheritance concept" into two categories:\n' +
        '\n' +
        '- **Derived Class** (child) - the class that inherits from another class\n' +
        '- **Base Class** (parent) - the class being inherited from\n' +
        '\n' +
        'To inherit from a class, use the `:` symbol.\n' +
        '\n' +
        'In the example below, the `Car` class (child) inherits the fields and methods from the `Vehicle` class (parent):\n' +
        '\n' +
        'Example : \n' +
        '\n' +
        '```csharp\n' +
        'class Vehicle  // base class (parent)\n' +
        '{\n' +
        '  public string brand = "Ford";  // Vehicle field\n' +
        '  public void honk()             // Vehicle method\n' +
        '  {\n' +
        '    Console.WriteLine("Tuut, tuut!");\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'class Car : Vehicle  // derived class (child)\n' +
        '{\n' +
        '  public string modelName = "Mustang";  // Car field\n' +
        '}\n' +
        '\n' +
        'class Program\n' +
        '{\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    // Create a myCar object\n' +
        '    Car myCar = new Car();\n' +
        '\n' +
        '    // Call the honk() method (From the Vehicle class) on the myCar object\n' +
        '    myCar.honk();\n' +
        '\n' +
        '    // Display the value of the brand field (from the Vehicle class) and the value of the modelName from the Car class\n' +
        '    Console.WriteLine(myCar.brand + " " + myCar.modelName);\n' +
        '  }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        'It is useful for code reusability: reuse fields and methods of an existing class when you create a new class.\n' +
        '\n' +
        '## The sealed Keyword\n' +
        '\n' +
        'If you don\'t want other classes to inherit from a class, use the `sealed` keyword:\n' +
        '\n' +
        '```csharp\n' +
        'sealed class Vehicle\n' +
        '{\n' +
        '  ...\n' +
        '}\n' +
        '\n' +
        'class Car : Vehicle{\n' +
        '  ...\n' +
        '}\n' +
        '\n' +
        '// output: \'Car\': cannot derive from sealed type \'Vehicle\'\n' +
        '```\n' +
        '\n' +
        '# Polymorphism and Overriding Methods\n' +
        '\n' +
        'Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance.\n' +
        '\n' +
        'Like we specified in the previous chapter; [**Inheritance**](https://www.w3schools.com/cs/cs_inheritance.php) lets us inherit fields and methods from another class. **Polymorphism** uses those methods to perform different tasks. This allows us to perform a single action in different ways.\n' +
        '\n' +
        'For example, think of a base class called `Animal` that has a method called `animalSound()`. Derived classes of Animals could be Pigs, Cats, Dogs, Birds - And they also have their own implementation of an animal sound (the pig oinks, and the cat meows, etc.):\n' +
        '\n' +
        '```csharp\n' +
        'class Animal  // Base class (parent)\n' +
        '{\n' +
        '  publicvirtual void animalSound()\n' +
        '  {\n' +
        '    Console.WriteLine("The animal makes a sound");\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'class Pig : Animal  // Derived class (child)\n' +
        '{\n' +
        '  publicoverride void animalSound()\n' +
        '  {\n' +
        '    Console.WriteLine("The pig says: wee wee");\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'class Dog : Animal  // Derived class (child)\n' +
        '{\n' +
        '  publicoverride void animalSound()\n' +
        '  {\n' +
        '    Console.WriteLine("The dog says: bow wow");\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'class Program\n' +
        '{\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    Animal myAnimal = new Animal();  // Create a Animal object\n' +
        '    Animal myPig = new Pig();  // Create a Pig object\n' +
        '    Animal myDog = new Dog();  // Create a Dog object\n' +
        '\n' +
        '    myAnimal.animalSound();\n' +
        '    myPig.animalSound();\n' +
        '    myDog.animalSound();\n' +
        '  }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        'The output will be:\n' +
        '\n' +
        '`The animal makes a soundThe pig says: wee weeThe dog says: bow wow`\n' +
        '\n' +
        '`virtual` keyword to the method inside the base class, and by using the `override` keyword for each derived class methods:\n' +
        '\n' +
        'if we don’t use virtual , it will override buy the base classe’s  function . then output will be \n' +
        '\n' +
        'The animal makes a sound\n' +
        '\n' +
        'The animal makes a sound\n' +
        '\n' +
        'The animal makes a sound\n' +
        '\n' +
        '# Abstract Classes and Methods\n' +
        '\n' +
        'Data **abstraction** is the process of hiding certain details and showing only essential information to the user.\n' +
        '\n' +
        'Abstraction can be achieved with either **abstract classes** or [**interfaces**](https://www.w3schools.com/cs/cs_interface.php)\n' +
        '\n' +
        'Example: \n' +
        '\n' +
        '```csharp\n' +
        '// Abstract class\n' +
        'abstract class Animal\n' +
        '{\n' +
        '  // Abstract method (does not have a body)\n' +
        '  public abstract void animalSound();\n' +
        '  // Regular method\n' +
        '  public void sleep()\n' +
        '  {\n' +
        '    Console.WriteLine("Zzz");\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        '// Derived class (inherit from Animal)\n' +
        'class Pig : Animal{\n' +
        '  public override void animalSound()\n' +
        '  {\n' +
        '    // The body of animalSound() is provided here\n' +
        '    Console.WriteLine("The pig says: wee wee");\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'class Program\n' +
        '{\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    Pig myPig = new Pig(); // Create a Pig object\n' +
        '    myPig.animalSound();  // Call the abstract method\n' +
        '    myPig.sleep();  // Call the regular method\n' +
        '  }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '# Interfaces\n' +
        '\n' +
        'Another way to achieve [abstraction](https://www.w3schools.com/cs/cs_abstract.php) in C#, is with interfaces.\n' +
        '\n' +
        'An `interface` is a completely "**abstract class**", which can only contain abstract methods and properties\n' +
        '\n' +
        '```csharp\n' +
        '// Interface\n' +
        'interface IAnimal\n' +
        '{\n' +
        '  void animalSound(); // interface method (does not have a body)\n' +
        '}\n' +
        '\n' +
        '// Pig "implements" the IAnimal interface\n' +
        'class Pig : IAnimal\n' +
        '{\n' +
        '  public void animalSound()\n' +
        '  {\n' +
        '    // The body of animalSound() is provided here\n' +
        '    Console.WriteLine("The pig says: wee wee");\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'class Program\n' +
        '{\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    Pig myPig = new Pig();  // Create a Pig object\n' +
        '    myPig.animalSound();\n' +
        '  }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '### Notes on Interfaces:\n' +
        '\n' +
        '- Like **abstract classes**, interfaces **cannot** be used to create objects (in the example above, it is not possible to create an "IAnimal" object in the Program class)\n' +
        '- Interface methods do not have a body - the body is provided by the "implement" class\n' +
        '- On implementation of an interface, you must override all of its methods\n' +
        '- Interfaces can contain properties and methods, but not fields/variables\n' +
        '- Interface members are by default `abstract` and `public`\n' +
        '- An interface cannot contain a constructor (as it cannot be used to create objects)\n' +
        '\n' +
        '### Why And When To Use Interfaces?\n' +
        '\n' +
        '1) To achieve security - hide certain details and only show the important details of an object (interface).\n' +
        '\n' +
        '2) C# does not support "multiple inheritance" (a class can only inherit from one base class). However, it can be achieved with interfaces, because the class can **implement** multiple interfaces. **Note:** To implement multiple interfaces, separate them with a comma (see example below).\n' +
        '\n' +
        '### **Multiple Interfaces**\n' +
        '\n' +
        '```csharp\n' +
        'interface IFirstInterface\n' +
        '{\n' +
        '  void myMethod(); // interface method\n' +
        '}\n' +
        '\n' +
        'interface ISecondInterface\n' +
        '{\n' +
        '  void myOtherMethod(); // interface method\n' +
        '}\n' +
        '\n' +
        '// Implement multiple interfaces\n' +
        'class DemoClass : IFirstInterface, ISecondInterface\n' +
        '{\n' +
        '  public void myMethod()\n' +
        '  {\n' +
        '    Console.WriteLine("Some text..");\n' +
        '  }\n' +
        '  public void myOtherMethod()\n' +
        '  {\n' +
        '    Console.WriteLine("Some other text...");\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'class Program\n' +
        '{\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    DemoClass myObj = new DemoClass();\n' +
        '    myObj.myMethod();\n' +
        '    myObj.myOtherMethod();\n' +
        '  }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '# C# Enums\n' +
        '\n' +
        'An `enum` is a special "class" that represents a group of **constants** (unchangeable/read-only variables).\n' +
        '\n' +
        'To create an `enum`, use the `enum` keyword (instead of class or interface), and separate the enum items with a comma:\n' +
        '\n' +
        '# Example\n' +
        '\n' +
        '```java\n' +
        'class Program\n' +
        '{\n' +
        '  enum Level\n' +
        '  {\n' +
        '    Low,\n' +
        '    Medium,\n' +
        '    High\n' +
        '  }\n' +
        '  static void Main(string[] args)\n' +
        '  {\n' +
        '    Level myVar = Level.Medium;\n' +
        '    Console.WriteLine(myVar);\n' +
        '  }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        '```java\n' +
        'enum Months\n' +
        '{\n' +
        '  January,    // 0\n' +
        '  February,   // 1\n' +
        '  March=6,    // 6\n' +
        '  April,      // 7\n' +
        '  May,        // 8\n' +
        '  June,       // 9\n' +
        '  July        // 10\n' +
        '}\n' +
        '\n' +
        'static void Main(string[] args)\n' +
        '{\n' +
        '  int myNum = (int) Months.April;\n' +
        '  Console.WriteLine(myNum);\n' +
        '}\n' +
        '```';
    const contentHtml = await markdownToHtml(markdownContent);
    return contentHtml;
}

export default async function Page() {
    const contentHtml = await getMarkdownContent();

    // return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
  return ( <>
        <article id="d7dc04a9-aa9d-46c5-b38d-33d40753e142" className="page sans">
            <header>
                <h1 className="page-title">OOP </h1>
                <p className="page-description" />
            </header>
            <div className="page-body">
                <h1 id="68b9a04f-3f9a-4c6d-baa3-f140feb299b8" className="">
                    C# - What is OOP?
                </h1>
                <p id="cd8dac3e-d612-4008-8b81-8a3dea05405e" className="">
                    OOP stands for Object-Oriented Programming.
                </p>
                <p id="c2109aa4-cddb-4e44-8505-56d840efcfdb" className="">
                    Procedural programming is about writing procedures or methods that
                    perform operations on the data, while object-oriented programming is
                    about creating objects that contain both data and methods.
                </p>
                <p id="290b5f80-9dea-438f-9429-355d26249b00" className="">
                    Object-oriented programming has several advantages over procedural
                    programming:
                </p>
                <ul id="ca74b6a0-3bb5-4d1d-9fce-8a2ad2b3c394" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        OOP is faster and easier to execute
                    </li>
                </ul>
                <ul id="c6aee11e-346d-4a80-98dd-89a0d8497deb" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        OOP provides a clear structure for the programs
                    </li>
                </ul>
                <ul id="801b9df6-b8e4-4646-bfeb-7fafabeae653" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        OOP helps to keep the C# code DRY "Don't Repeat Yourself", and makes
                        the code easier to maintain, modify and debug
                    </li>
                </ul>
                <ul id="f46534a3-08cc-48ac-ba82-91e509262242" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        OOP makes it possible to create full reusable applications with less
                        code and shorter development time
                    </li>
                </ul>
                <p id="80e1b95d-7710-4c43-81af-79dcf4b624ca" className="">
                    <strong>Tip:</strong>&nbsp;The "Don't Repeat Yourself" (DRY) principle
                    is about reducing the repetition of code. You should extract out the
                    codes that are common for the application, and place them at a single
                    place and reuse them instead of repeating it.
                </p>
                <hr id="b6e69aa7-d2a3-493b-86d7-74443e8024bc" />
                <h1 id="998db46a-9911-4ac5-8fd5-7306021c227e" className="">
                    C# - What are Classes and Objects?
                </h1>
                <p id="f7bf934d-8446-434f-96c6-f69725b443c8" className="">
                    Classes and objects are the two main aspects of object-oriented
                    programming.
                </p>
                <p id="52d28cc5-0786-4f78-9578-e7a27a5f9529" className="">
                    Look at the following illustration to see the difference between class
                    and objects:
                </p>
                <figure id="21f7251e-b141-4cca-8511-9366c728d5fd" className="image">
                    <a href="Untitled.png">
                        <img style={{ width: 708 }} src="Untitled.png" />
                    </a>
                </figure>
                <p id="853d1d0b-4db1-445d-9816-cd06b21fee26" className="">
                    So, a class is a template for objects, and an object is an instance of a
                    class.
                </p>
                <p id="068a68f3-4bcc-4acd-8924-d6ddcb923550" className="">
                    When the individual objects are created, they inherit all the variables
                    and methods from the class.
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="fdd76a89-ec57-4889-a336-cb21e16a27e5" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          class Car{"\n"}
            {"{"}
            {"\n"}
            {"  "}string color = "red";{"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Car myObj1 = new Car();{"\n"}
            {"    "}Car myObj2 = new Car();{"\n"}
            {"    "}Console.WriteLine(myObj1.color);{"\n"}
            {"    "}Console.WriteLine(myObj2.color);{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
        </code>
      </pre>
                <p id="22a463a6-3eb5-4d19-992e-d068400a6d61" className="">
                    Multi Calass
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="d8e539aa-f372-4b47-8000-2036f9d9424f" className="code">
        <code className="language-C#">
          using System;{"\n"}
            {"\n"}namespace MyApplication{"\n"}
            {"{"}
            {"\n"}class Car{"\n"}
            {"{"}
            {"\n"}public string color = "red";{"\n"}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}
            {"\n"}// Second {"\n"}class Program{"\n"}
            {"{"}
            {"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Car myObj = new Car();{"\n"}
            {"    "}Console.WriteLine(myObj.color); // red {"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}
        </code>
      </pre>
                <p id="65beb949-943e-499d-9b1d-6fb4dfaba13e" className=""></p>
                <h2 id="17b6d611-b734-465c-96eb-05a4248b821b" className="">
                    Access object{" "}
                </h2>
                <p id="afc126ca-e3d1-4416-a42c-5b806cce2b97" className="">
                    variables inside a class are called fields, and that you can access them
                    by creating an object of the class, and by using the dot syntax (
                    <code>.</code>).
                    <br />
                    <br />
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="40e98a6d-ee12-4569-bc7b-5efca9f3bbf3" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          class Car{"\n"}
            {"{"}
            {"\n"}
            {"  "}string color = "red";{"\n"}
            {"  "}int maxSpeed = 200;{"\n"}
            {"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}CarmyObj = new Car();{"\n"}
            {"    "}Console.WriteLine(myObj.color);{"\n"}
            {"    "}Console.WriteLine(myObj.maxSpeed);{"\n"}
            {"  "}
            {"}"}
        </code>
      </pre>
                <p id="681d1ebb-6591-484b-b38f-70f0fba09ec7" className=""></p>
                <p id="170cf820-7955-4ddb-85a1-c6e0d52c4317" className="">
                    <br />
                    Create multi object and changing value <br />
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="69dcc93f-0311-4a68-aa9e-f7e7e4b24ff0" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          class Car{"\n"}
            {"{"}
            {"\n"}
            {"  "}string model;{"\n"}
            {"  "}string color;{"\n"}
            {"  "}int year;{"\n"}
            {"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Car Ford = new Car();{"\n"}
            {"    "}Ford.model = "Mustang";{"\n"}
            {"    "}Ford.color = "red";{"\n"}
            {"    "}Ford.year = 1969;{"\n"}
            {"\n"}
            {"    "}Car Opel = new Car();{"\n"}
            {"    "}Opel.model = "Astra";{"\n"}
            {"    "}Opel.color = "white";{"\n"}
            {"    "}Opel.year = 2005;{"\n"}
            {"\n"}
            {"    "}Console.WriteLine(Ford.model);{"\n"}
            {"    "}Console.WriteLine(Opel.model);{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
        </code>
      </pre>
                <h3 id="12997ffc-65c5-46d1-9b0e-3a10f95c9559" className="">
                    <strong>Object Methods</strong>
                </h3>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="4022c679-c7ff-4707-9934-0691de3c3bcd" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          class Car{"\n"}
            {"{"}
            {"\n"}
            {"  "}string color;{"                 "}// field{"\n"}
            {"  "}int maxSpeed;{"                 "}// field{"\n"}
            {"  "}public void fullThrottle(){"    "}// method{"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Console.WriteLine("The car is going as fast as it can!");
            {"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}CarmyObj = new Car();{"\n"}
            {"    "}myObj.fullThrottle();{"  "}// Call the method{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
        </code>
      </pre>
                <p id="f19fadf5-f6d7-4d9d-84f8-e6d8e287ee56" className="">
                    &nbsp;a&nbsp;<code>static</code>&nbsp;method can be accessed without
                    creating an object of the class, while&nbsp;<code>public</code>
                    &nbsp;methods can only be accessed by objects.
                    <br />
                    <br />
                </p>
                <h1 id="bcdd3307-6d44-4fc9-b0e2-a9ac86b647ef" className="">
                    Constructors
                </h1>
                <p id="4da73e09-b2ce-406e-9aea-2350e7826295" className="">
                    A constructor is a&nbsp;<strong>special method</strong>&nbsp;that is
                    used to initialize objects. The advantage of a constructor, is that it
                    is called when an object of a class is created. It can be used to set
                    initial values for fields:
                </p>
                <p id="c4be7687-76d9-405c-badb-839f1f72a036" className="">
                    Example
                </p>
                <p id="8ead98eb-98ce-46c9-89c9-6b38300ed393" className="">
                    Create a constructor:
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="075bc67b-15f9-44f0-bc0f-333a1cc20982" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          // Create a Car class{"\n"}class Car{"\n"}
            {"{"}
            {"\n"}
            {"  "}public string model;{"  "}// Create a field{"\n"}
            {"\n"}
            {"  "}// Create aclass constructor for the Car class{"\n"}
            {"  "}public Car(){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}model = "Mustang"; // Set the initial value for model{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Car Ford = new Car();{"  "}// Create an object of the Car
          Class (this willcall the constructor){"\n"}
            {"    "}Console.WriteLine(Ford.model);{"  "}// Print the value of
          model{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}// Outputs "Mustang"
        </code>
      </pre>
                <p id="767f09fa-75ef-42fa-a3ee-1f447710a318" className="">
                    the constructor name must&nbsp;<strong>match the class name</strong>,
                    and it cannot have a&nbsp;<strong>return type</strong>&nbsp;(like&nbsp;
                    <code>void</code>&nbsp;or&nbsp;<code>int</code>).
                </p>
                <p id="ee9552d3-ae67-45d2-ba44-f8b2e2c2616f" className="">
                    Also note that the constructor is called when the object is created.
                </p>
                <p id="899ed229-4f3d-4a45-93f9-c3fa3ccf6d18" className="">
                    All classes have constructors by default: if you do not create a class
                    constructor yourself, C# creates one for you. However, then you are not
                    able to set initial values for fields.
                </p>
                <h3 id="6e5a0293-91e5-4ad8-b71d-f140b2b977bd" className="">
                    Constructors can also take parameters, which is used to initialize
                    fields.
                </h3>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="c16d298c-4a6e-48a7-993e-f4f4a00c9798" className="code">
        <code
            className="language-Java"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          class Car{"\n"}
            {"{"}
            {"\n"}
            {"  "}public string model;{"\n"}
            {"  "}public string color;{"\n"}
            {"  "}public int year;{"\n"}
            {"\n"}
            {"  "}// Create a class constructor with multiple parameters{"\n"}
            {"  "}public Car(string modelName, string modelColor, int modelYear)
            {"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}model = modelName;{"\n"}
            {"    "}color = modelColor;{"\n"}
            {"    "}year = modelYear;{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Car Ford = new Car("Mustang", "Red", 1969);{"\n"}
            {"    "}Console.WriteLine(Ford.color + " " + Ford.year + " " +
          Ford.model);{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}
            {"\n"}// Outputs Red 1969 Mustang
        </code>
      </pre>
                <p id="145cffba-9b96-4e40-b1e3-c4a930c174ec" className=""></p>
                <h2 id="aac154d0-6bc3-488a-82c0-80b7e404c4f6" className="">
                    <strong>Access Modifiers</strong>
                </h2>
                <figure id="001debf3-4902-45c6-9f5d-8128bb262d15" className="image">
                    <a href="Untitled%201.png">
                        <img style={{ width: 708 }} src="Untitled%201.png" />
                    </a>
                </figure>
                <p id="202acbb5-1c78-41fa-a6ef-ad4adda72f46" className="">
                    If you declare a field with a&nbsp;<code>private</code>&nbsp;access
                    modifier, it can only be accessed within the same class:
                    <br />
                    <br />
                    <br />
                </p>
                <p id="74e33117-1ba2-4d2e-a782-6c75d10047be" className="">
                    Example of private ,
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="a2c99b6c-6004-4ced-8737-075ae58ff96c" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          class Car{"\n"}
            {"{"}
            {"\n"}
            {"  "}private string model = "Mustang";{"\n"}
            {"}"}
            {"\n"}
            {"\n"}class Program{"\n"}
            {"{"}
            {"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Car myObj = new Car();{"\n"}
            {"    "}Console.WriteLine(myObj.model);{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
        </code>
      </pre>
                <p id="82773c87-c697-4e33-bea2-c00c22bc40b1" className="">
                    If you declare a field with a&nbsp;<code>public</code>&nbsp;access
                    modifier, it is accessible for all classes:
                    <br />
                    <br />
                    <br />
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="5babcf11-dcf3-489d-a517-334230bc89d2" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          class Car{"\n"}
            {"{"}
            {"\n"}
            {"  "}public string model = "Mustang";{"\n"}
            {"}"}
            {"\n"}
            {"\n"}class Program{"\n"}
            {"{"}
            {"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Car myObj = new Car();{"\n"}
            {"    "}Console.WriteLine(myObj.model);{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
        </code>
      </pre>
                <p id="e1083d45-5f05-416b-8adb-781bea4d6b28" className=""></p>
                <p id="28af461e-52f6-4fdd-b3e1-77e6a822cd43" className="">
                    <strong>Note:&nbsp;By default, all members of a class are&nbsp;</strong>
                    <code>
                        <strong>private</strong>
                    </code>
                    <strong>&nbsp;if you don't specify an access modifier:</strong>
                    <br />
                    <br />
                    <br />
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="c6bb3138-489f-47f3-9f0f-8b6169c15ff4" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          class Car{"\n"}
            {"{"}
            {"\n"}
            {"  "}string model;{"  "}// private{"\n"}
            {"  "}string year;{"   "}// private{"\n"}
            {"}"}
        </code>
      </pre>
                <p id="93e5f554-01f7-4046-b072-648f78d24e73" className=""></p>
                <h1 id="9c5f6904-25d5-4f67-b599-460e32c5bab5" className="">
                    Why Encapsulation?
                </h1>
                <ul id="6f0316b6-3ddc-44ba-bd1d-81f06b1fbcae" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        Better control of class members (reduce the possibility of yourself
                        (or others) to mess up the code)
                    </li>
                </ul>
                <ul id="1869c2db-b610-478c-8bb1-e61d606bf9bf" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        Fields can be made&nbsp;<strong>read-only</strong>&nbsp;(if you only
                        use the&nbsp;<code>get</code>&nbsp;method), or&nbsp;
                        <strong>write-only</strong>&nbsp;(if you only use the&nbsp;
                        <code>set</code>&nbsp;method)
                    </li>
                </ul>
                <ul id="16db1113-2001-49db-acf2-b64de911853a" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        Flexible: the programmer can change one part of the code without
                        affecting other parts
                    </li>
                </ul>
                <ul id="726809e4-076f-4e99-acfa-2a6b4d1f45cf" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>Increased security of data</li>
                </ul>
                <p id="34a389e4-2616-4c87-b3f1-82e90118e2bf" className=""></p>
                <h3 id="d8325b8f-e0bc-43cb-acef-3510e8bb3528" className="">
                    <strong>Properties (Get and Set)</strong>
                </h3>
                <p id="41d973f0-c1ca-4441-befb-34b7edccf138" className="">
                    The meaning of&nbsp;<strong>Encapsulation</strong>, is to make sure that
                    "sensitive" data is hidden from users. To achieve this, you must:
                </p>
                <ul id="cb8aa725-f79b-47f3-915c-8a051a7b3848" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        declare fields/variables as&nbsp;<code>private</code>
                    </li>
                </ul>
                <ul id="f00d45f0-78a6-42c1-8e8e-f628f9f72fdf" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        provide&nbsp;<code>public</code>&nbsp;<code>get</code>&nbsp;and&nbsp;
                        <code>set</code>&nbsp;methods, through&nbsp;
                        <strong>properties</strong>, to access and update the value of a&nbsp;
                        <code>private</code>&nbsp;field
                    </li>
                </ul>
                <p id="d9cc528f-e253-4930-8e70-b3ff1a634f72" className="">
                    Example:{" "}
                </p>
                <p id="ffefb08f-7d99-41aa-963e-ee7c8a95d7e8" className=""></p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="c097ba17-a747-4573-8468-7d098efaa095" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          class Person{"\n"}
            {"{"}
            {"\n"}
            {"  "}private string name; // field{"\n"}
            {"  "}public string Name{"   "}// property{"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}get {"{"} return name; {"}"}
            {"\n"}
            {"    "}set {"{"} name = value; {"}"}
            {"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}class Program{"\n"}
            {"{"}
            {"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Person myObj = new Person();{"\n"}
            {"    "}myObj.Name = "Liam";{"\n"}
            {"    "}Console.WriteLine(myObj.Name);{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
        </code>
      </pre>
                <p id="13296400-eb4d-4fc4-80c4-eb5e65d53568" className="">
                    Another example in Stack overflow:
                </p>
                <p id="d07d7ede-922f-422a-b339-4bc2b93a8fc8" className="">
                    1:{" "}
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="17937b71-7730-43c7-a9e8-887b3c609d6f" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          using System;{"\n"}using System.Collections.Generic;{"\n"}using
          System.Text;{"\n"}
            {"\n"}namespace MyFirstProject{"\n"}
            {"{"}
            {"\n"}
            {"    "}class Student{"\n"}
            {"    "}
            {"{"}
            {"\n"}
            {"        "}public string name;{"\n"}
            {"        "}public string gender;{"\n"}
            {"        "}public Student(string cName, string cGender){"\n"}
            {"        "}
            {"{"}
            {"\n"}
            {"            "}name = cName;{"\n"}
            {"            "}gender= cGender;{"\n"}
            {"        "}
            {"}"}
            {"\n"}
            {"\n"}
            {"     "}
            {"}"}
            {"\n"}
            {"}"}
        </code>
      </pre>
                <p id="8d6f323c-8b20-4d0c-8b9a-6cec28d06a20" className="">
                    In Main
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="1b2c7c5a-fe47-4fba-b4f4-24d5c54121dd" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          {" "}
            Student s = new Student("Some name", "Superman"); //Gender is
          superman, It works but it is meaningless{"\n"}{" "}
            Console.WriteLine(s.Gender);
        </code>
      </pre>
                <p id="5d35c343-840a-4ccd-9934-5098408b4104" className="">
                    2:{" "}
                </p>
                <p id="fb6f0870-02aa-497f-955b-497ac49e4d78" className="">
                    <strong>With setters and getters</strong>
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="e3d7a735-1e27-42a2-9706-ffe81b47b3fa" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          using System;{"\n"}using System.Collections.Generic;{"\n"}using
          System.Text;{"\n"}
            {"\n"}namespace MyFirstProject{"\n"}
            {"{"}
            {"\n"}
            {"    "}class Student{"\n"}
            {"    "}
            {"{"}
            {"\n"}
            {"        "}public string name;{"\n"}
            {"        "}private string gender;{"\n"}
            {"        "}public Student(string cName, string cGender){"\n"}
            {"        "}
            {"{"}
            {"\n"}
            {"            "}name = cName;{"\n"}
            {"            "}Gender = cGender;{"\n"}
            {"        "}
            {"}"}
            {"\n"}
            {"\n"}
            {"        "}public string Gender{"\n"}
            {"        "}
            {"{"}
            {"\n"}
            {"            "}get {"{"} return gender; {"}"}
            {"\n"}
            {"            "}set{"\n"}
            {"            "}
            {"{"}
            {"\n"}
            {"                "}if (value == "Male" || value == "Female" || value
          == "Other"){"\n"}
            {"                "}
            {"{"}
            {"\n"}
            {"                    "}gender = value;{"\n"}
            {"                "}
            {"}"}
            {"\n"}
            {"                "}else{"\n"}
            {"                "}
            {"{"}
            {"\n"}
            {"                    "}throw new ArgumentException("Invalid value
          supplied");{"\n"}
            {"                "}
            {"}"}
            {"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"        "}
            {"}"}
            {"\n"}
            {"    "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
        </code>
      </pre>
                <p id="3726988b-cd95-4efb-aede-0789c77c5b18" className="">
                    In Main:
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="a24eb1e5-6d7c-4d02-9c40-d406eef58ec0" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          {"  "}Student s = new Student("somename", "Other"); // Here you can
          set only those three values otherwise it throws ArgumentException.
            {"\n"}Console.WriteLine(s.Gender);
        </code>
      </pre>
                <p id="974266a7-da9e-4b5d-b690-60d7b8077669" className=""></p>
                <h1 id="d4091ce7-f878-4054-8ec3-ab7b792cb99f" className="">
                    Need of Public and Private
                </h1>
                <p id="284a4c16-1361-4a85-8d1c-d85d9d416581" className="">
                    public : // is read and writeable from any whera
                </p>
                <p id="a2c489a1-0195-460f-a187-ef4739ca5d71" className="">
                    private : /* not readable and writeable ;
                    <strong>
                        {" "}
                        to modify only readable or writeable, we should use getter and setter
                    </strong>
                </p>
                <h1 id="8183b88d-1144-41d8-ae4b-bc25b90b368e" className="">
                    Inheritance (Derived and Base Class)
                </h1>
                <p id="d0ed5971-9e44-4f28-bf9c-0ab8bf0196ed" className="">
                    In C#, it is possible to inherit fields and methods from one class to
                    another. We group the "inheritance concept" into two categories:
                </p>
                <ul id="a5ec7750-dcb0-4413-8f03-f5e90b4438f8" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        <strong>Derived Class</strong>&nbsp;(child) - the class that inherits
                        from another class
                    </li>
                </ul>
                <ul id="8a01a855-d126-47c4-9a05-17543f9a9c70" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        <strong>Base Class</strong>&nbsp;(parent) - the class being inherited
                        from
                    </li>
                </ul>
                <p id="e2e460af-2a31-48e2-8219-7a450beaaeef" className="">
                    To inherit from a class, use the&nbsp;<code>:</code>&nbsp;symbol.
                </p>
                <p id="85ebdcee-880b-4130-a60a-d4cc032d8771" className="">
                    In the example below, the&nbsp;<code>Car</code>&nbsp;class (child)
                    inherits the fields and methods from the&nbsp;<code>Vehicle</code>
                    &nbsp;class (parent):
                </p>
                <p id="cdf75a5b-7330-408f-bfdc-2db2b0a82365" className="">
                    Example :{" "}
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="b0581133-1e09-4876-898f-415105e0dfe2" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          class Vehicle{"  "}// base class (parent){"\n"}
            {"{"}
            {"\n"}
            {"  "}public string brand = "Ford";{"  "}// Vehicle field{"\n"}
            {"  "}public void honk(){"             "}// Vehicle method{"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Console.WriteLine("Tuut, tuut!");{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}class Car : Vehicle{"  "}// derived class (child){"\n"}
            {"{"}
            {"\n"}
            {"  "}public string modelName = "Mustang";{"  "}// Car field{"\n"}
            {"}"}
            {"\n"}
            {"\n"}class Program{"\n"}
            {"{"}
            {"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}// Create a myCar object{"\n"}
            {"    "}Car myCar = new Car();{"\n"}
            {"\n"}
            {"    "}// Call the honk() method (From the Vehicle class) on the
          myCar object{"\n"}
            {"    "}myCar.honk();{"\n"}
            {"\n"}
            {"    "}// Display the value of the brand field (from the Vehicle
          class) and the value of the modelName from the Car class{"\n"}
            {"    "}Console.WriteLine(myCar.brand + " " + myCar.modelName);{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
        </code>
      </pre>
                <p id="2c136934-87ea-4c2b-93a5-c3f3e809c5ac" className="">
                    It is useful for code reusability: reuse fields and methods of an
                    existing class when you create a new class.
                </p>
                <h2 id="772a5abb-b81e-4a4c-a07e-79836c07f91c" className="">
                    The sealed Keyword
                </h2>
                <p id="35496767-b0f8-443c-a530-fc949a43789e" className="">
                    If you don't want other classes to inherit from a class, use the&nbsp;
                    <code>sealed</code>&nbsp;keyword:
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="f599fe12-deba-4d43-a511-4645da7bb18f" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          sealed class Vehicle{"\n"}
            {"{"}
            {"\n"}
            {"  "}...{"\n"}
            {"}"}
            {"\n"}
            {"\n"}class Car : Vehicle{"{"}
            {"\n"}
            {"  "}...{"\n"}
            {"}"}
            {"\n"}
            {"\n"}// output: 'Car': cannot derive from sealed type 'Vehicle'
        </code>
      </pre>
                <h1 id="8043a562-7916-44e9-ae7d-513f0692c962" className="">
                    Polymorphism and Overriding Methods
                </h1>
                <p id="508ef1d9-21f7-4a21-bdc2-26ed3eacc5f0" className="">
                    Polymorphism means "many forms", and it occurs when we have many classes
                    that are related to each other by inheritance.
                </p>
                <p id="78d3718b-1f71-4357-be6d-4003bdecba5c" className="">
                    Like we specified in the previous chapter;&nbsp;
                    <strong>
                        <a href="https://www.w3schools.com/cs/cs_inheritance.php">
                            Inheritance
                        </a>
                    </strong>
                    &nbsp;lets us inherit fields and methods from another class.&nbsp;
                    <strong>Polymorphism</strong>&nbsp;uses those methods to perform
                    different tasks. This allows us to perform a single action in different
                    ways.
                </p>
                <p id="d7d53739-54f5-4f45-8782-82ca09351414" className="">
                    For example, think of a base class called&nbsp;<code>Animal</code>
                    &nbsp;that has a method called&nbsp;<code>animalSound()</code>. Derived
                    classes of Animals could be Pigs, Cats, Dogs, Birds - And they also have
                    their own implementation of an animal sound (the pig oinks, and the cat
                    meows, etc.):
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="4deac5e0-3322-4388-b1c7-4005fa0486c9" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          class Animal{"  "}// Base class (parent){"\n"}
            {"{"}
            {"\n"}
            {"  "}publicvirtual void animalSound(){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Console.WriteLine("The animal makes a sound");{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}class Pig : Animal{"  "}// Derived class (child){"\n"}
            {"{"}
            {"\n"}
            {"  "}publicoverride void animalSound(){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Console.WriteLine("The pig says: wee wee");{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}class Dog : Animal{"  "}// Derived class (child){"\n"}
            {"{"}
            {"\n"}
            {"  "}publicoverride void animalSound(){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Console.WriteLine("The dog says: bow wow");{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}class Program{"\n"}
            {"{"}
            {"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Animal myAnimal = new Animal();{"  "}// Create a Animal object
            {"\n"}
            {"    "}Animal myPig = new Pig();{"  "}// Create a Pig object{"\n"}
            {"    "}Animal myDog = new Dog();{"  "}// Create a Dog object{"\n"}
            {"\n"}
            {"    "}myAnimal.animalSound();{"\n"}
            {"    "}myPig.animalSound();{"\n"}
            {"    "}myDog.animalSound();{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
        </code>
      </pre>
                <p id="1bfd2c8c-53d8-4e7a-8300-fadca77af282" className="">
                    The output will be:
                </p>
                <p id="69f6903b-c3a2-4005-8bbd-aebf6b188ee8" className="">
                    <code>
                        The animal makes a soundThe pig says: wee weeThe dog says: bow wow
                    </code>
                </p>
                <p id="8d9e19b2-4a2a-4f37-aad6-1d1822f6b526" className=""></p>
                <p id="784210b7-58df-4c5d-b379-8a3e0c211ee6" className="">
                    <code>virtual</code>&nbsp;keyword to the method inside the base class,
                    and by using the&nbsp;<code>override</code>&nbsp;keyword for each
                    derived class methods:
                    <br />
                    <br />
                    if we don’t use virtual , it will override buy the base classe’s
                    function . then output will be <br />
                </p>
                <p id="2ffe0545-4729-4df1-8551-5af8bbf9abae" className="">
                    The animal makes a sound
                </p>
                <p id="67e7afa5-32be-450b-9052-5905ab902a13" className="">
                    The animal makes a sound
                </p>
                <p id="7a81d8e1-a0bb-46a4-842e-01835e71d4a8" className="">
                    The animal makes a sound
                </p>
                <h1 id="1458ac57-ee9c-4a90-832e-c3fff69c6987" className="">
                    Abstract Classes and Methods
                </h1>
                <p id="2e2b3491-1ac3-4f8b-8519-25be924c3f92" className="">
                    Data&nbsp;<strong>abstraction</strong>&nbsp;is the process of hiding
                    certain details and showing only essential information to the user.
                </p>
                <p id="5e960cc6-f44a-4e0d-8225-348d2141e702" className="">
                    Abstraction can be achieved with either&nbsp;
                    <strong>abstract classes</strong>&nbsp;or&nbsp;
                    <strong>
                        <a href="https://www.w3schools.com/cs/cs_interface.php">interfaces</a>
                    </strong>
                </p>
                <p id="83c2b586-65be-4cc2-b3cd-c667af55bd35" className="">
                    Example:{" "}
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="8e52ee98-bf42-41d2-aa48-fbec8c3898f4" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          // Abstract class{"\n"}abstract class Animal{"\n"}
            {"{"}
            {"\n"}
            {"  "}// Abstract method (does not have a body){"\n"}
            {"  "}public abstract void animalSound();{"\n"}
            {"  "}// Regular method{"\n"}
            {"  "}public void sleep(){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Console.WriteLine("Zzz");{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}// Derived class (inherit from Animal){"\n"}class Pig : Animal
            {"{"}
            {"\n"}
            {"  "}public override void animalSound(){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}// The body of animalSound() is provided here{"\n"}
            {"    "}Console.WriteLine("The pig says: wee wee");{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}class Program{"\n"}
            {"{"}
            {"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Pig myPig = new Pig(); // Create a Pig object{"\n"}
            {"    "}myPig.animalSound();{"  "}// Call the abstract method{"\n"}
            {"    "}myPig.sleep();{"  "}// Call the regular method{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
        </code>
      </pre>
                <h1 id="62637a19-c191-437b-85de-fa2cecb376fa" className="">
                    Interfaces
                </h1>
                <p id="c60b65bb-9138-4e99-820f-38fe0bfe3c0f" className="">
                    Another way to achieve&nbsp;
                    <a href="https://www.w3schools.com/cs/cs_abstract.php">abstraction</a>
                    &nbsp;in C#, is with interfaces.
                </p>
                <p id="9dd7473a-c98e-42f1-b474-f8c5c4efb23a" className="">
                    An&nbsp;<code>interface</code>&nbsp;is a completely "
                    <strong>abstract class</strong>", which can only contain abstract
                    methods and properties
                </p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="27a4893d-37ee-4095-a607-8c746f7aa3a1" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          // Interface{"\n"}interface IAnimal{"\n"}
            {"{"}
            {"\n"}
            {"  "}void animalSound(); // interface method (does not have a body)
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}// Pig "implements" the IAnimal interface{"\n"}class Pig :
          IAnimal{"\n"}
            {"{"}
            {"\n"}
            {"  "}public void animalSound(){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}// The body of animalSound() is provided here{"\n"}
            {"    "}Console.WriteLine("The pig says: wee wee");{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}class Program{"\n"}
            {"{"}
            {"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Pig myPig = new Pig();{"  "}// Create a Pig object{"\n"}
            {"    "}myPig.animalSound();{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
        </code>
      </pre>
                <h3 id="c0469bdf-ef44-4b4c-b9e7-75bc4be14c66" className="">
                    Notes on Interfaces:
                </h3>
                <ul id="54d3d3eb-eafb-4136-8cfa-75d45256c094" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        Like&nbsp;<strong>abstract classes</strong>, interfaces&nbsp;
                        <strong>cannot</strong>&nbsp;be used to create objects (in the example
                        above, it is not possible to create an "IAnimal" object in the Program
                        class)
                    </li>
                </ul>
                <ul id="75d57e06-a038-4484-843d-7de82d435803" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        Interface methods do not have a body - the body is provided by the
                        "implement" class
                    </li>
                </ul>
                <ul id="e34bcef2-30e1-4414-aa8f-0c5ce5b2e385" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        On implementation of an interface, you must override all of its
                        methods
                    </li>
                </ul>
                <ul id="f2c5e2e4-99e7-4d17-82fc-678caad438e2" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        Interfaces can contain properties and methods, but not
                        fields/variables
                    </li>
                </ul>
                <ul id="72635ae5-7c35-4f95-baa3-4c09116921f5" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        Interface members are by default&nbsp;<code>abstract</code>
                        &nbsp;and&nbsp;<code>public</code>
                    </li>
                </ul>
                <ul id="6a7facba-e7e1-4b9b-9f65-37ff8cdfe584" className="bulleted-list">
                    <li style={{ listStyleType: "disc" }}>
                        An interface cannot contain a constructor (as it cannot be used to
                        create objects)
                    </li>
                </ul>
                <h3 id="8be6222a-98ea-462e-8ac7-c4020f7962c2" className="">
                    Why And When To Use Interfaces?
                </h3>
                <p id="183e8c07-232f-44ce-91d7-0518c19743c8" className="">
                    1) To achieve security - hide certain details and only show the
                    important details of an object (interface).
                </p>
                <p id="597a0220-bb84-46d0-bab7-1b6008b55a04" className="">
                    2) C# does not support "multiple inheritance" (a class can only inherit
                    from one base class). However, it can be achieved with interfaces,
                    because the class can&nbsp;<strong>implement</strong>&nbsp;multiple
                    interfaces.&nbsp;<strong>Note:</strong>&nbsp;To implement multiple
                    interfaces, separate them with a comma (see example below).
                </p>
                <h3 id="df060bb0-97ed-405d-8764-cf31c574add3" className="">
                    <strong>Multiple Interfaces</strong>
                </h3>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="711f9c26-b19f-4a1f-bf14-f1dc3ac220a8" className="code">
        <code
            className="language-C#"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          interface IFirstInterface{"\n"}
            {"{"}
            {"\n"}
            {"  "}void myMethod(); // interface method{"\n"}
            {"}"}
            {"\n"}
            {"\n"}interface ISecondInterface{"\n"}
            {"{"}
            {"\n"}
            {"  "}void myOtherMethod(); // interface method{"\n"}
            {"}"}
            {"\n"}
            {"\n"}// Implement multiple interfaces{"\n"}class DemoClass :
          IFirstInterface, ISecondInterface{"\n"}
            {"{"}
            {"\n"}
            {"  "}public void myMethod(){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Console.WriteLine("Some text..");{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"  "}public void myOtherMethod(){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Console.WriteLine("Some other text...");{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
            {"\n"}
            {"\n"}class Program{"\n"}
            {"{"}
            {"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}DemoClass myObj = new DemoClass();{"\n"}
            {"    "}myObj.myMethod();{"\n"}
            {"    "}myObj.myOtherMethod();{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
        </code>
      </pre>
                <h1 id="99dda84a-cd3f-4686-8049-abfab81f0268" className="">
                    C# Enums
                </h1>
                <p id="7ad7d91f-450a-490b-ac84-750c5e7dee5d" className="">
                    An&nbsp;<code>enum</code>&nbsp;is a special "class" that represents a
                    group of&nbsp;<strong>constants</strong>&nbsp;(unchangeable/read-only
                    variables).
                </p>
                <p id="31ac68af-dd8f-48fd-a4e4-90e3686bb852" className="">
                    To create an&nbsp;<code>enum</code>, use the&nbsp;<code>enum</code>
                    &nbsp;keyword (instead of class or interface), and separate the enum
                    items with a comma:
                </p>
                <h1 id="18772a3d-d38e-439e-a93a-c747387f38fc" className="">
                    Example
                </h1>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="eef439dd-5293-49ad-a986-e3da5c7658ca" className="code">
        <code
            className="language-Java"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          class Program{"\n"}
            {"{"}
            {"\n"}
            {"  "}enum Level{"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Low,{"\n"}
            {"    "}Medium,{"\n"}
            {"    "}High{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"  "}static void Main(string[] args){"\n"}
            {"  "}
            {"{"}
            {"\n"}
            {"    "}Level myVar = Level.Medium;{"\n"}
            {"    "}Console.WriteLine(myVar);{"\n"}
            {"  "}
            {"}"}
            {"\n"}
            {"}"}
        </code>
      </pre>
                <p id="bc91c2ca-f0c6-4fa1-b15c-1195bfb7c441" className=""></p>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
                    integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <pre id="2b13dc36-2a8c-4ac3-849e-40d2e39d72be" className="code">
        <code
            className="language-Java"
            style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}
        >
          enum Months{"\n"}
            {"{"}
            {"\n"}
            {"  "}January,{"    "}// 0{"\n"}
            {"  "}February,{"   "}// 1{"\n"}
            {"  "}March=6,{"    "}// 6{"\n"}
            {"  "}April,{"      "}// 7{"\n"}
            {"  "}May,{"        "}// 8{"\n"}
            {"  "}June,{"       "}// 9{"\n"}
            {"  "}July{"        "}// 10{"\n"}
            {"}"}
            {"\n"}
            {"\n"}static void Main(string[] args){"\n"}
            {"{"}
            {"\n"}
            {"  "}int myNum = (int) Months.April;{"\n"}
            {"  "}Console.WriteLine(myNum);{"\n"}
            {"}"}
        </code>
      </pre>
                <p id="a8b09ce1-2316-478b-80f6-f5c0fd13d0ed" className=""></p>
                <p id="21c662b2-762e-4418-8b5a-b278bcf06412" className=""></p>
            </div>
        </article>
        <span className="sans" style={{ fontSize: 14, paddingTop: "2em" }} />
    </>
  )
}