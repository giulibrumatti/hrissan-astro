import { info } from "@/data/infoVideo";

interface VideoCardProps {
  videos: (typeof info)["videos"][number];
}

export default function VideoCard(props: VideoCardProps) {
  const { videos } = props;

  return (
    <div className="flex flex-col bg-primary rounded-2xl">
      <div className="flex-shrink-0">
        <a
          href={
            videos.link
              ? `${videos.link}`
              : `https://www.youtube.com/watch?v=${videos.videoId}`
          }
          rel="noreferrer"
          aria-label={videos.img_alt} className="rounded-2xl"
        >
          <img
            alt={videos.title}
            src={
              videos.img_path
                ? `${videos.img_path}`
                : `https://i.ytimg.com/vi/${videos.videoId}/maxresdefault.jpg`
            }
            className="h-55 w-full object-cover rounded-2xl"
          />
        </a>
      </div>
      <div className="flex-1 bg-primary p-6 flex flex-col justify-between rounded-2xl">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-400">
            <a
              href={
                videos.link
                  ? `${videos.link}`
                  : `https://www.youtube.com/watch?v=${videos.videoId}`
              }
              rel="noreferrer"
              className="hover:underline rounded-2xl"
              aria-label=""
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
            className="block rounded-2xl"
            aria-label=""
          >
            <p className="text-lg font-bold text-white">
              {videos.description}
            </p>
          </a>
        </div>
        <div className="mt-2 flex items-center rounded-2xl">
          <div className="flex flex-wrap space-x-2 rounded-2xl">
            <span className="text-xs font-semibold text-slate-400 rounded-2xl">
              {videos.tech}
            </span>
          </div>
          <p className="ml-auto text-sm font-medium text-slate-400">
            {videos.date}
          </p>
        </div>
      </div>
    </div>
  );
}
