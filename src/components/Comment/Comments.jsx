import React, { useState } from "react";
import StarRating from "../StarRating/StarRating";
// import "./Comments.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [reply, setReply] = useState({});
  
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { text: newComment, replies: [] }]);
      setNewComment("");
    }
  };
  
  const handleAddReply = (index) => {
    if (reply[index]?.trim() !== "") {
      const updatedComments = comments.map((comment, i) =>
        i === index
          ? { ...comment, replies: [...comment.replies, reply[index]] }
          : comment
      );
      setComments(updatedComments);
      setReply({ ...reply, [index]: "" });
    }
  };
  
  const handleReplyChange = (e, index) => {
    setReply({ ...reply, [index]: e.target.value });
  };

  return (
    <div className="comments-section">
      <h2>Комментарии</h2>
      <div className="comment-input">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Введите комментарий"
        ></textarea>
        <button onClick={handleAddComment}>Отправить</button>
      </div>
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <img src="https://via.placeholder.com/50" alt="User avatar" />
          <div className="comment-content">
            <h4>Имя Пользователя</h4>
            <p>{comment.text}</p>
            <div className="comment-meta">
              <span>4 дня назад</span>
              <StarRating />
            </div>
            <div className="comment-actions">
              <button>👍</button>
              <button>👎</button>
              <button onClick={() => setReply({ ...reply, [index]: "" })}>
                Ответить
              </button>
            </div>
            {comment.replies.map((rep, repIndex) => (
              <div key={repIndex} className="comment reply">
                <img src="https://via.placeholder.com/50" alt="User avatar" />
                <div className="comment-content">
                  <h4>Имя Пользователя</h4>
                  <p>{rep}</p>
                  <div className="comment-meta">
                    <span>4 дня назад</span>
                    <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
                  </div>
                </div>
              </div>
            ))}
            {reply[index] !== undefined && (
              <div className="reply-input">
                <textarea
                  value={reply[index]}
                  onChange={(e) => handleReplyChange(e, index)}
                  placeholder="Введите ваш ответ"
                ></textarea>
                <button onClick={() => handleAddReply(index)}>Отправить</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
