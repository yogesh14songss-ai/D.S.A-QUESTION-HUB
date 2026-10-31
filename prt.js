
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
        answer: `#include <stdio.h>

int main()
{
    int n, k, temp;
    printf("Enter array size: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter array elements: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("Enter the value of K: ");
    scanf("%d", &k);
    if (k < 1 || k > n)
    {
        printf("Invalid value of K");
    }
    else
    {
        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - i - 1; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        printf("K-th smallest element is: %d", arr[k - 1]);
    }
    return 0;
}`,
        output: `Enter array size: 6
Enter array elements: 8 3 5 1 9 4
Enter the value of K: 3
K-th smallest element is: 4`,
      },
      {
        q: "Calculate the sum of all elements in an array.",
        answer: `#include <stdio.h>

int main()
{
    int n, sum = 0;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter the elements: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
        sum = sum + arr[i];
    }
    printf("Sum of all array elements is: %d", sum);
    return 0;
}`,
        output: `Enter the size of the array: 5
Enter the elements: 12 8 4 6 10
Sum of all array elements is: 40`,
      },
      {
        q: "Find and display duplicate values in an array.",
        answer: `#include <stdio.h>

int main()
{
    int n, found = 0;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter the elements: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("Duplicate values are: ");
    for (int i = 0; i < n; i++)
    {
        int alreadyChecked = 0;
        for (int j = 0; j < i; j++)
        {
            if (arr[i] == arr[j])
            {
                alreadyChecked = 1;
                break;
            }
        }
        if (alreadyChecked == 0)
        {
            int count = 0;
            for (int j = 0; j < n; j++)
            {
                if (arr[i] == arr[j])
                {
                    count++;
                }
            }
            if (count > 1)
            {
                printf("%d ", arr[i]);
                found = 1;
            }
        }
    }
    if (found == 0)
    {
        printf("No duplicate values");
    }
    return 0;
}`,
        output: `Enter the size of the array: 6
Enter the elements: 2 4 2 5 4 4
Duplicate values are: 2 4`,
      },
      {
        q: "Remove duplicate values by replacing repeated occurrences with zero.",
        answer: `#include <stdio.h>

int main()
{
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter the elements: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < i; j++)
        {
            if (arr[i] == arr[j])
            {
                arr[i] = 0;
                break;
            }
        }
    }
    printf("Array after replacing duplicate values with 0: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
    return 0;
}`,
        output: `Enter the size of the array: 6
Enter the elements: 4 2 4 7 2 9
Array after replacing duplicate values with 0: 4 2 0 7 0 9`,
      },
      {
        q: "Count the duplicate values in an array.",
        answer: `#include <stdio.h>

int main()
{
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter the elements: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("Duplicate values and their counts:\n");
    for (int i = 0; i < n; i++)
    {
        int alreadyChecked = 0;
        for (int j = 0; j < i; j++)
        {
            if (arr[i] == arr[j])
            {
                alreadyChecked = 1;
                break;
            }
        }
        if (alreadyChecked == 0)
        {
            int count = 0;
            for (int j = 0; j < n; j++)
            {
                if (arr[i] == arr[j])
                {
                    count++;
                }
            }
            if (count > 1)
            {
                printf("%d occurs %d times\n", arr[i], count);
            }
        }
    }
    return 0;
}`,
        output: `Enter the size of the array: 6
Enter the elements: 2 4 2 5 4 4
Duplicate values and their counts:
2 occurs 2 times
4 occurs 3 times`,
      },
      {
        q: "Print all possible combinations of array elements.",
        answer: `#include <stdio.h>

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

void permute(int arr[], int start, int n)
{
    if (start == n)
    {
        for (int i = 0; i < n; i++)
        {
            printf("%d ", arr[i]);
        }
        printf("\n");
        return;
    }
    for (int i = start; i < n; i++)
    {
        swap(&arr[start], &arr[i]);
        permute(arr, start + 1, n);
        swap(&arr[start], &arr[i]);
    }
}

int main()
{
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter the elements: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("All possible arrangements are:\n");
    permute(arr, 0, n);
    return 0;
}`,
        output: `Enter the size of the array: 3
Enter the elements: 1 2 3
All possible arrangements are:
1 2 3
1 3 2
2 1 3
2 3 1
3 2 1
3 1 2`,
      },
      {
        q: "Find and display all palindrome numbers stored in an array.",
        answer: `#include <stdio.h>

int isPalindrome(int number)
{
    int original = number;
    int reverse = 0;
    if (number < 0)
    {
        return 0;
    }
    while (number > 0)
    {
        reverse = reverse * 10 + number % 10;
        number = number / 10;
    }
    return original == reverse;
}

int main()
{
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter the elements: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("Palindrome numbers are: ");
    for (int i = 0; i < n; i++)
    {
        if (isPalindrome(arr[i]))
        {
            printf("%d ", arr[i]);
        }
    }
    return 0;
}`,
        output: `Enter the size of the array: 5
Enter the elements: 121 34 44 56 131
Palindrome numbers are: 121 44 131`,
      },
      {
        q: "Read two arrays and check whether they are identical.",
        answer: `#include <stdio.h>

int main()
{
    int n, same = 1;
    printf("Enter the size of both arrays: ");
    scanf("%d", &n);
    int first[n], second[n];
    printf("Enter the first array: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &first[i]);
    }
    printf("Enter the second array: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &second[i]);
    }
    for (int i = 0; i < n; i++)
    {
        if (first[i] != second[i])
        {
            same = 0;
            break;
        }
    }
    if (same == 1)
    {
        printf("Both arrays are identical");
    }
    else
    {
        printf("Both arrays are different");
    }
    return 0;
}`,
        output: `Enter the size of both arrays: 5
Enter the first array: 1 2 3 4 5
Enter the second array: 1 2 3 4 5
Both arrays are identical`,
      },
      {
        q: "Merge two sorted arrays and keep the merged result sorted.",
        answer: `#include <stdio.h>

int main()
{
    int n1, n2;
    printf("Enter the size of the first array: ");
    scanf("%d", &n1);
    int first[n1];
    printf("Enter the sorted first array: ");
    for (int i = 0; i < n1; i++)
    {
        scanf("%d", &first[i]);
    }
    printf("Enter the size of the second array: ");
    scanf("%d", &n2);
    int second[n2], merged[n1 + n2];
    printf("Enter the sorted second array: ");
    for (int i = 0; i < n2; i++)
    {
        scanf("%d", &second[i]);
    }
    int i = 0, j = 0, k = 0;
    while (i < n1 && j < n2)
    {
        if (first[i] <= second[j])
        {
            merged[k++] = first[i++];
        }
        else
        {
            merged[k++] = second[j++];
        }
    }
    while (i < n1)
    {
        merged[k++] = first[i++];
    }
    while (j < n2)
    {
        merged[k++] = second[j++];
    }
    printf("Merged sorted array: ");
    for (int x = 0; x < k; x++)
    {
        printf("%d ", merged[x]);
    }
    return 0;
}`,
        output: `Enter the size of the first array: 3
Enter the sorted first array: 1 3 5
Enter the size of the second array: 3
Enter the sorted second array: 2 4 6
Merged sorted array: 1 2 3 4 5 6`,
      },
      {
        q: "Find a local minimum: an element smaller than its neighbouring elements.",
        answer: `#include <stdio.h>

int main()
{
    int n, found = 0;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter the elements: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("Local minimum elements are: ");
    for (int i = 1; i < n - 1; i++)
    {
        if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1])
        {
            printf("%d ", arr[i]);
            found = 1;
        }
    }
    if (found == 0)
    {
        printf("No local minimum found");
    }
    return 0;
}`,
        output: `Enter the size of the array: 6
Enter the elements: 9 4 6 3 8 5
Local minimum elements are: 4 3`,
      },
      {
        q: "Find a local maximum: an element larger than its neighbouring elements.",
        answer: `#include <stdio.h>

int main()
{
    int n, found = 0;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter the elements: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("Local maximum elements are: ");
    for (int i = 1; i < n - 1; i++)
    {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1])
        {
            printf("%d ", arr[i]);
            found = 1;
        }
    }
    if (found == 0)
    {
        printf("No local maximum found");
    }
    return 0;
}`,
        output: `Enter the size of the array: 7
Enter the elements: 1 5 2 7 3 6 4
Local maximum elements are: 5 7 6`,
      },
      {
        q: "Solve the Trapping Rain Water problem for an elevation array.",
        answer: `#include <stdio.h>

int main()
{
    int n, left = 0, right, leftMax = 0, rightMax = 0, water = 0;
    printf("Enter the size of the elevation array: ");
    scanf("%d", &n);
    int height[n];
    printf("Enter the heights: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &height[i]);
    }
    right = n - 1;
    while (left < right)
    {
        if (height[left] < height[right])
        {
            if (height[left] >= leftMax)
            {
                leftMax = height[left];
            }
            else
            {
                water = water + leftMax - height[left];
            }
            left++;
        }
        else
        {
            if (height[right] >= rightMax)
            {
                rightMax = height[right];
            }
            else
            {
                water = water + rightMax - height[right];
            }
            right--;
        }
    }
    printf("Total trapped water is: %d", water);
    return 0;
}`,
        output: `Enter the size of the elevation array: 5
Enter the heights: 3 0 2 0 4
Total trapped water is: 7`,
      },
    ],
  },
  {
    name: "STRINGS",
    questions: [
      {
        q: "Convert a user-entered string to uppercase.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    for (int i = 0; str[i] != 0; i++)
    {
        if (str[i] >= 'a' && str[i] <= 'z')
        {
            str[i] = str[i] - 32;
        }
    }
    printf("Uppercase string: %s", str);
    return 0;
}`,
        output: `Enter a string: Yogesh Parmar
Uppercase string: YOGESH PARMAR`,
      },
      {
        q: "Convert a user-entered string to lowercase.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    for (int i = 0; str[i] != 0; i++)
    {
        if (str[i] >= 'A' && str[i] <= 'Z')
        {
            str[i] = str[i] + 32;
        }
    }
    printf("Lowercase string: %s", str);
    return 0;
}`,
        output: `Enter a string: YOGESH PARMAR
Lowercase string: yogesh parmar`,
      },
      {
        q: "Convert a string to sentence case.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    printf("Enter a sentence: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    for (int i = 0; str[i] != 0; i++)
    {
        if (str[i] >= 'A' && str[i] <= 'Z')
        {
            str[i] = str[i] + 32;
        }
    }
    if (str[0] >= 'a' && str[0] <= 'z')
    {
        str[0] = str[0] - 32;
    }
    printf("Sentence case: %s", str);
    return 0;
}`,
        output: `Enter a sentence: yOGESH PARMAR IS LEARNING C.
Sentence case: Yogesh parmar is learning c.`,
      },
      {
        q: "Convert a string to title case.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    printf("Enter a sentence: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    int newWord = 1;
    for (int i = 0; str[i] != 0; i++)
    {
        if (str[i] == ' ')
        {
            newWord = 1;
        }
        else if (newWord == 1)
        {
            if (str[i] >= 'a' && str[i] <= 'z')
            {
                str[i] = str[i] - 32;
            }
            newWord = 0;
        }
        else if (str[i] >= 'A' && str[i] <= 'Z')
        {
            str[i] = str[i] + 32;
        }
    }
    printf("Title case: %s", str);
    return 0;
}`,
        output: `Enter a sentence: yogesh PARMAR studies c language
Title case: Yogesh Parmar Studies C Language`,
      },
      {
        q: "Toggle the case of every alphabetic character.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    for (int i = 0; str[i] != 0; i++)
    {
        if (str[i] >= 'a' && str[i] <= 'z')
        {
            str[i] = str[i] - 32;
        }
        else if (str[i] >= 'A' && str[i] <= 'Z')
        {
            str[i] = str[i] + 32;
        }
    }
    printf("Toggled string: %s", str);
    return 0;
}`,
        output: `Enter a string: Yogesh Parmar
Toggled string: yOGESH pARMAR`,
      },
      {
        q: "Find the length of a string.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    printf("Length of the string: %d", (int)strlen(str));
    return 0;
}`,
        output: `Enter a string: Yogesh Parmar
Length of the string: 13`,
      },
      {
        q: "Read two strings and determine whether they are equal.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char first[100], second[100];
    printf("Enter the first string: ");
    fgets(first, sizeof(first), stdin);
    first[strcspn(first, "\n")] = 0;
    printf("Enter the second string: ");
    fgets(second, sizeof(second), stdin);
    second[strcspn(second, "\n")] = 0;
    if (strcmp(first, second) == 0)
    {
        printf("Both strings are equal");
    }
    else
    {
        printf("Both strings are different");
    }
    return 0;
}`,
        output: `Enter the first string: Yogesh Parmar
Enter the second string: Yogesh Parmar
Both strings are equal`,
      },
      {
        q: "Concatenate two strings into a third string.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char first[100], second[100], result[200];
    printf("Enter the first string: ");
    fgets(first, sizeof(first), stdin);
    first[strcspn(first, "\n")] = 0;
    printf("Enter the second string: ");
    fgets(second, sizeof(second), stdin);
    second[strcspn(second, "\n")] = 0;
    strcpy(result, first);
    strcat(result, second);
    printf("Combined string: %s", result);
    return 0;
}`,
        output: `Enter the first string: Yogesh 
Enter the second string: Parmar
Combined string: Yogesh Parmar`,
      },
      {
        q: "Copy a string into another string variable.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char first[100], second[100];
    printf("Enter a string: ");
    fgets(first, sizeof(first), stdin);
    first[strcspn(first, "\n")] = 0;
    strcpy(second, first);
    printf("Copied string: %s", second);
    return 0;
}`,
        output: `Enter a string: Yogesh Parmar
Copied string: Yogesh Parmar`,
      },
      {
        q: "Read an index and print the character at that position.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    int index;
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    printf("Enter the index number: ");
    scanf("%d", &index);
    if (index < 0 || index >= (int)strlen(str))
    {
        printf("Index is out of range");
    }
    else
    {
        printf("Character at index %d is %c", index, str[index]);
    }
    return 0;
}`,
        output: `Enter a string: Yogesh Parmar
Enter the index number: 2
Character at index 2 is g`,
      },
      {
        q: "Check whether a string is a palindrome.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    int palindrome = 1;
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    int length = (int)strlen(str);
    for (int i = 0; i < length / 2; i++)
    {
        if (str[i] != str[length - 1 - i])
        {
            palindrome = 0;
            break;
        }
    }
    if (palindrome == 1)
    {
        printf("The string is a palindrome");
    }
    else
    {
        printf("The string is not a palindrome");
    }
    return 0;
}`,
        output: `Enter a string: madam
The string is a palindrome`,
      },
      {
        q: "Print each character of a string on a separate line.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    printf("Each character on a separate line:\n");
    for (int i = 0; str[i] != 0; i++)
    {
        printf("%c\n", str[i]);
    }
    return 0;
}`,
        output: `Enter a string: C DSA
Each character on a separate line:
C
 
D
S
A`,
      },
      {
        q: "Copy the reverse of a string into another string.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char first[100], second[100];
    printf("Enter a string: ");
    fgets(first, sizeof(first), stdin);
    first[strcspn(first, "\n")] = 0;
    int length = (int)strlen(first);
    for (int i = 0; i < length; i++)
    {
        second[i] = first[length - 1 - i];
    }
    second[length] = 0;
    printf("Reversed copied string: %s", second);
    return 0;
}`,
        output: `Enter a string: Yogesh Parmar
Reversed copied string: ramraP hsegoY`,
      },
      {
        q: "Display the ASCII-value difference between adjacent characters in a string.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    printf("ASCII difference between adjacent characters:\n");
    for (int i = 1; str[i] != 0; i++)
    {
        printf("%c and %c: %d\n", str[i], str[i - 1], str[i] - str[i - 1]);
    }
    return 0;
}`,
        output: `Enter a string: Yogesh
ASCII difference between adjacent characters:
o and Y: 22
g and o: -8
e and g: -2
s and e: 14
h and s: -11`,
      },
      {
        q: "Search for a given character in a string.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100], ch;
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    printf("Enter the character to search: ");
    scanf("%c", &ch);
    int found = 0;
    for (int i = 0; str[i] != 0; i++)
    {
        if (str[i] == ch)
        {
            found = 1;
            break;
        }
    }
    if (found == 1)
    {
        printf("Character is present in the string");
    }
    else
    {
        printf("Character is not present in the string");
    }
    return 0;
}`,
        output: `Enter a string: Yogesh Parmar
Enter the character to search: a
Character is present in the string`,
      },
      {
        q: "Print the index of a character, or -1 when it is absent.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100], ch;
    int index = -1;
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    printf("Enter the character to search: ");
    scanf("%c", &ch);
    for (int i = 0; str[i] != 0; i++)
    {
        if (str[i] == ch)
        {
            index = i;
            break;
        }
    }
    printf("Character index: %d", index);
    return 0;
}`,
        output: `Enter a string: Yogesh Parmar
Enter the character to search: P
Character index: 7`,
      },
      {
        q: "Count the vowels in a string.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    int count = 0;
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    for (int i = 0; str[i] != 0; i++)
    {
        char ch = str[i];
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
            ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
        {
            count++;
        }
    }
    printf("Number of vowels: %d", count);
    return 0;
}`,
        output: `Enter a string: Yogesh Parmar
Number of vowels: 4`,
      },
      {
        q: "Convert a numeric string to an integer.",
        answer: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char str[50];
    printf("Enter a number as a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    int number = atoi(str);
    printf("Integer value: %d", number);
    return 0;
}`,
        output: `Enter a number as a string: 2026
Integer value: 2026`,
      },
      {
        q: "Convert a numeric string to a floating-point value.",
        answer: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char str[50];
    printf("Enter a decimal number as a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    double number = atof(str);
    printf("Floating-point value: %.2f", number);
    return 0;
}`,
        output: `Enter a decimal number as a string: 98.5
Floating-point value: 98.50`,
      },
      {
        q: "Count the characters, words, spaces, and lines in input text.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[200];
    int characters, words = 0, spaces = 0, lines = 1, inWord = 0;
    printf("Enter a line of text: ");
    fgets(str, sizeof(str), stdin);
    characters = (int)strlen(str);
    if (characters > 0 && str[characters - 1] == '\\n')
    {
        str[characters - 1] = 0;
        characters--;
    }
    for (int i = 0; i < characters; i++)
    {
        if (str[i] == ' ')
        {
            spaces++;
            inWord = 0;
        }
        else if (inWord == 0)
        {
            words++;
            inWord = 1;
        }
    }
    printf("Characters: %d\n", characters);
    printf("Words: %d\n", words);
    printf("Spaces: %d\n", spaces);
    printf("Lines: %d", lines);
    return 0;
}`,
        output: `Enter a line of text: Yogesh Parmar studies DSA
Characters: 25
Words: 4
Spaces: 3
Lines: 1`,
      },
      {
        q: "Generate all permutations of a string such as ABCDE.",
        answer: `#include <stdio.h>
#include <string.h>

void swap(char *a, char *b)
{
    char temp = *a;
    *a = *b;
    *b = temp;
}

void permute(char str[], int start, int length)
{
    if (start == length)
    {
        printf("%s\n", str);
        return;
    }
    for (int i = start; i < length; i++)
    {
        swap(&str[start], &str[i]);
        permute(str, start + 1, length);
        swap(&str[start], &str[i]);
    }
}

int main()
{
    char str[20];
    printf("Enter a short string: ");
    scanf("%s", str);
    printf("All permutations are:\n");
    permute(str, 0, (int)strlen(str));
    return 0;
}`,
        output: `Enter a short string: ABC
All permutations are:
ABC
ACB
BAC
BCA
CBA
CAB`,
      },
      {
        q: "Sort the characters of a string in ascending order.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100], temp;
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    int length = (int)strlen(str);
    for (int i = 0; i < length - 1; i++)
    {
        for (int j = 0; j < length - i - 1; j++)
        {
            if (str[j] > str[j + 1])
            {
                temp = str[j];
                str[j] = str[j + 1];
                str[j + 1] = temp;
            }
        }
    }
    printf("String in ascending order: %s", str);
    return 0;
}`,
        output: `Enter a string: Yogesh
String in ascending order: Yeghos`,
      },
      {
        q: "Count how often a given word occurs in a sentence.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char sentence[200], word[50];
    int count = 0;
    printf("Enter a sentence: ");
    fgets(sentence, sizeof(sentence), stdin);
    sentence[strcspn(sentence, "\n")] = 0;
    printf("Enter the word to count: ");
    scanf("%s", word);
    char *part = strtok(sentence, " ,.!?;:");
    while (part != NULL)
    {
        if (strcmp(part, word) == 0)
        {
            count++;
        }
        part = strtok(NULL, " ,.!?;:");
    }
    printf("The word occurs %d times", count);
    return 0;
}`,
        output: `Enter a sentence: Yogesh likes C and Yogesh practices C
Enter the word to count: C
The word occurs 2 times`,
      },
      {
        q: "Replace a specified word in a sentence with another word.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char sentence[200], oldWord[50], newWord[50], result[300] = "";
    printf("Enter a sentence: ");
    fgets(sentence, sizeof(sentence), stdin);
    sentence[strcspn(sentence, "\n")] = 0;
    printf("Enter the word to replace: ");
    scanf("%s", oldWord);
    printf("Enter the new word: ");
    scanf("%s", newWord);
    char *position = sentence;
    char *found = strstr(position, oldWord);
    while (found != NULL)
    {
        char part[200];
        int length = (int)(found - position);
        strncpy(part, position, length);
        part[length] = 0;
        strcat(result, part);
        strcat(result, newWord);
        position = found + strlen(oldWord);
        found = strstr(position, oldWord);
    }
    strcat(result, position);
    printf("Updated sentence: %s", result);
    return 0;
}`,
        output: `Enter a sentence: Yogesh likes C and C is useful.
