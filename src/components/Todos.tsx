const todos = 
[
    {
        text: 'Todo-1',
        id: 1,
    },
    {
        text: 'Todo-2',
        id: 2,
    },
    {
        text: 'Todo-3',
        id: 3,
    },
    {
        text: 'Todo-4',
        id: 4,
    },
]


const Todos = () => {

    return (
        <ul className="mb-16 flex flex-col gap-2">
            {todos.map((item) => {
                return <li>{item.text}</li>
            })}
        </ul>
    )
}

export default Todos;