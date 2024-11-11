# Welcome to Bug Wrangler Ranch

This first self-assessment is for you to hone several Core Skills that you need as a software developer.

Taking your time now to be thorough, reflective, patient and curious will give you the foundation to be successful throughout the rest of this course and your career.

If you rush this, or think of it as a test to be "passed", then you will already be on the wrong path.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Description

Slim Jenkins offers a vacation package for people who have always wanted to join a cattle driving team across the American Midwest.

He calls it the **Kansas Slim's Cattle Adventure**.

People join a team of experienced drovers who will train them in the basics of herding cattle and driving them across hundreds of miles to their destination at Old Red's Ranch.

Unfortunately, someone gained access to the code that produces an outline of the adventure to the paying customers, so Slim has hired you to examine and fix the code.

## Learning Objectives

Here are your learning objectives for this self-assessment.

1. Able to use the debugger to step through existing code to discover root causes of bugs.
2. Drawing a sequence diagram for a project.
   > Use the [sequencediagram.org](https://sequencediagram.org/) site to generate your sequence diagram. Make sure you save your work as you go.
3. Demonstrate learning efficiency by researching concepts you haven't seen before using your peers, mentors, and the World Wide Web as resources.
4. Awareness of when you need help, and then seeking it out.

## Example Output

If you are able to fix all of the bugs, you will output similar to what is below. It will not be identical, but similar.

```sh
************************************************
**  K A N S A S   S L I M ' S   C A T T L E   **
************************************************

\|/         (__)
     '------(oo)
       ||   (__)               \|/
       ||w--||     \|/
   \|/
            \|/                     (__)
                             '------(oo)
                               ||   (__)
                               ||w--||     \|/

You will be accompanying 5 drovers as they drive 50 cattle to Old Red's Ranch for grazing

The herd is made of up the following types of cattle:
Ankole-Watusi,Brown Swiss,Brown Swiss,American Angus,Brown Swiss,
Ankina,American Angus,Ankina,Brown Swiss,Ankole-Watusi,Brown Swiss,
Brown Swiss,American Angus,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankina,Brown Swiss,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankole-Watusi,American Angus,Brown Swiss,American Angus,Ankole-Watusi,
Ankole-Watusi,American Angus,Ankina,Ankina,Ankina,Ankole-Watusi,
American Angus,Brown Swiss,American Angus,Brown Swiss,American Angus,
American Angus,Ankina,Brown Swiss,American Angus,Ankina,Brown Swiss,
American Angus,Ankole-Watusi,Ankina,American Angus,Brown Swiss

Here is the team of drovers you will be joining
        * Melvyn Hethron
        * Yancy Gresley
        * Willabella Attarge
        * Ynes Gyenes
        * Farlie Spere


Your journey will take you through the wildness of the American Midwest and across the following terrain
        * forest
        * plain
        * river
        * mountain
```

1. In the **main** module, one of the first lines of code is `const drovers = hireDrovers(cattleToDrive)`. Explain what the value of the `drovers` variable is when that line of code runs.
   > The value of the drovers' variable is an array of objects.
2. At the bottom of the main module, you will see the following code - `for (const drover of drovers)`. Explain what the values of both the `drover` and the `drovers` variables are.
   > The drovers' variable has the same value here as it had when hireDrovers() evaluated. Drover is a single object taken from the drovers array of objects. 
3. In the **journey** module, there is a `journeyMaker()` function. In that function, there is a variable named `areas` which will have the value of an object. Use your debugger to show what the value of each key is on that object. Use [Loom](https://www.loom.com) to record your session.
   > [Your public Loom URL here](https://www.loom.com/share/8477457a00f84bc1ad60d2e2cb37299e?sid=e7998cfd-1f1a-4399-b89c-eaf9ce5b4b55)
4. Also in the **journey** module, there is the following code:
   ```js
   for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
      journey.push("forest")
   }
   ```
   Explain this code with your best vocabulary.
   > This is a for while loop. The keyword, "for" is our hint. In the parenthesis, we have three, semi-colon separated expressions. First: "let forestNumber = 0" this is the initialization of our variable forestNumber where we are setting forestNumber equal to zero. Why zero, and why use the "let" declaration? Let's check out the second expression: "forestNumber < areas.forests." We see that our declared and initialized variable has reappeared in this for while loop, but this middle section is why this loop includes the "while" term. As long as this condition remains true, the for while loop will continue to iterate. What is our condition? Remember, we first declared and initialized forestNumber with zero. We can read our conditional expression as: while zero is less than the area's object property of forests (which returns a numbers); iterate and execute the following code.  So, what are we iterating? Unfortunately, this particular block of code does not give us the context what we are iterating, except that our previous question mentioned the "areas" object. Finally, our last expression: "forestNumber++" This last expression is how we keep from running an infinite loop and draws us closer to ending the loop by having our while condition fail. Essentially, we are saying zero + one. On the next iteration, forestNumber while have the value one. This is why the keyword let was used to first declare our variable. As long as our while condition is met, the last line of code will be executed: "journey.push("forest")." If the for while loop is evaluated to true, meeting the condition, then we will push, or add to the right of our array, journey, the string, "forest."
5. Explain the value of the `database` variable in the **database** module. Be as comprehensive as possible.
   > The database variable is declared as the first line of code, and also the last. It contains two array of objects, the first array of objects is named cattleTypes, and the second drovers. These two array of objects are stored in a single variable, "database." Why? We must look to the last line of code where the database variable, now stored with both array of objects, has also been stored. Preceding the last line, we see the expression: "module.exports = " The reason for the database variable now storing the array of objects has become clear. The code has been modularized and will be imported into the main module for readability. 
6. In the **drovers** module, there is a `hireDrovers()` function. You will notice the following code on that line - `(herdSize)`. What is that defining, and where does it get its value?
   > HerdSize is defining a parameter for the hireDrovers() function. As it stands alone, herdSize does not have any value whatsoever until the hireDrovers() function is invoked with an argument passed into it. In this project we used a value of 50, found in the main module. The value of 50 was stored in a variable called, "cattleToDrive." So, when we execute that code, it will appear: hireDrovers(cattleToDrive); the function has been invoked, and an argument, containing the integer 50 has been passed. It will go to where hireDrovers() was defined, (where we first saw herdSize) and now herdSize would have the value of 50. 
## When You Are Done

After you have answered all the questions above, you need to push all of your code back up to Github. Follow these instructions.

1. Be in the `bug-wrangler-ranch` directory.
2. `git add --all`
3. `git commit -m "Code complete"`
4. `git push origin main`

Then go to the Learning Platform and click the **Self-assessment Complete** button.
