import "./singlePost.css";
import PostImage from "../../images/post.jpg";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function SinglePost() {
  return (
    <div className="singlePost">
      <div className="single-post-content">
        <img src={PostImage} alt="" className="single-post-img" />
        <h1 className="single-post-title">
          Lorem Ipsum
          <div className="single-post-edit">
            <EditIcon className="single-post-edit-icon" />
            <DeleteIcon className="single-post-edit-icon" />
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">Author: Mitali</span>
          <span className="single-post-date">1hour ago</span>
        </div>
        <p className="single-post-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut incidunt
          maxime ad alias minus. Excepturi cum deleniti ex, perspiciatis sunt
          modi et placeat deserunt vero exercitationem tempora, iure incidunt
          voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsum deserunt quaerat nemo quibusdam quisquam sunt, neque
          voluptatibus commodi voluptates pariatur id nisi! Veniam omnis rerum
          soluta vitae tempora nam architecto! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Ut incidunt maxime ad alias minus.
          Excepturi cum deleniti ex, perspiciatis sunt modi et placeat deserunt
          vero exercitationem tempora, iure incidunt voluptatem? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ipsum deserunt quaerat
          nemo quibusdam quisquam sunt, neque voluptatibus commodi voluptates
          pariatur id nisi! Veniam omnis rerum soluta vitae tempora nam
          architecto! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ut incidunt maxime ad alias minus. Excepturi cum deleniti ex,
          perspiciatis sunt modi et placeat deserunt vero exercitationem
          tempora, iure incidunt voluptatem? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum deserunt quaerat nemo quibusdam
          quisquam sunt, neque voluptatibus commodi voluptates pariatur id nisi!
          Veniam omnis rerum soluta vitae tempora nam architecto! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ut incidunt maxime ad
          alias minus. Excepturi cum deleniti ex, perspiciatis sunt modi et
          placeat deserunt vero exercitationem tempora, iure incidunt
          voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsum deserunt quaerat nemo quibusdam quisquam sunt, neque
          voluptatibus commodi voluptates pariatur id nisi! Veniam omnis rerum
          soluta vitae tempora nam architecto!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
