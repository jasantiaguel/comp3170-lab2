import '../index.css';

export default function ArtistDetails({artist}) {

  return (
    <div className="contentBox">
      <img src={artist.photo_url} alt="" />
      <div className="artistDetails">
        <h2>{artist.name}</h2>
        <p>Country: {artist.country}</p>
        <p>Years Active: {artist.years_active}</p>
      </div>
    </div>
  )
}
