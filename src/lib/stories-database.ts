// ============================================================
// 열매맵 예화 데이터베이스 v2.0
// 카테고리당 10개, 총 150개
// ============================================================

export interface Story {
  title: string;
  content: string;
  point: string;
  style: 'serious' | 'humor' | 'real' | 'korean' | 'everyday';
  best_for: string[];
  age_fit?: 'young' | 'middle' | 'senior' | 'all';
}

export const STORIES: Record<string, Story[]> = {

'건강 문제': [
  { title: '깁스 안의 근육', content: '다리가 부러져 깁스를 하면 근육이 줄어듭니다. 하지만 재활을 하면 오히려 부러지기 전보다 더 강해지기도 합니다. 우리 몸에는 회복 후 더 강해지는 놀라운 능력이 있습니다.', point: '아픔의 시간이 반드시 손실만은 아니다', style: 'serious', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'all' },
  { title: '100세 마라토너', content: '인도의 파우자 싱은 89세에 마라톤을 시작해서 100세에 풀코스를 완주했습니다. 의사들이 불가능하다고 했지만, 그는 "몸이 안 된다고? 아직 해보지도 않았는데"라고 했습니다.', point: '건강의 한계는 생각보다 유연하다', style: 'real', best_for: ['성장가속형', '논리적탐구형'], age_fit: 'all' },
  { title: '느린 요리', content: '좋은 음식은 천천히 만들어집니다. 푹 고은 사골국처럼, 회복도 시간이 필요합니다.', point: '회복에는 시간과 인내가 필요하다', style: 'everyday', best_for: ['핵심압축형', '영적수용형'], age_fit: 'all' },
  { title: '내비게이션 우회', content: '내비가 "전방 정체"라고 하면 돌아가라고 합니다. 짜증나지만 돌아가면 오히려 빨리 도착하기도 합니다. 건강 문제로 잠시 멈추는 것도 인생의 우회도로일 수 있어요.', point: '멈춤이 곧 뒤처짐은 아니다', style: 'everyday', best_for: ['핵심압축형', '성장가속형'], age_fit: 'young' },
  { title: '이순신의 12척', content: '이순신 장군은 남은 배가 12척뿐일 때 명량해전에서 승리했습니다. 중요한 건 남은 것의 숫자가 아니라, 남은 것으로 무엇을 하느냐입니다.', point: '남아있는 건강으로 충분히 가치 있는 일을 할 수 있다', style: 'korean', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: '감기 걸린 스마트폰', content: '스마트폰이 느려지면 재부팅합니다. 잠깐 꺼지지만, 켜지면 더 빨라져요. 우리 몸도 아플 때 쉬는 건 "재부팅"이지 "고장"이 아닙니다.', point: '쉬는 것은 나약함이 아니라 회복 시스템이다', style: 'humor', best_for: ['핵심압축형', '표준양육형'], age_fit: 'young' },
  { title: '도공의 금 수선 (킨츠기)', content: '일본에는 깨진 그릇을 금으로 수선하는 "킨츠기"라는 기법이 있습니다. 깨진 자리가 오히려 가장 아름다운 부분이 됩니다.', point: '상처와 회복의 흔적이 아름다움이 될 수 있다', style: 'serious', best_for: ['돌봄회복형', '영적수용형'], age_fit: 'all' },
  { title: '병원 대기실의 깨달음', content: '병원 대기실에서 기다리면 별생각이 다 듭니다. 평소에 당연했던 것들이 떠올라요. 건강할 때는 몰랐던 감사가, 아플 때 비로소 보이기도 합니다.', point: '아픔이 삶의 우선순위를 다시 정리해준다', style: 'everyday', best_for: ['관계형성우선형', '표준양육형'], age_fit: 'middle' },
  { title: '운동선수의 부상', content: '프로 운동선수 중 부상 후 더 강해져서 돌아온 사례가 많습니다. 재활 과정에서 이전에 몰랐던 약점을 발견하고 보완하기 때문입니다.', point: '부상(질병) 후 회복 과정이 새로운 강점을 만든다', style: 'real', best_for: ['성장가속형', '논리적탐구형'], age_fit: 'young' },
  { title: '할머니의 무릎', content: '비 오기 전에 무릎이 쑤시는 할머니. 실제로 기압 변화를 몸이 먼저 감지하는 겁니다. 몸이 보내는 신호를 무시하지 않는 지혜가 필요합니다.', point: '몸의 신호를 듣는 것이 건강의 시작이다', style: 'korean', best_for: ['관계형성우선형', '돌봄회복형'], age_fit: 'senior' },
],

'가정/가족 갈등': [
  { title: '두 고슴도치', content: '추운 겨울, 고슴도치 두 마리가 온기를 나누려 다가갔지만 가시에 찔렸습니다. 멀어지면 춥고, 가까워지면 아프고. 결국 "적당한 거리"를 찾는 데 오랜 시간이 걸렸습니다.', point: '가까운 관계일수록 적절한 거리 조절이 필요하다', style: 'serious', best_for: ['논리적탐구형', '표준양육형'], age_fit: 'all' },
  { title: '나무의 뿌리', content: '태풍에도 쓰러지지 않는 나무를 보면, 보이지 않는 땅 밑의 뿌리가 서로 엉켜있습니다. 겉으로는 따로 서 있지만 뿌리로 연결되어 있어요.', point: '갈등 속에서도 보이지 않는 연결은 남아있다', style: 'serious', best_for: ['돌봄회복형', '영적수용형'], age_fit: 'all' },
  { title: '비행기 산소마스크', content: '비행기에서 산소마스크가 내려오면 자기 것을 먼저 쓰라고 합니다. 자기가 쓰러지면 옆 사람도 못 살리기 때문입니다.', point: '나 자신을 먼저 돌보는 것은 이기적인 것이 아니다', style: 'everyday', best_for: ['관계형성우선형', '핵심압축형'], age_fit: 'all' },
  { title: '리모컨 전쟁', content: '가족끼리 TV 리모컨 싸움은 채널의 문제가 아니라 "내 의견을 존중해달라"는 신호입니다. 작은 갈등 뒤에는 큰 욕구가 숨어있어요.', point: '표면적 갈등 뒤에는 인정받고 싶은 마음이 있다', style: 'humor', best_for: ['핵심압축형', '표준양육형'], age_fit: 'all' },
  { title: '된장찌개의 비밀', content: '된장찌개는 재료를 다 넣고 바로 먹으면 맛이 없습니다. 끓이면서 재료끼리 맛이 섞여야 해요. 가족도 갈등이라는 "끓임"의 과정을 거쳐야 깊은 맛이 나요.', point: '갈등은 더 깊은 관계로 가는 과정일 수 있다', style: 'korean', best_for: ['돌봄회복형', '영적수용형'], age_fit: 'middle' },
  { title: '카톡 읽씹의 오해', content: '엄마가 카톡을 읽고 답을 안 합니다. 나중에 보니 답장을 쓰다가 전화가 오는 바람에 까먹은 거였어요. 가족 간 오해의 80%는 "악의"가 아니라 "부주의"입니다.', point: '가족 갈등의 대부분은 악의가 아니라 소통 부재', style: 'everyday', best_for: ['핵심압축형', '논리적탐구형'], age_fit: 'young' },
  { title: '이사 가는 날', content: '이사할 때 짐을 싸보면, 안 쓰는 물건이 절반입니다. 가족 관계에서도 "이건 꼭 싸워야 할 문제인가?"를 따져보면, 대부분은 놓아도 되는 것들입니다.', point: '모든 갈등이 다 싸울 가치가 있는 건 아니다', style: 'everyday', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: '흥부와 놀부의 진짜 교훈', content: '놀부가 나쁜 사람 같지만, 장남으로서 가문을 지켜야 한다는 부담이 있었을 수도 있습니다. 가족 갈등에서 "나쁜 사람"은 없고, 각자의 사정이 있을 뿐입니다.', point: '상대방에게도 나름의 이유가 있다', style: 'korean', best_for: ['관계형성우선형', '표준양육형'], age_fit: 'all' },
  { title: '톱니바퀴', content: '시계 안에 톱니바퀴들은 서로 반대 방향으로 돌아갑니다. 하지만 그 반대 움직임이 합쳐져서 정확한 시간을 만듭니다.', point: '다름은 대립이 아니라 보완이 될 수 있다', style: 'serious', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: '명절 생존기', content: '한국에서 명절은 "가족 사랑의 날"이 아니라 "가족 서바이벌"입니다. 완벽한 가족은 드라마에만 있습니다.', point: '완벽한 가족은 없다 — 불완전함이 정상이다', style: 'humor', best_for: ['핵심압축형', '관계형성우선형'], age_fit: 'all' },
],

'경제적 어려움': [
  { title: '대나무의 4년', content: '중국 대나무는 심은 후 4년간 아무 변화가 없습니다. 하지만 5년째 6주 만에 25미터까지 자랍니다. 4년간 뿌리를 내리고 있었기 때문입니다.', point: '지금 안 보이는 시간이 낭비가 아닐 수 있다', style: 'serious', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'all' },
  { title: '리셋 버튼', content: '게임에서 잘 안 풀릴 때 리셋하면 처음부터 다시 할 수 있습니다. 이전 판에서 배운 패턴은 남아있어요.', point: '실패의 경험은 다음의 자산이 된다', style: 'everyday', best_for: ['성장가속형', '핵심압축형'], age_fit: 'young' },
  { title: '월급과 행복', content: '연봉이 2배가 되어도 행복감은 1.1배밖에 안 올라간다는 연구가 있습니다.', point: '돈과 행복은 비례하지 않는다', style: 'real', best_for: ['논리적탐구형', '표준양육형'], age_fit: 'all' },
  { title: '라면의 경제학', content: '라면 한 봉지가 500원이지만 비 오는 날 먹는 라면의 행복감은 5만 원짜리 스테이크 못지않습니다.', point: '적은 돈으로도 충분한 행복은 가능하다', style: 'korean', best_for: ['핵심압축형', '관계형성우선형'], age_fit: 'all' },
  { title: '정주영의 소', content: '정주영 회장은 소를 담보로 잡혀서 사업 자금을 마련했습니다. 누구나 처음은 초라합니다.', point: '위대한 시작은 대부분 초라하다', style: 'korean', best_for: ['성장가속형', '논리적탐구형'], age_fit: 'middle' },
  { title: '지갑과 마음', content: '지갑이 얇아지면 마음도 같이 얇아지는 느낌이 듭니다. 하지만 돈이 줄어든 것이지 당신의 가치가 줄어든 게 아닙니다.', point: '경제적 상황이 인간적 가치를 결정하지 않는다', style: 'serious', best_for: ['돌봄회복형', '영적수용형'], age_fit: 'all' },
  { title: '편의점 알바의 CEO', content: '유니클로 창업자 야나이 다다시는 아버지의 작은 양복점에서 시작했고, 수차례 실패했습니다.', point: '경제적 실패는 최종 결과가 아니라 과정이다', style: 'real', best_for: ['성장가속형', '논리적탐구형'], age_fit: 'young' },
  { title: '배달앱 별점', content: '배달앱에서 별점 4.5인 가게가 5.0보다 믿음직합니다. 나쁜 리뷰를 겪고도 살아남았다는 뜻이니까요.', point: '위기를 겪고 살아남은 것이 강점이다', style: 'humor', best_for: ['핵심압축형', '표준양육형'], age_fit: 'young' },
  { title: '겨울 논', content: '겨울에 논은 텅 비어 있지만, 땅은 쉬면서 영양분을 회복하고 있습니다. 봄이 오면 다시 풍성해집니다.', point: '경제적 겨울도 회복을 위한 시간이다', style: 'korean', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'senior' },
  { title: '월세와 전세', content: '월세는 매달 나가지만 부담이 작고, 전세는 한 번에 크지만 돌려받습니다. 지금 매달 조금씩 힘든 건, 나중에 한꺼번에 무너지는 것보다 나을 수 있습니다.', point: '지금의 작은 어려움이 미래의 큰 위기를 막아준다', style: 'everyday', best_for: ['논리적탐구형', '표준양육형'], age_fit: 'middle' },
],

'직장/진로 고민': [
  { title: '미싱 타일 증후군', content: '천장에 타일이 100개 있으면 99개가 있어도 빠진 1개가 눈에 들어옵니다.', point: '부정적인 것에 집중하는 건 자연스러운 것이다', style: 'real', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: 'GPS 재탐색', content: '네비가 길을 잘못 안내하면 "재탐색 중"이라고 뜹니다. 진로도 마찬가지예요.', point: '방향 전환은 실패가 아니라 재탐색이다', style: 'everyday', best_for: ['핵심압축형', '표준양육형'], age_fit: 'all' },
  { title: '도자기와 용광로', content: '도자기가 아름다워지려면 1200도의 가마를 통과해야 합니다.', point: '힘든 과정이 나를 단련시키고 있을 수 있다', style: 'serious', best_for: ['돌봄회복형', '영적수용형'], age_fit: 'all' },
  { title: '월요병의 진짜 의미', content: '월요일이 싫은 건 게으른 게 아닙니다. "지금 하는 일이 내 삶과 맞지 않을 수 있다"는 신호입니다.', point: '불편함은 변화가 필요하다는 신호다', style: 'everyday', best_for: ['핵심압축형', '성장가속형'], age_fit: 'young' },
  { title: '짜장면 배달부 엄복동', content: '한국 최초의 사이클 영웅 엄복동은 원래 짜장면 배달부였습니다. 배달하면서 다리 근육이 생겼고, 그게 챔피언의 시작이었습니다.', point: '지금 하는 일이 예상치 못한 미래를 열 수 있다', style: 'korean', best_for: ['관계형성우선형', '표준양육형'], age_fit: 'all' },
  { title: '이력서의 공백', content: '이력서 공백 기간이 불안하지만, 실제 면접에서는 "그 시간에 무엇을 했나"가 더 중요합니다.', point: '공백은 채워넣기 나름이다', style: 'everyday', best_for: ['핵심압축형', '논리적탐구형'], age_fit: 'young' },
  { title: '잡스의 서체 수업', content: '스티브 잡스는 대학 자퇴 후 서체 수업만 들었습니다. 10년 후 맥의 아름다운 폰트가 되었습니다.', point: '경험은 나중에 예상치 못한 방식으로 연결된다', style: 'real', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'young' },
  { title: '택시 기사의 지식', content: '런던 택시 기사는 2만 개의 길을 외워야 합니다. 뇌 스캔을 해보니 해마가 일반인보다 훨씬 컸습니다.', point: '어떤 일이든 깊이 하면 전문성이 생긴다', style: 'real', best_for: ['논리적탐구형', '표준양육형'], age_fit: 'all' },
  { title: '퇴사 후회 타이머', content: '연구에 따르면 퇴사를 후회하는 비율은 6개월 후 15% 미만입니다. 85%는 "더 빨리 나올 걸"이라고 합니다.', point: '변화에 대한 두려움은 대부분 과대평가된다', style: 'real', best_for: ['핵심압축형', '성장가속형'], age_fit: 'middle' },
  { title: '전화위복', content: '전화위복(轉禍爲福). 화가 바뀌어 복이 된다. 한국인이 좋아하는 이유가 있어요. 실제로 경험해본 사람이 많기 때문입니다.', point: '위기가 기회로 바뀐 경험은 누구에게나 있다', style: 'korean', best_for: ['관계형성우선형', '돌봄회복형'], age_fit: 'senior' },
],

'대인관계 어려움': [
  { title: '거울의 법칙', content: '상대가 거슬리는 이유가 나와 비슷하기 때문인 경우가 많아요. 불편한 사람이 거울일 수 있습니다.', point: '관계의 어려움은 자기 이해의 기회', style: 'serious', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: '토마토 밭의 교훈', content: '모든 잡초를 뽑으려 하면 토마토 뿌리도 상합니다.', point: '모든 관계를 다 잘 유지할 필요는 없다', style: 'serious', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'all' },
  { title: '다리 놓기', content: '다리를 놓을 때 양쪽에서 동시에 공사해야 합니다. 내가 노력해도 상대가 움직이지 않으면, 그건 내 탓이 아닙니다.', point: '관계는 혼자 만드는 것이 아니다', style: 'serious', best_for: ['핵심압축형', '표준양육형'], age_fit: 'all' },
  { title: '단톡방 퇴장', content: '단톡방을 나가면 처음엔 불안하지만, 3일 지나면 편안합니다.', point: '관계 정리는 손실이 아니라 집중이다', style: 'everyday', best_for: ['핵심압축형', '성장가속형'], age_fit: 'young' },
  { title: '이웃집 소음', content: '윗집 소음에 화가 나서 올라갔더니, 아이가 처음 걸음마를 하고 있었습니다.', point: '상대의 사정을 알면 감정이 바뀐다', style: 'everyday', best_for: ['관계형성우선형', '표준양육형'], age_fit: 'all' },
  { title: '투명인간 실험', content: '심리실험에서 무시당한 사람의 뇌에서 실제 물리적 고통과 같은 영역이 활성화되었습니다.', point: '사회적 배제는 실제 고통이다', style: 'real', best_for: ['논리적탐구형', '돌봄회복형'], age_fit: 'all' },
  { title: '장기판의 졸', content: '장기에서 졸은 약해 보이지만 절대 뒤로 못 갑니다. 앞으로만 갑니다.', point: '때로는 앞으로 가는 것만이 답이다', style: 'korean', best_for: ['핵심압축형', '성장가속형'], age_fit: 'all' },
  { title: '5명의 법칙', content: '"당신은 가장 많이 만나는 5명의 평균이다." 100명과 잘 지내는 것보다 좋은 5명을 잘 만나는 게 인생을 바꿉니다.', point: '관계의 양보다 질이 중요하다', style: 'real', best_for: ['성장가속형', '논리적탐구형'], age_fit: 'young' },
  { title: '세종대왕의 신하', content: '세종대왕은 자신에게 직언하는 신하를 가장 아꼈습니다.', point: '불편한 관계가 나를 성장시킬 수 있다', style: 'korean', best_for: ['성장가속형', '논리적탐구형'], age_fit: 'all' },
  { title: '와이파이 비밀번호', content: '카페에서 와이파이 비밀번호를 물어보면 연결됩니다. 먼저 다가가서 마음을 물어보는 용기가 연결의 시작입니다.', point: '먼저 다가가는 용기가 관계의 시작이다', style: 'humor', best_for: ['관계형성우선형', '돌봄회복형'], age_fit: 'young' },
],

'외로움/고독': [
  { title: '등대지기', content: '등대지기는 홀로 바다를 지킵니다. 외롭지만, 그의 불빛 덕분에 수많은 배가 안전하게 항구에 도착합니다.', point: '외로움 속에서도 나의 존재는 누군가에게 의미가 있다', style: 'serious', best_for: ['돌봄회복형', '영적수용형'], age_fit: 'all' },
  { title: '혼밥의 재발견', content: '"선택된 고독"은 창의성과 자기이해를 높인다는 연구가 있습니다. 문제는 고독 자체가 아니라 "원하지 않는 고립"입니다.', point: '고독과 고립은 다르다', style: 'real', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: '1인 가구 600만', content: '한국의 1인 가구는 600만을 넘었습니다. 혼자 사는 게 특별한 게 아니라 시대의 모습이에요.', point: '혼자인 것과 외로운 것은 다른 문제다', style: 'korean', best_for: ['논리적탐구형', '핵심압축형'], age_fit: 'all' },
  { title: '별과 별 사이', content: '밤하늘의 별들은 수십 광년 떨어져 있지만 별자리라는 그림으로 보입니다. 지금은 멀리 있어도 큰 그림에서는 연결되어 있을 수 있어요.', point: '떨어져 있어도 연결은 존재한다', style: 'serious', best_for: ['영적수용형', '돌봄회복형'], age_fit: 'all' },
  { title: '배달 올 때 초인종', content: '혼자 있다가 배달 초인종이 울리면 괜히 반갑습니다. 큰 관계가 아니어도 작은 연결이 외로움을 줄여줍니다.', point: '아주 작은 연결도 외로움을 줄여준다', style: 'everyday', best_for: ['핵심압축형', '관계형성우선형'], age_fit: 'young' },
  { title: '나 혼자 산다의 인기', content: '혼자 사는 사람들의 일상이 "별거 아니지만 공감되기" 때문에 인기입니다. 외로움을 나누는 것만으로도 덜 외로워집니다.', point: '외로움을 나누는 것 자체가 치유다', style: 'korean', best_for: ['관계형성우선형', '표준양육형'], age_fit: 'all' },
  { title: '고양이의 독립', content: '고양이는 혼자 있는 걸 좋아하는 것 같지만, 집사가 돌아오면 문 앞에서 기다립니다.', point: '독립적인 사람도 연결을 원한다', style: 'humor', best_for: ['핵심압축형', '논리적탐구형'], age_fit: 'young' },
  { title: 'SNS의 역설', content: 'SNS에서 "좋아요"를 많이 받아도 외로운 사람이 있고, 팔로워가 없어도 행복한 사람이 있습니다.', point: '진짜 연결은 숫자가 아니라 깊이다', style: 'everyday', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'young' },
  { title: '정약용의 유배', content: '정약용은 18년간 유배 생활에서 500권이 넘는 책을 썼습니다.', point: '외로움의 시간이 가장 깊은 성장의 시간이 될 수 있다', style: 'korean', best_for: ['성장가속형', '영적수용형'], age_fit: 'all' },
  { title: '빈 벤치', content: '공원에 빈 벤치가 있으면 양쪽 끝에 앉습니다. 하지만 "여기 앉아도 될까요?"라고 물으면 대부분 "네"라고 합니다.', point: '연결은 기다리는 것이 아니라 먼저 말을 거는 것이다', style: 'everyday', best_for: ['관계형성우선형', '표준양육형'], age_fit: 'all' },
],

'불안/두려움': [
  { title: '걱정 인형', content: '과테말라에는 잠자기 전에 인형에게 걱정을 말하고 베개 밑에 넣는 풍습이 있습니다. 걱정을 꺼내놓는 행위 자체가 불안을 줄여줍니다.', point: '걱정을 말로 꺼내는 것만으로 불안이 줄어든다', style: 'serious', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'all' },
  { title: '불안의 97%', content: '펜실베니아대 연구에 따르면, 걱정하는 일의 97%는 실제로 일어나지 않았습니다.', point: '걱정의 대부분은 현실이 되지 않는다', style: 'real', best_for: ['논리적탐구형', '핵심압축형'], age_fit: 'all' },
  { title: '놀이기구 줄', content: '놀이기구 타기 전 줄에서 기다리는 게 제일 무섭습니다. 막상 타면 "이거였어?" 싶을 때가 많아요.', point: '불안은 실제 경험보다 예상에서 더 크다', style: 'everyday', best_for: ['핵심압축형', '성장가속형'], age_fit: 'young' },
  { title: '소방관의 비밀', content: '소방관도 불이 무섭다고 합니다. 하지만 "무서워도 들어가는 훈련"을 합니다.', point: '용기는 두려움의 부재가 아니라 두려움 속의 행동이다', style: 'real', best_for: ['성장가속형', '논리적탐구형'], age_fit: 'all' },
  { title: '자동차 백미러', content: '"Objects in mirror are closer than they appear." 불안도 실제보다 크게 보이는 거울을 보고 있는 겁니다.', point: '불안은 확대경을 통해 본 현실이다', style: 'everyday', best_for: ['논리적탐구형', '표준양육형'], age_fit: 'all' },
  { title: '무서운 영화의 원리', content: '공포영화에서 가장 무서운 장면은 귀신이 나오는 순간이 아니라 "나올 것 같은" 순간입니다.', point: '불안의 본질은 상상이다', style: 'humor', best_for: ['핵심압축형', '관계형성우선형'], age_fit: 'young' },
  { title: '이순신의 일기', content: '난중일기를 보면 "두렵다", "잠을 못 잤다"는 기록이 많습니다. 영웅도 불안했습니다.', point: '위대한 사람도 불안을 느낀다', style: 'korean', best_for: ['돌봄회복형', '영적수용형'], age_fit: 'all' },
  { title: '와이파이 불안', content: '와이파이가 끊기면 갑자기 불안해집니다. 10년 전엔 없어도 잘 살았는데요.', point: '불안은 기대와 현실의 간극에서 온다', style: 'humor', best_for: ['핵심압축형', '표준양육형'], age_fit: 'young' },
  { title: '심호흡의 과학', content: '4초 들이쉬고, 7초 참고, 8초 내쉬는 "4-7-8 호흡법"을 하면 교감신경이 부교감신경으로 전환됩니다.', point: '불안은 생각보다 몸으로 다스릴 수 있다', style: 'real', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: '엄마의 손', content: '어릴 때 무서우면 엄마 손을 잡았습니다. 손을 잡는다고 귀신이 사라지는 건 아니지만, 무섭지 않아졌어요.', point: '불안을 없앨 순 없지만 함께하면 견딜 수 있다', style: 'everyday', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'all' },
],

'삶의 의미/방향': [
  { title: '빅터 프랭클', content: '강제수용소에서도 삶의 의미를 찾은 사람이 살아남았다고 했습니다. 상황이 아니라 "의미"가 사람을 버티게 합니다.', point: '환경이 아닌 의미가 삶을 지탱한다', style: 'real', best_for: ['논리적탐구형', '영적수용형'], age_fit: 'all' },
  { title: '점 잇기', content: '스티브 잡스는 "앞을 보고는 점을 이을 수 없다. 뒤를 돌아볼 때만 이어진다"고 했습니다.', point: '지금은 보이지 않는 의미가 나중에 드러날 수 있다', style: 'real', best_for: ['성장가속형', '표준양육형'], age_fit: 'all' },
  { title: '퍼즐 한 조각', content: '퍼즐 한 조각만 보면 무슨 그림인지 모릅니다. 완성되면 그 조각이 왜 거기 있어야 했는지 알게 됩니다.', point: '전체 그림을 모른다고 내 조각이 의미 없는 것은 아니다', style: 'serious', best_for: ['돌봄회복형', '영적수용형'], age_fit: 'all' },
  { title: '터널과 빛', content: '터널이 존재한다는 것은 반대편에 출구가 있다는 뜻입니다. 누군가 뚫어놓은 거니까요.', point: '지금 어둡다면 터널 안이라는 뜻이다 — 출구가 있다', style: 'serious', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'all' },
  { title: '인생 2회차 소설', content: '회귀 소설의 주인공이 하는 일은 거창한 게 아니라 "작은 선택"을 바꾸는 것입니다.', point: '삶의 방향은 작은 선택에서 바뀐다', style: 'korean', best_for: ['핵심압축형', '성장가속형'], age_fit: 'young' },
  { title: '나침반과 시계', content: '시계는 "지금 몇 시"를, 나침반은 "어디로 가야 하는지"를 알려줍니다. 바쁘게 사는 건 시계만 보는 것이고, 의미를 찾는 건 나침반을 보는 것입니다.', point: '바쁘게 사는 것과 의미 있게 사는 것은 다르다', style: 'serious', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: '40대의 질문', content: '20대는 "뭘 할까", 30대는 "잘하고 있나", 40대는 "이게 맞나"를 고민합니다. 연령마다 다른 질문이 자연스럽습니다.', point: '삶의 의미를 묻는 것은 자연스러운 과정이다', style: 'everyday', best_for: ['표준양육형', '관계형성우선형'], age_fit: 'middle' },
  { title: '빈 컵', content: '찻잔이 가득 차 있으면 새로운 차를 부을 수 없습니다. 삶이 공허하다고 느끼는 건, 새로운 것을 담을 준비가 되었다는 뜻일 수 있습니다.', point: '공허함은 새로운 것을 담을 공간이다', style: 'serious', best_for: ['영적수용형', '돌봄회복형'], age_fit: 'all' },
  { title: '유서 쓰기 실험', content: '어떤 대학에서 "가상 유서 쓰기" 수업을 합니다. 죽기 전에 뭘 남기고 싶은지 적어보면, 진짜 중요한 것이 선명해진다고 합니다.', point: '끝을 상상하면 지금 뭐가 중요한지 보인다', style: 'real', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: '윤동주의 별', content: '윤동주는 하나하나의 별에 이름을 불렀습니다. 의미는 작은 것에 이름을 붙이고 관심을 기울이는 데서 시작됩니다.', point: '의미는 발견하는 것이지 만드는 것이 아닐 수 있다', style: 'korean', best_for: ['영적수용형', '돌봄회복형'], age_fit: 'all' },
],

'자녀 교육': [
  { title: '숲의 교육법', content: '핀란드 숲유치원에서는 정해진 커리큘럼 없이 숲에서 놀게 합니다. 이 아이들이 학업 성취도가 더 높습니다.', point: '부모의 역할은 가르치기보다 환경을 만들어주는 것', style: 'real', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: '씨앗의 시간표', content: '같은 날 심은 씨앗도 꽃이 피는 시기는 다릅니다. 꽃이 늦게 핀다고 나쁜 꽃이 아닙니다.', point: '아이의 성장 속도는 모두 다르다', style: 'serious', best_for: ['돌봄회복형', '표준양육형'], age_fit: 'all' },
  { title: '독수리와 닭', content: '독수리 알을 닭둥지에 넣으면 닭처럼 행동하지만, 하늘을 보면 날고 싶어합니다.', point: '아이의 타고난 성향을 파악하는 것이 먼저', style: 'serious', best_for: ['영적수용형', '성장가속형'], age_fit: 'all' },
  { title: '아이의 그림', content: '아이가 그린 하늘이 초록색이면 틀린 걸까요? "틀렸어"보다 "왜 그렇게 그렸어?"가 더 좋은 질문입니다.', point: '아이의 세계를 존중하는 것이 교육의 기본', style: 'everyday', best_for: ['관계형성우선형', '표준양육형'], age_fit: 'all' },
  { title: '하브루타', content: '유대인 교육법 하브루타는 답을 가르치는 것이 아니라 질문하는 법을 가르칩니다.', point: '가르치기보다 질문하기가 더 좋은 교육', style: 'real', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: '엄마의 사전', content: '"공부해"는 100번 말해도 안 듣는데, "같이 하자"는 한 번에 듣습니다.', point: '함께하는 것이 시키는 것보다 효과적', style: 'korean', best_for: ['관계형성우선형', '돌봄회복형'], age_fit: 'all' },
  { title: '게임의 레벨', content: '아이가 게임에 빠지는 건 즉각적 보상 때문입니다. 공부에서도 작은 성취→즉각 인정 사이클을 만들어주면 됩니다.', point: '동기부여의 핵심은 즉각적 보상', style: 'everyday', best_for: ['핵심압축형', '논리적탐구형'], age_fit: 'all' },
  { title: '대나무 숲의 비밀', content: '대나무 숲에서 하나만 자르면 주변도 약해집니다. 뿌리가 연결되어 있기 때문입니다.', point: '가족은 연결된 시스템이다', style: 'serious', best_for: ['돌봄회복형', '표준양육형'], age_fit: 'all' },
  { title: '90점의 행복', content: '100점에는 "잘했어", 90점에는 "10점은 왜 틀렸어?" 90점의 노력을 먼저 인정해주는 것이 자존감을 지킵니다.', point: '결과보다 과정을 인정하기', style: 'korean', best_for: ['핵심압축형', '표준양육형'], age_fit: 'all' },
  { title: '삼촌 효과', content: '부모가 아닌 제3의 어른이 아이에게 큰 영향을 미칩니다. 모든 걸 부모 혼자 할 필요 없어요.', point: '부모 혼자 모든 것을 감당할 필요 없다', style: 'real', best_for: ['관계형성우선형', '돌봄회복형'], age_fit: 'all' },
],

'부부 관계': [
  { title: '두 사전', content: '같은 단어를 써도 남편과 아내의 사전은 다릅니다. 대부분의 부부 갈등은 "번역 실패"입니다.', point: '갈등의 대부분은 번역 실패', style: 'serious', best_for: ['논리적탐구형', '표준양육형'], age_fit: 'all' },
  { title: '정원사의 마음', content: '정원사는 꽃이 안 핀다고 뽑지 않습니다. 물을 주고 기다립니다.', point: '사랑은 감정이 아니라 돌봄이다', style: 'serious', best_for: ['돌봄회복형', '영적수용형'], age_fit: 'all' },
  { title: '5:1 법칙', content: '존 가트만 박사는 행복한 부부의 비결이 긍정:부정 비율 5:1이라고 합니다.', point: '비판보다 5배 많은 긍정이 관계를 유지한다', style: 'real', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: '주차장의 양보', content: '좁은 주차장에서 서로 먼저 가려 하면 둘 다 못 나갑니다.', point: '양보는 지는 것이 아니라 길을 여는 것', style: 'everyday', best_for: ['핵심압축형', '표준양육형'], age_fit: 'all' },
  { title: '결혼기념일 실험', content: '기념일 자체보다 "일상적 감사 표현"이 결혼 만족도에 더 영향을 미칩니다.', point: '일상의 작은 감사가 특별한 이벤트보다 중요', style: 'real', best_for: ['논리적탐구형', '핵심압축형'], age_fit: 'all' },
  { title: '리모델링', content: '오래된 집을 부수고 새로 짓는 것보다, 리모델링이 더 가치 있을 때가 많습니다.', point: '새로 시작하는 것보다 고쳐가는 게 더 가치 있을 수 있다', style: 'everyday', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'middle' },
  { title: '등산의 법칙', content: '등산에서 가장 위험한 건 올라갈 때가 아니라 내려올 때입니다. 결혼도 일상을 잘 걷는 게 진짜 실력입니다.', point: '결혼의 진짜 실력은 일상을 함께 걷는 것', style: 'everyday', best_for: ['성장가속형', '표준양육형'], age_fit: 'all' },
  { title: '반찬 투정의 진짜 의미', content: '남편의 반찬 투정은 "오늘 직장에서 힘들었는데 위로받고 싶다"는 엉뚱한 표현일 수 있어요.', point: '표면의 불만 뒤에 진짜 욕구가 숨어있다', style: 'korean', best_for: ['관계형성우선형', '돌봄회복형'], age_fit: 'all' },
  { title: '화해의 골든타임', content: '부부 싸움 후 화해의 골든타임은 20분입니다. 20분이 지나면 감정이 굳어집니다.', point: '화해는 빠를수록 효과적', style: 'real', best_for: ['핵심압축형', '성장가속형'], age_fit: 'all' },
  { title: '커플 벤치', content: '이탈리아 마테라에는 앉으면 자연스럽게 서로를 향하게 설계된 벤치가 있습니다. 환경을 바꾸면 관계도 바뀔 수 있습니다.', point: '관계를 바꾸고 싶으면 환경부터 바꿔보기', style: 'real', best_for: ['논리적탐구형', '영적수용형'], age_fit: 'all' },
],

'중독': [
  { title: '늪과 밧줄', content: '늪에 빠진 사람이 혼자 나오려고 발버둥 칠수록 더 깊이 빠집니다. 밖에서 밧줄을 던져줘야 합니다.', point: '도움을 요청하는 것이 가장 강한 의지', style: 'serious', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'all' },
  { title: '뇌의 하이재킹', content: '중독은 뇌의 보상 회로가 "납치"된 것입니다. 의지력의 문제가 아니라 뇌 과학의 문제입니다.', point: '중독은 의지가 아닌 뇌의 문제', style: 'real', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: 'AA의 12단계', content: '익명의 알코올중독자 모임의 첫 단계는 "나 혼자 힘으로 안 된다"를 인정하는 것입니다.', point: '인정이 회복의 첫걸음', style: 'real', best_for: ['돌봄회복형', '표준양육형'], age_fit: 'all' },
  { title: '얼음 위의 균열', content: '얼음에 균열이 한 줄 생기면 무시하지만, 점점 퍼지면 결국 깨집니다.', point: '작은 습관을 가볍게 여기지 않기', style: 'serious', best_for: ['핵심압축형', '논리적탐구형'], age_fit: 'all' },
  { title: '대체 보상', content: '"하지 마"가 아니라 "대신 이걸 해"가 효과적입니다. 뇌가 원하는 건 특정 물질이 아니라 "보상감"입니다.', point: '금지보다 대체가 효과적', style: 'real', best_for: ['성장가속형', '논리적탐구형'], age_fit: 'all' },
  { title: '러닝머신', content: '러닝머신 위에서는 아무리 뛰어도 제자리입니다. 멈추고 내려오는 것이 첫 번째입니다.', point: '같은 패턴을 반복하면 변화가 없다', style: 'everyday', best_for: ['핵심압축형', '표준양육형'], age_fit: 'all' },
  { title: '물속의 개구리', content: '서서히 끓이면 빠져나오지 못합니다. 자각하는 것 자체가 이미 빠져나오는 시작입니다.', point: '자각이 회복의 시작', style: 'serious', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'all' },
  { title: '스마트폰 사용시간', content: '하루 5시간이면 1년에 76일, 깨어있는 시간의 1/3입니다.', point: '객관적 수치가 자각을 돕는다', style: 'everyday', best_for: ['논리적탐구형', '핵심압축형'], age_fit: 'young' },
  { title: '항해사의 닻', content: '배가 표류하지 않으려면 닻이 필요합니다. 중독에서 벗어나려면 나를 붙잡아줄 "닻"이 필요합니다.', point: '혼자 버티지 말고 닻을 만들기', style: 'serious', best_for: ['돌봄회복형', '영적수용형'], age_fit: 'all' },
  { title: '재발은 실패가 아니다', content: '중독 치료 재발률은 40~60%. 당뇨병 재발률과 비슷합니다. 재발은 "만성 질환의 특성"입니다.', point: '재발해도 포기할 필요 없다', style: 'real', best_for: ['성장가속형', '표준양육형'], age_fit: 'all' },
],

'상실/슬픔': [
  { title: '빈 의자', content: '빈 의자가 사라지는 것이 아니라, 시간이 지나면 그 옆에 다른 의자들이 놓입니다.', point: '상실을 채울 순 없지만, 옆에 새로운 것이 놓인다', style: 'serious', best_for: ['돌봄회복형', '영적수용형'], age_fit: 'all' },
  { title: '파도의 비유', content: '슬픔은 파도 같습니다. 처음엔 계속 밀려오지만 시간이 지나면 간격이 넓어집니다.', point: '슬픔은 사라지지 않지만 간격이 넓어진다', style: 'serious', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'all' },
  { title: '사진첩', content: '사진첩을 보면 웃게 되는 날이 옵니다. 그때가 되면 슬픔이 추억으로 바뀌기 시작한 것입니다.', point: '슬픔이 추억으로 바뀌는 시간은 사람마다 다르다', style: 'everyday', best_for: ['표준양육형', '핵심압축형'], age_fit: 'all' },
  { title: '나무의 나이테', content: '나이테 중 가장 좁은 해는 가뭄이 심했던 해입니다. 하지만 나이테가 있다는 건 그 해를 버텨냈다는 뜻입니다.', point: '힘든 시간을 버텨낸 것이 성장의 증거', style: 'serious', best_for: ['성장가속형', '논리적탐구형'], age_fit: 'all' },
  { title: '빈방의 불', content: '떠난 사람의 방 불을 한동안 끄지 못하는 가족이 있습니다. 불을 끄는 건 잊는 게 아니라 새로운 방식으로 기억하는 것입니다.', point: '놓아주는 것은 잊는 것이 아니라 새로운 기억 방식', style: 'everyday', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'senior' },
  { title: '벚꽃의 의미', content: '벚꽃이 아름다운 이유는 피어있는 시간이 짧기 때문입니다.', point: '유한하기에 더 소중하다', style: 'korean', best_for: ['영적수용형', '논리적탐구형'], age_fit: 'all' },
  { title: '함께 울기', content: '상실을 겪은 사람에게 가장 도움이 된 건 "좋은 말"이 아니라 "함께 울어준 사람"이었다는 연구가 있습니다.', point: '말보다 함께 있어주는 것이 위로', style: 'real', best_for: ['관계형성우선형', '돌봄회복형'], age_fit: 'all' },
  { title: '꽃이 지는 이유', content: '꽃이 지는 건 끝이 아니라 열매를 맺기 위해서입니다.', point: '끝남 뒤에도 남겨진 것이 있다', style: 'serious', best_for: ['영적수용형', '표준양육형'], age_fit: 'all' },
  { title: '오래된 시계', content: '돌아가신 할아버지의 시계가 멈춰 있어도 버리지 않습니다. 시간은 멈췄지만 추억은 멈추지 않기 때문입니다.', point: '멈춘 것처럼 보여도 기억은 계속된다', style: 'korean', best_for: ['관계형성우선형', '돌봄회복형'], age_fit: 'senior' },
  { title: '그리움의 무게', content: '그리움은 무거운 짐 같지만, 그 무게는 사랑의 크기와 같습니다.', point: '그리움의 크기 = 사랑의 크기', style: 'serious', best_for: ['돌봄회복형', '영적수용형'], age_fit: 'all' },
],

'분노/감정조절': [
  { title: '압력솥', content: '압력솥은 증기를 조절하는 밸브가 있습니다. 밸브가 막히면 폭발합니다.', point: '분노 자체가 문제가 아니라 표현 방법이 문제', style: 'serious', best_for: ['논리적탐구형', '핵심압축형'], age_fit: 'all' },
  { title: '얼음과 물', content: '물과 얼음은 같은 것입니다. 온도만 다를 뿐. 분노와 슬픔도 마찬가지예요.', point: '분노 아래에는 슬픔이나 상처가 있다', style: 'serious', best_for: ['돌봄회복형', '영적수용형'], age_fit: 'all' },
  { title: '6초 법칙', content: '화가 나면 아드레날린이 분비되는데 6초면 사라집니다. 6초만 참으면 후회할 말을 피할 수 있습니다.', point: '6초가 후회를 막는다', style: 'real', best_for: ['핵심압축형', '성장가속형'], age_fit: 'all' },
  { title: '풍선 비유', content: '풍선에 바람을 계속 넣으면 터집니다. 조금씩 빼주면 안 터져요.', point: '분노는 쌓기 전에 조금씩 표현하기', style: 'everyday', best_for: ['관계형성우선형', '표준양육형'], age_fit: 'all' },
  { title: '일기 쓰기 효과', content: '분노를 글로 쓰면 뇌의 전두엽이 활성화되어 감정이 조절됩니다.', point: '글로 쓰는 것만으로도 분노가 줄어든다', style: 'real', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: '빨간 신호등', content: '신호등이 빨간 건 "멈춰라"가 아니라 "잠깐 기다려라"입니다.', point: '분노는 잠깐 기다리라는 신호', style: 'everyday', best_for: ['핵심압축형', '표준양육형'], age_fit: 'all' },
  { title: '주먹밥과 폭탄', content: '같은 손으로 주먹을 쥐면 폭탄이 되고, 밥을 쥐면 주먹밥이 됩니다.', point: '분노 에너지를 건설적으로 사용할 수 있다', style: 'humor', best_for: ['성장가속형', '핵심압축형'], age_fit: 'all' },
  { title: '이봉창의 분노', content: '이봉창은 식민지 현실에 분노했지만, 그 분노를 저항으로 승화시켰습니다.', point: '분노가 방향을 찾으면 변화의 동력이 된다', style: 'korean', best_for: ['성장가속형', '논리적탐구형'], age_fit: 'all' },
  { title: '컵에 물 채우기', content: '컵을 들고 있으면 처음엔 가볍지만 1시간 지나면 팔이 아파집니다. 물의 무게가 변한 게 아니라 들고 있는 시간이 문제입니다.', point: '분노를 계속 들고 있으면 자신이 아프다', style: 'serious', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'all' },
  { title: '화난 이메일', content: '화가 나서 이메일을 쓰되, 보내지 말고 임시보관함에 넣으세요. 다음 날 80%는 보내지 않습니다.', point: '즉각 반응 대신 하루 기다리기', style: 'everyday', best_for: ['핵심압축형', '논리적탐구형'], age_fit: 'all' },
],

'자존감 부족': [
  { title: '금이 간 항아리', content: '금이 간 항아리에서 새어나간 물이 길가에 꽃을 피웠습니다.', point: '부족함이 오히려 가치가 될 수 있다', style: 'serious', best_for: ['돌봄회복형', '영적수용형', '관계형성우선형'], age_fit: 'all' },
  { title: '점수판 착각', content: '남의 하이라이트 영상과 내 비하인드 영상을 비교합니다. 비교 자체가 공정하지 않아요.', point: '비교는 불공정한 게임', style: 'everyday', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: '반지의 가치', content: '같은 금반지도 시장에서 팔면 5만 원, 보석상에서 팔면 50만 원입니다.', point: '당신의 가치는 환경에 의해 결정되지 않는다', style: 'serious', best_for: ['핵심압축형', '표준양육형'], age_fit: 'all' },
  { title: '아기의 첫걸음', content: '아기가 넘어져도 아무도 "실패"라고 하지 않습니다. 박수를 칩니다.', point: '시도 자체가 박수 받을 일이다', style: 'everyday', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'all' },
  { title: '다이아몬드 원석', content: '다이아몬드 원석은 그냥 보면 돌멩이입니다. 깎고 다듬어야 빛이 납니다.', point: '지금은 원석 상태일 뿐이다', style: 'serious', best_for: ['성장가속형', '영적수용형'], age_fit: 'all' },
  { title: '좋아요 중독', content: 'SNS에서 "좋아요"를 받으면 기분 좋지만, 당신의 가치는 "좋아요" 숫자가 아닙니다.', point: '외부 평가가 내 가치를 결정하지 않는다', style: 'everyday', best_for: ['핵심압축형', '논리적탐구형'], age_fit: 'young' },
  { title: '김연아의 넘어짐', content: '김연아도 연습 중에 수천 번 넘어졌습니다. 우리가 기억하는 건 일어선 모습입니다.', point: '넘어진 횟수가 아니라 일어선 횟수가 중요', style: 'korean', best_for: ['성장가속형', '핵심압축형'], age_fit: 'all' },
  { title: '거울 속의 글씨', content: '거울에 비친 글씨는 좌우가 반대입니다. 자기 평가도 왜곡되기 쉽습니다. 대부분 남이 보는 내가 더 괜찮습니다.', point: '자기 평가는 왜곡되기 쉽다', style: 'everyday', best_for: ['논리적탐구형', '표준양육형'], age_fit: 'all' },
  { title: '장영실', content: '장영실은 노비 출신이었지만 조선 최고의 과학자가 되었습니다.', point: '출발점이 도착점을 결정하지 않는다', style: 'korean', best_for: ['성장가속형', '돌봄회복형'], age_fit: 'all' },
  { title: '연필과 지우개', content: '연필에는 지우개가 달려있습니다. 사람은 실수를 하도록 설계되어 있다는 뜻입니다.', point: '실수는 허용된 것이다', style: 'humor', best_for: ['관계형성우선형', '표준양육형'], age_fit: 'all' },
],

'영적 갈증': [
  { title: '사막의 우물', content: '사막 여행자가 절실한 건 물입니다. 갈증 자체가 "물이 있다"는 증거입니다.', point: '갈증을 느끼는 것은 채워질 수 있다는 신호', style: 'serious', best_for: ['영적수용형', '돌봄회복형'], age_fit: 'all' },
  { title: '마슬로의 꼭대기', content: '마슬로의 욕구단계론 최상단은 "자아실현"입니다. 영적 갈증은 가장 높은 욕구 단계에 도달했다는 의미입니다.', point: '영적 갈증은 성숙함의 표현', style: 'real', best_for: ['논리적탐구형', '성장가속형'], age_fit: 'all' },
  { title: '위성사진', content: '구글 어스에서 내 집을 찾으면 점 하나입니다. 하지만 그 점에서 가족이 살고, 웃고, 울고 있습니다.', point: '작은 존재 안에도 거대한 의미가 있다', style: 'everyday', best_for: ['영적수용형', '논리적탐구형'], age_fit: 'all' },
  { title: '이름 없는 꽃', content: '산에 핀 이름 없는 꽃도 누군가에게는 감동입니다. 아직 이름을 찾지 못했을 뿐입니다.', point: '답을 찾지 못한 것이지 답이 없는 것은 아니다', style: 'serious', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'all' },
  { title: '음악의 쉼표', content: '음악에서 쉼표가 없으면 소음이 됩니다. 영적 갈증은 삶의 쉼표일 수 있어요.', point: '영적 탐구는 삶에 필요한 쉼표', style: 'serious', best_for: ['표준양육형', '핵심압축형'], age_fit: 'all' },
  { title: '어린왕자의 여우', content: '"정말 중요한 것은 눈에 보이지 않아." 물질로 채울 수 없는 무언가를 느끼는 것이 영적 감수성입니다.', point: '보이지 않는 것을 느끼는 능력이 영적 감수성', style: 'real', best_for: ['영적수용형', '성장가속형'], age_fit: 'all' },
  { title: '검색으로 안 나오는 답', content: '구글에 "삶의 의미"를 검색하면 7억 개의 결과가 나오지만 답을 찾았다는 사람은 드물어요.', point: '어떤 답은 정보가 아니라 경험에서 온다', style: 'everyday', best_for: ['핵심압축형', '논리적탐구형'], age_fit: 'young' },
  { title: '밤하늘의 질문', content: '"저 별 너머에 뭐가 있을까" 궁금해하는 존재는 지구에서 인간뿐입니다.', point: '초월적 질문을 하는 것 자체가 인간의 특별함', style: 'serious', best_for: ['영적수용형', '논리적탐구형'], age_fit: 'all' },
  { title: '해인사의 고요', content: '해인사에 가면 아무 말 안 해도 마음이 편해진다는 사람이 많습니다.', point: '영적 경험은 설명이 아니라 느낌으로 시작된다', style: 'korean', best_for: ['돌봄회복형', '관계형성우선형'], age_fit: 'all' },
  { title: '빈 그릇', content: '그릇이 비어있어야 음식을 담을 수 있습니다. 공허함은 곧 채워질 준비가 된 상태입니다.', point: '공허함은 채워질 준비', style: 'serious', best_for: ['영적수용형', '표준양육형'], age_fit: 'all' },
],

'기타': [
  { title: '강물', content: '강물은 바위를 만나면 돌아갑니다. 하지만 결국 바다에 도달합니다.', point: '우회도 목적지에 도달하는 방법', style: 'serious', best_for: ['all'], age_fit: 'all' },
  { title: '계단의 법칙', content: '계단은 한 칸씩 올라가게 설계되어 있습니다. 세 칸을 한 번에 뛰면 넘어집니다.', point: '성급함보다 한 걸음씩', style: 'everyday', best_for: ['all'], age_fit: 'all' },
  { title: '비 온 뒤 땅 굳기', content: '"비 온 뒤에 땅이 굳는다." 실제로 경험해본 사람이 많기 때문에 오래된 속담입니다.', point: '시련이 성장의 기반이 된다', style: 'korean', best_for: ['all'], age_fit: 'all' },
  { title: '시작이 반이다', content: '시작이 반이라는 말은 시작하는 것이 가장 어렵다는 뜻입니다. 이미 여기 앉아 계신 것, 반은 한 겁니다.', point: '여기 앉은 것 자체가 이미 반의 성공', style: 'korean', best_for: ['all'], age_fit: 'all' },
  { title: '주사위', content: '주사위를 던지면 어떤 숫자가 나올지 모릅니다. 하지만 던지지 않으면 영원히 모릅니다.', point: '결과를 모르더라도 시도하는 것이 중요', style: 'everyday', best_for: ['all'], age_fit: 'all' },
  { title: '볼펜의 마지막 잉크', content: '볼펜이 안 나온다고 버리지만, 잉크가 15% 남아있다고 합니다. "난 끝났어"라고 느낄 때 아직 남아있는 게 있습니다.', point: '끝이라고 느낄 때 아직 남아있는 힘이 있다', style: 'humor', best_for: ['all'], age_fit: 'all' },
  { title: '식물의 굴광성', content: '식물은 빛이 오는 방향으로 자랍니다. 어둠 속에서도 빛을 향해 구부러집니다.', point: '어둠 속에서도 빛을 향하는 것은 본능이다', style: 'serious', best_for: ['all'], age_fit: 'all' },
  { title: '김밥 한 줄', content: '김밥은 재료가 다 다르지만 김으로 감싸면 하나가 됩니다.', point: '다양한 경험이 모여 나를 만든다', style: 'korean', best_for: ['all'], age_fit: 'all' },
  { title: '오뚝이', content: '오뚝이는 넘어져도 일어납니다. 비결은 무게 중심이 아래에 있기 때문입니다.', point: '중심이 잡혀있으면 무엇이든 견딜 수 있다', style: 'korean', best_for: ['all'], age_fit: 'all' },
  { title: '첫눈', content: '첫눈은 매년 오지만 매년 새롭습니다. 같은 일상도 시선을 바꾸면 새로워질 수 있어요.', point: '시선을 바꾸면 일상이 달라진다', style: 'everyday', best_for: ['all'], age_fit: 'all' },
],

};

export function getStoriesForType(concern: string, typeKey: string): Story[] {
  const stories = STORIES[concern] || STORIES['기타'];
  const matched = stories.filter(s =>
    s.best_for.includes('all') || s.best_for.includes(typeKey)
  );
  return matched.length > 0 ? matched : stories.slice(0, 3);
}

export function getStoriesForAge(stories: Story[], age: number): Story[] {
  const ageGroup = age < 25 ? 'young' : age < 50 ? 'middle' : 'senior';
  const filtered = stories.filter(s => !s.age_fit || s.age_fit === 'all' || s.age_fit === ageGroup);
  return filtered.length > 0 ? filtered : stories;
}
