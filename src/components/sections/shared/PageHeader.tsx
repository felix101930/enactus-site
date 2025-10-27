// src/components/sections/shared/PageHeader.tsx

// We will pass the title and image as props to make this component reusable
interface PageHeaderProps {
  title: string;
  backgroundImage: string;
  pageName: string;
}

function PageHeader({ title, backgroundImage, pageName }: PageHeaderProps) {
  return (
    <section className="relative py-24 bg-gray-800 text-white">
      <div className="absolute inset-0">
        <img 
          src={backgroundImage} 
          alt={`${pageName} header background`}
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-left">
        <p className="font-bold mb-2">{pageName}</p>
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-400">
          {title}
        </h1>
      </div>
    </section>
  );
}

export default PageHeader;