import { type ButtonProps } from "@/interfaces";

export const Button: React.FC<ButtonProps> = ({ size, shape}) => {
    return (
        <button className={`btn ${size} ${shape}`}>
            Click Me
        </button>
    );
}