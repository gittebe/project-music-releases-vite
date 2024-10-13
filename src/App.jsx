import data from "./data.json";
import stretchgoals from "./stretch-goal.json"
import { Album } from "./components/Album"

console.log(data);
console.log(stretchgoals)

export const App = () => {
    return (
        <>
            <Album />
        </>)
};