Enter the word to replace: C
Enter the new word: C-language
Updated sentence: Yogesh likes C-language and C-language is useful.`,
      },
      {
        q: "Trim spaces from the beginning and end of a string.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[150];
    printf("Enter a string with extra spaces: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    int start = 0;
    int end = (int)strlen(str) - 1;
    while (str[start] == ' ')
    {
        start++;
    }
    while (end >= start && str[end] == ' ')
    {
        end--;
    }
    int j = 0;
    for (int i = start; i <= end; i++)
    {
        str[j++] = str[i];
    }
    str[j] = 0;
    printf("Trimmed string: %s", str);
    return 0;
}`,
        output: `Enter a string with extra spaces:    Yogesh Parmar   
Trimmed string: Yogesh Parmar`,
      },
      {
        q: "Find the starting index of the second word in a sentence.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[150];
    printf("Enter a sentence: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    int i = 0;
    while (str[i] != 0 && str[i] != ' ')
    {
        i++;
    }
    while (str[i] == ' ')
    {
        i++;
    }
    if (str[i] == 0)
    {
        printf("There is no second word");
    }
    else
    {
        printf("Second word starts at index: %d", i);
    }
    return 0;
}`,
        output: `Enter a sentence: Yogesh Parmar studies C
Second word starts at index: 7`,
      },
      {
        q: "Display text using a user-selected alignment: left, centre, or right.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    int choice, spaces = 0;
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    printf("1. Left alignment\n2. Centre alignment\n3. Right alignment\n");
    printf("Enter your choice: ");
    scanf("%d", &choice);
    if (choice == 1)
    {
        printf("%s", str);
    }
    else if (choice == 2)
    {
        spaces = (40 - (int)strlen(str)) / 2;
        for (int i = 0; i < spaces; i++)
        {
            printf(" ");
        }
        printf("%s", str);
    }
    else if (choice == 3)
    {
        spaces = 40 - (int)strlen(str);
        for (int i = 0; i < spaces; i++)
        {
            printf(" ");
        }
        printf("%s", str);
    }
    else
    {
        printf("Invalid choice");
    }
    return 0;
}`,
        output: `Enter a string: Yogesh Parmar
1. Left alignment
2. Centre alignment
3. Right alignment
Enter your choice: 2
              Yogesh Parmar`,
      },
      {
        q: "Create a 10-word dictionary with create, delete, and search operations.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char words[10][20] = {"array", "stack", "queue", "tree", "graph", "string", "search", "sort", "node", "recursion"};
    char meanings[10][40] = {"Group of same type values", "Last in first out", "First in first out", "Hierarchical data structure", "Connected vertices", "Group of characters", "Find an item", "Arrange data", "Basic linked unit", "Function calling itself"};
    char word[20], meaning[40];
    int count = 10, choice, found = -1;
    printf("1. Create  2. Delete  3. Search\n");
    printf("Enter your choice: ");
    scanf("%d", &choice);
    printf("Enter the word: ");
    scanf("%s", word);
    for (int i = 0; i < count; i++)
    {
        if (strcmp(words[i], word) == 0)
        {
            found = i;
            break;
        }
    }
    if (choice == 1)
    {
        if (found >= 0)
        {
            printf("Word already exists");
        }
        else if (count == 10)
        {
            printf("Dictionary is full");
        }
        else
        {
            printf("Enter the meaning: ");
            scanf("%s", meaning);
            strcpy(words[count], word);
            strcpy(meanings[count], meaning);
            count++;
            printf("Word created successfully");
        }
    }
    else if (choice == 2)
    {
        if (found == -1)
        {
            printf("Word not found");
        }
        else
        {
            for (int i = found; i < count - 1; i++)
            {
                strcpy(words[i], words[i + 1]);
                strcpy(meanings[i], meanings[i + 1]);
            }
            count--;
            printf("Word deleted successfully");
        }
    }
    else if (choice == 3)
    {
        if (found == -1)
        {
            printf("Word not found");
        }
        else
        {
            printf("Meaning: %s", meanings[found]);
        }
    }
    else
    {
        printf("Invalid choice");
    }
    return 0;
}`,
        output: `1. Create  2. Delete  3. Search
Enter your choice: 3
Enter the word: stack
Meaning: Last in first out`,
      },
      {
        q: "Store the ASCII values of 10 string characters in an integer array.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[11];
    int ascii[10];
    printf("Enter exactly 10 characters: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    int length = (int)strlen(str);
    for (int i = 0; i < length && i < 10; i++)
    {
        ascii[i] = str[i];
    }
    printf("ASCII values: ");
    for (int i = 0; i < length && i < 10; i++)
    {
        printf("%d ", ascii[i]);
    }
    return 0;
}`,
        output: `Enter exactly 10 characters: YogeshParm
ASCII values: 89 111 103 101 115 104 80 97 114 109`,
      },
    ],
  },
  {
    name: "RECURSION",
    questions: [
      {
        q: "Calculate the factorial of a number using recursion.",
        answer: `#include <stdio.h>

int factorial(int n)
{
    if (n <= 1)
    {
        return 1;
    }
    return n * factorial(n - 1);
}

int main()
{
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    if (n < 0)
    {
        printf("Factorial is not defined for negative numbers");
    }
    else
    {
        printf("Factorial of %d is %d", n, factorial(n));
    }
    return 0;
}`,
        output: `Enter a number: 5
Factorial of 5 is 120`,
      },
      {
        q: "Generate Fibonacci numbers using recursion.",
        answer: `#include <stdio.h>

int fibonacci(int n)
{
    if (n == 0)
    {
        return 0;
    }
    if (n == 1)
    {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main()
{
    int n;
    printf("Enter the number of terms: ");
    scanf("%d", &n);
    printf("Fibonacci series: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", fibonacci(i));
    }
    return 0;
}`,
        output: `Enter the number of terms: 7
Fibonacci series: 0 1 1 2 3 5 8`,
      },
      {
        q: "Calculate the sum of natural numbers up to 10 using recursion.",
        answer: `#include <stdio.h>

int sum(int n)
{
    if (n == 0)
    {
        return 0;
    }
    return n + sum(n - 1);
}

int main()
{
    printf("Sum of natural numbers from 1 to 10 is: %d", sum(10));
    return 0;
}`,
        output: `Sum of natural numbers from 1 to 10 is: 55`,
      },
      {
        q: "Convert a number to binary using recursion.",
        answer: `#include <stdio.h>

void binary(int n)
{
    if (n > 1)
    {
        binary(n / 2);
    }
    printf("%d", n % 2);
}

int main()
{
    int n;
    printf("Enter a positive number: ");
    scanf("%d", &n);
    printf("Binary value: ");
    if (n == 0)
    {
        printf("0");
    }
    else
    {
        binary(n);
    }
    return 0;
}`,
        output: `Enter a positive number: 13
Binary value: 1101`,
      },
      {
        q: "Find the largest element in an integer array using recursion.",
        answer: `#include <stdio.h>

int largest(int arr[], int n)
{
    if (n == 1)
    {
        return arr[0];
    }
    int value = largest(arr, n - 1);
    if (arr[n - 1] > value)
    {
        return arr[n - 1];
    }
    return value;
}

int main()
{
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter the elements: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("Largest element is: %d", largest(arr, n));
    return 0;
}`,
        output: `Enter the size of the array: 5
Enter the elements: 12 45 8 31 20
Largest element is: 45`,
      },
      {
        q: "Find the smallest element in an integer array using recursion.",
        answer: `#include <stdio.h>

int smallest(int arr[], int n)
{
    if (n == 1)
    {
        return arr[0];
    }
    int value = smallest(arr, n - 1);
    if (arr[n - 1] < value)
    {
        return arr[n - 1];
    }
    return value;
}

int main()
{
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter the elements: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("Smallest element is: %d", smallest(arr, n));
    return 0;
}`,
        output: `Enter the size of the array: 5
Enter the elements: 12 45 8 31 20
Smallest element is: 8`,
      },
      {
        q: "Calculate the sum of the digits of a user-entered number using recursion.",
        answer: `#include <stdio.h>

int digitSum(int n)
{
    if (n == 0)
    {
        return 0;
    }
    return n % 10 + digitSum(n / 10);
}

int main()
{
    int n;
    printf("Enter a positive number: ");
    scanf("%d", &n);
    printf("Sum of digits is: %d", digitSum(n));
    return 0;
}`,
        output: `Enter a positive number: 12345
Sum of digits is: 15`,
      },
      {
        q: "Find the arithmetic mean of an integer array using recursion.",
        answer: `#include <stdio.h>

int arraySum(int arr[], int n)
{
    if (n == 0)
    {
        return 0;
    }
    return arr[n - 1] + arraySum(arr, n - 1);
}

int main()
{
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter the elements: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("Arithmetic mean is: %.2f", (float)arraySum(arr, n) / n);
    return 0;
}`,
        output: `Enter the size of the array: 5
Enter the elements: 10 20 30 40 50
Arithmetic mean is: 30.00`,
      },
    ],
  },
  {
    name: "MULTI-DIMENSION ARRAYS",
    questions: [
      {
        q: "Read and display a matrix containing 4 rows and 2 columns.",
        answer: `#include <stdio.h>

int main()
{
    int matrix[4][2];
    printf("Enter 8 matrix elements:\n");
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            scanf("%d", &matrix[i][j]);
        }
    }
    printf("Matrix is:\n");
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
    return 0;
}`,
        output: `Enter 8 matrix elements:
1 2
3 4
5 6
7 8
Matrix is:
1 2
3 4
5 6
7 8`,
      },
      {
        q: "Read two matrices, add them, and display the result.",
        answer: `#include <stdio.h>

int main()
{
    int a[2][2], b[2][2], sum[2][2];
    printf("Enter the first 2x2 matrix:\n");
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }
    printf("Enter the second 2x2 matrix:\n");
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            scanf("%d", &b[i][j]);
            sum[i][j] = a[i][j] + b[i][j];
        }
    }
    printf("Sum matrix:\n");
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            printf("%d ", sum[i][j]);
        }
        printf("\n");
    }
    return 0;
}`,
        output: `Enter the first 2x2 matrix:
1 2
3 4
Enter the second 2x2 matrix:
5 6
7 8
Sum matrix:
6 8
10 12`,
      },
      {
        q: "Read two matrices, subtract them, and display the result.",
        answer: `#include <stdio.h>

int main()
{
    int a[2][2], b[2][2], difference[2][2];
    printf("Enter the first 2x2 matrix:\n");
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }
    printf("Enter the second 2x2 matrix:\n");
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            scanf("%d", &b[i][j]);
            difference[i][j] = a[i][j] - b[i][j];
        }
    }
    printf("Difference matrix:\n");
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            printf("%d ", difference[i][j]);
        }
        printf("\n");
    }
    return 0;
}`,
        output: `Enter the first 2x2 matrix:
8 7
6 5
Enter the second 2x2 matrix:
1 2
3 4
Difference matrix:
7 5
3 1`,
      },
      {
        q: "Read two compatible matrices, multiply them, and display the result.",
        answer: `#include <stdio.h>

int main()
{
    int a[2][3], b[3][2], result[2][2] = {0};
    printf("Enter the first matrix (2x3):\n");
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }
    printf("Enter the second matrix (3x2):\n");
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            scanf("%d", &b[i][j]);
        }
    }
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            for (int k = 0; k < 3; k++)
            {
                result[i][j] = result[i][j] + a[i][k] * b[k][j];
            }
        }
    }
    printf("Product matrix:\n");
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            printf("%d ", result[i][j]);
        }
        printf("\n");
    }
    return 0;
}`,
        output: `Enter the first matrix (2x3):
1 2 3
4 5 6
Enter the second matrix (3x2):
7 8
9 10
11 12
Product matrix:
58 64
139 154`,
      },
      {
        q: "Copy a matrix into another matrix of the same dimensions.",
        answer: `#include <stdio.h>

int main()
{
    int a[2][2], b[2][2];
    printf("Enter 4 matrix elements:\n");
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            scanf("%d", &a[i][j]);
            b[i][j] = a[i][j];
        }
    }
    printf("Copied matrix:\n");
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            printf("%d ", b[i][j]);
        }
        printf("\n");
    }
    return 0;
}`,
        output: `Enter 4 matrix elements:
2 4
6 8
Copied matrix:
2 4
6 8`,
      },
      {
        q: "Multiply a matrix by a scalar and display the result.",
        answer: `#include <stdio.h>

int main()
{
    int a[2][2], result[2][2], number;
    printf("Enter 4 matrix elements:\n");
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }
    printf("Enter the scalar value: ");
    scanf("%d", &number);
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            result[i][j] = a[i][j] * number;
        }
    }
    printf("Result matrix:\n");
    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 2; j++)
        {
            printf("%d ", result[i][j]);
        }
        printf("\n");
    }
    return 0;
}`,
        output: `Enter 4 matrix elements:
1 2
3 4
Enter the scalar value: 3
Result matrix:
3 6
9 12`,
      },
      {
        q: "Build a Tic-Tac-Toe game using a two-dimensional array.",
        answer: `#include <stdio.h>

int checkWin(char board[3][3], char mark)
{
    for (int i = 0; i < 3; i++)
    {
        if (board[i][0] == mark && board[i][1] == mark && board[i][2] == mark)
        {
            return 1;
        }
        if (board[0][i] == mark && board[1][i] == mark && board[2][i] == mark)
        {
            return 1;
        }
    }
    if (board[0][0] == mark && board[1][1] == mark && board[2][2] == mark)
    {
        return 1;
    }
    if (board[0][2] == mark && board[1][1] == mark && board[2][0] == mark)
    {
        return 1;
    }
    return 0;
}

int main()
{
    char board[3][3] = {{'1','2','3'}, {'4','5','6'}, {'7','8','9'}};
    int row, col, turn;
    char mark;
    for (turn = 0; turn < 9; turn++)
    {
        printf("\n %c | %c | %c\n---+---+---\n %c | %c | %c\n---+---+---\n %c | %c | %c\n",
               board[0][0], board[0][1], board[0][2], board[1][0], board[1][1], board[1][2], board[2][0], board[2][1], board[2][2]);
        mark = (turn % 2 == 0) ? 'X' : 'O';
        printf("Player %c, enter row and column (1-3): ", mark);
        scanf("%d%d", &row, &col);
        if (row < 1 || row > 3 || col < 1 || col > 3 || board[row - 1][col - 1] == 'X' || board[row - 1][col - 1] == 'O')
        {
            printf("Invalid move. Try again.\n");
            turn--;
            continue;
        }
        board[row - 1][col - 1] = mark;
        if (checkWin(board, mark))
        {
            printf("Player %c wins", mark);
            return 0;
        }
    }
    printf("Match is a draw");
    return 0;
}`,
        output: `Player X, enter row and column (1-3): 1 1
Player O, enter row and column (1-3): 2 1
Player X, enter row and column (1-3): 1 2
Player O, enter row and column (1-3): 2 2
Player X, enter row and column (1-3): 1 3
Player X wins`,
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
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100], stack[100];
    int top = -1;
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    for (int i = 0; str[i] != 0; i++)
    {
        stack[++top] = str[i];
    }
    printf("Reversed string: ");
    while (top >= 0)
    {
        printf("%c", stack[top--]);
    }
    return 0;
}`,
        output: `Enter a string: Yogesh Parmar
Reversed string: ramraP hsegoY`,
      },
      {
        q: "Check whether brackets in an expression are properly matched using a stack.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char expression[100], stack[100];
    int top = -1, valid = 1;
    printf("Enter an expression: ");
    fgets(expression, sizeof(expression), stdin);
    for (int i = 0; expression[i] != 0; i++)
    {
        char ch = expression[i];
        if (ch == '(' || ch == '[' || ch == '{')
        {
            stack[++top] = ch;
        }
        else if (ch == ')' || ch == ']' || ch == '}')
        {
            if (top == -1)
            {
                valid = 0;
                break;
            }
            char open = stack[top--];
            if ((ch == ')' && open != '(') || (ch == ']' && open != '[') || (ch == '}' && open != '{'))
            {
                valid = 0;
                break;
            }
        }
    }
    if (top != -1)
    {
        valid = 0;
    }
    if (valid == 1)
    {
        printf("Brackets are balanced");
    }
    else
    {
        printf("Brackets are not balanced");
    }
    return 0;
}`,
        output: `Enter an expression: (a+b)*[c-d]
Brackets are balanced`,
      },
      {
        q: "Implement two integer stacks inside a single array.",
        answer: `#include <stdio.h>

int main()
{
    int arr[10], top1 = -1, top2 = 10;
    int n1, n2;
    printf("Enter number of values for stack 1: ");
    scanf("%d", &n1);
    printf("Enter stack 1 values: ");
    for (int i = 0; i < n1; i++)
    {
        if (top1 + 1 == top2)
        {
            printf("Array is full");
            return 0;
        }
        scanf("%d", &arr[++top1]);
    }
    printf("Enter number of values for stack 2: ");
    scanf("%d", &n2);
    printf("Enter stack 2 values: ");
    for (int i = 0; i < n2; i++)
    {
        if (top1 + 1 == top2)
        {
            printf("Array is full");
            return 0;
        }
        scanf("%d", &arr[--top2]);
    }
    printf("Stack 1: ");
    for (int i = 0; i <= top1; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\nStack 2: ");
    for (int i = 9; i >= top2; i--)
    {
        printf("%d ", arr[i]);
    }
    return 0;
}`,
        output: `Enter number of values for stack 1: 3
Enter stack 1 values: 10 20 30
Enter number of values for stack 2: 3
Enter stack 2 values: 40 50 60
Stack 1: 10 20 30
Stack 2: 60 50 40`,
      },
      {
        q: "Sort a stack in ascending order using an integer array.",
        answer: `#include <stdio.h>

int main()
{
    int stack[100], n, temp;
    printf("Enter the number of stack elements: ");
    scanf("%d", &n);
    printf("Enter the elements from bottom to top: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &stack[i]);
    }
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (stack[j] > stack[j + 1])
            {
                temp = stack[j];
                stack[j] = stack[j + 1];
                stack[j + 1] = temp;
            }
        }
    }
    printf("Stack in ascending order: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", stack[i]);
    }
    return 0;
}`,
        output: `Enter the number of stack elements: 5
Enter the elements from bottom to top: 5 1 4 2 3
Stack in ascending order: 1 2 3 4 5`,
      },
      {
        q: "Convert an infix expression to prefix notation using a stack.",
        answer: `#include <stdio.h>
#include <string.h>

int precedence(char ch)
{
    if (ch == '^') return 3;
    if (ch == '*' || ch == '/') return 2;
    if (ch == '+' || ch == '-') return 1;
    return 0;
}

void reverse(char str[])
{
    int i = 0, j = (int)strlen(str) - 1;
    while (i < j)
    {
        char temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        i++;
        j--;
    }
}

int main()
{
    char infix[100], stack[100], postfix[100], prefix[100];
    int top = -1, k = 0;
    printf("Enter an infix expression: ");
    scanf("%s", infix);
    reverse(infix);
    for (int i = 0; infix[i] != 0; i++)
    {
        if (infix[i] == '(') infix[i] = ')';
        else if (infix[i] == ')') infix[i] = '(';
    }
    for (int i = 0; infix[i] != 0; i++)
    {
        char ch = infix[i];
        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9'))
        {
            postfix[k++] = ch;
        }
        else if (ch == '(')
        {
            stack[++top] = ch;
        }
        else if (ch == ')')
        {
            while (top >= 0 && stack[top] != '(')
            {
                postfix[k++] = stack[top--];
            }
            if (top >= 0) top--;
        }
        else
        {
            while (top >= 0 && stack[top] != '(' && precedence(stack[top]) > precedence(ch))
            {
                postfix[k++] = stack[top--];
            }
            stack[++top] = ch;
        }
    }
    while (top >= 0)
    {
        postfix[k++] = stack[top--];
    }
    postfix[k] = 0;
    strcpy(prefix, postfix);
    reverse(prefix);
    printf("Prefix expression: %s", prefix);
    return 0;
}`,
        output: `Enter an infix expression: A+B*C
Prefix expression: +A*BC`,
      },
      {
        q: "Convert an infix expression to postfix notation using a stack.",
        answer: `#include <stdio.h>
#include <string.h>

int precedence(char ch)
{
    if (ch == '^') return 3;
    if (ch == '*' || ch == '/') return 2;
    if (ch == '+' || ch == '-') return 1;
    return 0;
}

int main()
{
    char infix[100], stack[100], postfix[100];
    int top = -1, k = 0;
    printf("Enter an infix expression: ");
    scanf("%s", infix);
    for (int i = 0; infix[i] != 0; i++)
    {
        char ch = infix[i];
        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9'))
        {
            postfix[k++] = ch;
        }
        else if (ch == '(')
        {
            stack[++top] = ch;
        }
        else if (ch == ')')
        {
            while (top >= 0 && stack[top] != '(')
            {
                postfix[k++] = stack[top--];
            }
            if (top >= 0) top--;
        }
        else
        {
            while (top >= 0 && stack[top] != '(' && precedence(stack[top]) >= precedence(ch))
            {
                postfix[k++] = stack[top--];
            }
            stack[++top] = ch;
        }
    }
    while (top >= 0)
    {
        postfix[k++] = stack[top--];
    }
    postfix[k] = 0;
    printf("Postfix expression: %s", postfix);
    return 0;
}`,
        output: `Enter an infix expression: A+B*C
Postfix expression: ABC*+`,
      },
      {
        q: "Evaluate a prefix expression using a stack.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char expression[100];
    int stack[100], top = -1;
    printf("Enter a prefix expression using single-digit numbers: ");
    scanf("%s", expression);
    for (int i = (int)strlen(expression) - 1; i >= 0; i--)
    {
        char ch = expression[i];
        if (ch >= '0' && ch <= '9')
        {
            stack[++top] = ch - '0';
        }
        else
        {
            int first = stack[top--];
            int second = stack[top--];
            if (ch == '+') stack[++top] = first + second;
            else if (ch == '-') stack[++top] = first - second;
            else if (ch == '*') stack[++top] = first * second;
            else if (ch == '/') stack[++top] = first / second;
        }
    }
    printf("Result: %d", stack[top]);
    return 0;
}`,
        output: `Enter a prefix expression using single-digit numbers: +9*26
