# my-site · Hannove

课上网站作业（Web Technologies 2026）。曾子轩发来的代码已经整理好，双击能看，VS Code 里也能直接跑。

## 怎么打开

**方式一：VS Code + Live Server（推荐，演示 / 交作业用这个）**

1. VS Code → File → Open Folder，选中整个 `my-site` 文件夹
2. 右下角状态栏点 **Go Live**（没有的话去扩展里装 `Live Server`，本机已经装好了）
3. 浏览器会自动打开 `http://127.0.0.1:5500/index.html`

**方式二：直接双击 `index.html`**

也能看，导航和页脚会由 `nav.js` 用内置副本补上（`file://` 下浏览器禁止 fetch，所以做了兜底）。注意这种方式下 `nav.html` / `footer.html` 的改动不会生效，改公共导航请用方式一。

## 文件都是干什么的

| 文件 | 作用 |
| --- | --- |
| `index.html` | 首页，含 CSS 画的红色小车（点一下会来回开） |
| `quote.html` | Quotes 名言页 |
| `project.html` | Project ideas |
| `about.html` | About + 联系方式 |
| `nav.html` | 公共导航（由 nav.js 注入到 `#site-header`） |
| `footer.html` | 公共页脚（注入到 `#site-footer`） |
| `nav.js` | 把上面两个片段塞进每个页面 |
| `style.css` | 全站样式 |
| `image/` | 图片，待补充 |

## 图片放这里（`image/` 文件夹）

代码里路径已经按小写的 `image/` 写好了，文件名要对上：

| 文件名 | 用在哪 |
| --- | --- |
| `BIUH.lake.png` | 首页第一张大图 |
| `cat.jpg` | 首页第二张图 |
| `favicon-32.png` | 浏览器标签页小图标 |
| `apple-touch-icon.png` | 手机添加到桌面时的图标 |

图片还没放进去时，首页两张图的位置会显示破图 + alt 文字，这是正常的，放了就好。

## 从微信代码里改过的地方

- 粘贴过来时标签被加了空格：`< img` 和 `</p >` 这类，已改回 `<img>` / `</p>`（`< img` 不修的话浏览器会当成普通文字显示出来）
- 图片路径 `Images\...` → `image/...`，和你的 `image` 文件夹一致（Windows 不区分大小写，但传到 Linux 服务器就会 404，小写更保险）
- 空链接 `href=" "` 补上了：logo → `index.html`，MDN → https://developer.mozilla.org/，页脚邮箱 → `mailto:hannove@qq.com`
- `nav.js` 加了 `file://` 兜底，双击打开也不会缺导航
