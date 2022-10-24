const Text = (props) => {
  const comment = "にゃっはろ〜！";
  return (
    <div >
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <p>{comment}</p>
      
    </div>
  )
}

export default Text;
