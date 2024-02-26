/*Arryas*/

/**/




using System;
using System.Collections;

class Program
{
    static void Main(string[] args)
    {
        int[] myArray = { 1, 2, 3, 4, 5 };
        string[] names = { "rafael", "bruna", "vitoria" };
        for(int i = 0; i < names.Length; i++)
        {
            Console.WriteLine(names[i]);
        }
        for(int i  = 0; i < myArray.Length; i++)
        {
            Console.WriteLine(myArray[i]);
        }
    }
}