import Button from "@/components/common/Button"
import Header   from "@/components/layout/Header"



export const About: React.FC = () => {
    return (
        <div>
            <h1>About Page</h1>
            <Header/>
            <p>This is a sample about page component.</p>
            <Button size="small" shape="rounded-sm" />
            <Button size="medium" shape="rounded-md" />
            <Button size="large" shape="rounded-full" />
        </div>
    );
}