import { Link } from "react-router-dom";
import Main from "../components/layout/Main";

export default function BoardDetailPage() {

  return (
    <Main>

      <div className="contentBox">

        <div className="boardBox">
          <div className="container">

            <h1>게시판</h1>

            {/* 게시글 상세 */}
            <div className="boardDetailBox">

              {/* 게시글 정보 */}
              <div className="boardDetailTopBox">
                <h2>게시글</h2>

                <div className="boardDetailInfo">
                  <span>작성자 : 홍길동</span>
                  <span>작성일 : 0000-00-00</span>
                </div>
              </div>

              {/* 게시글 내용 */}
              <div className="boardDetailContent">
                <p>
                  게시글
                </p>
              </div>

            </div>

            {/* 하단 버튼 */}
            <div className="boardBtnBox">
              <Link to="/board-list" className="btn secondaryBtn">
                목록
              </Link>

              <div className="boardActionBox">
                <Link to="/board-update" className="btn">
                  수정
                </Link>

                <button type="button" className="btn deleteBtn">
                  삭제
                </button>
              </div>
              
            </div>
          </div>
        </div>

      </div>

    </Main>
  );

}