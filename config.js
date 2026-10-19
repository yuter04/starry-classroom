// 별이 빛나는 교실 — 설정 파일
//
// 기본값(firebase: null)이면 설정 없이 바로 작동합니다.
// 학생 태블릿의 그림이 PeerJS 공개 연결 서버를 거쳐 교사 노트북 브라우저로 직접 전송됩니다.
//
// 학교 와이파이에서 그림이 전송되지 않으면 Firebase를 쓰세요(README.md의 "Firebase로 바꾸기" 참고).
// 그때 아래 null 자리에 Firebase 콘솔에서 복사한 설정을 붙여 넣으면 됩니다. 예:
//
// firebase: {
//   apiKey: "AIza...",
//   authDomain: "my-class.firebaseapp.com",
//   databaseURL: "https://my-class-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "my-class",
//   appId: "1:123:web:abc"
// }

window.STARRY_CONFIG = {
  firebase: null
};
