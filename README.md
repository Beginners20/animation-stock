# Animation Stock

### Scripts
```scripts
   #start
    npm run start
   
   #build
   npm run build
```


### versions
| key | value |
|------|---------|
| node | 12.20.0 |
| gatsby | 3.4.1 |

### previewサーバー  
| key | value |
|-------|---------|
| URL | https://animation-stock-preview.netlify.app |

### previewアップ方法  
1. 作業ブランチにコミットする
1. 作業ブランチを`develop`ブランチにマージする
1. `develop`ブランチでサイトに問題がない場合、`preview`ブランチにマージする
1. netlify側で`preview`ブランチに更新があった場合、自動的にビルドされサイトが更新されます。

### 実装ルール
-  **コンポーネントについて**
    -  コンポーネントは食べログのAtomicDesignに準拠した形で作成して下さい。
    -  [参照](https://note.com/tabelog_frontend/n/n4b8bcb44294c)
-  **CSS**
    -  `emotion`を用いたスタイリングを行なってください。
    -  `emotion`の記述方法に関しては、以下のルールで既出してください。
    -  ```emotion.js
       import {vw} from ./function.js;
       return (
         <h1 css={style}>Hello,World!</h1>
       )
       .....
        const style = css({
            color: "#fff",
            fontSize: "24px",
            marginTop: vw(15),
            "&:after": {
                 content: "''"
            }
         });
        ```