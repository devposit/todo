import { useCallback, useState, useRef } from "react";
import Loading from "../../layouts/commponents/LoadingComponent";

const InsertTodoComponents = ({onInsert}) => {
    const [value,setValue] = useState('');
    const [loading,setLoading] = useState(null);

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    },[])
    
 

    const onSubmit = useCallback((e) => {
        setLoading(true);
        onInsert(value);
        setValue('');
        e.preventDefault();
        setLoading(false)
    },[onInsert,value])

    return (
        <>
            {loading ? <Loading /> : null}
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={value} type="text" placeholder="오늘 할 일을 입력하세요."></input>
            </form>
        </>
    )
}

export default InsertTodoComponents;