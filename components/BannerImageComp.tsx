import React from 'react';

type BannerProps = {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
};

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <div style={{ background, padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onEdit}>Edit</button>
      <button>{cta}</button>
    </div>
  );
};

export default BannerImageComp;
