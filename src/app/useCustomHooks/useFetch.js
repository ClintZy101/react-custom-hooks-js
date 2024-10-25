import { useCallback, useEffect, useState } from "react";

export default function useFetchComments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchComments = useCallback(async () => {
    setIsloading(true);
    setError(null);
    try {
      const res = await fetch("/api/comments");
      const data = await res.json();
      setComments(data);
    } catch (error) {
      setError("Somethig went wrong");
    } finally {
      setIsloading(false);
    }
  }, []);

  useEffect(() => {
    handleFetchComments();
  }, [handleFetchComments]);

  return { comments, isLoading, error, refetch:handleFetchComments };
}
