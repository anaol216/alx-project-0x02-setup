import Button from "@/components/common/Button"

export const About: React.FC = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is a sample about page component.</p>
            <Button size="small" shape="rounded-sm" />
            <Button size="medium" shape="rounded-md" />
            <Button size="large" shape="rounded-full" />
        </div>
    );
}