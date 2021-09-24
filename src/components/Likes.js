import { Component } from "react";
import Like from "../App";
import song from "../App";
import "./likeButton.css";

const Likes = (props) => {

	const {id,onClickLikeChange,likes} = props
	console.log(likes,"like")
  
  const incrementMe = () => {
		
		onClickLikeChange(id)
		
	}

	
		return (

			<i class="fas fa-thumbs-up" onClick={incrementMe}> {likes}</i>
			// <button onClick={incrementMe}> {likes}</button>
		)
}

export default Likes;