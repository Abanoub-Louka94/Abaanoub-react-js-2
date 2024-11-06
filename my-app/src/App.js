import TodoList from "./Challenges/Challenge-1";
import SecondTodoList from "./Challenges/Challenge-2";
import ThirdTodoList from "./Challenges/Challenge-3";



export  default function MyApp(){
    return (
        <div>
            <div className="challenge-1">
                <TodoList />
            </div>
            <div className="challenge-2">
                <SecondTodoList />
            </div>
            <div className="challenge-3">
                <ThirdTodoList />
            </div>
        </div>
    )
}