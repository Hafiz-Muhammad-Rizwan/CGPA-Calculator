let Subject_Array=[];
let Grade_Array=[];
let Credit_Array=[];

function AddSubject(event)
{
    let SubjectInput=document.getElementById("SubjectName");
    let Grade=document.getElementById("Grade").value;
    let Credit_Hour_Input=document.getElementById("CreditHour");
    let Credit=parseInt(Credit_Hour_Input.value);
    if(SubjectInput.value.trim()==="")
    {
        SubjectInput.value='';
        
       document.getElementById("SubjectName").placeholder="Please Enter the subjectName";
       return;
    }else if(Credit<1||Credit>4||isNaN(Credit))
    {
        Credit_Hour_Input.value='';
        document.getElementById("CreditHour").placeholder="Enter Credit Hour 1 - 4";
        return;
    }
    moveDataToTable(SubjectInput,Grade,Credit); 
    Subject_Array.push(SubjectInput.value);
    Grade_Array.push(Grade);
    Credit_Array.push(Credit);
    SubjectInput.value=' ';
    Credit_Hour_Input.value=' ';

    let IncreaseLengthBox=document.querySelector(".Main_Div");
    let Current_Height=IncreaseLengthBox.offsetHeight;
    IncreaseLengthBox.style.height=(Current_Height+40)+"px";
}
function calculate()
{
    let Credit_Hour_Earned=0.00;
    let Totall_Credit_Hour=0.00;
    let Cgpa=0.00;
    for(let i =0;i<Grade_Array.length;i++)
    {
        if(Grade_Array[i]=="A")
        {
            Credit_Hour_Earned=Credit_Hour_Earned+(Credit_Array[i]*4);
        }else  if(Grade_Array[i]=="A-")
        {
            Credit_Hour_Earned=Credit_Hour_Earned+(Credit_Array[i]*3.7);
        }else if(Grade_Array[i]=="B+")
        {
            Credit_Hour_Earned=Credit_Hour_Earned+(Credit_Array[i]*3.33);
        }else  if(Grade_Array[i]=="B")
        {
                Credit_Hour_Earned=Credit_Hour_Earned+(Credit_Array[i]*3.00);
        }else  if(Grade_Array[i]=="B-")
        {
                Credit_Hour_Earned=Credit_Hour_Earned+(Credit_Array[i]*2.77);
        }else  if(Grade_Array[i]=="C+")
        {
                Credit_Hour_Earned=Credit_Hour_Earned+(Credit_Array[i]*2.33);
        }else  if(Grade_Array[i]=="C")
        {
                Credit_Hour_Earned=Credit_Hour_Earned+(Credit_Array[i]*2.00);
        }else  if(Grade_Array[i]=="C-")
        {
                Credit_Hour_Earned=Credit_Hour_Earned+(Credit_Array[i]*1.77);
        }
        else  if(Grade_Array[i]=="D+")
        {
            Credit_Hour_Earned=Credit_Hour_Earned+(Credit_Array[i]*1.33);
        }
        else  if(Grade_Array[i]=="D")
        {
            Credit_Hour_Earned=Credit_Hour_Earned+(Credit_Array[i]*1.00);
        }else  if(Grade_Array[i]=="D-")
        {
            Credit_Hour_Earned=Credit_Hour_Earned+(Credit_Array[i]*0.77);
        }
        else
        {
            Credit_Hour_Earned=Credit_Hour_Earned+(Credit_Array[i]*0.00);
        }
    }
    for(let i =0;i<Credit_Array.length;i++)
    {
        Totall_Credit_Hour=Totall_Credit_Hour+Credit_Array[i];
    }
    Cgpa=Credit_Hour_Earned/Totall_Credit_Hour;

       let ShowCgpa=document.getElementById("Span");
       ShowCgpa.textContent=Cgpa;
}
function reset()
{
    document.getElementById("SubjectName").value=" ";
    document.getElementById("Grade").value="A";
    document.getElementById("CreditHour").value=" ";

    Subject_Array=[];
    Grade_Array=[];
    Credit_Array=[];

    let SubjectTable=document.getElementById("subjectTable");
    let Rows=SubjectTable.rows;
    let Rows_Count=Rows.length;
    for(let i =Rows_Count-1;i>0;i--)
    {
       SubjectTable.deleteRow(i);
    }

    let Main_Div=document.querySelector(".Main_Div");
    Main_Div.style.height=650+"px";
    
    let ResetCgpa=document.getElementById("Span");
    ResetCgpa.textContent="0.00";
}
function moveDataToTable(SubjectInput,Grade,Credit)
{
    let Row=document.getElementById("subjectTable");
    let new_Row=document.createElement("tr");

    let new_Coloumn_SubjectInput=document.createElement("td");
    new_Coloumn_SubjectInput.textContent=SubjectInput.value;
    new_Row.appendChild(new_Coloumn_SubjectInput);

    let new_Coloumn_Grade=document.createElement("td");
    new_Coloumn_Grade.textContent=Grade;
    new_Row.appendChild(new_Coloumn_Grade);

    let new_Coloumn_Credit=document.createElement("td");
    new_Coloumn_Credit.textContent=Credit;
    new_Row.appendChild(new_Coloumn_Credit);

    Row.appendChild(new_Row);
}
function main()
{
    let Add_Button=document.getElementById("Add");
    let Reset=document.getElementById("Reset");
    let calculateCgpa=document.getElementById("Calculate_Cgpa");
    Add_Button.addEventListener('click',AddSubject);
    calculateCgpa.addEventListener('click',calculate);
    Reset.addEventListener('click',reset);
}
main();