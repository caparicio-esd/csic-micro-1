'use client';

import { useEffect, useRef } from 'react';

interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import('mermaid').then((m) => {
      m.default.initialize({ startOnLoad: false, theme: 'neutral' });
      if (ref.current) {
        ref.current.removeAttribute('data-processed');
        m.default.run({ nodes: [ref.current] });
      }
    });
  }, [chart]);

  return (
    <div ref={ref} className="mermaid my-6">
      {chart}
    </div>
  );
}
