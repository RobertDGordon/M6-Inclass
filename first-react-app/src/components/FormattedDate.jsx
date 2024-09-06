function FormattedDate(props) {
  console.log("FormattedDate:", props.date);

  return (
  <div className="Comment-date">
    {props.date.toLocaleString()}
  </div>)
}

export default FormattedDate;