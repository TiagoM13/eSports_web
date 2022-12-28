import { useEffect, useState } from "react";

import { IGame } from "../interfaces/game";

import { api } from "../service/api";

export const useGetGames = () => {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    api.get('/games').then(response => {
      setGames(response.data);
    })
  }, []);

  return { games }
}