Result: 21`,
      },
      {
        q: "Evaluate a postfix expression using a stack.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char expression[100];
    int stack[100], top = -1;
    printf("Enter a postfix expression using single-digit numbers: ");
    scanf("%s", expression);
    for (int i = 0; expression[i] != 0; i++)
    {
        char ch = expression[i];
        if (ch >= '0' && ch <= '9')
        {
            stack[++top] = ch - '0';
        }
        else
        {
            int second = stack[top--];
            int first = stack[top--];
            if (ch == '+') stack[++top] = first + second;
            else if (ch == '-') stack[++top] = first - second;
            else if (ch == '*') stack[++top] = first * second;
            else if (ch == '/') stack[++top] = first / second;
        }
    }
    printf("Result: %d", stack[top]);
    return 0;
}`,
        output: `Enter a postfix expression using single-digit numbers: 23*54*+
Result: 26`,
      },
      {
        q: "Solve the Tower of Hanoi problem using stacks.",
        answer: `#include <stdio.h>

void moveBetween(int first[], int *topFirst, char firstName,
                 int second[], int *topSecond, char secondName)
{
    if (*topFirst == -1)
    {
        first[++(*topFirst)] = second[(*topSecond)--];
        printf("Move disk %d from %c to %c\n", first[*topFirst], secondName, firstName);
    }
    else if (*topSecond == -1)
    {
        second[++(*topSecond)] = first[(*topFirst)--];
        printf("Move disk %d from %c to %c\n", second[*topSecond], firstName, secondName);
    }
    else if (first[*topFirst] < second[*topSecond])
    {
        second[++(*topSecond)] = first[(*topFirst)--];
        printf("Move disk %d from %c to %c\n", second[*topSecond], firstName, secondName);
    }
    else
    {
        first[++(*topFirst)] = second[(*topSecond)--];
        printf("Move disk %d from %c to %c\n", first[*topFirst], secondName, firstName);
    }
}

int main()
{
    int stackA[100], stackB[100], stackC[100];
    int topA, topB = -1, topC = -1;
    int diskCount, i, totalMoves, move;
    int *source, *auxiliary, *destination;
    int *tempStack;
    int topSource, topAuxiliary, topDestination;
    char sourceName = 'A', auxiliaryName = 'B', destinationName = 'C';
    char tempName;

    printf("Enter the number of disks: ");
    scanf("%d", &diskCount);

    if (diskCount < 1 || diskCount > 10)
    {
        printf("Enter a number from 1 to 10.\n");
        return 0;
    }

    topA = diskCount - 1;
    for (i = 0; i < diskCount; i++)
    {
        stackA[i] = diskCount - i;
    }

    source = stackA;
    auxiliary = stackB;
    destination = stackC;
    topSource = topA;
    topAuxiliary = topB;
    topDestination = topC;

    if (diskCount % 2 == 0)
    {
        tempStack = auxiliary;
        auxiliary = destination;
        destination = tempStack;

        tempName = auxiliaryName;
        auxiliaryName = destinationName;
        destinationName = tempName;
    }

    totalMoves = 1;
    for (i = 0; i < diskCount; i++)
    {
        totalMoves = totalMoves * 2;
    }
    totalMoves = totalMoves - 1;

    printf("Steps to move disks:\n");
    for (move = 1; move <= totalMoves; move++)
    {
        if (move % 3 == 1)
        {
            moveBetween(source, &topSource, sourceName,
                        destination, &topDestination, destinationName);
        }
        else if (move % 3 == 2)
        {
            moveBetween(source, &topSource, sourceName,
                        auxiliary, &topAuxiliary, auxiliaryName);
        }
        else
        {
            moveBetween(auxiliary, &topAuxiliary, auxiliaryName,
                        destination, &topDestination, destinationName);
        }
    }

    return 0;
}`,
        output: `Enter the number of disks: 3
Steps to move disks:
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C`,
      },
    ],
  },
  {
    name: "QUEUES",
    questions: [
      {
        q: "Implement an integer-array queue with insert, delete, peek, isEmpty, and isFull.",
        answer: `// Implement an integer-array queue with insert, delete, peek, isEmpty, and isFull.
#include <stdio.h>

int isEmpty(int count)
{
    if (count == 0)
    {
        return 1;
    }
    return 0;
}

int isFull(int count)
{
    if (count == 5)
    {
        return 1;
    }
    return 0;
}

int enqueue(int data[], int value, int *front, int *rear, int *count)
{
    if (isFull(*count))
    {
        return 0;
    }

    *rear = (*rear + 1) % 5;

    data[*rear] = value;

    if (*count == 0)
    {
        *front = *rear;
    }

    (*count)++;

    return 1;
}

int dequeue(int data[], int *front, int *count, int *value)
{
    if (isEmpty(*count))
    {
        return 0;
    }

    *value = data[*front];

    *front = (*front + 1) % 5;

    (*count)--;

    return 1;
}

int peek(int data[], int front, int count, int *value)
{
    if (isEmpty(count))
    {
        return 0;
    }

    *value = data[front];

    return 1;
}

int main()
{
    int data[5];

    int front = 0;
    int rear = -1;
    int count = 0;

    int in, value, ch;

    do
    {
        printf("\n1. Enqueue\n");
        printf("2. Dequeue\n");
        printf("3. Check Empty\n");
        printf("4. Peek\n");
        printf("5. Check Full\n");
        printf("6. Exit\n");
        printf("Enter your choice: ");

        if (scanf("%d", &in) != 1)
        {
            printf("Invalid input.\n");

            while ((ch = getchar()) != '\\n' && ch != EOF)
                ;

            in = 0;
            continue;
        }

        switch (in)
        {
        case 1:
            printf("Enter value: ");

            if (scanf("%d", &value) != 1)
            {
                printf("Invalid value.\n");

                while ((ch = getchar()) != '\\n' && ch != EOF)
                    ;

                break;
            }

            if (enqueue(data, value, &front, &rear, &count))
            {
                printf("Value %d inserted successfully.\n", value);
            }
            else
            {
                printf("Queue is full.\n");
            }
            break;

        case 2:
            if (dequeue(data, &front, &count, &value))
            {
                printf("Deleted value: %d\n", value);
            }
            else
            {
                printf("Queue is empty.\n");
            }
            break;

        case 3:
            if (isEmpty(count))
            {
                printf("Queue is empty.\n");
            }
            else
            {
                printf("Queue is not empty.\n");
            }
            break;

        case 4:
            if (peek(data, front, count, &value))
            {
                printf("Front value: %d\n", value);
            }
            else
            {
                printf("Queue is empty.\n");
            }
            break;

        case 5:
            if (isFull(count))
            {
                printf("Queue is full.\n");
            }
            else
            {
                printf("Queue is not full.\n");
            }
            break;

        case 6:
            printf("Program terminated.\n");
            break;

        default:
            printf("Invalid choice.\n");
        }

    } while (in != 6);

    return 0;
}`,
        output: `
1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 1
Enter value: 2
Value 2 inserted successfully.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 1
Enter value: 2
Value 2 inserted successfully.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 2 
Deleted value: 2

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 
3
Queue is not empty.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 4
Front value: 2

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 5
Queue is not full.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 6
Program terminated.`,
      },
      {
        q: "Implement a string-array queue with insert, delete, peek, isEmpty, and isFull.",
        answer: `#include <stdio.h>
#include <string.h>

int isEmpty(int count)
{
    if (count == 0)
    {
        return 1;
    }
    return 0;
}

int isFull(int count)
{
    if (count == 5)
    {
        return 1;
    }
    return 0;
}

int enqueue(char data[5][100], char value[],
            int *front, int *rear, int *count)
{
    if (isFull(*count))
    {
        return 0;
    }

    *rear = (*rear + 1) % 5;

    strcpy(data[*rear], value);

    if (*count == 0)
    {
        *front = *rear;
    }

    (*count)++;

    return 1;
}

int dequeue(char data[5][100], int *front,
            int *count, char value[])
{
    if (isEmpty(*count))
    {
        return 0;
    }

    strcpy(value, data[*front]);

    *front = (*front + 1) % 5;

    (*count)--;

    return 1;
}

int peek(char data[5][100], int front,
         int count, char value[])
{
    if (isEmpty(count))
    {
        return 0;
    }

    strcpy(value, data[front]);

    return 1;
}

int main()
{
    char data[5][100];
    char value[100];

    int front = 0;
    int rear = -1;
    int count = 0;
    int in, ch, len;

    do
    {
        printf("\n1. Enqueue\n");
        printf("2. Dequeue\n");
        printf("3. Check Empty\n");
        printf("4. Peek\n");
        printf("5. Check Full\n");
        printf("6. Exit\n");
        printf("Enter your choice: ");

        if (scanf("%d", &in) != 1)
        {
            printf("Invalid input.\n");

            while ((ch = getchar()) != '\\n' && ch != EOF);

            in = 0;
            continue;
        }

        while ((ch = getchar()) != '\\n' && ch != EOF);

        switch (in)
        {
            case 1:
                if (isFull(count))
                {
                    printf("Queue is full.\n");
                }
                else
                {
                    printf("Enter string: ");

                    if (fgets(value, 100, stdin) == NULL)
                    {
                        printf("Input error.\n");
                        break;
                    }

                    len = strlen(value);

                    if (len > 0 && value[len - 1] == '\\n')
                    {
                        value[len - 1] = '\\0';
                    }
                    else
                    {
                        while ((ch = getchar()) != '\\n' && ch != EOF);
                    }

                    if (enqueue(data, value, &front, &rear, &count))
                    {
                        printf("Inserted string: %s\n", value);
                    }
                    else
                    {
                        printf("Queue is full.\n");
                    }
                }
                break;

            case 2:
                if (dequeue(data, &front, &count, value))
                {
                    printf("Deleted string: %s\n", value);
                }
                else
                {
                    printf("Queue is empty.\n");
                }
                break;

            case 3:
                if (isEmpty(count))
                {
                    printf("Queue is empty.\n");
                }
                else
                {
                    printf("Queue is not empty.\n");
                }
                break;

            case 4:
                if (peek(data, front, count, value))
                {
                    printf("Front string: %s\n", value);
                }
                else
                {
                    printf("Queue is empty.\n");
                }
                break;

            case 5:
                if (isFull(count))
                {
                    printf("Queue is full.\n");
                }
                else
                {
                    printf("Queue is not full.\n");
                }
                break;

            case 6:
                printf("Program terminated.\n");
                break;

            default:
                printf("Invalid choice.\n");
        }

    } while (in != 6);

    return 0;
}`,
        output: `1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 1
Enter string: yogesh
Inserted string: yogesh

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 1 
Enter string: parmar
Inserted string: parmar

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 2
Deleted string: yogesh

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 3
Queue is not empty.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 4
Front string: parmar

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 5
Queue is not full.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 6
Program terminated.`,
      },
      {
        q: "Implement a dynamic integer queue with standard queue operations.",
        answer: `
#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *add;
};

int is_empty(struct node *front)
{
    if (front == NULL)
    {
        return 1;
    }

    return 0;
}

int enqueue(int value, struct node **rear, struct node **front)
{
    struct node *temp;

    temp = (struct node *)malloc(sizeof(struct node));

    if (temp == NULL)
    {
        return 0;
    }

    temp->data = value;
    temp->add = NULL;

    if (*front == NULL)
    {
        *front = temp;
    }
    else
    {
        (*rear)->add = temp;
    }

    *rear = temp;

    return 1;
}

int dequeue(int *value, struct node **rear, struct node **front)
{
    struct node *temp;

    if (is_empty(*front))
    {
        return 0;
    }

    temp = *front;
    *value = temp->data;

    *front = temp->add;

    if (*front == NULL)
    {
        *rear = NULL;
    }

    free(temp);

    return 1;
}

int peek(struct node *front, int *value)
{
    if (is_empty(front))
    {
        return 0;
    }

    *value = front->data;

    return 1;
}

int main()
{
    struct node *front = NULL;
    struct node *rear = NULL;

    int in, value, ch;

    do
    {
        printf("\n1. Enqueue\n");
        printf("2. Dequeue\n");
        printf("3. Check Empty\n");
        printf("4. Peek\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");

        if (scanf("%d", &in) != 1)
        {
            printf("Invalid input.\n");

            while ((ch = getchar()) != '\\n' && ch != EOF);

            in = 0;
            continue;
        }

        switch (in)
        {
            case 1:
                printf("Enter value: ");

                if (scanf("%d", &value) != 1)
                {
                    printf("Invalid value.\n");

                    while ((ch = getchar()) != '\\n' && ch != EOF);

                    break;
                }

                if (enqueue(value, &rear, &front))
                {
                    printf("Value %d inserted successfully.\n", value);
                }
                else
                {
                    printf("Memory allocation failed.\n");
                }
                break;

            case 2:
                if (dequeue(&value, &rear, &front))
                {
                    printf("Dequeued value: %d\n", value);
                }
                else
                {
                    printf("Queue is empty.\n");
                }
                break;

            case 3:
                if (is_empty(front))
                {
                    printf("Queue is empty.\n");
                }
                else
                {
                    printf("Queue is not empty.\n");
                }
                break;

            case 4:
                if (peek(front, &value))
                {
                    printf("Front value: %d\n", value);
                }
                else
                {
                    printf("Queue is empty.\n");
                }
                break;

            case 5:
                printf("Program terminated.\n");
                break;

            default:
                printf("Invalid choice.\n");
        }

    } while (in != 5);

    while (front != NULL)
    {
        struct node *temp = front;
        front = front->add;
        free(temp);
    }

    rear = NULL;

    return 0;
}`,
        output: `1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Exit
Enter your choice: 1
Enter value: 23
Value 23 inserted successfully.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Exit
Enter your choice: 2
Dequeued value: 23

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Exit
Enter your choice: 3 
Queue is empty.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Exit
Enter your choice: 4
Queue is empty.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Exit
Enter your choice: 5
Program terminated.`,
      },
      {
        q: "Implement a dynamic string queue with standard queue operations.",
        answer: `//Implement a dynamic string queue with standard queue operations.
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct node
{
    char data[100];
    struct node *add;
};

int is_empty(struct node *front)
{
    if (front == NULL)
    {
        return 1;
    }

    return 0;
}

int enqueue(char value[], struct node **rear,struct node **front)
{
    struct node *temp;

    temp = (struct node *)malloc(sizeof(struct node));

    if (temp == NULL)
    {
        return 0;
    }

    strcpy(temp->data, value);
    temp->add = NULL;

    if (*front == NULL)
    {
        *front = temp;
    }
    else
    {
        (*rear)->add = temp;
    }

    *rear = temp;

    return 1;
}

int dequeue(char value[], struct node **rear,
            struct node **front)
{
    struct node *temp;

    if (is_empty(*front))
    {
        return 0;
    }

    temp = *front;

    strcpy(value, temp->data);

    *front = temp->add;

    if (*front == NULL)
    {
        *rear = NULL;
    }

    free(temp);

    return 1;
}

int peek(struct node *front, char value[])
{
    if (is_empty(front))
    {
        return 0;
    }

    strcpy(value, front->data);

    return 1;
}

int main()
{
    struct node *front = NULL;
    struct node *rear = NULL;

    int in, ch, len;
    char value[100];

    do
    {
        printf("\n1. Enqueue\n");
        printf("2. Dequeue\n");
        printf("3. Check Empty\n");
        printf("4. Peek\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");

        if (scanf("%d", &in) != 1)
        {
            printf("Invalid input.\n");

            while ((ch = getchar()) != '\\n' && ch != EOF);

            if (ch == EOF)
            {
                break;
            }

            continue;
        }

        while ((ch = getchar()) != '\\n' && ch != EOF);

        switch (in)
        {
            case 1:
                printf("Enter string: ");

                if (fgets(value, sizeof(value), stdin) == NULL)
                {
                    printf("Invalid input.\n");
                    break;
                }

                len = strlen(value);

                if (len > 0 && value[len - 1] == '\\n')
                {
                    value[len - 1] = '\\0';
                }
                else
                {
                    while ((ch = getchar()) != '\\n' && ch != EOF);
                }

                if (enqueue(value, &rear, &front))
                {
                    printf("String inserted: %s\n", value);
                }
                else
                {
                    printf("Memory allocation failed.\n");
                }
                break;

            case 2:
                if (dequeue(value, &rear, &front))
                {
                    printf("Deleted string: %s\n", value);
                }
                else
                {
                    printf("Queue is empty.\n");
                }
                break;

            case 3:
                if (is_empty(front))
                {
                    printf("Queue is empty.\n");
                }
                else
                {
                    printf("Queue is not empty.\n");
                }
                break;

            case 4:
                if (peek(front, value))
                {
                    printf("Front string: %s\n", value);
                }
                else
                {
                    printf("Queue is empty.\n");
                }
                break;

            case 5:
                printf("Program terminated.\n");
                break;

            default:
                printf("Invalid choice.\n");
        }

    } while (in != 5);

    while (front != NULL)
    {
        struct node *temp = front;
        front = front->add;
        free(temp);
    }

    rear = NULL;

    return 0;
}`,
        output: `
1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Exit
Enter your choice: 1
Enter string: yogesh
String inserted: yogesh

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Exit
Enter your choice: 1
Enter string: 23
String inserted: 23

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Exit
Enter your choice: 2
Deleted string: yogesh

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Exit
Enter your choice: 3
Queue is not empty.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Exit
Enter your choice: 4
Front string: 23

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Exit
Enter your choice: 5
Program terminated.`,
      },
      {
        q: "Implement a circular integer-array queue with standard queue operations.",
        answer: `
#include <stdio.h>

int isEmpty(int count)
{
    if (count == 0)
    {
        return 1;
    }
    return 0;
}

int isFull(int count)
{
    if (count == 5)
    {
        return 1;
    }
    return 0;
}

int enqueue(int data[], int value, int *front, int *rear, int *count)
{
    if (isFull(*count))
    {
        return 0;
    }

    *rear = (*rear + 1) % 5;

    data[*rear] = value;

    if (*count == 0)
    {
        *front = *rear;
    }

    (*count)++;

    return 1;
}

int dequeue(int data[], int *front, int *count, int *value)
{
    if (isEmpty(*count))
    {
        return 0;
    }

    *value = data[*front];

    *front = (*front + 1) % 5;

    (*count)--;

    return 1;
}

int peek(int data[], int front, int count, int *value)
{
    if (isEmpty(count))
    {
        return 0;
    }

    *value = data[front];

    return 1;
}

int main()
{
    int data[5];

    int front = 0;
    int rear = -1;
    int count = 0;

    int in, value, ch;

    do
    {
        printf("\n1. Enqueue\n");
        printf("2. Dequeue\n");
        printf("3. Check Empty\n");
        printf("4. Peek\n");
        printf("5. Check Full\n");
        printf("6. Exit\n");
        printf("Enter your choice: ");

        if (scanf("%d", &in) != 1)
        {
            printf("Invalid input.\n");

            while ((ch = getchar()) != '\\n' && ch != EOF)
                ;

            in = 0;
            continue;
        }

        switch (in)
        {
        case 1:
            printf("Enter value: ");

            if (scanf("%d", &value) != 1)
            {
                printf("Invalid value.\n");

                while ((ch = getchar()) != '\\n' && ch != EOF)
                    ;

                break;
            }

            if (enqueue(data, value, &front, &rear, &count))
            {
                printf("Value %d inserted successfully.\n", value);
            }
            else
            {
                printf("Queue is full.\n");
            }
            break;

        case 2:
            if (dequeue(data, &front, &count, &value))
            {
                printf("Deleted value: %d\n", value);
            }
            else
            {
                printf("Queue is empty.\n");
            }
            break;

        case 3:
            if (isEmpty(count))
            {
                printf("Queue is empty.\n");
            }
            else
            {
                printf("Queue is not empty.\n");
            }
            break;

        case 4:
            if (peek(data, front, count, &value))
            {
                printf("Front value: %d\n", value);
            }
            else
            {
                printf("Queue is empty.\n");
            }
            break;

        case 5:
            if (isFull(count))
            {
                printf("Queue is full.\n");
            }
            else
            {
                printf("Queue is not full.\n");
            }
            break;

        case 6:
            printf("Program terminated.\n");
            break;

        default:
            printf("Invalid choice.\n");
        }

    } while (in != 6);

    return 0;
}`,
        output: `
1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 1
Enter value: 12
Value 12 inserted successfully.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 
1
Enter value: 34
Value 34 inserted successfully.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 2
Deleted value: 12

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 3
Queue is not empty.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 4
Front value: 34

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 5
Queue is not full.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 6`,
      },
      {
        q: "Implement a circular string-array queue with standard queue operations.",
        answer: `#include <stdio.h>
#include <string.h>

int isEmpty(int count)
{
    if (count == 0)
    {
        return 1;
    }
    return 0;
}

int isFull(int count)
{
    if (count == 5)
    {
        return 1;
    }
    return 0;
}

int enqueue(char data[5][100], char value[],
            int *front, int *rear, int *count)
{
    if (isFull(*count))
    {
        return 0;
    }

    *rear = (*rear + 1) % 5;

    strcpy(data[*rear], value);

    if (*count == 0)
    {
        *front = *rear;
    }

    (*count)++;

    return 1;
}

int dequeue(char data[5][100], int *front,
            int *count, char value[])
{
    if (isEmpty(*count))
    {
        return 0;
    }

    strcpy(value, data[*front]);

    *front = (*front + 1) % 5;

    (*count)--;

    return 1;
}

int peek(char data[5][100], int front,
         int count, char value[])
{
    if (isEmpty(count))
    {
        return 0;
    }

    strcpy(value, data[front]);

    return 1;
}

int main()
{
    char data[5][100];
    char value[100];

    int front = 0;
    int rear = -1;
    int count = 0;
    int in, ch, len;

    do
    {
        printf("\n1. Enqueue\n");
        printf("2. Dequeue\n");
        printf("3. Check Empty\n");
        printf("4. Peek\n");
        printf("5. Check Full\n");
        printf("6. Exit\n");
        printf("Enter your choice: ");

        if (scanf("%d", &in) != 1)
        {
            printf("Invalid input.\n");

            while ((ch = getchar()) != '\\n' && ch != EOF);

            in = 0;
            continue;
        }

        while ((ch = getchar()) != '\\n' && ch != EOF);

        switch (in)
        {
            case 1:
                if (isFull(count))
                {
                    printf("Queue is full.\n");
                }
                else
                {
                    printf("Enter string: ");

                    if (fgets(value, 100, stdin) == NULL)
                    {
                        printf("Input error.\n");
                        break;
                    }

                    len = strlen(value);

                    if (len > 0 && value[len - 1] == '\\n')
                    {
                        value[len - 1] = '\\0';
                    }
                    else
                    {
                        while ((ch = getchar()) != '\\n' && ch != EOF);
                    }

                    if (enqueue(data, value, &front, &rear, &count))
                    {
                        printf("Inserted string: %s\n", value);
                    }
                    else
                    {
                        printf("Queue is full.\n");
                    }
                }
                break;

            case 2:
                if (dequeue(data, &front, &count, value))
                {
                    printf("Deleted string: %s\n", value);
                }
                else
                {
                    printf("Queue is empty.\n");
                }
                break;

            case 3:
                if (isEmpty(count))
                {
                    printf("Queue is empty.\n");
                }
                else
                {
                    printf("Queue is not empty.\n");
                }
                break;

            case 4:
                if (peek(data, front, count, value))
                {
                    printf("Front string: %s\n", value);
                }
                else
                {
                    printf("Queue is empty.\n");
                }
                break;

            case 5:
                if (isFull(count))
                {
                    printf("Queue is full.\n");
                }
                else
                {
                    printf("Queue is not full.\n");
                }
                break;

            case 6:
                printf("Program terminated.\n");
                break;

            default:
                printf("Invalid choice.\n");
        }

    } while (in != 6);

    return 0;
}`,
        output: `1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 1
Enter string: yogesh
Inserted string: yogesh

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 1
Enter string: er
Inserted string: er

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 2
Deleted string: yogesh

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 3
Queue is not empty.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 4
Front string: er

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 5
Queue is not full.

1. Enqueue
2. Dequeue
3. Check Empty
4. Peek
5. Check Full
6. Exit
Enter your choice: 6
Program terminated.`,
      },
      {
        q: "Implement an integer-array priority queue.",
        answer: `#include <stdio.h>

int isEmpty(int count)
{
    if (count == 0)
    {
        return 1;
    }
    return 0;
}

int isFull(int count)
{
    if (count == 5)
    {
        return 1;
    }
    return 0;
}

int insert(int data[], int value, int *count)
{
    if (isFull(*count))
    {
        return 0;
    }

    data[*count] = value;
    (*count)++;

    return 1;
}

int deleteElement(int data[], int *count, int *value)
{
    int i, pos = 0;

    if (isEmpty(*count))
    {
        return 0;
    }

    for (i = 1; i < *count; i++)
    {
        if (data[i] > data[pos])
        {
            pos = i;
        }
    }

    *value = data[pos];

    for (i = pos; i < *count - 1; i++)
    {
        data[i] = data[i + 1];
    }

    (*count)--;

    return 1;
}

int peek(int data[], int count, int *value)
{
    int i, pos = 0;

    if (isEmpty(count))
    {
        return 0;
    }

    for (i = 1; i < count; i++)
    {
        if (data[i] > data[pos])
        {
            pos = i;
        }
    }

    *value = data[pos];

    return 1;
}

int main()
{
    int data[5];
    int count = 0;
    int in, value, ch;

    do
    {
        printf("\n1. Insert\n");
        printf("2. Delete\n");
        printf("3. Check Empty\n");
        printf("4. Peek\n");
        printf("5. Check Full\n");
        printf("6. Display\n");
        printf("7. Exit\n");
        printf("Enter your choice: ");

        if (scanf("%d", &in) != 1)
        {
            printf("Invalid input.\n");

            while ((ch = getchar()) != '\\n' && ch != EOF);

            in = 0;
            continue;
        }

        switch (in)
        {
            case 1:
                printf("Enter value: ");

                if (scanf("%d", &value) != 1)
                {
                    printf("Invalid value.\n");

                    while ((ch = getchar()) != '\\n' && ch != EOF);

                    break;
                }

                if (insert(data, value, &count))
                {
                    printf("Value %d inserted successfully.\n", value);
                }
                else
                {
                    printf("Priority queue is full.\n");
                }
                break;

            case 2:
                if (deleteElement(data, &count, &value))
                {
                    printf("Deleted value: %d\n", value);
                }
                else
                {
                    printf("Priority queue is empty.\n");
                }
                break;

            case 3:
                if (isEmpty(count))
                {
                    printf("Priority queue is empty.\n");
                }
                else
                {
                    printf("Priority queue is not empty.\n");
                }
                break;

            case 4:
                if (peek(data, count, &value))
                {
                    printf("Highest priority value: %d\n", value);
                }
                else
                {
                    printf("Priority queue is empty.\n");
                }
                break;

            case 5:
                if (isFull(count))
                {
                    printf("Priority queue is full.\n");
                }
                else
                {
                    printf("Priority queue is not full.\n");
                }
                break;

            case 6:
                if (isEmpty(count))
                {
                    printf("Priority queue is empty.\n");
                }
                else
                {
                    printf("Priority queue elements: ");

                    for (int i = 0; i < count; i++)
                    {
                        printf("%d ", data[i]);
                    }

                    printf("\n");
                }
                break;

            case 7:
                printf("Program terminated.\n");
                break;

            default:
                printf("Invalid choice.\n");
        }

    } while (in != 7);

    return 0;
}`,
        output: `1. Insert
2. Delete
3. Check Empty
4. Peek
5. Check Full
6. Display
7. Exit
Enter your choice: 1
Enter value: 23
Value 23 inserted successfully.

1. Insert
2. Delete
3. Check Empty
4. Peek
5. Check Full
6. Display
7. Exit
Enter your choice: 1
Enter value: 234
Value 234 inserted successfully.

1. Insert
2. Delete
3. Check Empty
4. Peek
5. Check Full
6. Display
7. Exit
Enter your choice: 2
Deleted value: 234

1. Insert
2. Delete
3. Check Empty
4. Peek
5. Check Full
6. Display
7. Exit
Enter your choice: 3 
Priority queue is not empty.

1. Insert
2. Delete
3. Check Empty
4. Peek
5. Check Full
6. Display
7. Exit
Enter your choice: 4
Highest priority value: 23

1. Insert
2. Delete
3. Check Empty
4. Peek
5. Check Full
6. Display
7. Exit
Enter your choice: 5
Priority queue is not full.

1. Insert
2. Delete
3. Check Empty
4. Peek
5. Check Full
6. Display
7. Exit
Enter your choice: 6
Priority queue elements: 23 

1. Insert
2. Delete
3. Check Empty
4. Peek
5. Check Full
6. Display
7. Exit
Enter your choice: 7
Program terminated.`,
      },
      {
        q: "Implement a string-array priority queue.",
        answer: `
        #include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char data[5][100], value[100];
    int priority[5];
    int count = 0, choice, p, i, pos;

    do
    {
        printf("\n1. Insert\n2. Delete\n3. Peek\n4. Display\n5. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
                if (count == 5)
                {
                    printf("Priority queue is full.\n");
                }
                else
                {
                    printf("Enter string (one word): ");
                    scanf("%s", value);
                    printf("Enter priority (larger number means higher priority): ");
                    scanf("%d", &p);

                    strcpy(data[count], value);
                    priority[count] = p;
                    count++;
                    printf("String inserted.\n");
                }
                break;

            case 2:
                if (count == 0)
                {
                    printf("Priority queue is empty.\n");
                }
                else
                {
                    pos = 0;
                    for (i = 1; i < count; i++)
                    {
                        if (priority[i] > priority[pos])
                            pos = i;
                    }

                    printf("Deleted: %s\n", data[pos]);

                    for (i = pos; i < count - 1; i++)
                    {
                        strcpy(data[i], data[i + 1]);
                        priority[i] = priority[i + 1];
                    }
                    count--;
                }
                break;

            case 3:
                if (count == 0)
                {
                    printf("Priority queue is empty.\n");
                }
                else
                {
                    pos = 0;
                    for (i = 1; i < count; i++)
                    {
                        if (priority[i] > priority[pos])
                            pos = i;
                    }
                    printf("Highest priority string: %s\n", data[pos]);
                }
                break;

            case 4:
                if (count == 0)
                    printf("Priority queue is empty.\n");
                else
                {
                    for (i = 0; i < count; i++)
                        printf("%s (priority %d)\n", data[i], priority[i]);
                }
                break;

            case 5:
                break;

            default:
                printf("Invalid choice.\n");
        }
    } while (choice != 5);

    return 0;
}
`,
        output: `PS G:\DSA\sourcefiles\queue> gcc qu8.c 
PS G:\DSA\sourcefiles\queue> ./a      

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: 1
Enter string (one word): s
Enter priority (larger number means higher priority): d
String inserted.

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: Enter string (one word): Enter priority (larger number means higher priority): 2
String inserted.

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: f
Enter string (one word): Enter priority (larger number means higher priority): 3
String inserted.

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: 2
Deleted: s

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: 3
Highest priority string: f

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: 4
d (priority 2)
f (priority 3)

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: 5`,
      },
      {
        q: "Implement a double-ended integer queue (deque) using an array.",
        answer: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int data[5];
    int front = -1, rear = -1;
    int choice, value, i;

    do
    {
        printf("\n1. Insert Front\n2. Insert Rear\n3. Delete Front\n4. Delete Rear\n5. Display\n6. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
                if ((front == 0 && rear == 4) || front == rear + 1)
                    printf("Deque is full.\n");
                else
                {
                    printf("Enter value: ");
                    scanf("%d", &value);

                    if (front == -1)
                        front = rear = 0;
                    else if (front == 0)
                        front = 4;
                    else
                        front--;

                    data[front] = value;
                }
                break;

            case 2:
                if ((front == 0 && rear == 4) || front == rear + 1)
                    printf("Deque is full.\n");
                else
                {
                    printf("Enter value: ");
                    scanf("%d", &value);

                    if (front == -1)
                        front = rear = 0;
                    else
                        rear = (rear + 1) % 5;

                    data[rear] = value;
                }
                break;

            case 3:
                if (front == -1)
                    printf("Deque is empty.\n");
                else
                {
                    printf("Deleted: %d\n", data[front]);
                    if (front == rear)
                        front = rear = -1;
                    else
                        front = (front + 1) % 5;
                }
                break;

            case 4:
                if (front == -1)
                    printf("Deque is empty.\n");
                else
                {
                    printf("Deleted: %d\n", data[rear]);
                    if (front == rear)
                        front = rear = -1;
                    else if (rear == 0)
                        rear = 4;
                    else
                        rear--;
                }
                break;

            case 5:
                if (front == -1)
                    printf("Deque is empty.\n");
                else
                {
                    i = front;
                    while (1)
                    {
                        printf("%d ", data[i]);
                        if (i == rear)
                            break;
                        i = (i + 1) % 5;
                    }
                    printf("\n");
                }
                break;

            case 6:
                break;

            default:
                printf("Invalid choice.\n");
        }
    } while (choice != 6);

    return 0;
}
`,
        output: `PS G:\DSA\sourcefiles\queue> gcc qu9.c 
PS G:\DSA\sourcefiles\queue> ./a

1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Display
6. Exit
Enter choice: 1
Enter value: 2

1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Display
6. Exit
Enter choice: 2
Enter value: 3

1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Display
6. Exit
Enter choice: 3
Deleted: 2

1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Display
6. Exit
Enter choice: 4
Deleted: 3

1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Display
6. Exit
Enter choice: 5
Deque is empty.

1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Display
6. Exit`,
      },
      {
        q: "Implement a double-ended string queue (deque) using an array.",
        answer: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char data[5][100], value[100];
    int front = -1, rear = -1;
    int choice, i, position;

    do
    {
        printf("\n1. Insert Front\n2. Insert Rear\n3. Delete Front\n4. Delete Rear\n5. Display\n6. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
            case 2:
                if ((front == 0 && rear == 4) || front == rear + 1)
                    printf("Deque is full.\n");
                else
                {
                    printf("Enter string (one word): ");
                    scanf("%s", value);

                    if (front == -1)
                        front = rear = 0;
                    else if (choice == 1 && front == 0)
                        front = 4;
                    else if (choice == 1)
                        front--;
                    else
                        rear = (rear + 1) % 5;

                    if (choice == 1)
                        position = front;
                    else
                        position = rear;

                    strcpy(data[position], value);
                    printf("Inserted: %s\n", value);
                }
                break;

            case 3:
            case 4:
                if (front == -1)
                    printf("Deque is empty.\n");
                else
                {
                    if (choice == 3)
                    {
                        printf("Deleted: %s\n", data[front]);
                        if (front == rear)
                            front = rear = -1;
                        else
                            front = (front + 1) % 5;
                    }
                    else
                    {
                        printf("Deleted: %s\n", data[rear]);
                        if (front == rear)
                            front = rear = -1;
                        else if (rear == 0)
                            rear = 4;
                        else
                            rear--;
                    }
                }
                break;

            case 5:
                if (front == -1)
                    printf("Deque is empty.\n");
                else
                {
                    i = front;
                    while (1)
                    {
                        printf("%s ", data[i]);
                        if (i == rear)
                            break;
                        i = (i + 1) % 5;
                    }
                    printf("\n");
                }
                break;

            case 6:
                break;

            default:
                printf("Invalid choice.\n");
        }
    } while (choice != 6);

    return 0;
}
`,
        output: `PS G:\DSA\sourcefiles\queue> gcc qu10.c
PS G:\DSA\sourcefiles\queue> ./a

1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Display
6. Exit
Enter choice: 1
Enter string (one word): rana
Inserted: rana

1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Display
6. Exit
Enter choice: 1 
Enter string (one word): yogesh
Inserted: yogesh

1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Display
6. Exit
Enter choice: 2
Enter string (one word): yogesh
Inserted: yogesh

1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Display
6. Exit
Enter choice: 3
Deleted: yogesh

1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Display
6. Exit
Enter choice: 4
Deleted: yogesh

1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Display
6. Exit
Enter choice: 5
rana 

1. Insert Front
2. Insert Rear
3. Delete Front
4. Delete Rear
5. Display
6. Exit
Enter choice: 6`,
      },
      {
        q: "Implement a dynamically allocated priority queue of integers.",
        answer: `//Implement a dynamically allocated priority queue of integers.
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct node
{
    int data;
    int priority;
    struct node *next;
};

int main()
{
    struct node *front = NULL, *newnode, *temp;
    int choice, value, p;

    do
    {
        printf("\n1. Insert\n2. Delete\n3. Peek\n4. Display\n5. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
                newnode = (struct node *)malloc(sizeof(struct node));
                if (newnode == NULL)
                {
                    printf("Memory allocation failed.\n");
                    break;
                }

                printf("Enter integer: ");
                scanf("%d", &value);
                printf("Enter priority (larger number means higher priority): ");
                scanf("%d", &p);

                newnode->data = value;
                newnode->priority = p;
                newnode->next = NULL;

                if (front == NULL || p > front->priority)
                {
                    newnode->next = front;
                    front = newnode;
                }
                else
                {
                    temp = front;
                    while (temp->next != NULL && temp->next->priority >= p)
                        temp = temp->next;

                    newnode->next = temp->next;
                    temp->next = newnode;
                }
                printf("Inserted successfully.\n");
                break;

            case 2:
                if (front == NULL)
                    printf("Priority queue is empty.\n");
                else
                {
                    temp = front;
                    printf("Deleted: %d\n", temp->data);
                    front = front->next;
                    free(temp);
                }
                break;

            case 3:
                if (front == NULL)
                    printf("Priority queue is empty.\n");
                else
                    printf("Highest priority value: %d\n", front->data);
                break;

            case 4:
                temp = front;
                while (temp != NULL)
                {
                    printf("%d (priority %d)\n", temp->data, temp->priority);
                    temp = temp->next;
                }
                break;

            case 5:
                break;

            default:
                printf("Invalid choice.\n");
        }
    } while (choice != 5);

    while (front != NULL)
    {
        temp = front;
        front = front->next;
        free(temp);
    }

    return 0;
}
`,
        output: `PS G:\DSA\sourcefiles\queue> gcc qu11.c
PS G:\DSA\sourcefiles\queue> ./a

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: 1
Enter integer: 23
Enter priority (larger number means higher priority): 234
Inserted successfully.

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: 2
Deleted: 23

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: 3
Priority queue is empty.

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: 4

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: 5`,
      },
      {
        q: "Implement a dynamically allocated priority queue of strings.",
        answer: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct node
{
    char data[100];
    int priority;
    struct node *next;
};

int main()
{
    struct node *front = NULL, *newnode, *temp;
    char value[100];
    int choice, p;

    do
    {
        printf("\n1. Insert\n2. Delete\n3. Peek\n4. Display\n5. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
                newnode = (struct node *)malloc(sizeof(struct node));
                if (newnode == NULL)
                {
                    printf("Memory allocation failed.\n");
                    break;
                }

                printf("Enter string (one word): ");
                scanf("%s", value);
                printf("Enter priority (larger number means higher priority): ");
                scanf("%d", &p);

                strcpy(newnode->data, value);
                newnode->priority = p;
                newnode->next = NULL;

                if (front == NULL || p > front->priority)
                {
                    newnode->next = front;
                    front = newnode;
                }
                else
                {
                    temp = front;
                    while (temp->next != NULL && temp->next->priority >= p)
                        temp = temp->next;

                    newnode->next = temp->next;
                    temp->next = newnode;
                }
                printf("Inserted successfully.\n");
                break;

            case 2:
                if (front == NULL)
                    printf("Priority queue is empty.\n");
                else
                {
                    temp = front;
                    printf("Deleted: %s\n", temp->data);
                    front = front->next;
                    free(temp);
                }
                break;

            case 3:
                if (front == NULL)
                    printf("Priority queue is empty.\n");
                else
                    printf("Highest priority string: %s\n", front->data);
                break;

            case 4:
                temp = front;
                while (temp != NULL)
                {
                    printf("%s (priority %d)\n", temp->data, temp->priority);
                    temp = temp->next;
                }
                break;

            case 5:
                break;

            default:
                printf("Invalid choice.\n");
        }
    } while (choice != 5);

    while (front != NULL)
    {
        temp = front;
        front = front->next;
        free(temp);
    }

    return 0;
}
`,
        output: `PS G:\DSA\sourcefiles\queue> gcc qu11.c
PS G:\DSA\sourcefiles\queue> ./a

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: 1
Enter integer: 23
Enter priority (larger number means higher priority): 234
Inserted successfully.

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: 2
Deleted: 23

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: 3
Priority queue is empty.

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: 4

1. Insert
2. Delete
3. Peek
4. Display
5. Exit
Enter choice: 5`,
      },
      {
        q: "Find the first circular tour that visits every petrol pump.",
        answer: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int petrol[100], distance[100];
    int n, i, start = 0;
    int balance = 0, total = 0;

    printf("Enter number of petrol pumps: ");
    scanf("%d", &n);

    if (n < 1 || n > 100)
    {
        printf("Invalid number of petrol pumps.\n");
        return 0;
    }

    for (i = 0; i < n; i++)
    {
        printf("Enter petrol and distance for pump %d: ", i);
        scanf("%d %d", &petrol[i], &distance[i]);
    }

    for (i = 0; i < n; i++)
    {
        balance = balance + petrol[i] - distance[i];
        total = total + petrol[i] - distance[i];

        if (balance < 0)
        {
            start = i + 1;
            balance = 0;
        }
    }

    if (total < 0 || start == n)
        printf("No circular tour is possible.\n");
    else
        printf("Starting petrol pump index: %d\n", start);

    return 0;
}
`,
        output: `PS G:\DSA\sourcefiles\queue> gcc qu13.c
PS G:\DSA\sourcefiles\queue> ./a       
Enter number of petrol pumps: 4
Enter petrol and distance for pump 0: 3
3
Enter petrol and distance for pump 1: 2
12
Enter petrol and distance for pump 2: 3
223
Enter petrol and distance for pump 3: 4
32
No circular tour is possible.`,
      },
      {
        q: "Find the length of the longest valid parentheses substring using a queue or stack.",
        answer: `//Find the length of the longest valid parentheses substring using a queue or stack.
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char str[100];
    int stack[100];
    int top = -1, i, n, length, max = 0;

    printf("Enter parentheses string: ");
    scanf("%s", str);

    n = strlen(str);
    stack[++top] = -1;

    for (i = 0; i < n; i++)
    {
        if (str[i] == '(')
        {
            stack[++top] = i;
        }
        else if (str[i] == ')')
        {
            top--;

            if (top == -1)
            {
                stack[++top] = i;
            }
            else
            {
                length = i - stack[top];
                if (length > max)
                    max = length;
            }
        }
    }

    printf("Longest valid parentheses length: %d\n", max);

    return 0;
}
`,
        output: `PS G:\DSA\sourcefiles\queue> ./a
Enter parentheses string: 39(23ds))()
Longest valid parentheses length: 8`,
      },
      {
        q: "Find the next greater element for each element in an array.",
        answer: `//Find the next greater element for each element in an array.
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int arr[100], n, i, j, found;

    printf("Enter array size: ");
    scanf("%d", &n);

    if (n < 1 || n > 100)
    {
        printf("Invalid array size.\n");
        return 0;
    }

    printf("Enter array elements: ");
    for (i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    for (i = 0; i < n; i++)
    {
        found = 0;
        for (j = i + 1; j < n; j++)
        {
            if (arr[j] > arr[i])
            {
                printf("%d -> %d\n", arr[i], arr[j]);
                found = 1;
                break;
            }
        }

        if (found == 0)
            printf("%d -> -1\n", arr[i]);
    }

    return 0;
}
`,
        output: `PS G:\DSA\sourcefiles\queue> ./a       
Enter array size: 5
Enter array elements: 1
2
3
4
5
1 -> 2
2 -> 3
3 -> 4
4 -> 5
5 -> -1`,
      },
      {
        q: "Find the next smaller element for each element in an array.",
        answer: `//Find the next smaller element for each element in an array.
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int arr[100], n, i, j, found;

    printf("Enter array size: ");
    scanf("%d", &n);

    if (n < 1 || n > 100)
    {
        printf("Invalid array size.\n");
        return 0;
    }

    printf("Enter array elements: ");
    for (i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    for (i = 0; i < n; i++)
    {
        found = 0;
        for (j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[i])
            {
                printf("%d -> %d\n", arr[i], arr[j]);
                found = 1;
                break;
            }
        }

        if (found == 0)
            printf("%d -> -1\n", arr[i]);
    }

    return 0;
}
`,
        output: `PS G:\DSA\sourcefiles\queue> ./a       
Enter array size: 5
Enter array elements: 76
56
09
45
76
76 -> 56
56 -> 9
9 -> -1
45 -> -1
76 -> -`,
      },
      {
        q: "Find the first non-repeating character in a stream using a queue.",
        answer: `//Find the first non-repeating character in a stream using a queue.

#include <stdio.h>

int main()
{
    char stream[100], queue[100];
    int front = 0, rear = -1;
    int i, j, count;

    printf("Enter string: ");
    scanf("%s", stream);

    for (i = 0; stream[i] != '\\0'; i++)
    {
        queue[++rear] = stream[i];

        while (front <= rear)
        {
            count = 0;

            for (j = 0; j <= i; j++)
            {
                if (stream[j] == queue[front])
                {
                    count++;
                }
            }

            if (count == 1)
            {
                break;
            }

            front++;
        }

        if (front > rear)
        {
            printf("-1 ");
        }
        else
        {
            printf("%c ", queue[front]);
        }
    }

    printf("\n");

    return 0;
}`,
        output: `PS G:\DSA\sourcefiles\queue> ./a
Enter string: yiw
y y y `,
      },
      {
        q: "Reverse the first K elements of a queue.",
        answer: `//Reverse the first K elements of a queue.
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int queue[100], stack[100];
    int n, k, i, top = -1;

    printf("Enter queue size: ");
    scanf("%d", &n);

    if (n < 1 || n > 100)
    {
        printf("Invalid queue size.\n");
        return 0;
    }

    printf("Enter queue elements: ");
    for (i = 0; i < n; i++)
        scanf("%d", &queue[i]);

    printf("Enter K: ");
    scanf("%d", &k);

    if (k < 0 || k > n)
    {
        printf("Invalid K.\n");
        return 0;
    }

    for (i = 0; i < k; i++)
        stack[++top] = queue[i];

    for (i = 0; i < k; i++)
        queue[i] = stack[top--];

    printf("Queue after reversing first K elements: ");
    for (i = 0; i < n; i++)
        printf("%d ", queue[i]);
    printf("\n");

    return 0;
}
`,
        output: `Enter queue size: 6
Enter queue elements: 45
34
344
23
34
45
Enter K: 4
Queue after reversing first K elements: 23 344 34 45 34 45 `,
      },
      {
        q: "Reverse an entire queue.",
        answer: `//Reverse an entire queue.
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int queue[100], stack[100];
    int n, i, top = -1;

    printf("Enter queue size: ");
    scanf("%d", &n);

    if (n < 1 || n > 100)
    {
        printf("Invalid queue size.\n");
        return 0;
    }

    printf("Enter queue elements: ");
    for (i = 0; i < n; i++)
        scanf("%d", &queue[i]);

    for (i = 0; i < n; i++)
        stack[++top] = queue[i];

    for (i = 0; i < n; i++)
        queue[i] = stack[top--];

    printf("Reversed queue: ");
    for (i = 0; i < n; i++)
        printf("%d ", queue[i]);
    printf("\n");

    return 0;
}
`,
        output: `Enter queue size: 6
Enter queue elements: 45
34
344
23
34
45
Reversed queue: 45 34 23 344 34 45 `,
      },
      {
        q: "Solve the Rotten Oranges grid problem using a queue.",
        answer: `//Solve the Rotten Oranges grid problem using a queue.
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    int grid[10][10];
    int row[100], colqu[100];
    int m, n, i, j;
    int front = 0, rear = -1;
    int fresh = 0, minutes = 0, size;
    int r, c;

       printf("Enter rows and columns (maximum 10 each): ");
    scanf("%d %d", &m, &n);

    if (m < 1 || m > 10 || n < 1 || n > 10)
    {
        printf("Invalid grid size.\n");
          return 0;
    }

    printf("Enter grid values (0 empty, 1 fresh, 2 rotten):\n");
    for (i = 0; i < m; i++)
    {
        for (j = 0; j < n; j++)
        { 
            scanf("%d", &grid[i][j]);

            if (grid[i][j] == 2)
            {
                    rear++;
                row[rear] = i;
                  colqu[rear] = j;
            }
            else if (grid[i][j] == 1)
            {
                fresh++;
            }
        }
    }

    while (front <= rear && fresh > 0)
    {
        size = rear - front + 1;

        for (i = 0; i < size; i++)
        {
            r = row[front];
            c = colqu[front];
            front++;

            if (r > 0 && grid[r - 1][c] == 1)
            {
                grid[r - 1][c] = 2;
                  fresh--;
                rear++;
                row[rear] = r - 1;
                  colqu[rear] = c;
            }

            if (r + 1 < m && grid[r + 1][c] == 1)
            {
                grid[r + 1][c] = 2;
                 fresh--;
                 rear++;
                row[rear] = r + 1;
                colqu[rear] = c;
            }

            if (c > 0 && grid[r][c - 1] == 1)
            {
                grid[r][c - 1] = 2;
                fresh--;
                rear++;
                row[rear] = r;
                colqu[rear] = c - 1;
            }

            if (c + 1 < n && grid[r][c + 1] == 1)
            {
                grid[r][c + 1] = 2;
                fresh--;
                rear++;
                row[rear] = r;
                colqu[rear] = c + 1;
            }
        }

        minutes++;
    }

    if (fresh > 0)
        printf("Not all oranges can rot.\n");
    else
        printf("Minutes required: %d\n", minutes);

    return 0;
}
`,
        output: `Enter rows and columns (maximum 10 each): 2
3
Enter grid values (0 empty, 1 fresh, 2 rotten):
4
5
6
8
9
0
Minutes required: 0`,
      },
    ],
  },
  {
    name: "LINKED LIST",
    questions: [
      {
        q: "Implement a singly linked list of integers with insertion, deletion, display, search, isEmpty, and isFull operations.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *next;
} Node;

Node *insertEnd(Node *head, int value)
{
    Node *newNode = (Node *)malloc(sizeof(Node));
    if (newNode == NULL)
    {
        return head;
    }
    newNode->data = value;
    newNode->next = NULL;
    if (head == NULL)
    {
        return newNode;
    }
    Node *temp = head;
    while (temp->next != NULL)
    {
        temp = temp->next;
    }
    temp->next = newNode;
    return head;
}

Node *deleteValue(Node *head, int value)
{
    Node *temp = head;
    Node *previous = NULL;
    while (temp != NULL && temp->data != value)
    {
        previous = temp;
        temp = temp->next;
    }
    if (temp == NULL)
    {
        return head;
    }
    if (previous == NULL)
    {
        head = temp->next;
    }
    else
    {
        previous->next = temp->next;
    }
    free(temp);
    return head;
}

int search(Node *head, int value)
{
    while (head != NULL)
    {
        if (head->data == value) return 1;
        head = head->next;
    }
    return 0;
}

int isEmpty(Node *head)
{
    return head == NULL;
}

int isFull()
{
    Node *test = (Node *)malloc(sizeof(Node));
    if (test == NULL) return 1;
    free(test);
    return 0;
}

void display(Node *head)
{
    while (head != NULL)
    {
        printf("%d", head->data);
        if (head->next != NULL) printf(" -> ");
        head = head->next;
    }
    printf("\n");
}

int main()
{
    Node *head = NULL;
    int value;
    printf("Enter 4 values: ");
    for (int i = 0; i < 4; i++)
    {
        scanf("%d", &value);
        head = insertEnd(head, value);
    }
    printf("Linked list: ");
    display(head);
    printf("Search 30: %s\n", search(head, 30) ? "Found" : "Not found");
    head = deleteValue(head, 20);
    printf("After deleting 20: ");
    display(head);
    printf("Is empty: %s\n", isEmpty(head) ? "Yes" : "No");
    printf("Is full: %s", isFull() ? "Yes" : "No");
    return 0;
}`,
        output: `Enter 4 values: 10 20 30 40
Linked list: 10 -> 20 -> 30 -> 40
Search 30: Found
After deleting 20: 10 -> 30 -> 40
Is empty: No
Is full: No`,
      },
      {
        q: "Implement a singly circular linked list of integers with insertion, deletion, display, and search.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *next;
} Node;

Node *insertEnd(Node *last, int value)
{
    Node *newNode = (Node *)malloc(sizeof(Node));
    if (newNode == NULL) return last;
    newNode->data = value;
    if (last == NULL)
    {
        newNode->next = newNode;
        return newNode;
    }
    newNode->next = last->next;
    last->next = newNode;
    return newNode;
}

Node *deleteValue(Node *last, int value)
{
    if (last == NULL) return NULL;
    Node *current = last->next;
    Node *previous = last;
    do
    {
        if (current->data == value)
        {
            if (current == previous)
            {
                free(current);
                return NULL;
            }
            previous->next = current->next;
            if (current == last) last = previous;
            free(current);
            return last;
        }
        previous = current;
        current = current->next;
    } while (current != last->next);
    return last;
}

int search(Node *last, int value)
{
    if (last == NULL) return 0;
    Node *current = last->next;
    do
    {
        if (current->data == value) return 1;
        current = current->next;
    } while (current != last->next);
    return 0;
}

void display(Node *last)
{
    if (last == NULL)
    {
        printf("List is empty\n");
        return;
    }
    Node *current = last->next;
    do
    {
        printf("%d ", current->data);
        current = current->next;
    } while (current != last->next);
    printf("\n");
}

int main()
{
    Node *last = NULL;
    int value;
    printf("Enter 4 values: ");
    for (int i = 0; i < 4; i++)
    {
        scanf("%d", &value);
        last = insertEnd(last, value);
    }
    printf("Circular linked list: ");
    display(last);
    printf("Search 30: %s\n", search(last, 30) ? "Found" : "Not found");
    last = deleteValue(last, 20);
    printf("After deleting 20: ");
    display(last);
    return 0;
}`,
        output: `Enter 4 values: 10 20 30 40
Circular linked list: 10 20 30 40
Search 30: Found
After deleting 20: 10 30 40`,
      },
      {
        q: "Implement a doubly linked list of integers with insertion, deletion, display, and search.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *previous;
    struct Node *next;
} Node;

Node *insertEnd(Node *head, int value)
{
    Node *newNode = (Node *)malloc(sizeof(Node));
    if (newNode == NULL) return head;
    newNode->data = value;
    newNode->next = NULL;
    newNode->previous = NULL;
    if (head == NULL) return newNode;
    Node *temp = head;
    while (temp->next != NULL) temp = temp->next;
    temp->next = newNode;
    newNode->previous = temp;
    return head;
}

Node *deleteValue(Node *head, int value)
{
    Node *temp = head;
    while (temp != NULL && temp->data != value) temp = temp->next;
    if (temp == NULL) return head;
    if (temp->previous != NULL) temp->previous->next = temp->next;
    else head = temp->next;
    if (temp->next != NULL) temp->next->previous = temp->previous;
    free(temp);
    return head;
}

int search(Node *head, int value)
{
    while (head != NULL)
    {
        if (head->data == value) return 1;
        head = head->next;
    }
    return 0;
}

void display(Node *head)
{
    while (head != NULL)
    {
        printf("%d ", head->data);
        head = head->next;
    }
    printf("\n");
}

int main()
{
    Node *head = NULL;
    int value;
    printf("Enter 4 values: ");
    for (int i = 0; i < 4; i++)
    {
        scanf("%d", &value);
        head = insertEnd(head, value);
    }
    printf("Doubly linked list: ");
    display(head);
    printf("Search 30: %s\n", search(head, 30) ? "Found" : "Not found");
    head = deleteValue(head, 20);
    printf("After deleting 20: ");
    display(head);
    return 0;
}`,
        output: `Enter 4 values: 10 20 30 40
Doubly linked list: 10 20 30 40
Search 30: Found
After deleting 20: 10 30 40`,
      },
      {
        q: "Implement a doubly circular linked list of integers with insertion, deletion, display, and search.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *previous;
    struct Node *next;
} Node;

Node *insertEnd(Node *head, int value)
{
    Node *newNode = (Node *)malloc(sizeof(Node));
    if (newNode == NULL) return head;
    newNode->data = value;
    if (head == NULL)
    {
        newNode->next = newNode;
        newNode->previous = newNode;
        return newNode;
    }
    Node *last = head->previous;
    newNode->next = head;
    newNode->previous = last;
    last->next = newNode;
    head->previous = newNode;
    return head;
}

Node *deleteValue(Node *head, int value)
{
    if (head == NULL) return NULL;
    Node *current = head;
    do
    {
        if (current->data == value)
        {
            if (current->next == current)
            {
                free(current);
                return NULL;
            }
            current->previous->next = current->next;
            current->next->previous = current->previous;
            if (current == head) head = current->next;
            free(current);
            return head;
        }
        current = current->next;
    } while (current != head);
    return head;
}

int search(Node *head, int value)
{
    if (head == NULL) return 0;
    Node *current = head;
    do
    {
        if (current->data == value) return 1;
        current = current->next;
    } while (current != head);
    return 0;
}

void display(Node *head)
{
    if (head == NULL) return;
    Node *current = head;
    do
    {
        printf("%d ", current->data);
        current = current->next;
    } while (current != head);
    printf("\n");
}

int main()
{
    Node *head = NULL;
    int value;
    printf("Enter 4 values: ");
    for (int i = 0; i < 4; i++)
    {
        scanf("%d", &value);
        head = insertEnd(head, value);
    }
    printf("Doubly circular linked list: ");
    display(head);
    printf("Search 30: %s\n", search(head, 30) ? "Found" : "Not found");
    head = deleteValue(head, 20);
    printf("After deleting 20: ");
    display(head);
    return 0;
}`,
        output: `Enter 4 values: 10 20 30 40
Doubly circular linked list: 10 20 30 40
Search 30: Found
After deleting 20: 10 30 40`,
      },
      {
        q: "Implement a singly linked list of strings with insertion, deletion, display, and search.",
        answer: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node
{
    char data[30];
    struct Node *next;
} Node;

Node *insertEnd(Node *head, char value[])
{
    Node *newNode = (Node *)malloc(sizeof(Node));
    if (newNode == NULL) return head;
    strcpy(newNode->data, value);
    newNode->next = NULL;
    if (head == NULL) return newNode;
    Node *temp = head;
    while (temp->next != NULL) temp = temp->next;
    temp->next = newNode;
    return head;
}

Node *deleteValue(Node *head, char value[])
{
    Node *temp = head, *previous = NULL;
    while (temp != NULL && strcmp(temp->data, value) != 0)
    {
        previous = temp;
        temp = temp->next;
    }
    if (temp == NULL) return head;
    if (previous == NULL) head = temp->next;
    else previous->next = temp->next;
    free(temp);
    return head;
}

int search(Node *head, char value[])
{
    while (head != NULL)
    {
        if (strcmp(head->data, value) == 0) return 1;
        head = head->next;
    }
    return 0;
}

void display(Node *head)
{
    while (head != NULL)
    {
        printf("%s ", head->data);
        head = head->next;
    }
    printf("\n");
}

int main()
{
    Node *head = NULL;
    char value[30];
    printf("Enter 3 words: ");
    for (int i = 0; i < 3; i++)
    {
        scanf("%s", value);
        head = insertEnd(head, value);
    }
    printf("List: ");
    display(head);
    printf("Search Parmar: %s\n", search(head, "Parmar") ? "Found" : "Not found");
    head = deleteValue(head, "DSA");
    printf("After deleting DSA: ");
    display(head);
    return 0;
}`,
        output: `Enter 3 words: Yogesh Parmar DSA
List: Yogesh Parmar DSA
Search Parmar: Found
After deleting DSA: Yogesh Parmar`,
      },
      {
        q: "Implement a singly circular linked list of strings with insertion, deletion, display, and search.",
        answer: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node
{
    char data[30];
    struct Node *next;
} Node;

Node *insertEnd(Node *last, char value[])
{
    Node *newNode = (Node *)malloc(sizeof(Node));
    if (newNode == NULL) return last;
    strcpy(newNode->data, value);
    if (last == NULL)
    {
        newNode->next = newNode;
        return newNode;
    }
    newNode->next = last->next;
    last->next = newNode;
    return newNode;
}

Node *deleteValue(Node *last, char value[])
{
    if (last == NULL) return NULL;
    Node *current = last->next, *previous = last;
    do
    {
        if (strcmp(current->data, value) == 0)
        {
            if (current == previous)
            {
                free(current);
                return NULL;
            }
            previous->next = current->next;
            if (current == last) last = previous;
            free(current);
            return last;
        }
        previous = current;
        current = current->next;
    } while (current != last->next);
    return last;
}

int search(Node *last, char value[])
{
    if (last == NULL) return 0;
    Node *current = last->next;
    do
    {
        if (strcmp(current->data, value) == 0) return 1;
        current = current->next;
    } while (current != last->next);
    return 0;
}

void display(Node *last)
{
    if (last == NULL) return;
    Node *current = last->next;
    do
    {
        printf("%s ", current->data);
        current = current->next;
    } while (current != last->next);
    printf("\n");
}

int main()
{
    Node *last = NULL;
    char value[30];
    printf("Enter 3 words: ");
    for (int i = 0; i < 3; i++)
    {
        scanf("%s", value);
        last = insertEnd(last, value);
    }
    printf("List: ");
    display(last);
    printf("Search Parmar: %s\n", search(last, "Parmar") ? "Found" : "Not found");
    last = deleteValue(last, "DSA");
    printf("After deleting DSA: ");
    display(last);
    return 0;
}`,
        output: `Enter 3 words: Yogesh Parmar DSA
List: Yogesh Parmar DSA
Search Parmar: Found
After deleting DSA: Yogesh Parmar`,
      },
      {
        q: "Implement a doubly linked list of strings with insertion, deletion, display, and search.",
        answer: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node
{
    char data[30];
    struct Node *previous; struct Node *next;
} Node;

Node *insertEnd(Node *head, char value[])
{
    Node *newNode = (Node *)malloc(sizeof(Node));
    if (newNode == NULL) return head;
    strcpy(newNode->data, value);
    newNode->previous = NULL; newNode->next = NULL;
    if (head == NULL) return newNode;
    Node *temp = head;
    while (temp->next != NULL) temp = temp->next;
    temp->next = newNode;
    newNode->previous = temp;
    return head;
}

Node *deleteValue(Node *head, char value[])
{
    Node *temp = head;
    while (temp != NULL && strcmp(temp->data, value) != 0) temp = temp->next;
    if (temp == NULL) return head;
    if (temp->previous != NULL) temp->previous->next = temp->next;
    else head = temp->next;
    if (temp->next != NULL) temp->next->previous = temp->previous;
    free(temp);
    return head;
}

int search(Node *head, char value[])
{
    while (head != NULL)
    {
        if (strcmp(head->data, value) == 0) return 1;
        head = head->next;
    }
    return 0;
}

void display(Node *head)
{
    while (head != NULL)
    {
        printf("%s ", head->data);
        head = head->next;
    }
    printf("\n");
}

int main()
{
    Node *head = NULL;
    char value[30];
    printf("Enter 3 words: ");
    for (int i = 0; i < 3; i++)
    {
        scanf("%s", value);
        head = insertEnd(head, value);
    }
    printf("List: ");
    display(head);
    printf("Search Parmar: %s\n", search(head, "Parmar") ? "Found" : "Not found");
    head = deleteValue(head, "DSA");
    printf("After deleting DSA: ");
    display(head);
    return 0;
}`,
        output: `Enter 3 words: Yogesh Parmar DSA
List: Yogesh Parmar DSA
Search Parmar: Found
After deleting DSA: Yogesh Parmar`,
      },
      {
        q: "Implement a doubly circular linked list of strings with insertion, deletion, display, and search.",
        answer: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Node
{
    char data[30];
    struct Node *previous; struct Node *next;
} Node;

Node *insertEnd(Node *head, char value[])
{
    Node *newNode = (Node *)malloc(sizeof(Node));
    if (newNode == NULL) return head;
    strcpy(newNode->data, value);

    if (head == NULL)
    {
        newNode->next = newNode;
        newNode->previous = newNode;
        return newNode;
    }
    Node *last = head->previous;
    newNode->next = head;
    newNode->previous = last;
    last->next = newNode;
    head->previous = newNode;
    return head;
}

Node *deleteValue(Node *head, char value[])
{
    if (head == NULL) return NULL;
    Node *current = head;
    do
    {
        if (strcmp(current->data, value) == 0)
        {
            if (current->next == current)
            {
                free(current);
                return NULL;
            }
            current->previous->next = current->next;
            current->next->previous = current->previous;
            if (current == head) head = current->next;
            free(current);
            return head;
        }
        current = current->next;
    } while (current != head);
    return head;
}

int search(Node *head, char value[])
{
    if (head == NULL) return 0;
    Node *current = head;
    do
    {
        if (strcmp(current->data, value) == 0) return 1;
        current = current->next;
    } while (current != head);
    return 0;
}

void display(Node *head)
{
    if (head == NULL) return;
    Node *current = head;
    do
    {
        printf("%s ", current->data);
        current = current->next;
    } while (current != head);
    printf("\n");
}

int main()
{
    Node *head = NULL;
    char value[30];
    printf("Enter 3 words: ");
    for (int i = 0; i < 3; i++)
    {
        scanf("%s", value);
        head = insertEnd(head, value);
    }
    printf("List: ");
    display(head);
    printf("Search Parmar: %s\n", search(head, "Parmar") ? "Found" : "Not found");
    head = deleteValue(head, "DSA");
    printf("After deleting DSA: ");
    display(head);
    return 0;
}`,
        output: `Enter 3 words: Yogesh Parmar DSA
List: Yogesh Parmar DSA
Search Parmar: Found
After deleting DSA: Yogesh Parmar`,
      },
      {
        q: "Read two polynomial expressions dynamically, add them, and display the result.",
        answer: `#include <stdio.h>

void display(int p[], int degree)
{
    for (int i = degree; i >= 0; i--)
    {
        if (p[i] != 0)
        {
            printf("%d", p[i]);
            if (i > 0) printf("x^%d", i);
            if (i > 0) printf(" + ");
        }
    }
}

int main()
{
    int d1, d2;
    printf("Enter degree of first polynomial: ");
    scanf("%d", &d1);
    int first[d1 + 1];
    printf("Enter coefficients from constant term to highest power: ");
    for (int i = 0; i <= d1; i++) scanf("%d", &first[i]);
    printf("Enter degree of second polynomial: ");
    scanf("%d", &d2);
    int second[d2 + 1];
    printf("Enter coefficients from constant term to highest power: ");
    for (int i = 0; i <= d2; i++) scanf("%d", &second[i]);
    int degree = d1 > d2 ? d1 : d2;
    int result[degree + 1];
    for (int i = 0; i <= degree; i++)
    {
        int a = i <= d1 ? first[i] : 0;
        int b = i <= d2 ? second[i] : 0;
        result[i] = a + b;
    }
    printf("Sum polynomial: ");
    display(result, degree);
    return 0;
}`,
        output: `Enter degree of first polynomial: 2
Enter coefficients from constant term to highest power: 1 2 1
Enter degree of second polynomial: 1
Enter coefficients from constant term to highest power: 3 1
Sum polynomial: 1x^2 + 3x^1 + 4`,
      },
      {
        q: "Read two polynomial expressions dynamically, subtract them, and display the result.",
        answer: `#include <stdio.h>

void display(int p[], int degree)
{
    int firstTerm = 1;
    for (int i = degree; i >= 0; i--)
    {
        if (p[i] != 0)
        {
            if (firstTerm == 0 && p[i] > 0) printf(" + ");
            if (p[i] < 0) printf(" - ");
            int value = p[i] < 0 ? -p[i] : p[i];
            printf("%d", value);
            if (i > 0) printf("x^%d", i);
            firstTerm = 0;
        }
    }
}

int main()
{
    int d1, d2;
    printf("Enter degree of first polynomial: ");
    scanf("%d", &d1);
    int first[d1 + 1];
    printf("Enter coefficients from constant term to highest power: ");
    for (int i = 0; i <= d1; i++) scanf("%d", &first[i]);
    printf("Enter degree of second polynomial: ");
    scanf("%d", &d2);
    int second[d2 + 1];
    printf("Enter coefficients from constant term to highest power: ");
    for (int i = 0; i <= d2; i++) scanf("%d", &second[i]);
    int degree = d1 > d2 ? d1 : d2;
    int result[degree + 1];
    for (int i = 0; i <= degree; i++)
    {
        int a = i <= d1 ? first[i] : 0;
        int b = i <= d2 ? second[i] : 0;
        result[i] = a - b;
    }
    printf("Difference polynomial: ");
    display(result, degree);
    return 0;
}`,
        output: `Enter degree of first polynomial: 2
Enter coefficients from constant term to highest power: 1 3 2
Enter degree of second polynomial: 2
Enter coefficients from constant term to highest power: 2 1 1
Difference polynomial: 1x^2 + 2x^1 - 1`,
      },
      {
        q: "Read two polynomial expressions dynamically, multiply them, and display the result.",
        answer: `#include <stdio.h>

int main()
{
    int d1, d2;
    printf("Enter degree of first polynomial: ");
    scanf("%d", &d1);
    int first[d1 + 1];
    printf("Enter coefficients from constant term to highest power: ");
    for (int i = 0; i <= d1; i++) scanf("%d", &first[i]);
    printf("Enter degree of second polynomial: ");
    scanf("%d", &d2);
    int second[d2 + 1];
    printf("Enter coefficients from constant term to highest power: ");
    for (int i = 0; i <= d2; i++) scanf("%d", &second[i]);
    int result[d1 + d2 + 1];
    for (int i = 0; i <= d1 + d2; i++) result[i] = 0;
    for (int i = 0; i <= d1; i++)
    {
        for (int j = 0; j <= d2; j++)
        {
            result[i + j] = result[i + j] + first[i] * second[j];
        }
    }
    printf("Product coefficients from constant term to highest power: ");
    for (int i = 0; i <= d1 + d2; i++) printf("%d ", result[i]);
    return 0;
}`,
        output: `Enter degree of first polynomial: 1
Enter coefficients from constant term to highest power: 1 1
Enter degree of second polynomial: 1
Enter coefficients from constant term to highest power: 2 1
Product coefficients from constant term to highest power: 2 3 1`,
      },
    ],
  },
  {
    name: "TREES",
    questions: [
      {
        q: "Construct a binary tree from its preorder and inorder traversals.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
} Node;

Node *newNode(int value)
{
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = value;
    node->left = NULL;
    node->right = NULL;
    return node;
}

int findPosition(int inorder[], int start, int end, int value)
{
    for (int i = start; i <= end; i++)
    {
        if (inorder[i] == value) return i;
    }
    return -1;
}

Node *buildTree(int preorder[], int inorder[], int start, int end, int *index)
{
    if (start > end) return NULL;
    Node *root = newNode(preorder[*index]);
    (*index)++;
    int position = findPosition(inorder, start, end, root->data);
    root->left = buildTree(preorder, inorder, start, position - 1, index);
    root->right = buildTree(preorder, inorder, position + 1, end, index);
    return root;
}

void inorderPrint(Node *root)
{
    if (root != NULL)
    {
        inorderPrint(root->left);
        printf("%d ", root->data);
        inorderPrint(root->right);
    }
}

int main()
{
    int n;
    printf("Enter number of nodes: ");
    scanf("%d", &n);
    int preorder[n], inorder[n];
    printf("Enter preorder traversal: ");
    for (int i = 0; i < n; i++) scanf("%d", &preorder[i]);
    printf("Enter inorder traversal: ");
    for (int i = 0; i < n; i++) scanf("%d", &inorder[i]);
    int index = 0;
    Node *root = buildTree(preorder, inorder, 0, n - 1, &index);
    printf("Inorder traversal of constructed tree: ");
    inorderPrint(root);
    return 0;
}`,
        output: `Enter number of nodes: 5
Enter preorder traversal: 1 2 4 5 3
Enter inorder traversal: 4 2 5 1 3
Inorder traversal of constructed tree: 4 2 5 1 3`,
      },
      {
        q: "Perform level-order traversal of a binary tree.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
} Node;

Node *newNode(int value)
{
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = value;
    node->left = NULL;
    node->right = NULL;
    return node;
}

int main()
{
    int n;
    printf("Enter number of nodes in level order: ");
    scanf("%d", &n);
    Node *nodes[n];
    printf("Enter node values: ");
    for (int i = 0; i < n; i++)
    {
        int value;
        scanf("%d", &value);
        nodes[i] = newNode(value);
    }
    for (int i = 0; i < n; i++)
    {
        if (2 * i + 1 < n) nodes[i]->left = nodes[2 * i + 1];
        if (2 * i + 2 < n) nodes[i]->right = nodes[2 * i + 2];
    }
    Node *queue[n];
    int front = 0, rear = 0;
    queue[rear++] = nodes[0];
    printf("Level-order traversal: ");
    while (front < rear)
    {
        Node *current = queue[front++];
        printf("%d ", current->data);
        if (current->left != NULL) queue[rear++] = current->left;
        if (current->right != NULL) queue[rear++] = current->right;
    }
    return 0;
}`,
        output: `Enter number of nodes in level order: 7
Enter node values: 1 2 3 4 5 6 7
Level-order traversal: 1 2 3 4 5 6 7`,
      },
      {
        q: "Print the left view of a binary tree.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
} Node;

Node *newNode(int value)
{
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = value;
    node->left = NULL;
    node->right = NULL;
    return node;
}

void leftView(Node *root, int level, int *maximumLevel)
{
    if (root == NULL) return;
    if (level > *maximumLevel)
    {
        printf("%d ", root->data);
        *maximumLevel = level;
    }
    leftView(root->left, level + 1, maximumLevel);
    leftView(root->right, level + 1, maximumLevel);
}

int main()
{
    int n;
    printf("Enter number of nodes in level order: ");
    scanf("%d", &n);
    Node *nodes[n];
    printf("Enter node values: ");
    for (int i = 0; i < n; i++)
    {
        int value;
        scanf("%d", &value);
        nodes[i] = newNode(value);
    }
    for (int i = 0; i < n; i++)
    {
        if (2 * i + 1 < n) nodes[i]->left = nodes[2 * i + 1];
        if (2 * i + 2 < n) nodes[i]->right = nodes[2 * i + 2];
    }
    int maximumLevel = 0;
    printf("Left view: ");
    leftView(nodes[0], 1, &maximumLevel);
    return 0;
}`,
        output: `Enter number of nodes in level order: 7
Enter node values: 1 2 3 4 5 6 7
Left view: 1 2 4`,
      },
      {
        q: "Print the right view of a binary tree.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
} Node;

Node *newNode(int value)
{
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = value;
    node->left = NULL;
    node->right = NULL;
    return node;
}

void rightView(Node *root, int level, int *maximumLevel)
{
    if (root == NULL) return;
    if (level > *maximumLevel)
    {
        printf("%d ", root->data);
        *maximumLevel = level;
    }
    rightView(root->right, level + 1, maximumLevel);
    rightView(root->left, level + 1, maximumLevel);
}

int main()
{
    int n;
    printf("Enter number of nodes in level order: ");
    scanf("%d", &n);
    Node *nodes[n];
    printf("Enter node values: ");
    for (int i = 0; i < n; i++)
    {
        int value;
        scanf("%d", &value);
        nodes[i] = newNode(value);
    }
    for (int i = 0; i < n; i++)
    {
        if (2 * i + 1 < n) nodes[i]->left = nodes[2 * i + 1];
        if (2 * i + 2 < n) nodes[i]->right = nodes[2 * i + 2];
    }
    int maximumLevel = 0;
    printf("Right view: ");
    rightView(nodes[0], 1, &maximumLevel);
    return 0;
}`,
        output: `Enter number of nodes in level order: 7
Enter node values: 1 2 3 4 5 6 7
Right view: 1 3 7`,
      },
      {
        q: "Construct a binary tree from its postorder and inorder traversals.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
} Node;

