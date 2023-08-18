# AtomicDesign

### 開発サーバー立ち上げ

```
docker exec -it atomicdesign npm run dev
```

### 環境構築クローンしたときと新規開始時にこれを実行

```
docker exec -it atomicdesign npm install
docker exec -it atomicdesign npm run build
docker exec -it atomicdesign npm run dev
```

### 新規

```
docker-compose run --rm atomicdesign npm create vite@latest .
```

react typescript-swc
