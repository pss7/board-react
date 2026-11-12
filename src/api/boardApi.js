/* 게시글 등록 API */
export async function createBoard(data) {

  const response = await fetch("http://localhost:3001/board", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {

    throw new Error("게시글 등록 실패");

  };

  return response.json();

}

/* 게시글 목록 조회 API */
export async function getBoards() {

  const response = await fetch("http://localhost:3001/board", {
    method: "GET"
  })

  if (!response.ok) {

    throw new Error("게시글 조회 실패");

  };

  return response.json();

}

/* 게시글 상세 조회 API */
export async function getBoard(id) {

  const response = await fetch(`http://localhost:3001/board/${id}`, {
    method: "GET"
  })

  if (!response.ok) {

    throw new Error("게시글 조회 실패");

  };

  return response.json();

}

/* 게시글 수정 API */
export async function updateBoard(id, data) {

  const response = await fetch(`http://localhost:3001/board/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {

    throw new Error("게시글 수정 실패");

  }

  return response.json();

}

/* 게시글 삭제 API */
export async function deleteBoard(id) {

  const response = await fetch(`http://localhost:3001/board/${id}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("게시글 삭제 실패");
  }

  return response.json();

}