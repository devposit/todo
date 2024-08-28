import ListTodoItem from '../../todo/commponents/ListTodoItem';
const ListTodoComponents = ({todoList}) => {
   return (
       <ul className="todoList">
            {todoList.map((todo) => {
                return (<li key={todo.id}><ListTodoItem todo={todo} /></li>);
            })}
        </ul>
   );     
}

export default ListTodoComponents;