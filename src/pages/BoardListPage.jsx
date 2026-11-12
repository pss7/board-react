import { Link } from "react-router-dom";
import Main from "../components/layout/Main";
import { useEffect, useState } from "react";
import { getBoards } from "../api/boardApi";

export default function BoardListPage() {

  /* 상태관리 */
  const [boardData, setBoardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* 게시글 목록 조회 */
  useEffect(function () {

    async function fetchBoard() {

      try {

        setLoading(true);
        setError("");

        const response = await getBoards();
        setBoardData(response);

      } catch (error) {

        console.error(error);
        setError("게시글 목록을 불러오지 못했습니다.");

      } finally {

        setLoading(false);

      }

    }

    fetchBoard();

  }, []);

  return (
    <Main>

      <div className="contentBox">

        <div className="boardBox">
          <div className="container">

            <h1>게시판</h1>

            {/* 게시글 검색 */}
            <form className="boardSearchBox">
              <input
                type="text"
                name="search"
                placeholder="게시글 제목을 검색하세요."
              />
              <button type="button">검색</button>
            </form>

            {/* 게시글 정렬 */}
            <div className="boardSortBox">
              <button type="button" className="active">전체</button>
              <button type="button">최신순</button>
              <button type="button">오래된 순</button>
            </div>

            {/* 게시글 목록 */}
            <div className="boardListBox">
              <table className="boardTable">
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    loading ? (
                      <tr>
                        <td colSpan="4">로딩중</td>
                      </tr>
                    ) : error ? (
                      <tr>
                        <td colSpan="4">{error}</td>
                      </tr>
                    ) : boardData.length > 0 ? (

                      boardData.map(function (data) {
                        return (
                          <tr key={data.id}>
                            <td>
                              {data.id}
                            </td>
                            <td>
                              <Link to={`/board-detail/${data.id}`}>
                                {data.title}
                              </Link>
                            </td>
                            <td>
                              {data.author}
                            </td>
                            <td>
                              {data.createdAt || "_"}
                            </td>
                          </tr>
                        )
                      })

                    ) : (
                      <tr>
                        <td colSpan="4">
                          등록된 게시글이 없습니다.
                        </td>
                      </tr>
                    )
                  }

                </tbody>
              </table>
            </div>

            {/* 페이지네이션 */}
            <div className="boardPagination">
              <button type="button" disabled>이전</button>
              <button type="button" className="active">1</button>
              <button type="button">2</button>
              <button type="button">3</button>
              <button type="button">다음</button>
            </div>

            {/* 하단 버튼 */}
            <div className="boardBtnBox">
              <Link to="/board-create" className="btn">
                글쓰기
              </Link>
            </div>

          </div>
        </div>
      </div>

    </Main >
  );

}