import Image from 'next/image';

type MediaImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export const MediaImage = ({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '100vw',
}: MediaImageProps): React.ReactNode => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
};
