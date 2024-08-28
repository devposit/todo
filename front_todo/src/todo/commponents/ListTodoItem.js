const TodoListItem = ({todo}) => {
    const {id, text ,checked} = todo;
    return (
        <li className="TodoListItem">
            <div className="text">{text}</div>
        </li>
    );
}

export default TodoListItem;