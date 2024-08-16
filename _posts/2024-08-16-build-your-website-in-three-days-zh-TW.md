---
layout: post
title:  "網站架設DIY - 三天內快速搭建多功能靜態網站"
author: kyle
categories: [ 網頁開發, 教學 ]
timestamp: "1723849792000"
language: zh
image: assets/images/article2_img1.jpg
inline-image0: /assets/images/article2_img0.jpg
inline-image1: /assets/images/article2_img1.jpg
inline-image2: /assets/images/article2_img2.jpg
inline-image3: /assets/images/article2_img3.jpg
inline-image4: /assets/images/article2_img4.jpg
inline-image5: /assets/images/article2_img5.jpg
toc: true
---
## 前言
這篇文章將介紹如何使用GitHub Pages和Jekyll快速地搭建多功能靜態網站。你說多功能靜態網站是什麼？你現在看到的這個網站就是！其他例如：部落格、公司網頁、開源軟體 documentation、活動網頁，都能以靜態網站的形式製作。

- **時間成本**：以這個部落格為例，我大約花了4-5個小時才完成，包含購買網域、設定GitHub Pages、和使用Jekyll模板、建立部落格內容。
- **金錢成本**：若要使用特定網域名稱，花費約$10-20美金/年。若不購買網域，花費為零🙂。

## 適合誰
- 想要自己架設簡易網站的人
- 想多了解網站背後運作原理的人
- ~~我的死忠粉絲~~

