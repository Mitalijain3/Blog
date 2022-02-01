import "./post.css";
import PostImage from "../../images/post.jpg";
function Post() {
  return (
    <div className="post">
      <img src={PostImage} alt="" className="post-img" />
      <div className="post-info">
        <div className="post-category">
          <span className="post-category-item">Music</span>
          <span className="post-category-item">Life</span>
        </div>
        <span className="post-title">Lorem Ipsum</span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
        velit. Autem similique error dolorum nisi perferendis quae, cumque
        laborum ipsum dignissimos. At, excepturi magni blanditiis esse sint
        atque quo dolor? Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Obcaecati, velit. Autem similique error dolorum nisi perferendis
        quae, cumque laborum ipsum dignissimos. At, excepturi magni blanditiis
        esse sint atque quo dolor?
      </p>
    </div>
  );
}

export default Post;