Node *newNode(int value)
{
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = value;
    node->left = NULL;
    node->right = NULL;
    return node;
}

int findPosition(int inorder[], int start, int end, int value)
{
    for (int i = start; i <= end; i++)
    {
        if (inorder[i] == value) return i;
    }
    return -1;
}

Node *buildTree(int postorder[], int inorder[], int start, int end, int *index)
{
    if (start > end) return NULL;
    Node *root = newNode(postorder[*index]);
    (*index)--;
    int position = findPosition(inorder, start, end, root->data);
    root->right = buildTree(postorder, inorder, position + 1, end, index);
    root->left = buildTree(postorder, inorder, start, position - 1, index);
    return root;
}

void inorderPrint(Node *root)
{
    if (root != NULL)
    {
        inorderPrint(root->left);
        printf("%d ", root->data);
        inorderPrint(root->right);
    }
}

int main()
{
    int n;
    printf("Enter number of nodes: ");
    scanf("%d", &n);
    int postorder[n], inorder[n];
    printf("Enter postorder traversal: ");
    for (int i = 0; i < n; i++) scanf("%d", &postorder[i]);
    printf("Enter inorder traversal: ");
    for (int i = 0; i < n; i++) scanf("%d", &inorder[i]);
    int index = n - 1;
    Node *root = buildTree(postorder, inorder, 0, n - 1, &index);
    printf("Inorder traversal of constructed tree: ");
    inorderPrint(root);
    return 0;
}`,
        output: `Enter number of nodes: 5
