const flag = true // decalred boolean varibale using const keyword


//if (true)
if (!true)// when given negotiation operator(!)
{
    console.log("condition is satisfied")
}
else{
    console.log("print condition is not satisfied")
}

//FOR LOOP IS USED WHEN YOU KNOW EXACTLY HOW MANYTIMES THE LOOP ITERATE
for (let i = 0; i<5; i++ ) // iterates from i= o to i= 4 at i=5 condition fails and come out of loop and iteration stops
{
    console.log(i)
}

for (let i = 0; i<=5; i++)
{
    console.log("Hello")
}

//WHILE LOOP IS USED WHEN YOU DON'T KNOW EXACTLY HOW MANY TIMES THE LOOP ITETATES
let i = 0;
while (i < 5)
{
    i++
    console.log(i)  

}

// TO PRINT even NUMBERS FROM 1 TO 10
 for (i=1; i<= 10; i++)
 {
    if (i%2 === 0)
    {
        console.log(i)
    }
    else
    {
        console.log("not a even number")
    }
 }
 

 // TO PRINT ODD NUMBERS
 for (i=0; i<=10; i++)
 {
    if (i%2 != 0)
    {
        console.log(i)
    }
 }

 // TO PRINT COMMON MULTIPLES OF 2 AND 5

 for (i =1; i<=10; i++)
 {
    if (i%2 == 0 && i%5 == 0)
    {
console.log(i)
    }
 }

 // TO PRINT MULTIPLES OF EITHER 2 OR 5 FROM 1 TO 100
 for (i=1; i<=100; i++)
 {
    if(i%2 == 0 || i%5 == 0)
    {
        console.log(i)
    }
 }

 // TO PRINT ONLY FRIST 3 NUMBERS WHICH ARE COMMOM MULTIPLES OF 2 AND 5
 let n = 0
 for (i=1; i<=100; i++)
 {
if (i%2 == 0 && i%5 == 0)
{
n++
console.log(i)
if (n == 3)
    break
}
 }