import Card from "@/components/common/Card"
import { PostModel } from "@/components/common/PostModel";
export const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <Card title="Sample Card" content="This is a sample card component." />
            <PostModel title="hello ther" content="here we go"/>
        </div>
    );
}