Enter postorder traversal: 4 5 2 3 1
Enter inorder traversal: 4 2 5 1 3
Inorder traversal of constructed tree: 4 2 5 1 3`,
      },
      {
        q: "Find the maximum depth of a binary tree.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
} Node;

Node *newNode(int value)
{
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = value;
    node->left = NULL;
    node->right = NULL;
    return node;
}

int depth(Node *root)
{
    if (root == NULL) return 0;
    int leftDepth = depth(root->left);
    int rightDepth = depth(root->right);
    return (leftDepth > rightDepth ? leftDepth : rightDepth) + 1;
}

int main()
{
    int n;
    printf("Enter number of nodes in level order: ");
    scanf("%d", &n);
    Node *nodes[n];
    printf("Enter node values: ");
    for (int i = 0; i < n; i++)
    {
        int value;
        scanf("%d", &value);
        nodes[i] = newNode(value);
    }
    for (int i = 0; i < n; i++)
    {
        if (2 * i + 1 < n) nodes[i]->left = nodes[2 * i + 1];
        if (2 * i + 2 < n) nodes[i]->right = nodes[2 * i + 2];
    }
    printf("Maximum depth: %d", depth(nodes[0]));
    return 0;
}`,
        output: `Enter number of nodes in level order: 7
Enter node values: 1 2 3 4 5 6 7
Maximum depth: 3`,
      },
      {
        q: "Create an array-based binary search tree with insert, delete, search, traversals, and minimum operations.",
        answer: `#include <stdio.h>

int value[100], leftChild[100], rightChild[100], used = 0;

int makeNode(int number)
{
    value[used] = number;
    leftChild[used] = -1;
    rightChild[used] = -1;
    return used++;
}

void insert(int *root, int number)
{
    if (*root == -1)
    {
        *root = makeNode(number);
        return;
    }
    if (number < value[*root]) insert(&leftChild[*root], number);
    else if (number > value[*root]) insert(&rightChild[*root], number);
}

int search(int root, int number)
{
    if (root == -1) return 0;
    if (value[root] == number) return 1;
    if (number < value[root]) return search(leftChild[root], number);
    return search(rightChild[root], number);
}

void inorder(int root)
{
    if (root != -1)
    {
        inorder(leftChild[root]);
        printf("%d ", value[root]);
        inorder(rightChild[root]);
    }
}

int minimum(int root)
{
    while (leftChild[root] != -1) root = leftChild[root];
    return value[root];
}

int deleteValue(int root, int number)
{
    if (root == -1) return -1;
    if (number < value[root]) leftChild[root] = deleteValue(leftChild[root], number);
    else if (number > value[root]) rightChild[root] = deleteValue(rightChild[root], number);
    else
    {
        if (leftChild[root] == -1) return rightChild[root];
        if (rightChild[root] == -1) return leftChild[root];
        int next = rightChild[root];
        while (leftChild[next] != -1) next = leftChild[next];
        value[root] = value[next];
        rightChild[root] = deleteValue(rightChild[root], value[next]);
    }
    return root;
}

int main()
{
    int root = -1;
    int values[] = {50, 30, 70, 20, 40, 60, 80};
    for (int i = 0; i < 7; i++) insert(&root, values[i]);
    printf("Inorder traversal: ");
    inorder(root);
    printf("\nSearch 40: %s\n", search(root, 40) ? "Found" : "Not found");
    printf("Minimum value: %d\n", minimum(root));
    root = deleteValue(root, 30);
    printf("After deleting 30: ");
    inorder(root);
    return 0;
}`,
        output: `Inorder traversal: 20 30 40 50 60 70 80
Search 40: Found
Minimum value: 20
After deleting 30: 20 40 50 60 70 80`,
      },
      {
        q: "Create a dynamically allocated binary search tree with insert, delete, search, and traversals.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
} Node;

