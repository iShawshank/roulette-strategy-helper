interface VideoProps {
  videoLink: string;
}

const VideoEmbed = ({ videoLink }: VideoProps) => {
  return (
    <div className="w-full max-w-2xl">
      <h3 className="text-2xl text-green font-semibold mb-5">
        All On Black - Video Walkthrough
      </h3>
      <div className="video-iframe-container">
        <iframe
          className="responsive-iframe rounded-xl"
          src={`https://www.youtube.com/embed/${videoLink}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoEmbed;
