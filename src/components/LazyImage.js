import { useEffect, useRef, useState } from "react";

export default function LazyImage({ src, alt, className }) {
    const imgRef = useRef();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: "100px", // load sớm trước khi vào màn hình
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <img
            ref={imgRef}
            src={loaded ? src : ""}
            alt={alt}
            className={className}
            decoding="async"
        />
    );
}