Node *insert(Node *root, int value)
{
    if (root == NULL)
    {
        Node *node = (Node *)malloc(sizeof(Node));
        node->data = value;
        node->left = NULL;
        node->right = NULL;
        return node;
    }
    if (value < root->data) root->left = insert(root->left, value);
    else if (value > root->data) root->right = insert(root->right, value);
    return root;
}

Node *minimum(Node *root)
{
    while (root->left != NULL) root = root->left;
    return root;
}

Node *deleteValue(Node *root, int value)
{
    if (root == NULL) return NULL;
    if (value < root->data) root->left = deleteValue(root->left, value);
    else if (value > root->data) root->right = deleteValue(root->right, value);
    else
    {
        if (root->left == NULL)
        {
            Node *temp = root->right;
            free(root);
            return temp;
        }
        if (root->right == NULL)
        {
            Node *temp = root->left;
            free(root);
            return temp;
        }
        Node *temp = minimum(root->right);
        root->data = temp->data;
        root->right = deleteValue(root->right, temp->data);
    }
    return root;
}

int search(Node *root, int value)
{
    if (root == NULL) return 0;
    if (root->data == value) return 1;
    if (value < root->data) return search(root->left, value);
    return search(root->right, value);
}

void inorder(Node *root)
{
    if (root != NULL)
    {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

int main()
{
    Node *root = NULL;
    int values[] = {50, 30, 70, 20, 40, 60, 80};
    for (int i = 0; i < 7; i++) root = insert(root, values[i]);
    printf("Inorder traversal: ");
    inorder(root);
    printf("\nSearch 40: %s\n", search(root, 40) ? "Found" : "Not found");
    root = deleteValue(root, 30);
    printf("After deleting 30: ");
    inorder(root);
    return 0;
}`,
        output: `Inorder traversal: 20 30 40 50 60 70 80
Search 40: Found
After deleting 30: 20 40 50 60 70 80`,
      },
      {
        q: "Find the inorder predecessor and successor in a dynamically represented BST.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
} Node;

Node *insert(Node *root, int value)
{
    if (root == NULL)
    {
        Node *node = (Node *)malloc(sizeof(Node));
        node->data = value;
        node->left = NULL;
        node->right = NULL;
        return node;
    }
    if (value < root->data) root->left = insert(root->left, value);
    else if (value > root->data) root->right = insert(root->right, value);
    return root;
}

void findValues(Node *root, int key, int *predecessor, int *successor)
{
    if (root == NULL) return;
    if (root->data < key && (*predecessor == -1 || root->data > *predecessor)) *predecessor = root->data;
    if (root->data > key && (*successor == -1 || root->data < *successor)) *successor = root->data;
    findValues(root->left, key, predecessor, successor);
    findValues(root->right, key, predecessor, successor);
}

int main()
{
    Node *root = NULL;
    int values[] = {50, 30, 70, 20, 40, 60, 80};
    for (int i = 0; i < 7; i++) root = insert(root, values[i]);
    int key = 50, predecessor = -1, successor = -1;
    findValues(root, key, &predecessor, &successor);
    printf("Key: %d\n", key);
    printf("Inorder predecessor: %d\n", predecessor);
    printf("Inorder successor: %d", successor);
    return 0;
}`,
        output: `Key: 50
Inorder predecessor: 40
Inorder successor: 60`,
      },
      {
        q: "Check whether a binary search tree contains a dead end.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
} Node;

Node *insert(Node *root, int value)
{
    if (root == NULL)
    {
        Node *node = (Node *)malloc(sizeof(Node));
        node->data = value;
        node->left = NULL;
        node->right = NULL;
        return node;
    }
    if (value < root->data) root->left = insert(root->left, value);
    else if (value > root->data) root->right = insert(root->right, value);
    return root;
}

int hasDeadEnd(Node *root, int minimum, int maximum)
{
    if (root == NULL) return 0;
    if (minimum == maximum) return 1;
    return hasDeadEnd(root->left, minimum, root->data - 1) ||
           hasDeadEnd(root->right, root->data + 1, maximum);
}

int main()
{
    Node *root = NULL;
    int values[] = {8, 5, 2, 1, 7, 11};
    for (int i = 0; i < 7; i++) root = insert(root, values[i]);
    if (hasDeadEnd(root, 1, 100000)) printf("BST contains a dead end");
    else printf("BST does not contain a dead end");
    return 0;
}`,
        output: `BST contains a dead end`,
      },
      {
        q: "Convert a binary tree to a binary search tree using an array.",
        answer: `#include <stdio.h>

void collect(int tree[], int n, int index, int values[], int *count)
{
    if (index >= n) return;
    collect(tree, n, 2 * index + 1, values, count);
    values[(*count)++] = tree[index];
    collect(tree, n, 2 * index + 2, values, count);
}

void replaceValues(int tree[], int n, int index, int values[], int *position)
{
    if (index >= n) return;
    replaceValues(tree, n, 2 * index + 1, values, position);
    tree[index] = values[(*position)++];
    replaceValues(tree, n, 2 * index + 2, values, position);
}

int main()
{
    int n, count = 0, position = 0, temp;
    printf("Enter number of tree nodes: ");
    scanf("%d", &n);
    int tree[n], values[n];
    printf("Enter node values in level order: ");
    for (int i = 0; i < n; i++) scanf("%d", &tree[i]);
    collect(tree, n, 0, values, &count);
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (values[j] > values[j + 1])
            {
                temp = values[j];
                values[j] = values[j + 1];
                values[j + 1] = temp;
            }
        }
    }
    replaceValues(tree, n, 0, values, &position);
    printf("Inorder of converted BST: ");
    for (int i = 0; i < n; i++) printf("%d ", values[i]);
    return 0;
}`,
        output: `Enter number of tree nodes: 7
Enter node values in level order: 10 30 15 20 8 25 5
Inorder of converted BST: 5 8 10 15 20 25 30`,
      },
      {
        q: "Find the k-th largest element in a BST represented using an array.",
        answer: `#include <stdio.h>

int value[100], leftChild[100], rightChild[100], used = 0;

int makeNode(int number)
{
    value[used] = number;
    leftChild[used] = -1;
    rightChild[used] = -1;
    return used++;
}

void insert(int *root, int number)
{
    if (*root == -1)
    {
        *root = makeNode(number);
        return;
    }
    if (number < value[*root]) insert(&leftChild[*root], number);
    else if (number > value[*root]) insert(&rightChild[*root], number);
}

int search(int root, int number)
{
    if (root == -1) return 0;
    if (value[root] == number) return 1;
    if (number < value[root]) return search(leftChild[root], number);
    return search(rightChild[root], number);
}

void inorder(int root)
{
    if (root != -1)
    {
        inorder(leftChild[root]);
        printf("%d ", value[root]);
        inorder(rightChild[root]);
    }
}

int minimum(int root)
{
    while (leftChild[root] != -1) root = leftChild[root];
    return value[root];
}

int deleteValue(int root, int number)
{
    if (root == -1) return -1;
    if (number < value[root]) leftChild[root] = deleteValue(leftChild[root], number);
    else if (number > value[root]) rightChild[root] = deleteValue(rightChild[root], number);
    else
    {
        if (leftChild[root] == -1) return rightChild[root];
        if (rightChild[root] == -1) return leftChild[root];
        int next = rightChild[root];
        while (leftChild[next] != -1) next = leftChild[next];
        value[root] = value[next];
        rightChild[root] = deleteValue(rightChild[root], value[next]);
    }
    return root;
}

void reverseInorder(int root, int k, int *count, int *answer)
{
    if (root == -1 || *count >= k) return;
    reverseInorder(rightChild[root], k, count, answer);
    (*count)++;
    if (*count == k) *answer = value[root];
    reverseInorder(leftChild[root], k, count, answer);
}

int main()
{
    int root = -1, values[] = {50, 30, 70, 20, 40, 60, 80};
    for (int i = 0; i < 7; i++) insert(&root, values[i]);
    int k, count = 0, answer = -1;
    printf("Enter K: ");
    scanf("%d", &k);
    reverseInorder(root, k, &count, &answer);
    if (answer == -1) printf("Invalid value of K");
    else printf("K-th largest element is: %d", answer);
    return 0;
}`,
        output: `Enter K: 2
K-th largest element is: 70`,
      },
      {
        q: "Find the k-th smallest element in a BST represented using an array.",
        answer: `#include <stdio.h>

int value[100], leftChild[100], rightChild[100], used = 0;

int makeNode(int number)
{
    value[used] = number;
    leftChild[used] = -1;
    rightChild[used] = -1;
    return used++;
}

void insert(int *root, int number)
{
    if (*root == -1)
    {
        *root = makeNode(number);
        return;
    }
    if (number < value[*root]) insert(&leftChild[*root], number);
    else if (number > value[*root]) insert(&rightChild[*root], number);
}

int search(int root, int number)
{
    if (root == -1) return 0;
    if (value[root] == number) return 1;
    if (number < value[root]) return search(leftChild[root], number);
    return search(rightChild[root], number);
}

void inorder(int root)
{
    if (root != -1)
    {
        inorder(leftChild[root]);
        printf("%d ", value[root]);
        inorder(rightChild[root]);
    }
}

int minimum(int root)
{
    while (leftChild[root] != -1) root = leftChild[root];
    return value[root];
}

int deleteValue(int root, int number)
{
    if (root == -1) return -1;
    if (number < value[root]) leftChild[root] = deleteValue(leftChild[root], number);
    else if (number > value[root]) rightChild[root] = deleteValue(rightChild[root], number);
    else
    {
        if (leftChild[root] == -1) return rightChild[root];
        if (rightChild[root] == -1) return leftChild[root];
        int next = rightChild[root];
        while (leftChild[next] != -1) next = leftChild[next];
        value[root] = value[next];
        rightChild[root] = deleteValue(rightChild[root], value[next]);
    }
    return root;
}

void findSmallest(int root, int k, int *count, int *answer)
{
    if (root == -1 || *count >= k) return;
    findSmallest(leftChild[root], k, count, answer);
    (*count)++;
    if (*count == k) *answer = value[root];
    findSmallest(rightChild[root], k, count, answer);
}

int main()
{
    int root = -1, values[] = {50, 30, 70, 20, 40, 60, 80};
    for (int i = 0; i < 7; i++) insert(&root, values[i]);
    int k, count = 0, answer = -1;
    printf("Enter K: ");
    scanf("%d", &k);
    findSmallest(root, k, &count, &answer);
    if (answer == -1) printf("Invalid value of K");
    else printf("K-th smallest element is: %d", answer);
    return 0;
}`,
        output: `Enter K: 3
K-th smallest element is: 40`,
      },
      {
        q: "Convert a BST preorder traversal into its postorder traversal.",
        answer: `#include <stdio.h>

void insert(int tree[], int value)
{
    int index = 0;
    while (tree[index] != -1)
    {
        if (value < tree[index]) index = 2 * index + 1;
        else index = 2 * index + 2;
    }
    tree[index] = value;
}

void postorder(int tree[], int index)
{
    if (index >= 100 || tree[index] == -1) return;
    postorder(tree, 2 * index + 1);
    postorder(tree, 2 * index + 2);
    printf("%d ", tree[index]);
}

