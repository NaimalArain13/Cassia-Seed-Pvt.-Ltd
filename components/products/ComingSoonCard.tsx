import Image from 'next/image';
import { getComingSoonImage } from '@/lib/product-images';

interface Props {
  brand: 'cassia' | 'malapine';
  weight?: string;
  imageUrl?: string;
  alt?: string;
}

export default function ComingSoonCard({ brand, weight, imageUrl, alt }: Props) {
  return (
    <div
      style={{
        borderRadius: 12,
        overflow: 'hidden',
        background: 'var(--card)',
        border: '1px solid var(--border-soft)',
        boxShadow: 'var(--shadow-sm)',
        aspectRatio: '4/3',
        position: 'relative',
      }}
    >
      <Image
        src={imageUrl ?? getComingSoonImage(brand, weight)}
        alt={alt ?? 'Coming Soon'}
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
