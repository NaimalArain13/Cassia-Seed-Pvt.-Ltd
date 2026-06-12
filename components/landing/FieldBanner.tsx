import Image from 'next/image';

export default function FieldBanner() {
  return (
    <div className="field-banner">
      <Image
        src="/assets/agriculturist-woman-looks-corn-field.jpg"
        alt="Farmer tending to young seedlings in the field"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
      />
      <div className="field-banner-overlay" />
      <div className="container field-banner-content">
        <span className="eyebrow">Grown with Care</span>
        <h2 className="field-banner-h2">
          From Seed to Harvest —<br />
          We&apos;re With You Every Step
        </h2>
      </div>
    </div>
  );
}