int main()
{
    int n, tree[100];
    for (int i = 0; i < 100; i++) tree[i] = -1;
    printf("Enter number of preorder values: ");
    scanf("%d", &n);
    printf("Enter BST preorder traversal: ");
    for (int i = 0; i < n; i++)
    {
        int value;
        scanf("%d", &value);
        insert(tree, value);
    }
    printf("Postorder traversal: ");
    postorder(tree, 0);
    return 0;
}`,
        output: `Enter number of preorder values: 7
Enter BST preorder traversal: 50 30 20 40 70 60 80
Postorder traversal: 20 40 30 60 80 70 50`,
      },
      {
        q: "Construct a BST from a supplied preorder traversal using arrays.",
        answer: `#include <stdio.h>

int value[100], leftChild[100], rightChild[100], used = 0;

int makeNode(int number)
{
    value[used] = number;
    leftChild[used] = -1;
    rightChild[used] = -1;
    return used++;
}

void insert(int *root, int number)
{
    if (*root == -1)
    {
        *root = makeNode(number);
        return;
    }
    if (number < value[*root]) insert(&leftChild[*root], number);
    else if (number > value[*root]) insert(&rightChild[*root], number);
}

int search(int root, int number)
{
    if (root == -1) return 0;
    if (value[root] == number) return 1;
    if (number < value[root]) return search(leftChild[root], number);
    return search(rightChild[root], number);
}

void inorder(int root)
{
    if (root != -1)
    {
        inorder(leftChild[root]);
        printf("%d ", value[root]);
        inorder(rightChild[root]);
    }
}

int minimum(int root)
{
    while (leftChild[root] != -1) root = leftChild[root];
    return value[root];
}

int deleteValue(int root, int number)
{
    if (root == -1) return -1;
    if (number < value[root]) leftChild[root] = deleteValue(leftChild[root], number);
    else if (number > value[root]) rightChild[root] = deleteValue(rightChild[root], number);
    else
    {
        if (leftChild[root] == -1) return rightChild[root];
        if (rightChild[root] == -1) return leftChild[root];
        int next = rightChild[root];
        while (leftChild[next] != -1) next = leftChild[next];
        value[root] = value[next];
        rightChild[root] = deleteValue(rightChild[root], value[next]);
    }
    return root;
}

int main()
{
    int n, root = -1;
    printf("Enter number of preorder values: ");
    scanf("%d", &n);
    printf("Enter preorder values: ");
    for (int i = 0; i < n; i++)
    {
        int number;
        scanf("%d", &number);
        insert(&root, number);
    }
    printf("Inorder traversal of BST: ");
    inorder(root);
    return 0;
}`,
        output: `Enter number of preorder values: 7
Enter preorder values: 50 30 20 40 70 60 80
Inorder traversal of BST: 20 30 40 50 60 70 80`,
      },
      {
        q: "Construct a BST from a supplied postorder traversal using arrays.",
        answer: `#include <stdio.h>

int value[100], leftChild[100], rightChild[100], used = 0;

int makeNode(int number)
{
    value[used] = number;
    leftChild[used] = -1;
    rightChild[used] = -1;
    return used++;
}

void insert(int *root, int number)
{
    if (*root == -1)
    {
        *root = makeNode(number);
        return;
    }
    if (number < value[*root]) insert(&leftChild[*root], number);
    else if (number > value[*root]) insert(&rightChild[*root], number);
}

int search(int root, int number)
{
    if (root == -1) return 0;
    if (value[root] == number) return 1;
    if (number < value[root]) return search(leftChild[root], number);
    return search(rightChild[root], number);
}

void inorder(int root)
{
    if (root != -1)
    {
        inorder(leftChild[root]);
        printf("%d ", value[root]);
        inorder(rightChild[root]);
    }
}

int minimum(int root)
{
    while (leftChild[root] != -1) root = leftChild[root];
    return value[root];
}

int deleteValue(int root, int number)
{
    if (root == -1) return -1;
    if (number < value[root]) leftChild[root] = deleteValue(leftChild[root], number);
    else if (number > value[root]) rightChild[root] = deleteValue(rightChild[root], number);
    else
    {
        if (leftChild[root] == -1) return rightChild[root];
        if (rightChild[root] == -1) return leftChild[root];
        int next = rightChild[root];
        while (leftChild[next] != -1) next = leftChild[next];
        value[root] = value[next];
        rightChild[root] = deleteValue(rightChild[root], value[next]);
    }
    return root;
}

int main()
{
    int n, root = -1;
    printf("Enter number of postorder values: ");
    scanf("%d", &n);
    printf("Enter postorder values: ");
    for (int i = 0; i < n; i++)
    {
        int number;
        scanf("%d", &number);
        insert(&root, number);
    }
    printf("Inorder traversal of BST: ");
    inorder(root);
    return 0;
}`,
        output: `Enter number of postorder values: 7
Enter postorder values: 20 40 30 60 80 70 50
Inorder traversal of BST: 20 30 40 50 60 70 80`,
      },
      {
        q: "Create a strict binary tree dynamically from user input.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
} Node;

Node *createTree()
{
    int value, children;
    printf("Enter node value and 1 if it has two children, otherwise 0: ");
    scanf("%d%d", &value, &children);
    Node *root = (Node *)malloc(sizeof(Node));
    root->data = value;
    root->left = NULL;
    root->right = NULL;
    if (children == 1)
    {
        root->left = createTree();
        root->right = createTree();
    }
    return root;
}

void preorder(Node *root)
{
    if (root != NULL)
    {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

int main()
{
    Node *root = createTree();
    printf("Preorder traversal: ");
    preorder(root);
    return 0;
}`,
        output: `Enter node value and 1 if it has two children, otherwise 0: 1 1
Enter node value and 1 if it has two children, otherwise 0: 2 0
Enter node value and 1 if it has two children, otherwise 0: 3 0
Preorder traversal: 1 2 3`,
      },
      {
        q: "Create an almost-complete binary tree dynamically from user input.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
} Node;

int main()
{
    int n;
    printf("Enter number of nodes: ");
    scanf("%d", &n);
    Node *nodes[n];
    printf("Enter values level by level, filling each level from left to right: ");
    for (int i = 0; i < n; i++)
    {
        int value;
        scanf("%d", &value);
        nodes[i] = (Node *)malloc(sizeof(Node));
        nodes[i]->data = value;
        nodes[i]->left = NULL;
        nodes[i]->right = NULL;
    }
    for (int i = 0; i < n; i++)
    {
        if (2 * i + 1 < n) nodes[i]->left = nodes[2 * i + 1];
        if (2 * i + 2 < n) nodes[i]->right = nodes[2 * i + 2];
    }
    printf("Level-order traversal: ");
    for (int i = 0; i < n; i++) printf("%d ", nodes[i]->data);
    return 0;
}`,
        output: `Enter number of nodes: 6
Enter values level by level, filling each level from left to right: 1 2 3 4 5 6
Level-order traversal: 1 2 3 4 5 6`,
      },
      {
        q: "Create a complete binary tree dynamically from user input.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
} Node;

int main()
{
    int n;
    printf("Enter number of nodes: ");
    scanf("%d", &n);
    Node *nodes[n];
    printf("Enter node values in level order: ");
    for (int i = 0; i < n; i++)
    {
        int value;
        scanf("%d", &value);
        nodes[i] = (Node *)malloc(sizeof(Node));
        nodes[i]->data = value;
        nodes[i]->left = NULL;
        nodes[i]->right = NULL;
    }
    for (int i = 0; i < n; i++)
    {
        if (2 * i + 1 < n) nodes[i]->left = nodes[2 * i + 1];
        if (2 * i + 2 < n) nodes[i]->right = nodes[2 * i + 2];
    }
    printf("Complete binary tree in level order: ");
    for (int i = 0; i < n; i++) printf("%d ", nodes[i]->data);
    return 0;
}`,
        output: `Enter number of nodes: 7
Enter node values in level order: 1 2 3 4 5 6 7
Complete binary tree in level order: 1 2 3 4 5 6 7`,
      },
      {
        q: "Count the nodes in a dynamically constructed binary search tree.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
} Node;

Node *insert(Node *root, int value)
{
    if (root == NULL)
    {
        Node *node = (Node *)malloc(sizeof(Node));
        node->data = value;
        node->left = NULL;
        node->right = NULL;
        return node;
    }
    if (value < root->data) root->left = insert(root->left, value);
    else if (value > root->data) root->right = insert(root->right, value);
    return root;
}

int countNodes(Node *root)
{
    if (root == NULL) return 0;
    return 1 + countNodes(root->left) + countNodes(root->right);
}

int main()
{
    Node *root = NULL;
    int n, value;
    printf("Enter number of values: ");
    scanf("%d", &n);
    printf("Enter values: ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &value);
        root = insert(root, value);
    }
    printf("Total nodes in the BST: %d", countNodes(root));
    return 0;
}`,
        output: `Enter number of values: 7
Enter values: 50 30 70 20 40 60 80
Total nodes in the BST: 7`,
      },
    ],
  },
  {
    name: "GRAPHS",
    questions: [
      {
        q: "Read graph vertices and edges, build an adjacency matrix, and print it.",
        answer: `#include <stdio.h>

int main()
{
    int vertices, edges, matrix[10][10] = {0};
    printf("Enter number of vertices and edges: ");
    scanf("%d%d", &vertices, &edges);
    printf("Enter each edge as two vertex numbers (starting from 0):\n");
    for (int i = 0; i < edges; i++)
    {
        int from, to;
        scanf("%d%d", &from, &to);
        matrix[from][to] = 1;
        matrix[to][from] = 1;
    }
    printf("Adjacency matrix:\n");
    for (int i = 0; i < vertices; i++)
    {
        for (int j = 0; j < vertices; j++) printf("%d ", matrix[i][j]);
        printf("\n");
    }
    return 0;
}`,
        output: `Enter number of vertices and edges: 4 4
