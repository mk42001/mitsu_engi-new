# CLAUDE.md

## プロジェクト概要
- HTML / CSS / JavaScript のプロジェクト

## コーディングルール
- CSS は `style.css` にまとめる
- JavaScript は `script.js` にまとめる
- デザインはシンプルでモダンにする
- コメントは日本語で書く
- 動作確認用の `console.log` は残さない

## 追加ルール
- 外部ライブラリは勝手に追加しない(必要な場合は事前に確認する)
- セマンティックな HTML を使い、`img` には `alt` を付け、`<html lang="ja">` を指定する
- 色・余白などは CSS 変数(`:root`)で管理し、クラス名はケバブケースにする
- インライン `style` / `onclick` や、HTML 内の `<style>` / `<script>` は使わない
- 頼まれていない変更はしない。Git の commit / push は指示があるときだけ行う
