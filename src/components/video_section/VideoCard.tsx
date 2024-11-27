import { info } from "@/data/infoVideo";

interface VideoCardProps {
  videos: (typeof info)["videos"][number];
}

export default function VideoCard(props: VideoCardProps) {
  const { videos } = props;

  return (
    <div className="flex flex-col bg-primary dark:bg-dk-primary rounded-lg">
      <div className="flex-shrink-0">
        <a
          href={
            videos.link
              ? `${videos.link}`
              : `https://www.youtube.com/watch?v=${videos.videoId}`
          }
          rel="noreferrer"
          aria-label={videos.img_alt + ", click to open the project page"}
        >
          <img
            alt={videos.title}
            src={
              videos.img_path
                ? `${videos.img_path}`
                : `https://i.ytimg.com/vi/${videos.videoId}/maxresdefault.jpg`
            }
            className="h-55 w-full object-cover"
          />
        </a>
      </div>
      <div className="flex-1 bg-primary dark:bg-dk-primary p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-text dark:text-dk-text">
            <a
              href={
                videos.link
                  ? `${videos.link}`
                  : `https://www.youtube.com/watch?v=${videos.videoId}`
              }
              rel="noreferrer"
              className="hover:underline"
              aria-label="Title of the project, click to open the project page"
            >
              {videos.title}
            </a>
          </p>
          <a
            href={
              videos.link
                ? `${videos.link}`
                : `https://www.youtube.com/watch?v=${videos.videoId}`
            }
            rel="noreferrer"
            className="block mt-2"
            aria-label="Description of the project, click to open the project page"
          >
            <p className="text-xl font-semibold text-gray-900">
              {videos.description}
            </p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex flex-wrap space-x-2">
            <span className="text-dk-accent text-xs font-semibold">
              {videos.tech}
            </span>
          </div>
          <p className="ml-auto text-sm font-medium text-gray-900">
            {videos.date}
          </p>
        </div>
      </div>
    </div>
  );
}
