import { useSocket } from "@/context/socket";
import { useRouter } from "next/router";

const { useState, useEffect, useRef } = require("react");
// import { useState, useEffect, useRef } from "react";

const usePeer = () => {
  const [peer, setPeer] = useState(null);
  const [myId, setMyId] = useState("");
  const socket = useSocket();
  const roomId = useRouter().query.roomId;

  const isPeerSet = useRef(false);
  useEffect(() => {
    if (isPeerSet.current || !roomId || !socket) return;
    isPeerSet.current = true;

    //this is how we import peerjs library in nextjs we csn't include it directly as we do in reactjs
    (async function initPeer() {
      const myPeer = new (await import("peerjs")).default();
      setPeer(myPeer);

      myPeer.on("open", (id) => {
        console.log(`your peer id is: ${id}`);
        setMyId(id);
        socket?.emit("join-room", roomId, id);
      });
    })();
  }, [roomId, socket]);

  return {
    peer,
    myId,
  };
};
export default usePeer;
