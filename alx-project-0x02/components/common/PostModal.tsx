import { CardProps } from "@/interfaces";


export const PostModal: React.FC = () => {
    return (
        <div>
            <h1>Post Model Component</h1>
            <form action="">
                <label htmlFor="name"></label>  
                <input type="text" name = "name" placeholder="name" />
                <button>Submit</button>
            </form>
           
            
        </div>
    );
}