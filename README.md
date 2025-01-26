# E-commerce App project (React + Typescript)

## Công nghệ

- UI / CSS Library: Tailwindcss + HeadlessUI
- State Management: React Query (cho async state) & React Context (cho state thường)
- Form Management: React Hook Form
- Router: React Router
- Build tool: Vite
- API: Rest API
- Hỗ trợ đa ngôn ngữ với react.i18next
- Hỗ trợ SEO với React Helmet
- Story book
- Unit Test

## Chức năng trong dự án

- Authentication module: Quản lý bằng JWT

  - Đăng ký
  - Đăng nhập
  - Đăng xuất

- Trang danh sách sản phẩm:

  - Pagination
  - Sort (sắp xếp) theo từng thuộc tính sản phẩm
  - Filter nâng cao theo từng thuộc tính sản phẩm
  - Tìm kiếm sản phẩm

- Trang chi tiết sản phẩm:

  - Hiển thị thông tin chi tiết
  - Ảnh hiển thị theo slider + hover zoom effect
  - Mô tả thì hiển thị rich text dạng WYSIWYG HTML
  - Chức năng mua hàng

- Giỏ hàng

  - Quản lý đơn hàng: CRUD sản phẩm
  - Đặt hàng

- Quản lý Profile User

  - Thông tin cá nhân
  - Upload Avatar
  - Đổi mật khẩu
  - Xem tình trạng đơn hàng

## Cài đặt package cho dự án Vite React TS

### Cài các depedency

### ESLint và Prettier

- ESLint: linter (bộ kiểm tra lỗi) chính

- Prettier: code formatter chính

- @typescript-eslint/eslint-plugin: ESLint plugin cung cấp các rule cho Typescript

- @typescript-eslint/parser: Parser cho phép ESLint kiểm tra lỗi Typescript.

- eslint-config-prettier: Bộ config ESLint để vô hiệu hóa các rule của ESLint mà xung đột với Prettier.

- eslint-plugin-import: Để ESLint hiểu về cú pháp `import...` trong source code.

- eslint-plugin-jsx-a11y: Kiểm tra các vấn đề liên quan đến accessiblity (Tính thân thiện website, ví dụ cho thiết bị máy đọc sách).

- eslint-plugin-react: Các rule ESLint cho React

- eslint-plugin-prettier: Dùng thêm 1 số rule Prettier cho ESLint

- prettier-plugin-tailwindcss: Sắp xếp class tailwindcss

- eslint-plugin-react-hooks: ESLint cho React hook

Chạy câu lệnh dưới đây

```bash
yarn add eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-prettier prettier-plugin-tailwindcss eslint-plugin-react-hooks -D
```

Cấu hình ESLint

Tạo file `.eslintrc.cjs` tại thư mục root

```js
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'prettier'
  ],
  plugins: ['prettier'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, '')],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    node: true
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'warn',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
  }
}
```

Tạo file `.eslintignore`

```json
node_modules/
dist/
```

Tạo file `.prettierrc`

```json
{
  "arrowParens": "always",
  "semi": false,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120,
  "jsxSingleQuote": true
}
```

Tạo file `.prettierignore`

```json
node_modules/
dist/
```

Thêm script mới vào `package.json`

```json
  "scripts": {
    ...
    "lint": "eslint --ext ts,tsx src/",
    "lint:fix": "eslint --fix --ext ts,tsx src/",
    "prettier": "prettier --check \"src/**/(*.tsx|*.ts|*.css|*.scss)\"",
    "prettier:fix": "prettier --write \"src/**/(*.tsx|*.ts|*.css|*.scss)\""
  },
```

### Cài editorconfig

Tạo file `.editorconfig` ở thư mục root

```EditorConfig
[*]
indent_size = 2
indent_style = space
```

### Cấu hình tsconfig.json

Set `"target": "ES2015"` và `"baseUrl": "."` trong `compilerOptions`

### Cài tailwindcss

Cài các package dưới đây: Tham khảo [https://tailwindcss.com/docs/guides/vite](https://tailwindcss.com/docs/guides/vite)

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Cấu hình file config

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

Thêm vào file `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Cấu hình vite config

Cài package `@types/node` để sử dụng node js trong file ts không bị lỗi

```bash
yarn add -D @types/node
```

file `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  }
})
```