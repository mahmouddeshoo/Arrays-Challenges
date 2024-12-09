console.log("=====/ challenges its near to data structure /=====");

/*
The Task:
اكتب برنامجاً يخزن أسماء 5 مدن في مصفوفة، ثم اطبع أسماء المدن واحدة تلو الأخرى.
The Output:
City 1: Paris  
City 2: Istanbul  
City 3: Cairo  
City 4: Tokyo  
City 5: Dubai
*/

let towns = ["Paris", "Istanbul", "Cairo", "Tokyo", "Dubai"];
for (let i = 0; i < towns.length; i++) {
    console.log(`City ${i + 1}: ${towns[i]}`);
    }



/*
The Task:
قم بإنشاء مصفوفة تحتوي على أرقام عشوائية، واطبع عدد العناصر الموجودة في المصفوفة باستخدام .length.
*/

console.log("=====/ challenges its near to data structure /=====");

let inputNumbers = [13, 4, 5, 8, 44, 23];

console.log(inputNumbers.length);



/*
The Task:
أنشئ مصفوفة فارغة، ثم استخدم الدالة push لإضافة 3 عناصر، واطبع النتيجة النهائية.
*/

console.log("=====/ challenges its near to data structure /=====");

let emptyArr = [];
emptyArr.push(1, 2, 3);
console.log(emptyArr); 

// for (let x = 0; x < 7; x + 1) {
//     console.log(x);
//   }

// The Task:
// قم بكتابة برنامج يسأل المستخدم عن اسم معين ويبحث عنه في مصفوفة. إذا وجد الاسم، اطبع: “الاسم موجود”، وإذا لم يجده، اطبع: “الاسم غير موجود”.
// The Output:
// أدخل الاسم: Ali  
// الاسم موجود.

console.log("=====/ challenges its near to data structure /=====");


let arrNames = ["Ali", "Ahmad", "Fadel", "Kamel"];
let whatCalled = prompt("Enter The Name : ");
if (arrNames.includes(whatCalled)) {
    console.log(whatCalled);
    console.log(`The name is exist`);
}
else {
    console.log(whatCalled);
    console.log(`The name is not exist`);
}


/*
The Task:
لديك المصفوفة التالية: [45, 22, 60, 10, 78]. اكتب برنامجاً يحذف جميع القيم الأقل من 50، واطبع النتيجة النهائية.
The Output:
[60, 78]
*/


console.log("=====/ challenges its near to data structure /=====");


let numberedArr = [45, 22, 60, 10, 78];
let filteredArray = numberedArr.filter(value => value >= 50);
console.log(filteredArray);

/*
The Task:
لديك مصفوفة تحتوي على أسماء، اكتب برنامجاً يتحقق إذا كان هناك أسماء مكررة.
مثال:
["Ali", "Sara", "Noor", "Ali"]
المخرجات:

الاسم "Ali" مكرر.
*/
console.log("=====/ challenges its near to data structure /=====");

let namedArray = ["Ali", "Sara", "Noor", "Ali"];
let repeatedName = namedArray.filter((value, index, self) => self.indexOf(value) !==
index);
console.log(`The name "${repeatedName}" is repeated.`);


/*
The Task:
لديك المصفوفة التالية: [10, 15, 20, 25].
اكتب برنامجاً يحسب مجموع القيم داخل المصفوفة باستخدام reduce.
*/
console.log("=====/ challenges its near to data structure /=====");
let collectReduce = [10, 15, 20, 25];
let arr_total = collectReduce.reduce((total, num) => total + num, 0);
console.log(arr_total);



/*
The Task:
لديك المصفوفة التالية: [2, 4, 6, 8].
اكتب برنامجاً يضاعف كل قيمة داخل المصفوفة باستخدام map.
The Output:
[4, 8, 12, 16]
*/
console.log("=====/ challenges its near to data structure /=====");
let dubbleArr= [8, 6, 4, 2];
let dubbled = dubbleArr.map(num => num * 2);
console.log(dubbled);


/*
The Task:
لديك المصفوفة التالية: [5, 3, 8, 1, 4].
اكتب برنامجاً يرتب المصفوفة تصاعدياً باستخدام sort.
المخرجات المتوقعة:
[1, 3, 4, 5, 8]
*/
console.log("=====/ challenges its near to data structure /=====");
let organizeArr = [5, 3, 8, 1, 4];
console.log(organizeArr.sort());


/*
The Task:
لديك مصفوفتين:
let array1 = [10, 20, 30];  
let array2 = [40, 50, 60];
اكتب برنامجاً يدمج المصفوفتين معاً في مصفوفة واحدة.
The Output:

[10, 20, 30, 40, 50, 60]
*/
console.log("=====/ challenges its near to data structure /=====");
let array1 = [10, 20, 30];
let array2 = [40, 50, 60];
let bigArray = array1.concat(array2);
console.log(bigArray);

/*
The Task:
لديك المصفوفة التالية: [3, 7, 2, 8, 1, 9].
اكتب برنامجاً يجد أكبر قيمة وأصغر قيمة داخل المصفوفة
The Output:
*/
console.log("=====/ challenges its near to data structure /=====");
let totalArr = [3, 7, 2, 1, 9, 8];
let max = Math.max(...totalArr);
console.log(`max value is ${max} and min value is ${min}`);



/*
The Task:
لديك المصفوفة التالية: [1, 2, 3, 4, 5].
اكتب برنامجاً يعكس ترتيب العناصر باستخدام reverse.
The Output:
[5, 4, 3, 2, 1]
*/
console.log("=====/ challenges its near to data structure /=====");
let reverseArr = [1, 2, 3, 4, 5];
console.log(reverseArr.reverse());



/*
سؤال تطبيقي 1:

لديك مصفوفة تحتوي على درجات طلاب. قم بحساب عدد الطلاب الذين حصلوا على درجات أعلى من 50.
let grades = [45, 60, 78, 30, 90];
*/
console.log("=====/ challenges its near to data structure /=====");
let grades = [45, 60, 78, 30, 90];
let score = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 50) {
        count++;
        }
        }
        console.log(score);


/*
سؤال تطبيقي 2:

لديك مصفوفة تحتوي على أعمار. قم بإنشاء برنامج يطبع:
مجموع الأعمار.
متوسط الأعمار.
عدد الأشخاص الذين أعمارهم أقل من 18.
let ages = [12, 25, 17, 30, 18, 16];
*/
console.log("=====/ challenges its near to data structure /=====");
let ages = [12, 25, 17, 30, 18, 16];
let num = 0;
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) {
        num++;
        }
        sum += ages[i];
        }
        let average = sum / ages.length;
        console.log("مجموع الأعمار:", sum);
        console.log("متوسط الأعمار:", average);
        console.log("عدد الأشخاص الذين أعمارهم أقل من 18:", num);


/*
سؤال تطبيقي 3:

اكتب برنامجاً يطلب من المستخدم إدخال 5 أسماء، ويخزنها في مصفوفة. ثم اطبع الأسماء مرتبة أبجدياً.
*/
console.log("=====/ challenges its near to data structure /=====");
let names = [];
for (let i = 0; i < 5; i++) {
    let name = prompt("ادخل اسمك: ");
    names.push(name);
    }
    names.sort();
    console.log(names);
