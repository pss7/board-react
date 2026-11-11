import { Link } from "react-router-dom";
import Main from "../components/layout/Main";

export default function BoardListPage() {

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
                  <tr>
                    <td>3</td>
                    <td>
                      <Link to="/board-detail">게시글3</Link>
                    </td>
                    <td>홍길동</td>
                    <td>0000-00-00</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>
                      <Link to="/board-detail">게시글2</Link>
                    </td>
                    <td>홍길동</td>
                    <td>0000-00-00</td>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>
                      <Link to="/board-detail">게시글1</Link>
                    </td>
                    <td>홍길동</td>
                    <td>0000-00-00</td>
                  </tr>
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