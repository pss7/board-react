import { Link, useNavigate, useParams } from "react-router-dom";
import Main from "../components/layout/Main";
import { useEffect, useState } from "react";
import { deleteBoard, getBoard } from "../api/boardApi";

export default function BoardDetailPage() {

  /* 페이지 이동 */
  const navigate = useNavigate();

  /* URL 파라미터 */
  const { id } = useParams();

  /* 상태관리 */
  const [boardData, setBoardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState(false);

  /* 게시글 삭제 */
  async function handleDelete() {

    if (deleting) {
      return;
    }

    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    try {

      setDeleting(true);

      await deleteBoard(id);

      alert("게시글 삭제 완료");
      navigate("/board-list");

    } catch (error) {

      console.error(error);
      alert("게시글 삭제 실패");

    } finally {

      setDeleting(false);

    }

  }

  /* 게시글 상세 조회 */
  useEffect(function () {

    async function fetchBoard() {

      try {

        setLoading(true);
        setError("");

        const response = await getBoard(id);
        setBoardData(response);

      } catch (error) {

        console.error(error);
        setError("게시글을 불러오지 못했습니다.");

      } finally {

        setLoading(false);

      }

    }

    fetchBoard();

  }, [id]);

  return (
    <Main>

      <div className="contentBox">

        <div className="boardBox">
          <div className="container">

            <h1>게시판</h1>
            {
              loading ? (
                <p>로딩중</p>
              ) : error ? (
                <p>{error}</p>
              ) : (

                <>
                  {/* 게시글 상세 */}
                  <div className="boardDetailBox">

                    {/* 게시글 정보 */}
                    <div className="boardDetailTopBox">
                      <h2>{boardData.title}</h2>

                      <div className="boardDetailInfo">
                        <span>작성자 : {boardData.author}</span>
                        <span>작성일 : {boardData.createdAt || "-"}</span>
                      </div>
                    </div>

                    {/* 게시글 내용 */}
                    <div className="boardDetailContent">
                      <p>
                        {boardData.content}
                      </p>
                    </div>

                  </div>

                  {/* 하단 버튼 */}
                  <div className="boardBtnBox">
                    <Link to="/board-list" className="btn secondaryBtn">
                      목록
                    </Link>

                    <div className="boardActionBox">
                      <Link to={`/board-update/${id}`} className="btn">
                        수정
                      </Link>

                      <button
                        type="button"
                        className="btn deleteBtn"
                        onClick={handleDelete}
                        disabled={deleting}
                      >
                        {deleting ? "삭제중" : "삭제"}
                      </button>
                    </div>

                  </div>
                </>

              )
            }

          </div>
        </div>

      </div>

    </Main >
  );

}