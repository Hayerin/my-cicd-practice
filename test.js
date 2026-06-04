const fs = require('fs');

// index.html을 읽어온다
const html = fs.readFileSync('index.html', 'utf-8');

// 반드시 들어있어야 하는 문구
const mustInclude = 'Hello CI/CD';

if (html.includes(mustInclude)) {
  console.log(`✅ 테스트 통과: "${mustInclude}" 문구를 찾았습니다.`);
  process.exit(0);   // 0 = 성공
} else {
  console.error(`❌ 테스트 실패: "${mustInclude}" 문구가 없습니다.`);
  process.exit(1);   // 1 = 실패 (파이프라인이 빨간 X로 멈춤)
}