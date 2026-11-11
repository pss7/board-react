import { Link } from "react-router-dom";
import Main from "../components/layout/Main";

export default function BoardCreatePage() {

  return (
    <Main>

      <div className="contentBox">

        <div className="boardBox">
          <div className="container">
            <h1>게시글 등록</h1>

            {/* 게시글 등록 폼 */}
            <div className="formWrap">
              <form id="boardCreateForm">

                {/* 제목 */}
                <div className="formItem">
                  <label htmlFor="title">제목</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="제목을 입력해주세요."
                  />
                </div>

                {/* 작성자 */}
                <div className="formItem">
                  <label htmlFor="author">작성자</label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    placeholder="작성자를 입력해주세요."
                  />
                </div>

                {/* 내용 */}
                <div className="formItem">
                  <label htmlFor="content">내용</label>
                  <textarea
                    id="content"
                    name="content"
                    placeholder="내용을 입력해주세요."
                    rows="10"
                  />
                </div>

                {/* 첨부파일 */}
                <div className="formItem">
                  <label htmlFor="files">첨부파일</label>

                  <div className="fileUploadBox">
                    <input
                      type="file"
                      id="files"
                      name="files"
                      className="blind"
                      multiple
                    />

                    <label htmlFor="files" className="fileSelectBtn">
                      파일 선택
                    </label>

                    <span className="fileGuide">선택된 파일 없음</span>
                  </div>

                  <p className="fileInfo">최대 5개, 파일당 10MB</p>
                </div>

              </form>
            </div>

            {/* 하단 버튼 */}
            <div className="formBtnBox">
              <Link to="/board-list" className="btn secondaryBtn">
                목록
              </Link>

              <button type="button" className="btn">
                등록하기
              </button>
            </div>

          </div>
        </div>

      </div>

    </Main>
  );

}