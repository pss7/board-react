import { Link } from "react-router-dom";
import Main from "../components/layout/Main";

export default function BoardUpdatePage() {

  return (
    <Main>

      <div className="contentBox">

        <div className="boardBox">
          <div className="container">

            <h1>게시글 수정</h1>

            {/* 게시글 수정 폼 */}
            <div className="formWrap">
              <form id="boardUpdateForm">

                {/* 카테고리 */}
                <div className="formItem">
                  <label htmlFor="category">카테고리</label>

                  <select
                    id="category"
                    name="category"
                    defaultValue="notice"
                  >
                    <option value="">카테고리 선택</option>
                    <option value="notice">공지사항</option>
                    <option value="free">자유게시판</option>
                  </select>
                </div>

                {/* 제목 */}
                <div className="formItem">
                  <label htmlFor="title">제목</label>

                  <input
                    type="text"
                    id="title"
                    name="title"
                    defaultValue="게시판"
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
                    defaultValue="홍길동"
                    placeholder="작성자를 입력해주세요."
                  />
                </div>

                {/* 내용 */}
                <div className="formItem">
                  <label htmlFor="content">내용</label>

                  <textarea
                    id="content"
                    name="content"
                    defaultValue="게시판"
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
                      accept=".jpg,.jpeg,.png,.pdf,.docx,.xlsx"
                    />

                    <label htmlFor="files" className="fileSelectBtn">
                      파일 선택
                    </label>

                    <span className="fileGuide">
                      선택된 파일 없음
                    </span>
                  </div>

                  <p className="fileInfo">최대 5개, 파일당 10MB</p>

                  {/* 기존 첨부파일 목록 */}
                  <ul className="fileList">
                    <li>
                      <span>sample.jpg</span>
                      <button type="button">삭제</button>
                    </li>

                    <li>
                      <span>document.pdf</span>
                      <button type="button">삭제</button>
                    </li>
                  </ul>
                </div>

              </form>
            </div>

            {/* 하단 버튼 */}
            <div className="formBtnBox right">
              <Link to="/board-list" className="btn secondaryBtn">
                취소
              </Link>

              <button type="button" className="btn">
                수정하기
              </button>
            </div>

          </div>
        </div>
        
      </div>

    </Main>
  );

}