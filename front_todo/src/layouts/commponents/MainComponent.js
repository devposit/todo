import { useState,useEffect } from "react";
import ListTodoComponents from "../../todo/commponents/ListTodoComponents";


const MainComponent = () => {
    const [clock,setClock] = useState("");

    //실시간으로 시계 정보를 불러오는 함수
    const getLiveclock = () => {
        const now = new Date();
        //시간을 불러온다.
        const setAmPm =  now.getHours().toString().padStart(2,'0') > 12 ? 'PM' : 'AM';
        const hours = now.getHours().toString().padStart(2,'0');
        const minute = now.getMinutes().toString().padStart(2,'0');
        const seconds = now.getSeconds().toString().padStart(2,'0');
        const timeString = `${hours}:${minute}:${seconds} ${setAmPm}`;

        setClock(timeString);
    }

    //상태 감지
    useEffect(() => {
        getLiveclock();
        const timeId = setInterval(getLiveclock,1000);
        return () => clearInterval(timeId);
    },[]);

    return (
        <div item xs style={{
            height: '100%', 
            width: '100%',
            display: 'flex', // 자식 요소가 있을 경우를 대비해 flex로 설정
            flexDirection: 'column',
            alignItems: 'center', // 수직 정렬 설정
            justifyContent: 'center' // 수평 정렬 설정
        }}>
            <div>
                <span>{clock}</span>
            </div>
            <div>
                <input type="text" />
            </div>
            <div>
                <ListTodoComponents />
            </div>   
        </div>
    );
}

export default MainComponent;