import cx from "classnames";
import {
  Mic,
  Video,
  PhoneOff,
  MicOff,
  VideoOff,
  Phone,
  Bot,
} from "lucide-react";

const Bottom = (props) => {
  const { muted, playing, toggleAudio, toggleVideo, leaveRoom } = props;

  return (
    <div>
      {muted ? <MicOff /> : <Mic />}
      {playing ? <Video /> : <VideoOff />}
      <PhoneOff onClick={leaveRoom} />
    </div>
  );
};

export default Bottom;
