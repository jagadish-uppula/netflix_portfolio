import React, { useEffect, useState } from 'react';
import './Recommendations.css';
import { getRecommendations } from '../queries/getRecommendations';
import { Recommendation } from '../types';

const Recommendations: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    async function fetchRecommendations() {
      const data = await getRecommendations();
      setRecommendations(data);
    }
    fetchRecommendations();
  }, []);

  if (recommendations.length === 0) return <div>Loading...</div>;

  return (
    <div className='timeline-container'>
      {recommendations.map((rec, index) => (
        <div key={index} className="recommendation-card">
          <div className="recommendation-header">
            <img src={rec.image} alt={rec.name} className="profile-pic" />
            <div>
              <h3>{rec.name}</h3>
              <p>{rec.title}</p>
              <p className="date">{rec.date}</p>
            </div>
          </div>
          <div className="recommendation-body">
            {rec.text.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
