# HealCode GitHub + Cloud Run Version

Lovable 공개 화면을 참고해 만든 HealCode 프론트엔드 재구현 버전입니다. GitHub에 바로 올리고 Cloud Run에서 GitHub 소스로 배포할 수 있게 구성했습니다.

## 반영 사항

- 첫 화면 이미지를 첨부한 HealCode 아이콘(`public/healcode-icon.webp`)으로 교체
- 상단 메뉴 순서: `Home / About / Projects / Activities / Contact / Login`
- About 페이지 추가
- Lovable 사이트의 베이지/브라운/그린/핑크 톤과 카드형 UI 흐름을 유지
- Cloud Run 배포용 `Dockerfile` 포함
- Supabase 연결 준비 파일 포함

## 폴더 구조

```txt
healcode-github-cloudrun/
├─ Dockerfile
├─ .dockerignore
├─ .gitignore
├─ package.json
├─ index.html
├─ public/
│  └─ healcode-icon.webp
└─ src/
   ├─ main.tsx
   ├─ App.tsx
   ├─ index.css
   ├─ components/
   ├─ pages/
   └─ lib/
```

## 1. 로컬에서 확인

```bash
npm install
npm run dev
```

브라우저에서 접속:

```txt
http://localhost:5173
```

## 2. GitHub에 올리기

새 GitHub repository를 만든 뒤, 프로젝트 폴더에서 아래 명령을 실행하세요.

```bash
git init
git add .
git commit -m "Initial HealCode Cloud Run app"
git branch -M main
git remote add origin https://github.com/본인아이디/저장소이름.git
git push -u origin main
```

## 3. Cloud Run에서 GitHub 소스로 배포

Google Cloud Console에서:

```txt
Cloud Run → Create service → Continuously deploy from a repository 선택
→ GitHub 연결
→ HealCode repository 선택
→ Branch: main
→ Build type: Dockerfile
→ Dockerfile path: ./Dockerfile
→ Region: asia-northeast3 또는 원하는 리전
→ Authentication: Allow unauthenticated invocations
→ Create
```

배포 후 Cloud Run URL이 생성됩니다.

## 4. CLI로 바로 배포하는 방법

GitHub 자동배포 전, 수동 테스트는 아래 명령으로 가능합니다.

```bash
gcloud run deploy healcode \
  --source . \
  --region asia-northeast3 \
  --allow-unauthenticated
```

## 5. Supabase 연결

`.env.example`을 참고해서 `.env.local`을 만들고 값을 넣으면 됩니다.

```txt
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-or-publishable-key
```

주의: `service_role` 또는 secret key는 프론트엔드에 절대 넣지 마세요.

## 주요 수정 위치

- 메인 페이지: `src/pages/Home.tsx`
- About 페이지: `src/pages/About.tsx`
- Projects 페이지: `src/pages/Projects.tsx`
- Activities 페이지: `src/pages/Activities.tsx`
- Contact 페이지: `src/pages/Contact.tsx`
- 로그인/회원가입: `src/pages/Login.tsx`, `src/pages/Signup.tsx`
- 전체 스타일: `src/index.css`
- 상단 메뉴: `src/components/Navbar.tsx`
- Footer: `src/components/Footer.tsx`
