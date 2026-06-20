type MediaVideoProps = {
  src: string;
  className?: string;
  ariaLabel?: string;
  autoPlay?: boolean;
};

export const MediaVideo = ({
  src,
  className = '',
  ariaLabel,
  autoPlay = true,
}: MediaVideoProps): React.ReactNode => {
  return (
    <video
      className={className}
      src={src}
      aria-label={ariaLabel}
      autoPlay={autoPlay}
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
};
