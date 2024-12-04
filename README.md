# 求人サイト Web アプリケーション

## 環境構築

以下コマンドを実行して、package をインストールする

```bash
npm install
```

以下コマンドでローカル環境を起動

```bash
npm run dev
```

## ディレクトリ構成

- src
  - components
    - bases
      → ベースとなるコンポーネント。（例: Button や Input コンポーネント）
    - layouts
      → レイアウトに関するコンポーネント。（例: ヘッダー や フッター コンポーネント）
  - hooks
    → 共通で利用できるカスタムフックを格納
  - libs
    - httpClient
      → axios ライブラリに関する内容を格納
    - store
      → redux ライブラリに関する内容を格納
  - pages
    → 各ページのコンポーネントを格納
  - styles
    → styled-components の theme やグローバルスタイルを格納
  - types
    → 各ファイルで使用する型定義ファイルを格納
  - App.tsx
    → ルーティングの内容を記載したファイル
  - main.tsx
    → Provider 系を記述しているファイル

## 実際のサイト

https://react-job-posting.vercel.app/
# react-training-job-posting
