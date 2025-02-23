// app/pages/[page].js
import pagesContent from "../app/data/pagesContent.json";



export async function getStaticPaths() {
  const paths = Object.keys(pagesContent).map(page => ({
    params: { page }
  }));
  console.log('Paths generados:', paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
// Obtenemos la data correspondiente al parámetro de la URL
const pageData = pagesContent[params.page];

return {
    props: { pageData }
};
}

export default function Page({ pageData }) {
    return (
      <div>
        <h1>{pageData.title}</h1>
        <h2>{pageData.subtitle}</h2>
        <p>{pageData.body}</p>
      </div>
    );
  }
