import ReactPlayer from "react-player";
import cx from "classnames";
import { Mic, MicOff, UserSquare2 } from "lucide-react";

const Player = (props) => {
  const { url, muted, playing, isActive } = props;
  return (
    <div className={cx()}>
      {playing ? (
        <ReactPlayer url={url} muted={muted} playing={playing} />
      ) : (
        <UserSquare2 />
      )}

      {!isActive ? muted ? <MicOff /> : <Mic /> : undefined}
    </div>
  );
};

export default Player;
