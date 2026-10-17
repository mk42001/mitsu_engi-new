# CLAUDE.md

## 使う技術
- HTML / CSS / JavaScript のプロジェクト
- JavaScript は素の JavaScript(ES6+)で書く。フレームワーク(React / Vue など)は使わない
- 外部ライブラリや CDN は原則使わない(必要な場合は事前に確認する)
- 対応ブラウザは最新の Chrome / Safari / Edge。古いブラウザは対象外
- スマホファーストで作り、768px 以上で PC 向けに切り替える
- ファイル構成は `index.html` / `style.css` / `script.js`
  - CSS は `style.css` にまとめる
  - JavaScript は `script.js` にまとめる

## コーディング規約
- セマンティックな HTML を使い、`img` には `alt` を付け、`<html lang="ja">` を指定する
- 色・余白などは CSS 変数(`:root`)で管理し、クラス名はケバブケースにする
- デザインはシンプルでモダンにする(余白を広く取り、アクセントカラーは1色にする)
- コメントは日本語で書く

## やってほしくないこと
- 動作確認用の `console.log` を残さない
- インライン `style` / `onclick` や、HTML 内の `<style>` / `<script>` を使わない
- 外部ライブラリを勝手に追加しない
- 頼まれていない変更をしない
- Git の commit / push は、指示があるときだけ行う
