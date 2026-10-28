DSA ASSIGNMENT WEBSITE — YOGESH PARMAR

PROJECT FILES
- yogesh-parmar.html : Website structure
- prt.css           : Website design
- prt.js            : Topics, questions, predefined answers and outputs

HOW TO OPEN
1. Keep these three files in the same folder.
2. Open yogesh-parmar.html in a modern browser.

HOW TO ADD AN ANSWER AND OUTPUT IN VS CODE
1. Open prt.js in VS Code.
2. Find the question using its q text.
3. Add the solution inside answer and the expected result inside output.
4. Save the file and refresh the browser.

Example question object:
{
    q: "Print a message.",
    answer: `#include <stdio.h>
int main(void) {
    printf("Hello\\n");
    return 0;
}`,
    output: `Hello`
}

Use backticks (`) for answer and output so the content can span multiple lines. The first three array questions contain complete examples. The remaining answer and output values are left empty in prt.js for you to fill in as part of your assignment.

This is a read-only assignment website. It contains no browser editing, autosave, copy buttons, or student-facing submission tools. The website displays the answer and output stored in prt.js; it does not compile or run C programs. Compile your C program separately, then enter the resulting output in the matching output value in VS Code. Refresh the browser to see changes.
