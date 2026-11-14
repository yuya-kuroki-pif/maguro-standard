# maguro-standard.com

マグロスタンダード 門前仲町店 の公式サイト（静的 HTML/CSS/JS）です。
既存の WordPress サイト（https://maguro-standard.com/）の文章・写真を元に、GitHub Pages で公開できる形に作り直しています。

## 構成

```
index.html                トップページ（ヒーロー / こだわり / お食事 / お飲み物 / 席・空間 / お知らせ / Instagram / 店舗情報）
concept/index.html        こだわり
course/index.html         コース（キャンセルポリシー含む）
food/index.html           お食事メニュー
drink/index.html          お飲み物メニュー
table/index.html          席・空間
group/index.html          団体情報
special/index.html        公式サイト限定特典
sister-store/index.html   姉妹店紹介
media/index.html          メディア掲載実績
information/index.html    お知らせ一覧（直近の記事本文を掲載。トップの「お知らせ」からアンカーで遷移）
story/index.html          お店を作った経緯
privacy/index.html        個人情報保護方針
css/style.css             共通スタイル（外部フレームワーク不使用。Google Fonts の Noto Sans JP / Noto Serif JP のみ使用）
js/main.js                ハンバーガーメニュー開閉・ページトップ・現在ページ強調
images/                   ロゴ・写真（既存サイトから取得し半角英数名にリネーム）
site.config.json          店名・住所・電話・営業時間・予約 URL などのサイト情報
CNAME                     GitHub Pages で独自ドメインを使うための設定（maguro-standard.com）
```

- 全ページで同じヘッダー（ロゴ / グローバルナビ / WEB予約ボタン）とフッター（店舗情報 + Google マップ / 姉妹店バナー / 個人情報保護方針 / 採用情報）を使用しています。
- スマホ幅では固定ボトムバー（電話 / 地図 / WEB予約）を表示します。
- リンク・画像パスはルート相対（`/concept/`, `/images/hero.jpg`）です。独自ドメイン直下で公開する前提のため、サブディレクトリ配信には向きません。
- 営業時間などを変更する場合は、各 HTML の `#shop-info` セクション（全ページ共通）と `site.config.json` を合わせて更新してください。

## ローカルで確認

```bash
python -m http.server 8000
```

ブラウザで http://localhost:8000 を開きます。

## 公開までの流れ

1. GitHub にこのリポジトリを push する
2. Settings → Pages で `main` ブランチ / ルートを公開元に設定する
3. ドメイン管理側で DNS を GitHub Pages に向ける（A レコード 4 件 + www の CNAME）
4. Pages 設定で "Enforce HTTPS" を有効にする
