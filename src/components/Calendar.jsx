import {useRef} from "react";

const Calendar = () => {

    const tableRef = useRef();

    let date = new Date();
    let y = date.getFullYear();
    let m = date. getMonth();
    let d = date.getDate();

    let theDate = new Date(y, m, 1);
    let theDay = theDate.getDay();

    let last = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let lastDate = last[m];

    let row = Math.ceil((theDay + lastDate)/7);

    if(y%4 && y % 100 != 0 || y % 400 == 0) lastDate = last[1] = 29;

    let dNum = 1;


  
    for(var i=1; i<=row; i++){//행 생성 (tr 태그 생성)
        tableRef.current +=`<table>`;
        tableRef.current +="<tr>";
    
        for(var k=1; k<=7; k++){//열 생성 (td 태그 생성)
            
            /*행이 첫 줄이고 현재 월의 1일의 요일 이전은 모두 빈열로
            표기하고 날짜가 마지막 일보다 크면 빈열로 표기됩니다.*/
            if(i==1 && k<=theDay || dNum>lastDate){
                tableRef.current +="<td> &nbsp; </td>";
             }else{
                tableRef.current +="<td>"+dNum+"</td>";
               dNum++;
             }

        }
        tableRef.current +="</tr>";
        tableRef.current +="<table>";
    }

    let days = ["일", "월", "화","수","목", "금","토" ];
          

    return (
        <>
            <h1>달력</h1>
            <table className="calendar" border="1" ref={tableRef} >
                <tr>
                    {days.map((day, idx)=>(
                        <th key={idx}>{day}</th>
                    ))}
                </tr>
                <tr>

                </tr>
               { console.log(tableRef.current)}
            </table>
        </>
    )
}
export default Calendar;