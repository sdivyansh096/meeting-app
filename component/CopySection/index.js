import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";

const CopySection = (props) => {
  const { roomId } = props;

  return (
    <div>
      <div>Copy Room Id:</div>
      <hr />
      <div>
        <span>{roomId}</span>
        <CopyToClipboard text={roomId}>
          <Copy />
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CopySection;
