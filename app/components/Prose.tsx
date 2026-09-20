/**
 * Minimal renderer for our content bodies: "## " headings, "- " list items,
 * everything else a paragraph. Inline **bold** is supported because the
 * dispatches lean on it for source names.
 */
function inline(text: string, keyPrefix: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
    chunk.startsWith('**') && chunk.endsWith('**') ? (
      <strong key={`${keyPrefix}-${i}`} className="font-semibold text-ink">
        {chunk.slice(2, -2)}
      </strong>
    ) : (
      <span key={`${keyPrefix}-${i}`}>{chunk}</span>
    )
  );
}

export default function Prose({ body }: { body: string[] }) {
  const blocks: React.ReactNode[] = [];
  let list: string[] = [];

  const flushList = (key: string) => {
    if (list.length === 0) return;
    blocks.push(
      <ul key={`ul-${key}`}>
        {list.map((item, i) => (
          <li key={`${key}-${i}`}>{inline(item, `${key}-${i}`)}</li>
        ))}
      </ul>
    );
    list = [];
  };

  body.forEach((line, index) => {
    const key = String(index);
    if (line.startsWith('- ')) {
      list.push(line.slice(2));
      return;
    }
    flushList(key);
    if (line.startsWith('## ')) {
      blocks.push(<h2 key={key}>{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      blocks.push(<h3 key={key}>{line.slice(4)}</h3>);
    } else {
      blocks.push(<p key={key}>{inline(line, key)}</p>);
    }
  });
  flushList('end');

  return <div className="prose-local max-w-prose">{blocks}</div>;
}
