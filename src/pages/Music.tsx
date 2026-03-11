import React, { useEffect, useState } from 'react';
import './Music.css';
import { getMusic } from '../queries/getMusic';
import { MusicItem } from '../types';

const Music: React.FC = () => {
  const [musicData, setMusicData] = useState<MusicItem[]>([]);

  useEffect(() => {
    async function fetchMusic() {
      const data = await getMusic();
      setMusicData(data);
    }
    fetchMusic();
  }, []);

  if (musicData.length === 0) return <div>Loading...</div>;

  return (
    <div className="music-page">
      <div className="quote">
        <p>“Music is the universal language of mankind.” 🎵</p>
      </div>

      <div className="albums-section">
        <h3>Favorite Music</h3>
        <div className="albums">
          {musicData.map((item, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={item.image} alt={item.title} className="album-image" />
              <div className="album-details">
                <h4>{item.title}</h4>
                <p>by {item.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
