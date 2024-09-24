import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';
import './index.css';

export default function App() {

  return (
    <div className="app">
      <div className="content">
        <h1>Best-selling Music Artists</h1>
        {artists.map((artist, index) => (
          <ArtistDetails key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
}
