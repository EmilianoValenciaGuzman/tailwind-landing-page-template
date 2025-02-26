import pagesContent from "@/app/data/pagesContent.json";
import PageIllustration from "@/components/background-images";

interface Params {
  page: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return Object.keys(pagesContent).map((page) => ({
    page,
  }));
}

interface PageProps {
  params: Params;
}

export default function Page({ params }: PageProps) {
  const pageData = pagesContent[params.page as keyof typeof pagesContent];

  if (!pageData) {
    return <h1>Página no encontrada</h1>;
  }

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Start of Header */}
          <div className="pb-12 text-center md:pb-16">

            <h1
                className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                {pageData.title}
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                {pageData.subtitle}
              </p>
              {/* 
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                "BOTONES"
              </div>
               */}
            </div>
          </div>
          {/* End of Header */}
          <div className="mx-auto max-w-3xl">
        <video height="452" width="768" controls >
          <source src="https://www.youtube.com/watch?v=qAGvQDoL5s4" />
          Your browser does not support the video tag...
        </video>
      </div>
          <h1>{pageData.title}</h1>
          <h2>{pageData.subtitle}</h2>
          <p>{pageData.body}</p>
        </div>
      </div>
    </section>
  );
}
