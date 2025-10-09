import Image from "next/image";

const Featured = () => {
  const featuredPost = {
    author: "Olivia Rhye",
    date: "1 Jan 2023",
    title: "Grid system for better Design User Interface",
    description:
      "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    image: "/featured.png",
    tags: [
      { label: "Design", bgColor: "#f9f5ff", color: "#6840c6" },
      { label: "Interface", bgColor: "#fdf1f9", color: "#c01573" },
    ],
  };

  return (
    <div className="h-auto py-8 bg-white flex flex-col justify-start items-center gap-12">
      <div className="w-full px-8 flex flex-col gap-6">
      <h2 className="text-3xl font-bold text-gray-900 text-left">Featured blog</h2>
        <div className="flex flex-wrap items-start gap-8">
          <Image
            height={246}
            width={592}
            className="h-[246px] w-full max-w-[592px] rounded-lg object-cover"
            src={featuredPost.image}
            alt={featuredPost.title}
          />
          <div className="flex-1 flex flex-col gap-4">
            <div className="text-sm font-semibold text-gray-600">
              {featuredPost.author} • {featuredPost.date}
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 leading-snug">
              {featuredPost.title}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              {featuredPost.description}
            </p>
            <div className="flex gap-2">
              {featuredPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-2xl text-sm font-medium transition-colors hover:opacity-80"
                  style={{
                    backgroundColor: tag.bgColor,
                    color: tag.color,
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

