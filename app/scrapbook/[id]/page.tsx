// app/scrapbook/[id]/page.tsx

import AlbumDetail from './AlbumDetail';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

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

export default async function AlbumPage({ params }: Props) {
  const { id } = await params;
  return <AlbumDetail albumId={id} />;
}