Enter each edge as two vertex numbers (starting from 0):
0 1
0 2
1 2
2 3
Adjacency matrix:
0 1 1 0
1 0 1 0
1 1 0 1
0 0 1 0`,
      },
      {
        q: "Represent a graph with an adjacency list and support insertion and deletion.",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Edge
{
    int vertex;
    struct Edge *next;
} Edge;

void addEdge(Edge *list[], int from, int to)
{
    Edge *node = (Edge *)malloc(sizeof(Edge));
    if (node == NULL)
    {
        printf("Memory allocation failed\n");
        return;
    }
    node->vertex = to;
    node->next = list[from];
    list[from] = node;
}

void deleteEdge(Edge *list[], int from, int to)
{
    Edge *current = list[from];
    Edge *previous = NULL;

    while (current != NULL)
    {
        if (current->vertex == to)
        {
            if (previous == NULL)
            {
                list[from] = current->next;
            }
            else
            {
                previous->next = current->next;
            }
            free(current);
            return;
        }
        previous = current;
        current = current->next;
    }
}

void display(Edge *list[], int vertices)
{
    int i;
    for (i = 0; i < vertices; i++)
    {
        Edge *current = list[i];
        printf("%d: ", i);
        while (current != NULL)
        {
            printf("%d ", current->vertex);
            current = current->next;
        }
        printf("\n");
    }
}

int main()
{
    Edge *list[4] = {NULL, NULL, NULL, NULL};

    addEdge(list, 0, 1);
    addEdge(list, 1, 0);
    addEdge(list, 0, 2);
    addEdge(list, 2, 0);
    addEdge(list, 1, 2);
    addEdge(list, 2, 1);
    addEdge(list, 2, 3);
    addEdge(list, 3, 2);

    printf("Adjacency list:\n");
    display(list, 4);

    deleteEdge(list, 0, 2);
    deleteEdge(list, 2, 0);

    printf("After deleting edge 0-2:\n");
    display(list, 4);

    return 0;
}`,
        output: `Adjacency list:
0: 2 1
1: 2 0
2: 3 1 0
3: 2
After deleting edge 0-2:
0: 1
1: 2 0
2: 3 1
3: 2`,
      },
      {
        q: "Traverse a graph represented by an adjacency matrix using depth-first search (DFS).",
        answer: `#include <stdio.h>

void dfs(int graph[5][5], int visited[], int vertex, int n)
{
    visited[vertex] = 1;
    printf("%d ", vertex);
    for (int i = 0; i < n; i++)
    {
        if (graph[vertex][i] == 1 && visited[i] == 0)
        {
            dfs(graph, visited, i, n);
        }
    }
}

int main()
{
    int graph[5][5] = {0}, visited[5] = {0};
    int edges, from, to;
    printf("Enter number of edges for 4 vertices: ");
    scanf("%d", &edges);
    printf("Enter edges using vertices 0 to 3:\n");
    for (int i = 0; i < edges; i++)
    {
        scanf("%d%d", &from, &to);
        graph[from][to] = 1;
        graph[to][from] = 1;
    }
    printf("DFS traversal: ");
    dfs(graph, visited, 0, 4);
    return 0;
}`,
        output: `Enter number of edges for 4 vertices: 4
Enter edges using vertices 0 to 3:
0 1
0 2
1 3
2 3
DFS traversal: 0 1 3 2`,
      },
      {
        q: "Traverse a graph represented by an adjacency list using depth-first search (DFS).",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Edge
{
    int vertex;
    struct Edge *next;
} Edge;

void addEdge(Edge *list[], int from, int to)
{
    Edge *node = (Edge *)malloc(sizeof(Edge));
    node->vertex = to;
    node->next = list[from];
    list[from] = node;
}

void dfs(Edge *list[], int visited[], int vertex)
{
    visited[vertex] = 1;
    printf("%d ", vertex);
    Edge *current = list[vertex];
    while (current != NULL)
    {
        if (visited[current->vertex] == 0)
        {
            dfs(list, visited, current->vertex);
        }
        current = current->next;
    }
}

int main()
{
    Edge *list[4] = {NULL};
    int visited[4] = {0};
    addEdge(list, 0, 1);
    addEdge(list, 0, 2);
    addEdge(list, 1, 3);
    addEdge(list, 2, 3);
    printf("DFS traversal: ");
    dfs(list, visited, 0);
    return 0;
}`,
        output: `DFS traversal: 0 2 3 1`,
      },
      {
        q: "Traverse a graph represented by an adjacency matrix using breadth-first search (BFS).",
        answer: `#include <stdio.h>

int main()
{
    int graph[5][5] = {0}, visited[5] = {0}, queue[10];
    int edges, from, to, front = 0, rear = 0;
    printf("Enter number of edges for 4 vertices: ");
    scanf("%d", &edges);
    printf("Enter edges using vertices 0 to 3:\n");
    for (int i = 0; i < edges; i++)
    {
        scanf("%d%d", &from, &to);
        graph[from][to] = 1;
        graph[to][from] = 1;
    }
    queue[rear++] = 0;
    visited[0] = 1;
    printf("BFS traversal: ");
    while (front < rear)
    {
        int vertex = queue[front++];
        printf("%d ", vertex);
        for (int i = 0; i < 4; i++)
        {
            if (graph[vertex][i] == 1 && visited[i] == 0)
            {
                queue[rear++] = i;
                visited[i] = 1;
            }
        }
    }
    return 0;
}`,
        output: `Enter number of edges for 4 vertices: 4
Enter edges using vertices 0 to 3:
0 1
0 2
1 3
2 3
BFS traversal: 0 1 2 3`,
      },
      {
        q: "Traverse a graph represented by an adjacency list using breadth-first search (BFS).",
        answer: `#include <stdio.h>
#include <stdlib.h>

typedef struct Edge
{
    int vertex;
    struct Edge *next;
} Edge;

void addEdge(Edge *list[], int from, int to)
{
    Edge *node = (Edge *)malloc(sizeof(Edge));
    node->vertex = to;
    node->next = list[from];
    list[from] = node;
}

int main()
{
    Edge *list[4] = {NULL};
    int visited[4] = {0}, queue[10], front = 0, rear = 0;
    addEdge(list, 0, 1);
    addEdge(list, 0, 2);
    addEdge(list, 1, 3);
    addEdge(list, 2, 3);
    queue[rear++] = 0;
    visited[0] = 1;
    printf("BFS traversal: ");
    while (front < rear)
    {
        int vertex = queue[front++];
        printf("%d ", vertex);
        Edge *current = list[vertex];
        while (current != NULL)
        {
            if (visited[current->vertex] == 0)
            {
                queue[rear++] = current->vertex;
                visited[current->vertex] = 1;
            }
            current = current->next;
        }
    }
    return 0;
}`,
        output: `BFS traversal: 0 2 1 3`,
      },
    ],
  },
  {
    name: "SEARCHING ALGORITHMS",
    questions: [
      {
        q: "Perform iterative linear search on a user-provided integer array and target value.",
        answer: `#include <stdio.h>

int main()
{
    int n, target, position = -1;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter the elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter the value to search: ");
    scanf("%d", &target);
    for (int i = 0; i < n; i++)
    {
        if (arr[i] == target)
        {
            position = i;
            break;
        }
    }
    if (position == -1) printf("Value not found");
    else printf("Value found at index %d", position);
    return 0;
}`,
        output: `Enter the size of the array: 5
Enter the elements: 12 25 18 30 41
Enter the value to search: 30
Value found at index 3`,
      },
      {
        q: "Perform recursive linear search for a character in a user-provided string.",
        answer: `#include <stdio.h>
#include <string.h>

int linearSearch(char str[], char target, int index)
{
    if (str[index] == 0) return -1;
    if (str[index] == target) return index;
    return linearSearch(str, target, index + 1);
}

int main()
{
    char str[100], target;
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    printf("Enter a character to search: ");
    scanf("%c", &target);
    int position = linearSearch(str, target, 0);
    if (position == -1) printf("Character not found");
    else printf("Character found at index %d", position);
    return 0;
}`,
        output: `Enter a string: Yogesh Parmar
Enter a character to search: P
Character found at index 7`,
      },
      {
        q: "Perform recursive linear search on an integer array.",
        answer: `#include <stdio.h>

int linearSearch(int arr[], int n, int target, int index)
{
    if (index == n) return -1;
    if (arr[index] == target) return index;
    return linearSearch(arr, n, target, index + 1);
}

int main()
{
    int n, target;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter the elements: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter the value to search: ");
    scanf("%d", &target);
    int position = linearSearch(arr, n, target, 0);
    if (position == -1) printf("Value not found");
    else printf("Value found at index %d", position);
    return 0;
}`,
        output: `Enter the size of the array: 5
Enter the elements: 4 8 12 16 20
Enter the value to search: 16
Value found at index 3`,
      },
      {
        q: "Perform iterative linear search for a character in a string.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100], target;
    int position = -1;
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\n")] = 0;
    printf("Enter a character to search: ");
    scanf("%c", &target);
    for (int i = 0; str[i] != 0; i++)
    {
        if (str[i] == target)
        {
            position = i;
            break;
        }
    }
    if (position == -1) printf("Character not found");
    else printf("Character found at index %d", position);
    return 0;
}`,
        output: `Enter a string: Yogesh Parmar
Enter a character to search: a
Character found at index 8`,
      },
      {
        q: "Perform iterative binary search on a user-provided integer array.",
        answer: `#include <stdio.h>

int main()
{
    int n, target, low, high, mid, position = -1;
    printf("Enter the size of the sorted array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter the elements in ascending order: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter the value to search: ");
    scanf("%d", &target);
    low = 0;
    high = n - 1;
    while (low <= high)
    {
        mid = (low + high) / 2;
        if (arr[mid] == target)
        {
            position = mid;
            break;
        }
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    if (position == -1) printf("Value not found");
    else printf("Value found at index %d", position);
    return 0;
}`,
        output: `Enter the size of the sorted array: 6
Enter the elements in ascending order: 4 8 12 16 20 24
Enter the value to search: 16
Value found at index 3`,
      },
      {
        q: "Perform recursive binary search for a character in a string.",
        answer: `#include <stdio.h>
#include <string.h>

int binarySearch(char str[], int low, int high, char target)
{
    if (low > high) return -1;
    int mid = (low + high) / 2;
    if (str[mid] == target) return mid;
    if (str[mid] < target) return binarySearch(str, mid + 1, high, target);
    return binarySearch(str, low, mid - 1, target);
}

int main()
{
    char str[100], target;
    printf("Enter characters in ascending order: ");
    scanf("%s", str);
    printf("Enter a character to search: ");
    scanf(" %c", &target);
    int position = binarySearch(str, 0, (int)strlen(str) - 1, target);
    if (position == -1) printf("Character not found");
    else printf("Character found at index %d", position);
    return 0;
}`,
        output: `Enter characters in ascending order: abcegh
Enter a character to search: g
Character found at index 4`,
      },
      {
        q: "Perform recursive binary search on an integer array.",
        answer: `#include <stdio.h>

int binarySearch(int arr[], int low, int high, int target)
{
    if (low > high) return -1;
    int mid = (low + high) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) return binarySearch(arr, mid + 1, high, target);
    return binarySearch(arr, low, mid - 1, target);
}

int main()
{
    int n, target;
    printf("Enter the size of the sorted array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter elements in ascending order: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("Enter the value to search: ");
    scanf("%d", &target);
    int position = binarySearch(arr, 0, n - 1, target);
    if (position == -1) printf("Value not found");
    else printf("Value found at index %d", position);
    return 0;
}`,
        output: `Enter the size of the sorted array: 6
Enter elements in ascending order: 4 8 12 16 20 24
Enter the value to search: 20
Value found at index 4`,
      },
      {
        q: "Perform iterative binary search for a character in a string.",
        answer: `#include <stdio.h>
#include <string.h>

int main()
{
    char str[100], target;
    int low = 0, high, mid, position = -1;
    printf("Enter characters in ascending order: ");
    scanf("%s", str);
    printf("Enter a character to search: ");
    scanf(" %c", &target);
    high = (int)strlen(str) - 1;
    while (low <= high)
    {
        mid = (low + high) / 2;
        if (str[mid] == target)
        {
            position = mid;
            break;
        }
        else if (str[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    if (position == -1) printf("Character not found");
    else printf("Character found at index %d", position);
    return 0;
}`,
        output: `Enter characters in ascending order: abcegh
Enter a character to search: e
Character found at index 3`,
      },
      {
        q: "Measure the best- and worst-case behaviour of linear search on an integer array.",
        answer: `#include <stdio.h>

int main()
{
    int arr[5] = {10, 20, 30, 40, 50};
    int target, comparisons = 0, position = -1;
    printf("Enter a value to search: ");
    scanf("%d", &target);
    for (int i = 0; i < 5; i++)
    {
        comparisons++;
        if (arr[i] == target)
        {
            position = i;
            break;
        }
    }
    if (position >= 0) printf("Value found at index %d\n", position);
    else printf("Value not found\n");
    printf("Comparisons made: %d\n", comparisons);
    printf("Best case comparisons: 1\n");
    printf("Worst case comparisons: 5");
    return 0;
}`,
        output: `Enter a value to search: 50
Value found at index 4
Comparisons made: 5
Best case comparisons: 1
Worst case comparisons: 5`,
      },
      {
        q: "Measure the best- and worst-case behaviour of binary search on an integer array.",
        answer: `#include <stdio.h>

int main()
{
    int arr[7] = {10, 20, 30, 40, 50, 60, 70};
    int target, low = 0, high = 6, mid, comparisons = 0, position = -1;
    printf("Enter a value to search: ");
    scanf("%d", &target);
    while (low <= high)
    {
        mid = (low + high) / 2;
        comparisons++;
        if (arr[mid] == target)
        {
            position = mid;
            break;
        }
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    if (position >= 0) printf("Value found at index %d\n", position);
    else printf("Value not found\n");
    printf("Comparisons made: %d\n", comparisons);
    printf("Best case comparisons: 1\n");
    printf("Worst case comparisons for 7 values: 3");
    return 0;
}`,
        output: `Enter a value to search: 70
Value found at index 6
Comparisons made: 3
Best case comparisons: 1
Worst case comparisons for 7 values: 3`,
      },
    ],
  },
  {
    name: "SORTING ALGORITHMS",
    questions: [
      {
        q: "Sort an integer array using iterative selection sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>

void selection(int arr[], int n, int *comparisons)
{
    for (int i = 0; i < n - 1; i++)
    {
        int minimum = i;
        for (int j = i + 1; j < n; j++)
        {
            (*comparisons)++;
            if (arr[j] < arr[minimum]) minimum = j;
        }
        int temp = arr[i];
        arr[i] = arr[minimum];
        arr[minimum] = temp;
    }
}

int main()
{
    int n = 5, arr[5], comparisons = 0;
    printf("Enter 5 integer values: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    selection(arr, n, &comparisons);
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 integer values: 5 1 4 2 3
Sorted array: 1 2 3 4 5
Comparisons for this input: 10`,
      },
      {
        q: "Sort an integer array using recursive selection sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>

void selection(int arr[], int start, int n, int *comparisons)
{
    if (start >= n - 1) return;
    int minimum = start;
    for (int i = start + 1; i < n; i++)
    {
        (*comparisons)++;
        if (arr[i] < arr[minimum]) minimum = i;
    }
    int temp = arr[start];
    arr[start] = arr[minimum];
    arr[minimum] = temp;
    selection(arr, start + 1, n, comparisons);
}

int main()
{
    int n = 5, arr[5], comparisons = 0;
    printf("Enter 5 integer values: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    selection(arr, 0, n, &comparisons);
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 integer values: 5 1 4 2 3
Sorted array: 1 2 3 4 5
Comparisons for this input: 10`,
      },
      {
        q: "Sort an integer array using iterative bubble sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>

void bubble(int arr[], int n, int *comparisons)
{
    for (int i = 0; i < n - 1; i++)
    {
        int changed = 0;
        for (int j = 0; j < n - i - 1; j++)
        {
            (*comparisons)++;
            if (arr[j] > arr[j + 1])
            {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                changed = 1;
            }
        }
        if (changed == 0) break;
    }
}

int main()
{
    int n = 5, arr[5], comparisons = 0;
    printf("Enter 5 integer values: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    bubble(arr, n, &comparisons);
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 integer values: 5 1 4 2 3
Sorted array: 1 2 3 4 5
Comparisons for this input: 9`,
      },
      {
        q: "Sort an integer array using recursive bubble sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>

void bubble(int arr[], int n, int *comparisons)
{
    if (n <= 1) return;
    for (int i = 0; i < n - 1; i++)
    {
        (*comparisons)++;
        if (arr[i] > arr[i + 1])
        {
            int temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    bubble(arr, n - 1, comparisons);
}

int main()
{
    int n = 5, arr[5], comparisons = 0;
    printf("Enter 5 integer values: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    bubble(arr, n, &comparisons);
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 integer values: 5 1 4 2 3
Sorted array: 1 2 3 4 5
Comparisons for this input: 10`,
      },
      {
        q: "Sort an integer array using iterative insertion sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>

void insertion(int arr[], int n, int *comparisons)
{
    for (int i = 1; i < n; i++)
    {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0)
        {
            (*comparisons)++;
            if (arr[j] > key)
            {
                arr[j + 1] = arr[j];
                j--;
            }
            else break;
        }
        arr[j + 1] = key;
    }
}

int main()
{
    int n = 5, arr[5], comparisons = 0;
    printf("Enter 5 integer values: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    insertion(arr, n, &comparisons);
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 integer values: 5 1 4 2 3
Sorted array: 1 2 3 4 5
Comparisons for this input: 9`,
      },
      {
        q: "Sort an integer array using recursive insertion sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>

void insertion(int arr[], int n, int *comparisons)
{
    if (n <= 1) return;
    insertion(arr, n - 1, comparisons);
    int key = arr[n - 1];
    int j = n - 2;
    while (j >= 0)
    {
        (*comparisons)++;
        if (arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j--;
        }
        else break;
    }
    arr[j + 1] = key;
}

int main()
{
    int n = 5, arr[5], comparisons = 0;
    printf("Enter 5 integer values: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    insertion(arr, n, &comparisons);
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 integer values: 5 1 4 2 3
Sorted array: 1 2 3 4 5
Comparisons for this input: 9`,
      },
      {
        q: "Sort an integer array using iterative merge sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>

void mergeSort(int arr[], int n, int *comparisons)
{
    int temp[100];
    for (int width = 1; width < n; width = width * 2)
    {
        for (int start = 0; start < n; start = start + 2 * width)
        {
            int mid = start + width - 1;
            int end = start + 2 * width - 1;
            if (mid >= n) continue;
            if (end >= n) end = n - 1;
            int i = start, j = mid + 1, k = start;
            while (i <= mid && j <= end)
            {
                (*comparisons)++;
                if (arr[i] <= arr[j]) temp[k++] = arr[i++];
                else temp[k++] = arr[j++];
            }
            while (i <= mid) temp[k++] = arr[i++];
            while (j <= end) temp[k++] = arr[j++];
            for (i = start; i <= end; i++) arr[i] = temp[i];
        }
    }
}

int main()
{
    int n = 5, arr[5], comparisons = 0;
    printf("Enter 5 integer values: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    mergeSort(arr, n, &comparisons);
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 integer values: 5 1 4 2 3
Sorted array: 1 2 3 4 5
Comparisons for this input: 8`,
      },
      {
        q: "Sort an integer array using recursive merge sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>

void merge(int arr[], int low, int mid, int high, int *comparisons)
{
    int temp[100], i = low, j = mid + 1, k = 0;
    while (i <= mid && j <= high)
    {
        (*comparisons)++;
        if (arr[i] <= arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= high) temp[k++] = arr[j++];
    for (i = low, k = 0; i <= high; i++, k++) arr[i] = temp[k];
}

void mergeSort(int arr[], int low, int high, int *comparisons)
{
    if (low < high)
    {
        int mid = (low + high) / 2;
        mergeSort(arr, low, mid, comparisons);
        mergeSort(arr, mid + 1, high, comparisons);
        merge(arr, low, mid, high, comparisons);
    }
}

int main()
{
    int n = 5, arr[5], comparisons = 0;
    printf("Enter 5 integer values: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    mergeSort(arr, 0, n - 1, &comparisons);
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 integer values: 5 1 4 2 3
Sorted array: 1 2 3 4 5
Comparisons for this input: 7`,
      },
      {
        q: "Sort an integer array using iterative quick sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>

int partition(int arr[], int low, int high, int *comparisons)
{
    int pivot = arr[high], i = low - 1;
    for (int j = low; j < high; j++)
    {
        (*comparisons)++;
        if (arr[j] < pivot)
        {
            i++;
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    }
    int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
    return i + 1;
}

void quickSort(int arr[], int n, int *comparisons)
{
    int lowStack[100], highStack[100], top = -1;
    lowStack[++top] = 0;
    highStack[top] = n - 1;
    while (top >= 0)
    {
        int low = lowStack[top], high = highStack[top--];
        int pivot = partition(arr, low, high, comparisons);
        if (pivot - 1 > low)
        {
            lowStack[++top] = low;
            highStack[top] = pivot - 1;
        }
        if (pivot + 1 < high)
        {
            lowStack[++top] = pivot + 1;
            highStack[top] = high;
        }
    }
}

int main()
{
    int n = 5, arr[5], comparisons = 0;
    printf("Enter 5 integer values: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    quickSort(arr, n, &comparisons);
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 integer values: 5 1 4 2 3
Sorted array: 1 2 3 4 5
Comparisons for this input: 6`,
      },
      {
        q: "Sort an integer array using recursive quick sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>

int partition(int arr[], int low, int high, int *comparisons)
{
    int pivot = arr[high], i = low - 1;
    for (int j = low; j < high; j++)
    {
        (*comparisons)++;
        if (arr[j] < pivot)
        {
            i++;
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    }
    int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
    return i + 1;
}

void quickSort(int arr[], int low, int high, int *comparisons)
{
    if (low < high)
    {
        int pivot = partition(arr, low, high, comparisons);
        quickSort(arr, low, pivot - 1, comparisons);
        quickSort(arr, pivot + 1, high, comparisons);
    }
}

int main()
{
    int n = 5, arr[5], comparisons = 0;
    printf("Enter 5 integer values: ");
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    quickSort(arr, 0, n - 1, &comparisons);
    printf("Sorted array: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 integer values: 5 1 4 2 3
Sorted array: 1 2 3 4 5
Comparisons for this input: 6`,
      },
      {
        q: "Sort a string array using iterative selection sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>
#include <string.h>

void sort(char words[][20], int n, int *comparisons)
{
    for (int i = 0; i < n - 1; i++)
    {
        int minimum = i;
        for (int j = i + 1; j < n; j++)
        {
            (*comparisons)++;
            if (strcmp(words[j], words[minimum]) < 0) minimum = j;
        }
        char temp[20];
        strcpy(temp, words[i]);
        strcpy(words[i], words[minimum]);
        strcpy(words[minimum], temp);
    }
}

int main()
{
    int n = 5, comparisons = 0;
    char words[5][20];
    printf("Enter 5 words: ");
    for (int i = 0; i < n; i++) scanf("%s", words[i]);
    sort(words, n, &comparisons);
    printf("Sorted words: ");
    for (int i = 0; i < n; i++) printf("%s ", words[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 words: pear apple mango banana grape
Sorted words: apple banana grape mango pear
Comparisons for this input: 10`,
      },
      {
        q: "Sort a string array using recursive selection sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>
#include <string.h>

void sort(char words[][20], int start, int n, int *comparisons)
{
    if (start >= n - 1) return;
    int minimum = start;
    for (int i = start + 1; i < n; i++)
    {
        (*comparisons)++;
        if (strcmp(words[i], words[minimum]) < 0) minimum = i;
    }
    char temp[20];
    strcpy(temp, words[start]);
    strcpy(words[start], words[minimum]);
    strcpy(words[minimum], temp);
    sort(words, start + 1, n, comparisons);
}

int main()
{
    int n = 5, comparisons = 0;
    char words[5][20];
    printf("Enter 5 words: ");
    for (int i = 0; i < n; i++) scanf("%s", words[i]);
    sort(words, 0, n, &comparisons);
    printf("Sorted words: ");
    for (int i = 0; i < n; i++) printf("%s ", words[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 words: pear apple mango banana grape
Sorted words: apple banana grape mango pear
Comparisons for this input: 10`,
      },
      {
        q: "Sort a string array using iterative bubble sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>
#include <string.h>

void sort(char words[][20], int n, int *comparisons)
{
    for (int i = 0; i < n - 1; i++)
    {
        int changed = 0;
        for (int j = 0; j < n - i - 1; j++)
        {
            (*comparisons)++;
            if (strcmp(words[j], words[j + 1]) > 0)
            {
                char temp[20];
                strcpy(temp, words[j]);
                strcpy(words[j], words[j + 1]);
                strcpy(words[j + 1], temp);
                changed = 1;
            }
        }
        if (changed == 0) break;
    }
}

int main()
{
    int n = 5, comparisons = 0;
    char words[5][20];
    printf("Enter 5 words: ");
    for (int i = 0; i < n; i++) scanf("%s", words[i]);
    sort(words, n, &comparisons);
    printf("Sorted words: ");
    for (int i = 0; i < n; i++) printf("%s ", words[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 words: pear apple mango banana grape
Sorted words: apple banana grape mango pear
Comparisons for this input: 9`,
      },
      {
        q: "Sort a string array using recursive bubble sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>
#include <string.h>

void sort(char words[][20], int n, int *comparisons)
{
    if (n <= 1) return;
    for (int i = 0; i < n - 1; i++)
    {
        (*comparisons)++;
        if (strcmp(words[i], words[i + 1]) > 0)
        {
            char temp[20];
            strcpy(temp, words[i]);
            strcpy(words[i], words[i + 1]);
            strcpy(words[i + 1], temp);
        }
    }
    sort(words, n - 1, comparisons);
}

int main()
{
    int n = 5, comparisons = 0;
    char words[5][20];
    printf("Enter 5 words: ");
    for (int i = 0; i < n; i++) scanf("%s", words[i]);
    sort(words, n, &comparisons);
    printf("Sorted words: ");
    for (int i = 0; i < n; i++) printf("%s ", words[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 words: pear apple mango banana grape
Sorted words: apple banana grape mango pear
Comparisons for this input: 10`,
      },
      {
        q: "Sort a string array using iterative insertion sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>
#include <string.h>

void sort(char words[][20], int n, int *comparisons)
{
    for (int i = 1; i < n; i++)
    {
        char key[20];
        strcpy(key, words[i]);
        int j = i - 1;
        while (j >= 0)
        {
            (*comparisons)++;
            if (strcmp(words[j], key) > 0)
            {
                strcpy(words[j + 1], words[j]);
                j--;
            }
            else break;
        }
        strcpy(words[j + 1], key);
    }
}

int main()
{
    int n = 5, comparisons = 0;
    char words[5][20];
    printf("Enter 5 words: ");
    for (int i = 0; i < n; i++) scanf("%s", words[i]);
    sort(words, n, &comparisons);
    printf("Sorted words: ");
    for (int i = 0; i < n; i++) printf("%s ", words[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 words: pear apple mango banana grape
Sorted words: apple banana grape mango pear
Comparisons for this input: 9`,
      },
      {
        q: "Sort a string array using recursive insertion sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>
#include <string.h>

void sort(char words[][20], int n, int *comparisons)
{
    if (n <= 1) return;
    sort(words, n - 1, comparisons);
    char key[20];
    strcpy(key, words[n - 1]);
    int j = n - 2;
    while (j >= 0)
    {
        (*comparisons)++;
        if (strcmp(words[j], key) > 0)
        {
            strcpy(words[j + 1], words[j]);
            j--;
        }
        else break;
    }
    strcpy(words[j + 1], key);
}

int main()
{
    int n = 5, comparisons = 0;
    char words[5][20];
    printf("Enter 5 words: ");
    for (int i = 0; i < n; i++) scanf("%s", words[i]);
    sort(words, n, &comparisons);
    printf("Sorted words: ");
    for (int i = 0; i < n; i++) printf("%s ", words[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 words: pear apple mango banana grape
Sorted words: apple banana grape mango pear
Comparisons for this input: 9`,
      },
      {
        q: "Sort a string array using iterative merge sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>
#include <string.h>

void sort(char words[][20], int n, int *comparisons)
{
    char temp[10][20];
    for (int width = 1; width < n; width = width * 2)
    {
        for (int start = 0; start < n; start = start + 2 * width)
        {
            int mid = start + width;
            int end = start + 2 * width;
            if (mid > n) mid = n;
            if (end > n) end = n;
            int i = start, j = mid, k = start;
            while (i < mid && j < end)
            {
                (*comparisons)++;
                if (strcmp(words[i], words[j]) <= 0) strcpy(temp[k++], words[i++]);
                else strcpy(temp[k++], words[j++]);
            }
            while (i < mid) strcpy(temp[k++], words[i++]);
            while (j < end) strcpy(temp[k++], words[j++]);
            for (i = start; i < end; i++) strcpy(words[i], temp[i]);
        }
    }
}

int main()
{
    int n = 5, comparisons = 0;
    char words[5][20];
    printf("Enter 5 words: ");
    for (int i = 0; i < n; i++) scanf("%s", words[i]);
    sort(words, n, &comparisons);
    printf("Sorted words: ");
    for (int i = 0; i < n; i++) printf("%s ", words[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 words: pear apple mango banana grape
Sorted words: apple banana grape mango pear
Comparisons for this input: 8`,
      },
      {
        q: "Sort a string array using recursive merge sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>
#include <string.h>

void merge(char words[][20], int low, int mid, int high, int *comparisons)
{
    char temp[10][20];
    int i = low, j = mid + 1, k = 0;
    while (i <= mid && j <= high)
    {
        (*comparisons)++;
        if (strcmp(words[i], words[j]) <= 0) strcpy(temp[k++], words[i++]);
        else strcpy(temp[k++], words[j++]);
    }
    while (i <= mid) strcpy(temp[k++], words[i++]);
    while (j <= high) strcpy(temp[k++], words[j++]);
    for (i = low, k = 0; i <= high; i++, k++) strcpy(words[i], temp[k]);
}

void sort(char words[][20], int low, int high, int *comparisons)
{
    if (low < high)
    {
        int mid = (low + high) / 2;
        sort(words, low, mid, comparisons);
        sort(words, mid + 1, high, comparisons);
        merge(words, low, mid, high, comparisons);
    }
}

int main()
{
    int n = 5, comparisons = 0;
    char words[5][20];
    printf("Enter 5 words: ");
    for (int i = 0; i < n; i++) scanf("%s", words[i]);
    sort(words, 0, n - 1, &comparisons);
    printf("Sorted words: ");
    for (int i = 0; i < n; i++) printf("%s ", words[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 words: pear apple mango banana grape
Sorted words: apple banana grape mango pear
Comparisons for this input: 7`,
      },
      {
        q: "Sort a string array using iterative quick sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>
#include <string.h>

int partition(char words[][20], int low, int high, int *comparisons)
{
    char pivot[20];
    strcpy(pivot, words[high]);
    int i = low - 1;
    for (int j = low; j < high; j++)
    {
        (*comparisons)++;
        if (strcmp(words[j], pivot) < 0)
        {
            i++;
            char temp[20];
            strcpy(temp, words[i]);
            strcpy(words[i], words[j]);
            strcpy(words[j], temp);
        }
    }
    char temp[20];
    strcpy(temp, words[i + 1]);
    strcpy(words[i + 1], words[high]);
    strcpy(words[high], temp);
    return i + 1;
}

void sort(char words[][20], int n, int *comparisons)
{
    int lowStack[100], highStack[100], top = -1;
    lowStack[++top] = 0;
    highStack[top] = n - 1;
    while (top >= 0)
    {
        int low = lowStack[top], high = highStack[top--];
        int pivot = partition(words, low, high, comparisons);
        if (pivot - 1 > low)
        {
            lowStack[++top] = low;
            highStack[top] = pivot - 1;
        }
        if (pivot + 1 < high)
        {
            lowStack[++top] = pivot + 1;
            highStack[top] = high;
        }
    }
}

int main()
{
    int n = 5, comparisons = 0;
    char words[5][20];
    printf("Enter 5 words: ");
    for (int i = 0; i < n; i++) scanf("%s", words[i]);
    sort(words, n, &comparisons);
    printf("Sorted words: ");
    for (int i = 0; i < n; i++) printf("%s ", words[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 words: pear apple mango banana grape
Sorted words: apple banana grape mango pear
Comparisons for this input: 6`,
      },
      {
        q: "Sort a string array using recursive quick sort and measure best/worst-case performance.",
        answer: `#include <stdio.h>
#include <string.h>

int partition(char words[][20], int low, int high, int *comparisons)
{
    char pivot[20];
    strcpy(pivot, words[high]);
    int i = low - 1;
    for (int j = low; j < high; j++)
    {
        (*comparisons)++;
        if (strcmp(words[j], pivot) < 0)
        {
            i++;
            char temp[20];
            strcpy(temp, words[i]);
            strcpy(words[i], words[j]);
            strcpy(words[j], temp);
        }
    }
    char temp[20];
    strcpy(temp, words[i + 1]);
    strcpy(words[i + 1], words[high]);
    strcpy(words[high], temp);
    return i + 1;
}

void sort(char words[][20], int low, int high, int *comparisons)
{
    if (low < high)
    {
        int pivot = partition(words, low, high, comparisons);
        sort(words, low, pivot - 1, comparisons);
        sort(words, pivot + 1, high, comparisons);
    }
}

int main()
{
    int n = 5, comparisons = 0;
    char words[5][20];
    printf("Enter 5 words: ");
    for (int i = 0; i < n; i++) scanf("%s", words[i]);
    sort(words, 0, n - 1, &comparisons);
    printf("Sorted words: ");
    for (int i = 0; i < n; i++) printf("%s ", words[i]);
    printf("\nComparisons for this input: %d", comparisons);
    return 0;
}`,
        output: `Enter 5 words: pear apple mango banana grape
Sorted words: apple banana grape mango pear
Comparisons for this input: 6`,
      },
    ],
  },
];

var currentTopicIndex = -1;

function startWebsite() {
    showTopics();
    document.getElementById("question-search").addEventListener("input", showQuestionsList);
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
    document.getElementById("topic-summary").textContent = topics[index].questions.length + " questions";
    document.getElementById("question-search").value = "";
    showQuestionsList();

    document.getElementById("topics-view").className = "hidden";
    document.getElementById("questions-view").className = "view";
    document.getElementById("answer-view").className = "hidden";
}

function showQuestionsList() {
    if (currentTopicIndex < 0) return;

    var container = document.getElementById("questions-container");
    var search = document.getElementById("question-search").value.toLowerCase().trim();
    var visibleCount = 0;
    container.innerHTML = "";

    for (var i = 0; i < topics[currentTopicIndex].questions.length; i++) {
        var question = topics[currentTopicIndex].questions[i];
        if (search && question.q.toLowerCase().indexOf(search) === -1) continue;

        var item = document.createElement("button");
        item.type = "button";
        item.className = "question-item";

        var number = document.createElement("strong");
        number.textContent = (i + 1) + ". ";
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

    document.getElementById("question-result-count").textContent = visibleCount + (visibleCount === 1 ? " question" : " questions");
}

function makeQuestionOpener(index) {
    return function () {
        openQuestion(index);
    };
}

function openQuestion(index) {
    var question = topics[currentTopicIndex].questions[index];
    document.getElementById("question-display").textContent = question.q;
    document.getElementById("answer-display").textContent = question.answer || "Answer has not been added to prt.js yet.";
    document.getElementById("output-display").textContent = question.output || "Output has not been added to prt.js yet.";

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

