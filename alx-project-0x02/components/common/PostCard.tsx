import {type PostProps } from "@/interfaces";
import { Card } from "./Card";
import { Button } from "./Button";

export const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    return (
        <div className="post-card"> 
            <Card title={title} content={content} />
            <p>User ID: {userId}</p>
            <Button size="medium" shape="rounded-md" />
        </div>
    );
}