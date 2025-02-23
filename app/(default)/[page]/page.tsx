import pagesContent from "@/app/data/pagesContent.json";
import PageIllustration from "@/components/background-images";

// Definimos el tipo para los parámetros de la URL
interface Params {
  page: string;
}

// Función que genera rutas estáticas
export async function generateStaticParams(): Promise<Params[]> {
  return Object.keys(pagesContent).map((page) => ({
    page,
  }));
}

// Definimos los props con los tipos adecuados
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
          <h1>{pageData.title}</h1>
          <h2>{pageData.subtitle}</h2>
          <p>{pageData.body}</p>
        </div>
      </div>

    </section>
  );
}
