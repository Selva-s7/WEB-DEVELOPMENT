const students = [
  { name: "Selva", marks: [85, 92, 78, 90, 88] },
  { name: "Arjun", marks: [60, 55, 70, 65, 58] },
  { name: "Priya", marks: [95, 98, 92, 97, 99] },
  { name: "Ram",   marks: [40, 35, 50, 45, 30] }
];
students.forEach(student=>{
    let grade;
    let sum=0;
    let ispassed="passed";
    student["marks"].forEach(mark=>sum+=mark)
    let avg=sum/5;
    if(avg>=90)
    {
     grade='A';   
    }
    else if(avg<90 && avg>=75)
    {
        grade='B';
    }
    else if(avg<75 && avg>=60)
    {
        grade='c';
    }
    else
    {
        grade='F';
        ispassed='failed'
    }
    console.log(student["name"]+"|"+avg+"|"+grade+"|"+ispassed);
})