export default function ProjectCard({ title, description, image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block transition-transform duration-300 ease-out hover:-translate-y-2"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-800">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* 어두운 오버레이: 호버 시 은은하게 어두워짐 */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />

        {/* 파란색 버튼: 이미지 정중앙에서 스르륵 나타남 */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100">
          <span className="rounded-md bg-blue-500 px-4 py-2 text-base font-bold text-white shadow-lg">
            사이트 보러가기
          </span>
        </div>
      </div>

      <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
      <p className="mt-1 text-sm text-neutral-400">{description}</p>
    </a>
  );
}
