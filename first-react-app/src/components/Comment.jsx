import FormattedDate from "./FormattedDate"
import UserInfo from "./UserInfo"

function Comment(props) {

  console.log('Comment:', props.author)

  return (
    <div className="Comment componentBox">
      <UserInfo name={props.author.name} avatarUrl={props.author.avatarUrl} />

      <div className="Comment-text">
        {props.text}
      </div>

      <FormattedDate date={props.date} />
    </div>
  )
}
export default Comment