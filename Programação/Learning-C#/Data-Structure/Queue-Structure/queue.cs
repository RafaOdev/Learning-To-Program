using System;
using System.Collections;

namespace CreatePeoples
{
    class People
    {
        public string Name {get; set;}
        public int Age {get; set;}
        public People(string name, int age)
        {
            Name = name;
            Age = age;
        }
    }

    class Create
    {
       static void Main()
       {
        Queue myqueue = new Queue();
        People people1 = new People("Rafael", 19);
        myqueue.Enqueue(people1.Name);
        myqueue.Enqueue(people1.Age);
        Console.WriteLine(myqueue.Count);

         foreach(var item in myqueue)
         {
            Console.WriteLine(item);
         }
       }
    }
}