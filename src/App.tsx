import { GameBanner } from './components/GameBanner';

import logo from './assets/logo.svg';

import './styles/main.css';
import { CreateAdBanner } from './components/CreateAdBanner';

export const App = () => {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner
          bannerURL='/public/game_1.png'
          title='League of Legends'
          adsCount={5}
        />
        <GameBanner
          bannerURL='/public/game_2.png'
          title='Dota 2'
          adsCount={2}
        />
      </div>

      <CreateAdBanner />
    </div>
  )
}

