import { useState,useEffect, useCallback,useRef} from "react";
import ListTodoComponents from "../../todo/commponents/ListTodoComponents";
import InsertTodoComponents from "../../todo/commponents/InsertTodoComponents";

/* const initSetting = {
    todoDtoList: [],
    pageNumList: [],
    pageRequestDTO: null,
    prev:false,
    next:false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
} */

export const dumpTodoData = [
    {
        id: '1',
        text: '메모 테스트#1',
        delYn: 'true',
    },
    {
        id: '2',
        text: '메모 테스트#2',
        delYn: 'true',
    },
    {
        id: '3',
        text: '메모 테스트#3',
        delYn: 'false',
    },
]


const MainComponent = () => {
    const [clock,setClock] = useState("");
    const [todoList,setTodoList] = useState(dumpTodoData);
    const nextId = useRef(4);
    const onInsert = useCallback((text) => {
        const todo = {
            id: nextId.current,
            text: text,
            delYn: false,
        };
        setTodoList(todoList.concat(todo));
        nextId.current++;
    },[todoList]);



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
                <InsertTodoComponents onInsert={onInsert}/>
            </div>
            <div>
                <ListTodoComponents todoList={todoList}/>
            </div>   
        </div>
    );
}

export default MainComponent;