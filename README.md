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

以下を選択
1, react
2, typescript-swc

### 使用ライブラリ

#### react-router-dom

```
docker exec -it atomicdesign npm install react-router-dom
```

types

```
docker exec -it atomicdesign npm install --save @types/react-router-dom
```

#### styled-components

```
docker exec -it atomicdesign npm install styled-components
```

types

```
docker exec -it atomicdesign npm install @types/styled-components --save-dev
```
