import { createBrowserRouter } from "react-router-dom";

import LandingPage from "../pages/Landing/LandingPage";
import LoginPage from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";
import LobbyPage from "../pages/Lobby/LobbyPage";
import MatchmakingPage from "../pages/Matchmaking/MatchmakingPage";
import GamePage from "../pages/Game/GamePage";
import ResultPage from "../pages/Result/ResultPage";
import LeaderboardPage from "../pages/Leaderboard/LeaderboardPage";
import ProfilePage from "../pages/Profile/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/lobby",
    element: <LobbyPage />,
  },
  {
    path: "/matchmaking",
    element: <MatchmakingPage />,
  },
  {
    path: "/game/:roomId",
    element: <GamePage />,
  },
  {
    path: "/result/:roomId",
    element: <ResultPage />,
  },
  {
    path: "/leaderboard",
    element: <LeaderboardPage />,
  },
  {
    path: "/profile/:username",
    element: <ProfilePage />,
  },
]);