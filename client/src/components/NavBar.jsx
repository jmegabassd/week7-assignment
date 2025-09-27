import "./NavBar.css";
import { useNavigate } from "react-router";

export default function NavBar() {
  const navigate = useNavigate();

  const homeBtn = () => {
    navigate("/");
  };

  const createBtn = () => {
    navigate("/new");
  };

  const editBtn = () => {
    navigate("/edit");
  };

  const delBtn = () => {
    navigate("/delete");
  };

  return (
    <>
      <div className="nav-bar">
        <button id="home" onClick={homeBtn}>
          Home
        </button>
        <button id="create" onClick={createBtn}>
          Create
        </button>
        <button id="edit" onClick={editBtn}>
          Edit
        </button>
        <button id="delete" onClick={delBtn}>
          Delete
        </button>
      </div>
    </>
  );
}
