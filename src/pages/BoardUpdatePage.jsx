import { Link, useNavigate, useParams } from "react-router-dom";
import Main from "../components/layout/Main";
import { useEffect, useState } from "react";
import { getBoard, updateBoard } from "../api/boardApi";

export default function BoardUpdatePage() {

  /* 페이지 이동 */
  const navigate = useNavigate();

  /* URL 파라미터 */
  const { id } = useParams();

  /* 상태관리 */
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  /* 유효성 검사 */
  function validateForm(data) {

    const newErrors = {};

    if (!data.title.trim()) {
      newErrors.title = "제목을 입력해주세요.";
    }

    if (!data.author.trim()) {
      newErrors.author = "작성자를 입력해주세요.";
    }

    if (!data.content.trim()) {
      newErrors.content = "내용을 입력해주세요.";
    }

    return newErrors;

  }

  /* 입력값 변경 및 실시간 유효성 검사 */
  function handleChange(e) {

    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value
    };

    setFormData(updatedData);

    if (Object.hasOwn(errors, name)) {

      const newErrors = validateForm(updatedData);

      setErrors(function (prev) {
        return {
          ...prev,
          [name]: newErrors[name] || ""
        };
      });

    }

  }

  /* 포커스 해제 시 유효성 검사 */
  function handleBlur(e) {

    const { name } = e.target;

    const newErrors = validateForm(formData);

    setErrors(function (prev) {
      return {
        ...prev,
        [name]: newErrors[name] || ""
      };
    });

  }

  /* 게시글 상세 조회 */
  useEffect(function () {

    async function fetchBoard() {

      try {

        setLoading(true);
        setError("");

        const response = await getBoard(id);

        setFormData(response);

      } catch (error) {

        console.error(error);
        setError("게시글을 불러오지 못했습니다.");

      } finally {

        setLoading(false);

      }

    }

    fetchBoard();

  }, [id]);

  /* 게시글 수정 */
  async function handleSubmit(e) {

    e.preventDefault();

    if (submitting) {
      return;
    }

    const newErrors = validateForm(formData);

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    try {

      setSubmitting(true);

      await updateBoard(id, formData);

      alert("게시글 수정 완료");
      navigate("/board-list");

    } catch (error) {

      console.error(error);
      alert("게시글 수정 실패");

    } finally {

      setSubmitting(false);

    }

  }

  return (
    <Main>

      <div className="contentBox">

        <div className="boardBox">
          <div className="container">

            <h1>게시글 수정</h1>

            {
              loading ? (
                <p>로딩중</p>
              ) : error ? (
                <p>
                  {error}
                </p>
              ) : (
                <>
                  {/* 게시글 수정 폼 */}
                  <div className="formWrap">
                    <form id="boardUpdateForm" onSubmit={handleSubmit}>

                      {/* 제목 */}
                      <div className="formItem">
                        <label htmlFor="title">제목</label>

                        <input
                          type="text"
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="제목을 입력해주세요."
                        />

                        {
                          errors.title && (
                            <p className="errorMessage">
                              {errors.title}
                            </p>
                          )
                        }

                      </div>

                      {/* 작성자 */}
                      <div className="formItem">
                        <label htmlFor="author">작성자</label>

                        <input
                          type="text"
                          id="author"
                          name="author"
                          value={formData.author}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="작성자를 입력해주세요."
                        />

                        {
                          errors.author && (
                            <p className="errorMessage">
                              {errors.author}
                            </p>
                          )
                        }

                      </div>

                      {/* 내용 */}
                      <div className="formItem">
                        <label htmlFor="content">내용</label>

                        <textarea
                          id="content"
                          name="content"
                          value={formData.content}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="내용을 입력해주세요."
                          rows="10"
                        />

                        {
                          errors.content && (
                            <p className="errorMessage">
                              {errors.content}
                            </p>
                          )
                        }

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

                    <button
                      type="submit"
                      className="btn" form="boardUpdateForm"
                      disabled={submitting}
                    >
                      {submitting ? "수정중" : "수정"}
                    </button>
                  </div>
                </>
              )
            }

          </div>
        </div>

      </div>

    </Main>
  );

}