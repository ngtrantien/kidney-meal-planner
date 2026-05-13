# Admin CMS

Project da co Decap CMS tai `/admin`.

## Noi dung CMS quan ly

- `src/content/meals.json`: danh sach mon an. Co the scale len 200 mon trong file nay.
- `src/content/posts.json`: bai blog dinh duong.
- `src/content/tips.json`: tabs nguyen tac va the theo doi tai nha.
- `public/uploads`: hinh anh upload tu admin panel.

## Chay local

1. Chay app:

```bash
npm start
```

2. Chay Decap local proxy o terminal khac neu muon test save noi dung local:

```bash
npx decap-server
```

3. Mo:

```text
http://localhost:3000/admin
```

## Kich hoat tren GitHub Pages

Decap CMS dung GitHub backend de doc/commit noi dung vao repo. Voi GitHub Pages, ban can mot OAuth proxy vi GitHub OAuth khong the chay hoan toan trong static browser.

Sau khi tao GitHub OAuth App va deploy OAuth proxy, cap nhat `public/admin/config.yml`:

```yml
backend:
  name: github
  repo: ngtrantien/kidney-meal-planner
  branch: main
  base_url: https://your-oauth-proxy.example.com
  auth_endpoint: auth
```

GitHub OAuth App callback URL thuong la:

```text
https://your-oauth-proxy.example.com/callback
```

Nguoi dang nhap CMS phai co quyen push vao repo neu muon save truc tiep vao branch `main`.
