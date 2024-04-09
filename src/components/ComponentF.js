import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";
const ComponentF = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    // <div>
    //   {/* <UserContext.Consumer>
    //     {(user) => {
    //       return (
    //         <ChannelContext.Consumer>
    //           {(channel) => {
    //             return (
    //               <div>
    //                 Channel Context value {channel},User Context value {user}{" "}
    //               </div>
    //             );
    //           }}
    //         </ChannelContext.Consumer>
    //       );
    //     }}
    //   </UserContext.Consumer> */}
    // </div>
    <>
      <div>
        UserContext Value {user} , Channel Context Value {channel}
      </div>
    </>
  );
};

export default ComponentF;
