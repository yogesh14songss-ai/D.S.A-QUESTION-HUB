/*
 * DSA Assignment Website
 * Add each solution and expected output directly to the question object below.
 * This is a read-only assignment website: all content is defined in this file.
 * There are no browser editors, autosave, or copy buttons.
 */
var topics = [
  {
    name: "SINGLE DIMENSION ARRAYS",
    questions: [
      {
        q: "Read an array from the user and display every element.",
        answer: `#include<stdio.h>
#include<stdlib.h>

int main()
{  
   int size;

   printf("Enter the size of the array: ");
   scanf("%d", &size);
   int arr[size];
   printf("Enter the elements of the array: ");
    for(int i = 0; i < size; i++)
    {
        scanf("%d", &arr[i]);
    }

    printf("The elements of the array are: ");
    for(int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
}`,
        output: `
Enter the size of the array: 5
Enter the elements of the array: 12
12
12
32
34
The elements of the array are: 12 12 12 32 34  `,
      },
      {
        q: "Display the elements of an array in reverse order.",
        answer: `#include<stdio.h>
#include<stdlib.h>

int main()
{  
   int size;

   printf("Enter the size of the array: ");
   scanf("%d", &size);
   int arr[size];
   printf("Enter the elements of the array: ");
    for(int i = 0; i < size; i++)
    {
        scanf("%d", &arr[i]);
    }

    printf("The elements of the array are: ");
    for(int i = --size; i > -1; i--)
    {
        printf("%d ", arr[i]);
        printf("\n");
    }
}`,
        output: `Enter the size of the array: 5
Enter the elements of the array: 1
2
3
4
5
The elements of the array are: 5 
4 
3 
2 
1  `,
      },
      {
        q: "Copy one array into a second array.",
        answer: `#include<stdio.h>

int main()
{    int size;
    printf("enter the element size\n");
    scanf("%d",&size);
    int a[size];
    int b[size];
    
    printf("enter the elements\n");
    for (int i = 0; i < size; i++)
    {   
        scanf("%d",&a[i]);
        b[i]=a[i];
    }

    for (int i = 0; i < size; i++)
    {   printf("\ncopied arrays values is");
        printf("%d",b[i]);
    }
    
    

    

}`,
        output: `enter the element size
6
enter the elements
1
2
3
4
5
6

copied arrays values is1
copied arrays values is2
copied arrays values is3
copied arrays values is4
copied arrays values is5
copied arrays values is6 `,
      },
      {
        q: "Copy an array into another array in reverse order.",
        answer: `#include<stdio.h>

int main()
{   int size;
    printf("enter the elements size ");
    scanf("%d",&size);
    int arr[size];
    int array[size];
    
    int b=size;
     printf("enter the elements\n");
    for (int i = 0; i < size; i++)
    {   
        b--;
        scanf("%d",&arr[i]);
        array[b]=arr[i];

    }
      for (int i = 0; i < size; i++)
    {   printf("\ncopied or reverse order arrays values is");
        printf("%d",array[i]);
    }
}`,
        output: `enter the elements size 5
enter the elements
1
2
3
4
5

copied or reverse order arrays values is5
copied or reverse order arrays values is4
copied or reverse order arrays values is3
copied or reverse order arrays values is2
copied or reverse order arrays values is1`,
      },
      {
        q: "Print only the even elements of an array.",
        answer: `#include <stdio.h>

int main()
{
    int size;

    printf("Enter the size of the array: ");
    scanf("%d", &size);
    int arr[size];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < size; i++)
    {  
        scanf("%d", &arr[i]);
    }

    for (int i = 0; i < size; i++)
    {  
        if (arr[i]%2==0)
    {
        
        printf("the even elements:-%d\n",arr[i]);
    }
    
    }
    
}`,
        output: `Enter the size of the array: 5
Enter the elements of the array: 7
6
5
4
3
the even elements:-6
the even elements:-4`,
      },
      {
        q: "Print only the positive elements of an array.",
        answer: `#include<stdio.h>

int main()
{
    
    int size;

    printf("Enter the size of the array: ");
    scanf("%d", &size);
    int arr[size];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < size; i++)
    {  
        scanf("%d", &arr[i]);
    }
    for(int i=0; i<size;i++)
    {
        if(arr[i]>0)
        {
             printf(" positive number:-  %d",arr[i]);
        }
    }
}`,
        output: `Enter the size of the array: 7
Enter the elements of the array: 1
2
3
4
0
-5
-7
 positive number:-  1 positive number:-  2 positive number:-  3 positive number:-  4`,
      },
      {
        q: "Square every element in an array and display the result.",
        answer: `#include <stdio.h>

int main()
{

    int size;

    printf("Enter the size of the array: ");
    scanf("%d", &size);
    int arr[size];
    int array[size];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < size; i++)
    {
        scanf("%d", &arr[i]);
    }
    for (int i = 0; i < size; i++)
    {
        array[i] = arr[i] * arr[i];
        printf("\n square is :-%d", array[i]);
    }
}
`,
        output: `Enter the size of the array: 5
Enter the elements of the array: 1
2
3
4
5

 square is :-1
 square is :-4
 square is :-9
 square is :-16
 square is :-25`,
      },
      {
        q: "Find the maximum and minimum elements in an array.",
        answer: `#include <stdio.h>

int main()
{
    int size;
    int max, min;
    
    printf("Enter the size of the array: ");
    scanf("%d", &size);
    
    int arr[size]; 
    
    printf("Enter the elements of the array: ");
    for (int i = 0; i < size; i++)
    {
        scanf("%d", &arr[i]);
    }
    
    
    min = arr[0];
    max = arr[0];
    
    
    for (int i = 1; i < size; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
        if (arr[i] < min)
        {
            min = arr[i];
        }
    }
    
    printf("maximum number is :- %d \nminimum number is :-%d\n", max, min);
    
    return 0;
}
`,
        output: `Enter the size of the array: 5
                Enter the elements of the array: 4
                3
                4
                3
                2
                maximum number is :-4 
                minimum number is :-2`,
      },
      {
        q: "Find the k-th smallest element in an array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Calculate the sum of all elements in an array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find and display duplicate values in an array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Remove duplicate values by replacing repeated occurrences with zero.",
        answer: ``,
        output: ``,
      },
      {
        q: "Count the duplicate values in an array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Print all possible combinations of array elements.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find and display all palindrome numbers stored in an array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Read two arrays and check whether they are identical.",
        answer: ``,
        output: ``,
      },
      {
        q: "Merge two sorted arrays and keep the merged result sorted.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find a local minimum: an element smaller than its neighbouring elements.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find a local maximum: an element larger than its neighbouring elements.",
        answer: ``,
        output: ``,
      },
      {
        q: "Solve the Trapping Rain Water problem for an elevation array.",
        answer: ``,
        output: ``,
      },
    ],
  },
  {
    name: "STRINGS",
    questions: [
      {
        q: "Convert a user-entered string to uppercase.",
        answer: ``,
        output: ``,
      },
      {
        q: "Convert a user-entered string to lowercase.",
        answer: ``,
        output: ``,
      },
      {
        q: "Convert a string to sentence case.",
        answer: ``,
        output: ``,
      },
      {
        q: "Convert a string to title case.",
        answer: ``,
        output: ``,
      },
      {
        q: "Toggle the case of every alphabetic character.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find the length of a string.",
        answer: ``,
        output: ``,
      },
      {
        q: "Read two strings and determine whether they are equal.",
        answer: ``,
        output: ``,
      },
      {
        q: "Concatenate two strings into a third string.",
        answer: ``,
        output: ``,
      },
      {
        q: "Copy a string into another string variable.",
        answer: ``,
        output: ``,
      },
      {
        q: "Read an index and print the character at that position.",
        answer: ``,
        output: ``,
      },
      {
        q: "Check whether a string is a palindrome.",
        answer: ``,
        output: ``,
      },
      {
        q: "Print each character of a string on a separate line.",
        answer: ``,
        output: ``,
      },
      {
        q: "Copy the reverse of a string into another string.",
        answer: ``,
        output: ``,
      },
      {
        q: "Display the ASCII-value difference between adjacent characters in a string.",
        answer: ``,
        output: ``,
      },
      {
        q: "Search for a given character in a string.",
        answer: ``,
        output: ``,
      },
      {
        q: "Print the index of a character, or -1 when it is absent.",
        answer: ``,
        output: ``,
      },
      {
        q: "Count the vowels in a string.",
        answer: ``,
        output: ``,
      },
      {
        q: "Convert a numeric string to an integer.",
        answer: ``,
        output: ``,
      },
      {
        q: "Convert a numeric string to a floating-point value.",
        answer: ``,
        output: ``,
      },
      {
        q: "Count the characters, words, spaces, and lines in input text.",
        answer: ``,
        output: ``,
      },
      {
        q: "Generate all permutations of a string such as ABCDE.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort the characters of a string in ascending order.",
        answer: ``,
        output: ``,
      },
      {
        q: "Count how often a given word occurs in a sentence.",
        answer: ``,
        output: ``,
      },
      {
        q: "Replace a specified word in a sentence with another word.",
        answer: ``,
        output: ``,
      },
      {
        q: "Trim spaces from the beginning and end of a string.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find the starting index of the second word in a sentence.",
        answer: ``,
        output: ``,
      },
      {
        q: "Display text using a user-selected alignment: left, centre, or right.",
        answer: ``,
        output: ``,
      },
      {
        q: "Create a 10-word dictionary with create, delete, and search operations.",
        answer: ``,
        output: ``,
      },
      {
        q: "Store the ASCII values of 10 string characters in an integer array.",
        answer: ``,
        output: ``,
      },
    ],
  },
  {
    name: "RECURSION",
    questions: [
      {
        q: "Calculate the factorial of a number using recursion.",
        answer: ``,
        output: ``,
      },
      {
        q: "Generate Fibonacci numbers using recursion.",
        answer: ``,
        output: ``,
      },
      {
        q: "Calculate the sum of natural numbers up to 10 using recursion.",
        answer: ``,
        output: ``,
      },
      {
        q: "Convert a number to binary using recursion.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find the largest element in an integer array using recursion.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find the smallest element in an integer array using recursion.",
        answer: ``,
        output: ``,
      },
      {
        q: "Calculate the sum of the digits of a user-entered number using recursion.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find the arithmetic mean of an integer array using recursion.",
        answer: ``,
        output: ``,
      },
    ],
  },
  {
    name: "MULTI-DIMENSION ARRAYS",
    questions: [
      {
        q: "Read and display a matrix containing 4 rows and 2 columns.",
        answer: ``,
        output: ``,
      },
      {
        q: "Read two matrices, add them, and display the result.",
        answer: ``,
        output: ``,
      },
      {
        q: "Read two matrices, subtract them, and display the result.",
        answer: ``,
        output: ``,
      },
      {
        q: "Read two compatible matrices, multiply them, and display the result.",
        answer: ``,
        output: ``,
      },
      {
        q: "Copy a matrix into another matrix of the same dimensions.",
        answer: ``,
        output: ``,
      },
      {
        q: "Multiply a matrix by a scalar and display the result.",
        answer: ``,
        output: ``,
      },
      {
        q: "Build a Tic-Tac-Toe game using a two-dimensional array.",
        answer: ``,
        output: ``,
      },
    ],
  },
  {
    name: "STACKS",
    questions: [
      {
        q: "Implement an integer-array stack with push, pop, peek, isEmpty, and isFull.",
        answer: `#include <stdio.h>
#include <stdlib.h>

int stack[5];
int top = -1;

int isEmpty()
{
    return top == -1;
}

int isFull()
{
    return top == (sizeof(stack) / sizeof(stack[0])) - 1;
}

void push(int value)
{
    if (isFull())
    {
        printf("\nStack Overflow");
        return;
    }

    top++;
    stack[top] = value;

    printf("\n%d pushed into stack", value);
}

void pop()
{
    if (isEmpty())
    {
        printf("\nStack Underflow");
        return;
    }

    printf("\n%d popped from stack", stack[top]);
    top--;
}

void peek()
{
    if (isEmpty())
    {
        printf("\nStack is empty");
        return;
    }

    printf("\nTop element: %d", stack[top]);
}

int main()
{
    int choice, value;

    do
    {
        printf("\n\n--- STACK MENU ---");
        printf("\n1. Push");
        printf("\n2. Pop");
        printf("\n3. Peek");
        printf("\n4. isEmpty");
        printf("\n5. isFull");
        printf("\n6. Exit");

        printf("\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("Enter integer: ");
            scanf("%d", &value);
            push(value);
            break;

        case 2:
            pop();
            break;

        case 3:
            peek();
            break;

        case 4:
            if (isEmpty())
                printf("\nStack is empty");
            else
                printf("\nStack is not empty");
            break;

        case 5:
            if (isFull())
                printf("\nStack is full");
            else
                printf("\nStack is not full");
            break;

        case 6:
            printf("\nProgram terminated");
            break;

        default:
            printf("\nInvalid choice");
        }

    } while (choice != 6);

    return 0;
}`,
        output: `Enter your choice: 1
Enter integer: 32

32 pushed into stack

--- STACK MENU ---
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Exit
Enter your choice: 2

32 popped from stack

--- STACK MENU ---
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Exit
Enter your choice: 3

Stack is empty

--- STACK MENU ---
1. Push
2. Pop
3. Peek
4. isEmpty
5. isFull
6. Exit
`,
      },
      {
        q: "Implement a character-array stack with push, pop, peek, isEmpty, and isFull.",
        answer: `//Implement a character-array stack with push, pop, peek, isEmpty, and isFull.

#include <stdio.h>
#include <stdlib.h>

char stack[5];
int top = -1;

int is_empty()
{
    return top == -1;
}

int is_full()
{
    return top == (sizeof(stack) / sizeof(stack[0])) - 1;
}

int push(char value)
{
    if (is_full())
    {
        return 0;
    }

    top++;
    stack[top] = value;

    return 1;
}

int pop(char *value)
{
    if (is_empty())
    {
        return 0;
    }

    *value = stack[top];
    top--;

    return 1;
}

int peek(char *value)
{
    if (is_empty())
    {
        return 0;
    }

    *value = stack[top];

    return 1;
}

int main()
{
    int choice;
    char value;

    do
    {
        printf("\n\n--- CHARACTER STACK ---");
        printf("\n1. Push");
        printf("\n2. Pop");
        printf("\n3. Peek");
        printf("\n4. Is Empty");
        printf("\n5. Is Full");
        printf("\n6. Exit");

        printf("\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
                printf("\nEnter a character: ");
                scanf(" %c", &value);

                if (push(value) == 0)
                {
                    printf("\nStack Overflow");
                }
                else
                {
                    printf("\n%c pushed into stack", value);
                }
                break;

            case 2:
                if (pop(&value) == 0)
                {
                    printf("\nStack Underflow");
                }
                else
                {
                    printf("\n%c popped from stack", value);
                }
                break;

            case 3:
                if (peek(&value) == 0)
                {
                    printf("\nStack is empty");
                }
                else
                {
                    printf("\nTop element: %c", value);
                }
                break;

            case 4:
                if (is_empty())
                {
                    printf("\nStack is empty");
                }
                else
                {
                    printf("\nStack is not empty");
                }
                break;

            case 5:
                if (is_full())
                {
                    printf("\nStack is full");
                }
                else
                {
                    printf("\nStack is not full");
                }
                break;

            case 6:
                printf("\nProgram terminated");
                break;

            default:
                printf("\nInvalid choice");
        }

    } while (choice != 6);

    return 0;
}
`,
        output: `--- CHARACTER STACK ---
1. Push
2. Pop
3. Peek
4. Is Empty
5. Is Full
6. Exit
Enter your choice: 1

Enter a character: a

a pushed into stack

--- CHARACTER STACK ---
1. Push
2. Pop
3. Peek
4. Is Empty
5. Is Full
6. Exit
Enter your choice: 1

Enter a character: b

b pushed into stack

--- CHARACTER STACK ---
1. Push
2. Pop
3. Peek
4. Is Empty
5. Is Full
6. Exit
Enter your choice: 1

Enter a character: d

d pushed into stack

--- CHARACTER STACK ---
1. Push
2. Pop
3. Peek
4. Is Empty
5. Is Full
6. Exit
Enter your choice: 1

Enter a character: asd

a pushed into stack

--- CHARACTER STACK ---
1. Push
2. Pop
3. Peek
4. Is Empty
5. Is Full
6. Exit
Enter your choice: 
Enter a character: 
s pushed into stack

--- CHARACTER STACK ---
1. Push
2. Pop
3. Peek
4. Is Empty
5. Is Full
6. Exit
Enter your choice: 
Enter a character: 
Stack Overflow

--- CHARACTER STACK ---
1. Push
2. Pop
3. Peek
4. Is Empty
5. Is Full
6. Exit
Enter your choice: 2

s popped from stack

--- CHARACTER STACK ---
1. Push
2. Pop
3. Peek
4. Is Empty
5. Is Full
6. Exit
Enter your choice: 3

Top element: a

--- CHARACTER STACK ---
1. Push
2. Pop
3. Peek
4. Is Empty
5. Is Full
6. Exit
Enter your choice: 4

Stack is not empty

--- CHARACTER STACK ---
1. Push
2. Pop
3. Peek
4. Is Empty
5. Is Full
6. Exit
Enter your choice: 5

Stack is not full

--- CHARACTER STACK ---
1. Push
2. Pop
3. Peek
4. Is Empty
5. Is Full
6. Exit
Enter your choice: 6`,
      },
      {
        q: "Implement a dynamically allocated integer-node stack with standard stack operations.",
        answer: `#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *next;
};

int is_empty(struct node *stack)
{
    if (stack == NULL)
    {
        return 1;
    }
    return 0;
}

int push(struct node **stack,int value)
{
    struct node *catch;
    catch = (struct node*) malloc(sizeof(struct node));

    if (catch == NULL)
    {
        return 0;
    }

    catch->data = value;
    catch->next = *stack;
    (*stack) = catch;

    return 1;
}

int pop(struct node **stack,int *value)
{
    if (is_empty(*stack))
    {
        return 0;
    }

    struct node *temp = NULL;
    temp = (*stack)->next;
    (*value) = (*stack)->data;
    free(*stack);
    (*stack) = temp;

    return 1;
}

int peek(struct node **stack,int *value)
{
    if (is_empty(*stack))
    {
        return 0;
    }

    *value = (*stack)->data;

    return 1;
}

int main()
{
    struct node *stack = NULL;

    int choice,value;

    do
    {
        printf("\nchoose one of the operations below: ");
        printf("\n1-------------------- Push ");
        printf("\n2-------------------- Pop ");
        printf("\n3-------------------- Peek ");
        printf("\n4-------------------- Exit ");
        printf("\nEnter the choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case (1):
        {
            printf("\nEnter the data");
            scanf("%d", &value);

            if (push(&stack, value) == 0)
            {
                printf("\n problem in allocation");
                break;
            }

            printf("\n%d stacked in link list", value);
            break;
        }

        case (2):
        {
            if (pop(&stack, &value) == 0)
            {
                printf("\n underflow");
                break;
            }

            printf("\n%d Popped from stack", value);
            break;
        }

        case (3):
        {
            if (peek(&stack, &value) == 0)
            {
                printf("\n empty");
                break;
            }

            printf("\n%d Peeked value ", value);
            break;
        }

        case (4):
        {
            break;
        }

        default:
            printf("\nInvalid Choice");
        }

    } while (choice != 4);

    return 0;
}`,
        output: `choose one of the operations below: 
1-------------------- Push 
2-------------------- Pop 
3-------------------- Peek 
4-------------------- Exit 
Enter the choice: 1

Enter the data2

2 stacked in link list
choose one of the operations below: 
1-------------------- Push 
2-------------------- Pop 
3-------------------- Peek 
4-------------------- Exit 
Enter the choice: 1

Enter the data54

54 stacked in link list
choose one of the operations below: 
1-------------------- Push 
2-------------------- Pop 
3-------------------- Peek 
4-------------------- Exit 
Enter the choice: 2

54 Popped from stack
choose one of the operations below: 
1-------------------- Push 
2-------------------- Pop 
3-------------------- Peek 
4-------------------- Exit 
Enter the choice: 3

2 Peeked value 
choose one of the operations below: 
1-------------------- Push 
2-------------------- Pop 
3-------------------- Peek 
4-------------------- Exit 
Enter the choice: 4`,
      },
      {
        q: "Implement a dynamically allocated character-node stack with standard stack operations.",
        answer: `//Implement a dynamically allocated character-node stack with standard stack operations.
#include <stdio.h>
#include <stdlib.h>

struct node
{
    char data;
    struct node *next;
};

int is_empty(struct node *stack)
{
    if (stack == NULL)
    {
        return 1;
    }
    return 0;
}

int push(struct node **stack, char value)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    if (temp == NULL)
    {
        return 0;
    }

    temp->data = value;
    temp->next = *stack;
    (*stack) = temp;

    return 1;
}

int pop(struct node **stack, char *value)
{
    if (is_empty(*stack))
    {
        return 0;
    }

    struct node *temp = NULL;
    temp = (*stack)->next;
    (*value) = (*stack)->data;
    free(*stack);
    (*stack) = temp;

    return 1;
}

int peek(struct node **stack, char *value)
{
    if (is_empty(*stack))
    {
        return 0;
    }

    *value = (*stack)->data;

    return 1;
}

int main()
{
    struct node *stack = NULL;

    int choice;
    char value;

    do
    {
        printf("\nchoose one of the operations below: ");
        printf("\n1-------------------- Push ");
        printf("\n2-------------------- Pop ");
        printf("\n3-------------------- Peek ");
        printf("\n4-------------------- Exit ");
        printf("\nEnter the choice: ");
        scanf("%d",&choice);

        switch (choice)
        {
        case (1):
        {
            printf("\nEnter the data");
            scanf(" %c", &value);

            if (push(&stack, value) == 0)
            {
                printf("\n problem in allocation");
                break;
            }

            printf("\n%c stacked in link list", value);
            break;
        }

        case (2):
        {
            if (pop(&stack, &value) == 0)
            {
                printf("\n underflow");
                break;
            }

            printf("\n%c Popped from stack", value);
            break;
        }

        case (3):
        {
            if (peek(&stack, &value) == 0)
            {
                printf("\n empty");
                break;
            }

            printf("\n%c Peeked value ", value);
            break;
        }

        case (4):
        {
            break;
        }

        default:
            printf("\nInvalid Choice");
        }

    } while (choice != 4);

    return 0;
}`,
        output: `choose one of the operations below: 
1-------------------- Push 
2-------------------- Pop 
3-------------------- Peek 
4-------------------- Exit 
Enter the choice: 1

Enter the data

 stacked in link list
choose one of the operations below: 
1-------------------- Push 
2-------------------- Pop 
3-------------------- Peek 
4-------------------- Exit 
Enter the choice: 4
PS F:\DSA\sourcefiles\stacks> gcc stk4.c
PS F:\DSA\sourcefiles\stacks> ./a       

choose one of the operations below: 
1-------------------- Push 
2-------------------- Pop 
3-------------------- Peek 
4-------------------- Exit 
Enter the choice: 1

Enter the dataa

a stacked in link list
choose one of the operations below: 
1-------------------- Push 
2-------------------- Pop 
3-------------------- Peek 
4-------------------- Exit 
Enter the choice: 1

Enter the datab

b stacked in link list
choose one of the operations below: 
1-------------------- Push 
2-------------------- Pop 
3-------------------- Peek 
4-------------------- Exit 
Enter the choice: 2

b Popped from stack
choose one of the operations below: 
1-------------------- Push 
2-------------------- Pop 
3-------------------- Peek 
4-------------------- Exit 
Enter the choice: 3

a Peeked value 
choose one of the operations below: 
1-------------------- Push 
2-------------------- Pop 
3-------------------- Peek 
4-------------------- Exit `,
      },
      {
        q: "Reverse a user-entered string using a stack.",
        answer: ``,
        output: ``,
      },
      {
        q: "Check whether brackets in an expression are properly matched using a stack.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement two integer stacks inside a single array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort a stack in ascending order using an integer array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Convert an infix expression to prefix notation using a stack.",
        answer: ``,
        output: ``,
      },
      {
        q: "Convert an infix expression to postfix notation using a stack.",
        answer: ``,
        output: ``,
      },
      {
        q: "Evaluate a prefix expression using a stack.",
        answer: ``,
        output: ``,
      },
      {
        q: "Evaluate a postfix expression using a stack.",
        answer: ``,
        output: ``,
      },
      {
        q: "Solve the Tower of Hanoi problem using stacks.",
        answer: ``,
        output: ``,
      },
    ],
  },
  {
    name: "QUEUES",
    questions: [
      {
        q: "Implement an integer-array queue with insert, delete, peek, isEmpty, and isFull.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a string-array queue with insert, delete, peek, isEmpty, and isFull.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a dynamic integer queue with standard queue operations.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a dynamic string queue with standard queue operations.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a circular integer-array queue with standard queue operations.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a circular string-array queue with standard queue operations.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement an integer-array priority queue.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a string-array priority queue.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a double-ended integer queue (deque) using an array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a double-ended string queue (deque) using an array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a dynamically allocated priority queue of integers.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a dynamically allocated priority queue of strings.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find the first circular tour that visits every petrol pump.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find the length of the longest valid parentheses substring using a queue or stack.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find the next greater element for each element in an array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find the next smaller element for each element in an array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find the first non-repeating character in a stream using a queue.",
        answer: ``,
        output: ``,
      },
      {
        q: "Reverse the first K elements of a queue.",
        answer: ``,
        output: ``,
      },
      {
        q: "Reverse an entire queue.",
        answer: ``,
        output: ``,
      },
      {
        q: "Solve the Rotten Oranges grid problem using a queue.",
        answer: ``,
        output: ``,
      },
    ],
  },
  {
    name: "LINKED LIST",
    questions: [
      {
        q: "Implement a singly linked list of integers with insertion, deletion, display, search, isEmpty, and isFull operations.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a singly circular linked list of integers with insertion, deletion, display, and search.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a doubly linked list of integers with insertion, deletion, display, and search.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a doubly circular linked list of integers with insertion, deletion, display, and search.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a singly linked list of strings with insertion, deletion, display, and search.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a singly circular linked list of strings with insertion, deletion, display, and search.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a doubly linked list of strings with insertion, deletion, display, and search.",
        answer: ``,
        output: ``,
      },
      {
        q: "Implement a doubly circular linked list of strings with insertion, deletion, display, and search.",
        answer: ``,
        output: ``,
      },
      {
        q: "Read two polynomial expressions dynamically, add them, and display the result.",
        answer: ``,
        output: ``,
      },
      {
        q: "Read two polynomial expressions dynamically, subtract them, and display the result.",
        answer: ``,
        output: ``,
      },
      {
        q: "Read two polynomial expressions dynamically, multiply them, and display the result.",
        answer: ``,
        output: ``,
      },
    ],
  },
  {
    name: "TREES",
    questions: [
      {
        q: "Construct a binary tree from its preorder and inorder traversals.",
        answer: ``,
        output: ``,
      },
      {
        q: "Perform level-order traversal of a binary tree.",
        answer: ``,
        output: ``,
      },
      {
        q: "Print the left view of a binary tree.",
        answer: ``,
        output: ``,
      },
      {
        q: "Print the right view of a binary tree.",
        answer: ``,
        output: ``,
      },
      {
        q: "Construct a binary tree from its postorder and inorder traversals.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find the maximum depth of a binary tree.",
        answer: ``,
        output: ``,
      },
      {
        q: "Create an array-based binary search tree with insert, delete, search, traversals, and minimum operations.",
        answer: ``,
        output: ``,
      },
      {
        q: "Create a dynamically allocated binary search tree with insert, delete, search, and traversals.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find the inorder predecessor and successor in a dynamically represented BST.",
        answer: ``,
        output: ``,
      },
      {
        q: "Check whether a binary search tree contains a dead end.",
        answer: ``,
        output: ``,
      },
      {
        q: "Convert a binary tree to a binary search tree using an array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find the k-th largest element in a BST represented using an array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Find the k-th smallest element in a BST represented using an array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Convert a BST preorder traversal into its postorder traversal.",
        answer: ``,
        output: ``,
      },
      {
        q: "Construct a BST from a supplied preorder traversal using arrays.",
        answer: ``,
        output: ``,
      },
      {
        q: "Construct a BST from a supplied postorder traversal using arrays.",
        answer: ``,
        output: ``,
      },
      {
        q: "Create a strict binary tree dynamically from user input.",
        answer: ``,
        output: ``,
      },
      {
        q: "Create an almost-complete binary tree dynamically from user input.",
        answer: ``,
        output: ``,
      },
      {
        q: "Create a complete binary tree dynamically from user input.",
        answer: ``,
        output: ``,
      },
      {
        q: "Count the nodes in a dynamically constructed binary search tree.",
        answer: ``,
        output: ``,
      },
    ],
  },
  {
    name: "GRAPHS",
    questions: [
      {
        q: "Read graph vertices and edges, build an adjacency matrix, and print it.",
        answer: ``,
        output: ``,
      },
      {
        q: "Represent a graph with an adjacency list and support insertion and deletion.",
        answer: ``,
        output: ``,
      },
      {
        q: "Traverse a graph represented by an adjacency matrix using depth-first search (DFS).",
        answer: ``,
        output: ``,
      },
      {
        q: "Traverse a graph represented by an adjacency list using depth-first search (DFS).",
        answer: ``,
        output: ``,
      },
      {
        q: "Traverse a graph represented by an adjacency matrix using breadth-first search (BFS).",
        answer: ``,
        output: ``,
      },
      {
        q: "Traverse a graph represented by an adjacency list using breadth-first search (BFS).",
        answer: ``,
        output: ``,
      },
    ],
  },
  {
    name: "SEARCHING ALGORITHMS",
    questions: [
      {
        q: "Perform iterative linear search on a user-provided integer array and target value.",
        answer: ``,
        output: ``,
      },
      {
        q: "Perform recursive linear search for a character in a user-provided string.",
        answer: ``,
        output: ``,
      },
      {
        q: "Perform recursive linear search on an integer array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Perform iterative linear search for a character in a string.",
        answer: ``,
        output: ``,
      },
      {
        q: "Perform iterative binary search on a user-provided integer array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Perform recursive binary search for a character in a string.",
        answer: ``,
        output: ``,
      },
      {
        q: "Perform recursive binary search on an integer array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Perform iterative binary search for a character in a string.",
        answer: ``,
        output: ``,
      },
      {
        q: "Measure the best- and worst-case behaviour of linear search on an integer array.",
        answer: ``,
        output: ``,
      },
      {
        q: "Measure the best- and worst-case behaviour of binary search on an integer array.",
        answer: ``,
        output: ``,
      },
    ],
  },
  {
    name: "SORTING ALGORITHMS",
    questions: [
      {
        q: "Sort an integer array using iterative selection sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort an integer array using recursive selection sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort an integer array using iterative bubble sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort an integer array using recursive bubble sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort an integer array using iterative insertion sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort an integer array using recursive insertion sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort an integer array using iterative merge sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort an integer array using recursive merge sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort an integer array using iterative quick sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort an integer array using recursive quick sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort a string array using iterative selection sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort a string array using recursive selection sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort a string array using iterative bubble sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort a string array using recursive bubble sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort a string array using iterative insertion sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort a string array using recursive insertion sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort a string array using iterative merge sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort a string array using recursive merge sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort a string array using iterative quick sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
      {
        q: "Sort a string array using recursive quick sort and measure best/worst-case performance.",
        answer: ``,
        output: ``,
      },
    ],
  },
];

var currentTopicIndex = -1;

function startWebsite() {
  showTopics();
  document
    .getElementById("question-search")
    .addEventListener("input", showQuestionsList);
  showAllTopicCards();
}

function showAllTopicCards() {
  var container = document.getElementById("topics-container");
  container.innerHTML = "";

  for (var i = 0; i < topics.length; i++) {
    var card = document.createElement("button");
    card.type = "button";
    card.className = "topic-card";

    var title = document.createElement("h3");
    title.textContent = topics[i].name;

    var count = document.createElement("p");
    count.textContent = topics[i].questions.length + " questions";

    card.appendChild(title);
    card.appendChild(count);
    card.onclick = makeTopicOpener(i);
    container.appendChild(card);
  }
}

function makeTopicOpener(index) {
  return function () {
    openTopic(index);
  };
}

function openTopic(index) {
  currentTopicIndex = index;
  document.getElementById("topic-title").textContent = topics[index].name;
  document.getElementById("topic-summary").textContent =
    topics[index].questions.length + " questions";
  document.getElementById("question-search").value = "";
  showQuestionsList();

  document.getElementById("topics-view").className = "hidden";
  document.getElementById("questions-view").className = "view";
  document.getElementById("answer-view").className = "hidden";
}

function showQuestionsList() {
  if (currentTopicIndex < 0) return;

  var container = document.getElementById("questions-container");
  var search = document
    .getElementById("question-search")
    .value.toLowerCase()
    .trim();
  var visibleCount = 0;
  container.innerHTML = "";

  for (var i = 0; i < topics[currentTopicIndex].questions.length; i++) {
    var question = topics[currentTopicIndex].questions[i];
    if (search && question.q.toLowerCase().indexOf(search) === -1) continue;

    var item = document.createElement("button");
    item.type = "button";
    item.className = "question-item";

    var number = document.createElement("strong");
    number.textContent = i + 1 + ". ";
    item.appendChild(number);
    item.appendChild(document.createTextNode(question.q));
    item.onclick = makeQuestionOpener(i);
    container.appendChild(item);
    visibleCount++;
  }

  if (visibleCount === 0) {
    var emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-message";
    emptyMessage.textContent = "No questions found.";
    container.appendChild(emptyMessage);
  }

  document.getElementById("question-result-count").textContent =
    visibleCount + (visibleCount === 1 ? " question" : " questions");
}

function makeQuestionOpener(index) {
  return function () {
    openQuestion(index);
  };
}

function openQuestion(index) {
  var question = topics[currentTopicIndex].questions[index];
  document.getElementById("question-display").textContent = question.q;
  document.getElementById("answer-display").textContent =
    question.answer || "Answer has not been added to prt.js yet.";
  document.getElementById("output-display").textContent =
    question.output || "Output has not been added to prt.js yet.";

  document.getElementById("topics-view").className = "hidden";
  document.getElementById("questions-view").className = "hidden";
  document.getElementById("answer-view").className = "view";
}

function showTopics() {
  document.getElementById("topics-view").className = "view";
  document.getElementById("questions-view").className = "hidden";
  document.getElementById("answer-view").className = "hidden";
}

function showQuestions() {
  document.getElementById("topics-view").className = "hidden";
  document.getElementById("questions-view").className = "view";
  document.getElementById("answer-view").className = "hidden";
}

startWebsite();
