## NextJS의 Dynamic URL

- NextJS에는 router가 없다.
- /movies/all 을 만들려면 ?
  - 폴더 : movies
  - 하위 파일 : all.tsx
- movies/all 가 존재하는 상태에서 /movies 라고만 만들고 싶다면?
  - 폴더 : movies
  - 하위 파일 : index.tsx
  - movies 폴더 안에 index.tsx가 “/movies”에 맵핑된다.
- 페이지가 하나 밖에 없다면 pages에 폴더를 만들지 않고 파일만 만들어주면 된다.

<br/><br/>

## 변수를 포함하는 Dynamic URL

- 대괄호를 사용한 파일을 만들면 된다.
- movies/:id
  - 폴더 : movies
  - 하위 파일 : [id].tsx
- https://nextjs.org/docs/routing/dynamic-routes
