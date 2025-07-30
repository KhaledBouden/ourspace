// app/scrapbook/[id]/page.tsx or app/album/[id]/page.tsx

import AlbumDetail from './AlbumDetail';

interface AlbumPageProps {
  params: {
    id: string;
  };
}

// This function tells Next.js which dynamic routes to pre-render at build time
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

// The page component
export default function AlbumPage({ params }: AlbumPageProps) {
  return <AlbumDetail albumId={params.id} />;
}
