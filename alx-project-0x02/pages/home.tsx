import Card from "@/components/common/Card"
import Header  from "@/components/common/Header"
import { PostModal } from "@/components/common/PostModal";
export const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <Card title="Sample Card" content="This is a sample card component." />
            <PostModal />
        </div>
    );
}