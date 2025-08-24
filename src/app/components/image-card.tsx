import Image from 'next/image';

export const ImageCard = ({ url }: { url: string }) => {
console.log("Rendering ImageCard with url:", url);
    return (
        <div style={{ border: '1px solid gray', position: "relative", width: "100%", paddingBottom: "100%", }}>
            <Image
                src={url}
                alt="Image"
                fill
                style={{ objectFit: "cover" }}
            />
        </div>
    )
};