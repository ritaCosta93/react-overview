import axios from 'axios';
import { useEffect, useState } from 'react';

export const useSpaceships = url => {
  const [spaceships, setSpaceships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(({ data }) => {
        setSpaceships(data || []);
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { spaceships, loading, error };
};
