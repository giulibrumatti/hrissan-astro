import { info } from "@/data/infoVideo";

interface VideoCardProps {
  videos: (typeof info)["videos"][number];
}

export default function VideoCard(props: VideoCardProps) {
  const { videos } = props;

  return (
    <div className="flex flex-col bg-primary rounded-2xl relative">
      <div className="flex-shrink-0 rounded-2xl">
        <a
          href={
            videos.link
              ? `${videos.link}`
              : `https://www.youtube.com/watch?v=${videos.videoId}`
          }
          rel="noreferrer"
          className="rounded-2xl"
          target="_blank"
        >
          <figure>
            <img
              alt={videos.title}
              src={
                videos.img_path
                  ? `${videos.img_path}`
                  : `https://i.ytimg.com/vi/${videos.videoId}/maxresdefault.jpg`
              }
              className="h-55 w-full object-cover rounded-2xl"
              width={309}
              height={176}
              decoding="async"
              loading="lazy"
            />
          </figure>
        </a>
      </div>
      <div className="rounded-2xl bg-primary p-6 flex flex-col justify-between">
        <div className="flex-1 rounded-2xl">
          <a
            href={
              videos.link
                ? `${videos.link}`
                : `https://www.youtube.com/watch?v=${videos.videoId}`
            }
            rel="noreferrer"
            className="block rounded-2xl"
            target="_blank"
          >
            <p className="text-base font-bold text-white">
              {videos.description}
            </p>
          </a>
        </div>
        <div className="mt-2 flex items-center rounded-2xl">
          <div className="flex flex-wrap space-x-2 rounded-2xl">
            <span className="text-xs font-semibold text-slate-400 rounded-2xl">
              {videos.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