## 聲明
這篇文章專注在大方向的架構和一點點執行細節，並不是一步一步的詳細教學。另外，若你真的想自己搭建網站，仍需要具備一些基礎的程式和環境設定概念，或至少要有願意主動學習和上網查資料的準備。如果沒有概念或心理準備，建議可以使用付費的其他解決方案，例如：[WordPress](https://wordpress.com/), [Wix](https://www.wix.com/), [Squarespace](https://www.squarespace.com/)...，或雇用接案工程師，否則自己動手做可能會很辛苦 🥺


## 網站服務如何運作（背景知識）
你有一個網站（本質上就是一堆資料，包含程式碼跟圖片等），想要把網站放進網際網路裡，你需要一台連上網路的電腦把你的資料（網站）舉在空中，歡迎大家來看。這時候，當有人想要看你的資料（網站），他們只要透過網路連接到你的電腦，就可以看見你的資料（網站）。但是有個問題，你的電腦通常不會一直開機，就算會一直開機，萬一同時有1000個人想要看你的資料（網站），你小巧可愛的電腦可能就忙不過來。運氣好一點是大家還是能夠收到你的資料（看到你的網站），但是要等很久；壞一點是你的電腦當機，大家什麼都看不到🙈。

{% include post_image.html src=page.inline-image1 alt="How web hosting works." caption="網路主機服務（Web Hosting Service）" class="post-image" %}


這個時候，就要請專業的公司來為你服務，這個服務叫做網站主機服務（Web Hosting Service），他們會幫你把資料（網站）端在空中。網站主機服務擁有自己的伺服器（Servers），除了24小時保持開機，這些伺服器也有更多的硬體資源，例如CPU處理器、記憶體等，隨時準備把你的資料（網站）端給任何人看。雖然網路主機服務的電腦已經比你的好用很多，但他們通常沒有那麼多的電腦可以遍布全世界。假設你的網路主機服務地點在美國，當有人試著從台灣連線到你的網站，就需要等待數據從太平洋的一端傳送到另一端，也就需要花費比較長的時間。這時候，網路主機服務就會花錢請另一個專業的公司幫忙，這另一個專業的公司叫內容分發網路（Content Delivery Network, CDN）。這種公司專門在全世界建立伺服器，並且會把網路主機服務的資料複製一份存起來（快取）。這時候，如果有人在台灣想連線到在美國的網路主機，使用者就會直接透過設置在台灣的CDN伺服器獲取資料（網站），如此便能更快速地瀏覽網頁。想了解更多資訊，可以去CDN業者的官網看詳細介紹：[Cloudflare - CDN是什麼](https://www.cloudflare.com/zh-tw/learning/cdn/what-is-a-cdn/)

{% include post_image.html src=page.inline-image2 alt="Content delivery network." caption="內容分發網路（CDN）。紅色的使用者可以就近連線至所在地點附近的藍色CDN伺服器，不需要透過距離較遠的紫色Web Hosting Service伺服器。（地圖是我憑空畫的，請見諒🙂）" class="post-image" %}


## 架構說明
{% include post_image.html src=page.inline-image0 alt="Static website architecture." caption="主要架構及關係圖" class="post-image" %}

- 網站資料/版本管理 - GitHub Repo
- 網站部署 + 主機服務 - GitHub Pages
- 私有網域（optional） - Squarespace
- 靜態網站生成 - Jekyll (HTML, CSS, JavaScript, Markdown)

### 如何運作
簡單介紹完背景知識後，現在來看到底要如何建立並架設網站。剛剛提到的資料，也就是你網站背後所有的程式碼和其他檔案，可以放在一個GitHub Repo裡面，一個Repo有點像是一個專案。而透過使用GitHub，我們可以使用Git做版本控制，細節請參考[什麼是 Git？為什麼要學習它？](https://gitbook.tw/chapters/introduction/what-is-git)。而非常剛好的，除了提供你存放專案之外，GitHub有另外一個服務叫作[GitHub Pages](https://pages.github.com/)，這是GitHub**免費**提供的網站主機服務。GitHub Pages本身就跟GitHub Repo很好地整合在一起，所以只要Repo的資料夾跟檔案結構符合格式要求，每次當你修改了你的網站，就會自動觸發GitHub Pages部署 (deploy) 你的網站。部署就是拿你更新過的資料，重新把他端上線。

### 選擇這個架構的原因
1. **GitHub生態系的便利性**  
因為GitHub有free tier免費服務，除了可以管理網站資料，又可以直接使用GitHub Pages的網站主機服務，加上我本來就用GitHub Pages架設我的個人線上履歷。
2. **靜態網站就足以建立功能齊全的部落格**  
不需要使用功能更強大但也更複雜的其他架構，前端如：React, Vue.js, Angular，後端如Django, Flask, Express.js等等。（之後有機會再介紹靜態網站和動態網站的差異）
3. **Jekyll是免費的靜態網站生成器**  
而且有不少免費模板，並且已經包含許多部落格常見的功能，可以讓我花最少的時間和力氣完成任務。

## 部署網站 (GitHub Pages)
關於透過GitHub Pages部署網站，我建議直接看官方的說明文件，寫得滿清楚的（除了英文也有簡體中文選項）: [GitHub Pages快速入門](https://docs.github.com/en/pages/quickstart)。其中值得注意的是，如果想要建立子網域，需要另外再建立一個repo。舉例來說：我的網站包含[kyleptlin.com](https://kyleptlin.com)是我的線上履歷，[blog.kyleptlin.com](https://blog.kyleptlin.com)子網域則是部落格。所以在我的GitHub帳號裡，有兩個repos分別連接到這兩個網域。

## 私有網域 (Squarespace)
如果沒有私有網域，GitHub預設的網址是`{你的github_id}.github.io`。如果想要使用特別的網址，則需要向網域註冊商購買。大部分的網域都還滿便宜的，舉例來說，我透過Squarespace購買個人網域價格是一年$14美金。不同國家可能會有不同的網域註冊商，但也有一些註冊商似乎世界各地都有支援，一些其他網域註冊商有：[GoDaddy](https://www.godaddy.com/), [PChome](https://myname.pchomebiz.com.tw/)...。

購買私有網域之後，你需要透過GitHub進行DNS驗證。GitHub會給你一串驗證碼，你要透過你的網域註冊商新增DNS record，如此GitHub才能驗證你是這個網域的擁有者。接著，因為是透過GitHub Pages的網路主機服務，所以要新增幾個DNS records，把想要從[kyleptlin.com](https://kyleptlin.com)獲取資料的流量導向到GitHub的伺服器。詳細設定請參考 [GitHub Pages - Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)。

{% include post_image.html src=page.inline-image3 alt="Setting up DNS records for GitHub Pages." caption="在網域註冊商後台設定DNS records導向到GitHub的伺服器IP位址" class="post-image" %}

## 靜態網站生成器 (Jekyll)
Jekyll是一個開源（open source）的免費靜態網頁生成器，他最主要的功能就是幫助你更有效率地管理網頁裡面的各種素材。舉例來說，靜態網頁裡面，可能有10個不同的頁面，每一的頁面背後可能就是一個HTML或是Markdown檔案，其中包含了這個頁面的文字內容等等。Jekyll透過layouts，可以將頁面模板化，並且套用到所有屬於「部落格文章」的頁面。這樣一來，可以確保你網站的格式一致性，你只需要更改一個layout的內容，這個變更就會立即套用到所有使用該layout的頁面。其他還有includes是將重複使用的程式碼整理成components，方便你在任何頁面中插入。Jekyll能做出這些功能，主要是靠一個叫liquid的模板引擎（template engine），讓你可以在HTML或Markdown檔案中使用一些變數，詳細資訊請參考：[Shopify - Liquid](https://shopify.github.io/liquid/)

我自己是先跟著Jekyll提供的[入門教學](https://jekyllrb.com/docs/)做了一遍，下載安裝好相關的軟體，並且大致了解有哪些功能、如何使用之後，再下載免費的模板，最後額外客製化一些我想要的功能。有許多網頁設計師專門為Jekyll設計[各種模板](https://jekyllrb.com/docs/themes/)，其中也有許多模板是免費的，可以直接套用，省去自己設計網頁外觀的時間！

{% include post_image.html src=page.inline-image4 alt="Templates for Jekyll." caption="Jekyll的各種網站模板" class="post-image" %}

## 第三方插件 (Optional)
- [Google Analytics](https://analytics.google.com/analytics/)是Google提供的一項免費服務，只要把一串程式碼放進你的網頁，就可以透過Google Analytics的後台觀察使用者造訪網頁的各種數據。
- [Google Search Console](https://search.google.com/search-console/)也是Google提供的一項免費服務，只要透過DNS驗證，就可以追蹤你的網站透過Google搜尋的各式數據。
- [Disqus](https://disqus.com/)是一個提供留言板和連結社群媒體的插件，如果用量不大的話也是可以使用free tier解決。一般來說，留言板這類的功能需要透過後端和資料庫來支援，但是靜態網站就是沒有後端和資料庫的網站。透過Disqus，開發者可以很容易地加入留言板的功能。之後有機會的話也可以寫文章介紹靜態和動態網站的區別。


## 其他客製化功能
如果Jekyll模版本身提供的功能不夠多，你也可以試著自己寫一些其他的功能。例如我自己寫了兩個JavaScript檔案，用來計算並顯示每篇文章的發布相對時間（一小時前、三天前...）和所需的閱讀時間（x min read），之後有機會再寫一篇文章介紹。

{% include post_image.html src=page.inline-image5 alt="Simple featurs developed with JavaScript." caption="透過JavaScript開發一些簡單的功能" class="post-image" %}


## 關於架構設計的一些心得
我認為對於程式開發來說，架構設計非常重要。架構設計的好，剩下的問題通通都能迎刃而解。就像是拼拼圖一樣，網路上充斥著各式各樣的工具（各種拼圖），首先你要先找出可以拼出你要的最終圖案（部落格）的那幾塊拼圖（GitHub, Jekyll, 購買網域）。確定你手上這幾塊拼圖可以拼出你想要的圖案之後，剩下的就把拼圖互相連接、動手把他拼出來而已。一開始我也有考慮其他架構，像是包含完整前後端的組合，但後來馬上發現部落格的需求其實很簡單，不需要殺雞用牛刀，浪費資源也浪費自己的時間。在設計架構的時候，我經常依靠[ChatGPT](https://chatgpt.com/)的幫忙，他會告訴我哪些框架（frameworks）是最常見的組合。對於如何連結兩塊拼圖有疑問，他也會給出非常有用的回答。之後有機會再寫一篇文章介紹我平常如何使用ChatGPT幫助解決各種程式開發問題。

設計架構時，要考量的因素有很多，常見的有：**功能性**、**複雜度**、**學習曲線**、**開發者社群大小**、**時間成本**、**金錢成本**。功能性和複雜度大多時候是負向相關，越多功能就越複雜，也就具有更陡的學習曲線。而在選擇框架時，要考量和你目前（和不久的將來）的需求，確保你的選擇可以滿足你的需求，又不會過於強大到增加無謂的複雜度。開發者社群大小也是一個非常重要的因素，因為他會決定你在遇到難解的bug時，能不能在網路上找到遇到相同問題的前輩，並借用他們的經驗（複製貼上），解決相同的問題。最後，時間跟金錢成本就是看這個project的預算來自行評估囉！很多的軟體frameworks都是免費且開源的，但有些採用freemium商業模式，如果想要用更好的功能就需要花錢使用。

總結來說，我認為最好的架構設計就是剛剛好滿足使用者的所有需求，使用者可以是你自己、你老闆、你的公司、或你的顧客。

## 結語
原本以為可以很快把文章寫完，但不小心就花了不少時間解釋各種東西，也用iPad畫了一些很醜的示意圖，希望對你有些幫助！（如果真的有人看完的話..）這邊提供的架構只是一個對我自己來說相當方便且快速的解決方案，對於有點程式基礎的人來說，我覺得應該不會太難。但如同開頭提到的，如果光是讀完這篇文章就讓你一個頭兩個大，那我還是建議你去用一些付費的平台會比較省事🤣。如果到現在你還是堅持想要自己搭建網站，祝你能夠成功！雖然過程中一定會遇到一些小阻礙，但一步一步解決問題，最後親手把網站搭建起來，一定會為你帶來滿滿的成就感（希望啦）。🙂

