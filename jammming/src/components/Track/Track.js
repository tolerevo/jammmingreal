import React from 'react';
import styles from './Track.module.css';

const track = {
  artist: "Taylor Swift",
  name: "All too well",
  album: "red",
  ICR: 45,
}

const Track = () => {
  return (
    <div className={styles.Track}>
      <div className={styles.TrackInformation}>
        <div className={styles.TrackArtist}>
          <p>{track.artist}</p>
          <p>{track.name}</p>
        </div>
        <div className={styles.TrackAlbum}>
          <p>{track.album}</p>
          <h3>{`${track.ICR} #`}</h3>
        </div>
      </div>
    </div>
  );
}

export default Track;