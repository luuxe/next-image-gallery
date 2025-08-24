import Image from 'next/image';
import { Image as ImageType } from '../types/api';

interface ImageCardProps {
    image: ImageType;
    onDelete?: (fileName: string) => void;
}
export const ImageCard = ({ image, onDelete }: ImageCardProps) => {
const { fileName, url } = image;

const handleDelete = (fileName: string) => onDelete?.(fileName);

    return (
        <div style={{ border: '1px solid gray', position: "relative", width: "100%", paddingBottom: "100%", }}>
            <div
            style={{ padding: "4px", position: "absolute", zIndex: "10", background: "white", width: "100%", color: "black", display: "flex", justifyContent: "space-between" }}
            >
                <p>{fileName}</p>
                <button onClick={(e) => {
                e.preventDefault()
                handleDelete(fileName)
            }}>
                delete
                </button>
            </div>
            <Image
                src={url}
                alt="Image"
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes='40vw'
            />
        </div>
    )
};