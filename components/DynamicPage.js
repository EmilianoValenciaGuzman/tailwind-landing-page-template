// app/components/DynamicPage.js
export default function DynamicPage({ content }) {
    return (
      <div>
        <h1>{content.title}</h1>
        <h2>{content.subtitle}</h2>
        <p>{content.body}</p>
      </div>
    );
  }
  