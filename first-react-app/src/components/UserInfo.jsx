import Avatar from "./Avatar";

function UserInfo(props) {

  console.log('UserInfo:', props.name)

  return (
    <div className="UserInfo">
      <Avatar avatarUrl={props.avatarUrl} name={props.name} />
      <div className="UserInfo-name">{props.name}</div>
    </div>
  );
}

export default UserInfo;