---
layout: post
title:  "史丹佛的設計思維課 - 從APP介面設計學習創造性問題解決"
author: kyle
categories: [ 史丹佛, 留學 ]
timestamp: "1725081599000"
language: zh
image: assets/images/article3_img8.jpg
inline-image0: /assets/images/article3_img0.jpg
inline-image1: /assets/images/article3_img1.jpg
inline-image2: /assets/images/article3_img2.jpg
inline-image3: /assets/images/article3_img3.jpg
inline-image4: /assets/images/article3_img4.jpg
inline-image5: /assets/images/article3_img5.jpg
inline-image6: /assets/images/article3_img6.jpg
inline-image7: /assets/images/article3_img7.jpg
inline-image8: /assets/images/article3_img8.jpg
inline-image9: /assets/images/article3_img9.jpg
toc: true
---

## 前言
這篇文章是我從史丹佛電腦科學系（Computer Science）的一門課中的知識整理，透過分享我和其他組員合力完成課程專案的過程，讓有興趣的讀者了解史丹佛的課程設計與學習體驗。這門課是CS 147: Introduction to Human Computer Interaction Design，中文可翻譯成「人機互動設計概論」。在為期十週的季制學期中，學生將以三至四人為一組，設計一款手機應用程式（mobile application），並且在過程中，學習並運用設計思維（Design Thinking）的框架。

## 框架簡介
設計思維（Design Thinking） 是由史丹佛設計學院[d. school]( https://dschool.stanford.edu/)提出作為創造性問題解決（creative problem solving）的一個框架/概念。簡單介紹，d. school其實並不是真正的一個學院，它並不隸屬於史丹佛七大學院（商學院、教育學院、工學院、人文科學學院、法學院、醫學院、以及永續學院）中的任何一個，但是任何科系的學生都可以選修d. school的課程，很多科系也都會和d. school合作開課，讓各專業的學生在自己的專門領域學習的同時，也能導入設計思維的概念。

值得強調的是，設計思維並不只能套用在一般大眾認知的設計，如工藝品、平面設計、工業設計等等。我個人的理解是，史丹佛設計學院強調，任何有使用者（users）的物品，甚至是非實體物品如無形的服務，都需要經過設計來最大化使用者體驗。簡單來說，任何人做的任何東西，只要有人使用，就可以透過設計思維來優化使用者體驗，更有效地幫助使用者解決他們的問題。

回到d. school的設計思維，包含五大步驟:

{% include post_image.html src=page.inline-image0 alt="Stanford d. school Design Thinking Framework" caption="史丹佛d. school的設計思維框架" class="post-image" %}
 
-	同理(Empathize): 透過使用者的角度看他們眼中的世界
-	定義(Define): 定義出清楚明確且可執行的問題陳述 (problem statement)
-	構思(Ideate): 構思各種可能的解決方案
-	原型、打樣(Prototype): 用快速低成本的方式打造你的解決方案
-	測試(Test): 用你的原型測試你對於問題和解決方案的猜測或假設

## 專案實作
這門課的工作量非常龐大，在為期十週的課程中，我們需要完成整個課程專案。我們需要探索目標領域與使用者，進行多次訪談，並整理蒐集的資料來定義要解決的問題。訂定問題後，需要拍攝一部概念影片，製作三個不同保真度（fidelity，可視作完成度）的產品原型，包含最後高保真度、可以實際在手機上運行的應用程式。最終在課程期末發表會上，製作海報和幾張提案簡報（pitch slides）向所有同學和受邀的校外人士呈現最終產品。

課程安排了十一種不同的主題，包含交通和移動、助手App、藝術和數位媒體等。我選的主題是通用性設計（accessible design），探索如何透過手機應用程式協助或支持身心障礙者。我有其他三個組員，分別是資工系大四的Emily、符號系統學系大三的Jared、以及產品設計大二的Frankie。我們的組員擁有相當多元的背景和不同的專長，除了皆參與使用者體驗設計（UX design）之外，Emily是主要程式開發者、Jared負責平面設計、Frankie提供許多設計相關的點子、而我是第二程式開發者和出一張嘴。除了組員各有所長之外，大家也都很重視這個課程專案並且認真地想要做出一個好產品，我想這些就是我們的作品最後大獲好評的原因。

{% include post_image.html src=page.inline-image1 alt="Our team members" caption="我與組員" class="post-image" %}

接下來，讓我針對整個課程專案的各個階段（按時間排序）一一介紹。有興趣的讀者可以到CS147課程專案的網站[ALTiO]( https://hci.stanford.edu/courses/cs147/2022/wi/projects/AccessibleDesign/ALTiO/)（我們的專案名稱），網站中收藏了我們這組所有階段的討論報告投影片和相關資料。

### 3-1 需求探尋(Needfinding)
首先，一切的起點始於需求。先清楚定義問題以後，才著手設計解決方案。這是我認為史丹佛在各個領域，不論是d. school還是工學院或商學院的創意或創業課程，都相當推崇的由下而上（bottom-up）思維。套用在專案上，我們要做的就是和目標使用者交流，透過訪談了解他們的生活如何運作、他們喜歡什麼、不喜歡什麼等等。

訪談是設計思維非常重視的一個環節，課程要求我們要將訪談過程錄下，並且盡量分析受訪者回答的用字遣詞以及其他經肢體語言透露的線索。其中一個訪問的重要概念是，提問時應盡量讓受訪者談論他的經驗與感受，並且避免使用引導式的提問影響受訪者的回答。如此才能貼近真實地認識和了解受訪者。其中一個建議的提問方式是用「告訴我你過去…的經驗」（Tell me about a time you…），以此讓受訪者能用自己的角度去描述他的想法。

完成和多名受訪者的訪談以後，組員一起坐下來分析整理出同理心地圖（empathy map）。同理心地圖中有四個區域，分別是受訪者「做」、「說」、「想」、「感受」。大家將各自的發現整理到同理心地圖的相應區域後，再進一步分析緊張關係（tension）、矛盾（contradiction）、和出乎意料之處（surprises），最終再整理成見解（insights）和需求（need）。

{% include post_image.html src=page.inline-image2 alt="Empathy Map" caption="同理地圖" class="post-image" %}
{% include post_image.html src=page.inline-image3 alt="Tensions, Contradictions, Surprises" caption="緊張關係、矛盾、出乎意料之處框架" class="post-image" %}

  
### 3-2 觀點分析與提出解決方案(Point of View and Solutions)
經過第一步的需求探尋後，接下來就是要提出不同的解決方案。在此，課程提供了兩個不同的框架幫助我們腦力激盪（brainstorm）出各種可能的解決方案，這些框架分別是觀點分析（Point of View, POV）及問題造句（How might we…）。

觀點分析（POV）包含四步驟，分別是「我們與…對談」（We met…）、「我們很意外地發現…」（We were surprised to notice…）、「我們想知道這是否代表…」（We wonder if this means…）、「如果…的話將會是顛覆性的」（It would be game-changing to…）。藉由這樣的框架，我們試圖針對每一位受訪者（潛在用戶）分析他們對事物或問題的觀點，並依此提出具有潛力打破現況的解決方案。問題造句則是以「我們如何能夠…」(How might we…)開頭造句，試著用各種各樣的角度去界定問題（framing the problem）。

經過以上進一步的問題分析後，就進入腦力激盪環節。小組成員一起坐下來，進行15-20分鐘的快速討論，尋找可能作為解決方案的點子。關於腦力激盪，大部分的人可能以為就是大家一起開會討論，提出各種不同的點子。但是，若想真正100%發揮大家的創意，應該要盡量遵從幾項腦力激盪的原則。d. school提供了幾個原則作為參考 — [d. school腦力激盪原則]( https://hci.stanford.edu/courses/cs247/2011/readings/dschool-brainstorming.pdf)，其中包含：暫緩評判（Defer judgement）、鼓勵瘋狂的想法（Encourage wild ideas）、基於他人點子拓展（Build on the ideas of others）、越多越好（Go for volume）、討論大框架即可（Headline）等。遵循這些原則進行腦力激盪，將能夠最大化團隊的創造力、盡可能發散思考任何有潛在價值的點子。

在腦力激盪以後，我們的團隊決定朝向「替代聲音」這個主題往下開發。替代聲音的概念有點類似於圖片的替代文字，有別於替代文字是讓盲人可以閱讀圖片，替代聲音用文字或圖畫為音樂或聲音作詮釋，提供聽障者一個媒介去感受聲音和文字。這是也我們團隊產品名稱ALTiO（alternative audio，替代聲音）的由來。

ALTiO主要構想是建立一個類似Instagram的社群媒體平台，但有別於Instagram分享照片，ALTiO讓使用者分享音樂或影片，並且邀請分享者用繪畫表達他們對這個音樂或影片內聲音的想法及感受，藉此讓聽障者或聾人能夠以替代形式享受音樂或聲音，讓這個社群包容更多的使用者群。

### 3-3 低、中、高保真原型（Low, Medium, and High Fidelity Prototypes）
#### 低保真原型
低保真原型，顧名思義，就是非常簡單甚至有些粗糙的原型。製作這樣原型的主要目的是快速，避免浪費太多時間在最後不會採用的設計上。另外，也避免設計者投入太多時間和資源到初步的構想，造成設計固著或依戀（design fixation or design attachment），意思就是和自己的點子或作品培養出過多的感情，而不願意修改或調整。

在這個階段，我們透過最簡單的元素：紙和筆，畫出了手機螢幕上的使用者介面，包含一個APP會用到的各個不同頁面。我們設計了兩種不同的使用者介面，分析各自的優缺點後，選擇其中一個繼續向下製作中保真原型。
 
{% include post_image.html src=page.inline-image4 alt="The two initial interface designs" caption="最初設計低保真原型時的兩種不同介面設計" class="post-image" %}

這邊也順便分享一個有趣的網站[Marvel](https://marvelapp.com/)，可以讓你上傳照片或圖片，並把這些照片放到模擬的手機螢幕上。透過建立不同圖片、頁面之間的連結，將可以控制在滑鼠點擊圖片上不同位置後，帶領使用者到下一個對應的圖片、頁面，可達到快速測試應用程式介面的目的。

{% include post_image.html src=page.inline-image5 alt="Low fidelity prototype made with Marvel" caption="使用Marvel模擬紙繪介面在手機上的使用情形" class="post-image" %}

#### 中保真原型 
製作完低保真原型後，接著就是製作中保真原型。這邊我們使用的工具是設計領域相當熱門的工具之一[Figma]( https://www.figma.com/)。透過Figma設計工具，設計的過程和實際設計網頁或手機應用程式非常相似，而且可以做到和真實APP相似度100%的介面。此外，Figma也可以像上面提到的Marvel一樣使用不同螢幕尺寸的手機模擬器，在電腦上測試使用者實際和介面互動的情形。

在這個階段，我們可以在低保真原型的基礎上繼續設計。在主要的流程和頁面規劃不變的情況下，決定各個零件，如：按鈕、文字、圖片等，分別要用哪些顏色、尺寸、形狀等。因為使用電腦設計，不同於低保真原型重視感覺，中保真原型在介面設計上就沒有模稜兩可的空間，尺寸是80像素、100像素，或是相對螢幕寬度高度的占比等，都是相當明確且量化的數字。經過中保真原型的設計和調整，也可以省去後期實際寫程式製作時來回重複調整各部件的困擾。比較可惜的是，因為這堂課節奏實在十分緊湊，我們只有大約一週的時間，從初次接觸Figma、熟悉操作、到完成中保真原型，其中趕deadline時還熬夜到兩點才結束。

{% include post_image.html src=page.inline-image6 alt="Medium fidelity prototype made with Figma" caption="使用Figma設計工具製作的中保真原型，其中關於繪製圖畫的流程說明" class="post-image" %}
 
#### 高保真原型
最後是終於要寫程式的環節，高保真原型。在這個階段，我們需要實際寫程式，做出可以在手機上運行的APP。由於時間有限，課程僅要求我們做出各個重要的頁面，其中包含頁面之間的連結，例如點擊頁面A的某個按鈕會帶領使用者到頁面B，以及各個頁面中具有互動性的部分，例如點擊展開、螢幕上下左右滾動等。技術部分，這堂課要求我們使用[React Native]( https://reactnative.dev/)的框架製作可以跨平台（iOS, Android）使用的手機APP，再使用[Expo]( https://expo.dev/)在沒有將APP上架到蘋果APP Store或安卓Play商店的情況下，在個人手機上使用及測試開發中的APP。

在這門課以前，我是完全沒有開發手機APP經驗的，只有過去從線上課程學過一點使用JavaScript製作簡單網頁APP的經驗。這堂課也很貼心的為沒有相關經驗的同學開設了另一門完全由學生組織、規劃、授課的CS47，這堂課的目的就是教大家怎麼使用React Native框架開發設計跨平台的手機APP。但是因為我那個學期已經把學分都拿去用在別的課了，這門課只有旁聽和自己跟著做幾份練習的作業，所以到了要開發高保真原型時，我對於整個開發環境的建立、程式和檔案的架構還是很生疏。幸好有組員Emily幫忙從零開始建立，讓我可以依照既有的框架去增加一些新的頁面和幫忙開發一些功能。

{% include post_image.html src=page.inline-image7 alt="High-fidelity prototype" caption="高保真原型的其中一個使用流程說明" class="post-image" %}

我們組算是相當有野心，規劃開發了非常多的功能，包含社群媒體最常見的首頁的滾動瀏覽貼文、用來描述音樂或聲音的畫布功能、連結手機照片庫上傳照片或影片的功能，甚至還連結了Google Firebase作為資料後台，可以讓使用者製作的新貼文永久保存下來，而不僅是陳列事先做好的假貼文。有興趣的讀者可以到YouTube看我們的[DEMO影片]( https://www.youtube.com/watch?v=wPXySZfjnRc)。

### 3-4 成果發表(海報與提案)
d. school很多的課程，在期末都會有成果發表活動，開放所有人，包含學生、校友、或校外人士來觀賞學生努力了三個月的心血結晶，有時甚至會邀請校外專業人士來擔當評審，據說有些成果非凡的學生會當場收到公司面試邀請。成果發表當天，在史丹佛校園內的Building 550，多達55組學生團隊帶著海報聚集在一樓的川堂。當天也有安排外燴，讓學生和觀眾都不會餓肚子（展現史丹佛財力）。成果發表持續約兩個半小時，除了中間會上台做一分鐘的簡單提案簡報（pitch）之外，剩下時間會在自己的海報旁邊，為路過的觀眾講解我們一整路的設計過程和理念，並且邀請他們在手機上實際試用我們親手做的APP。

{% include post_image.html src=page.inline-image8 alt="CS147 Final project expo" caption="期末的成果發表，地點在550大樓" class="post-image" %}


其中，有幾位來賓作為評審，除了聽我們介紹，也會幫各組評分。相當幸運的，我們組努力的成果最終獲得肯定，一共獲得四個不同獎項，包含：最佳整體專案獎、最佳創新產品獎、最佳社會影響力獎、以及最佳概念獎。

{% include post_image.html src=page.inline-image9 alt="Award winning team with the professor" caption="獲獎後和授課老師James Landay合影" class="post-image" %}


## 課程學習心得
這門課程的節奏真的非常緊湊，在短短不到三個月的時間內，從零開始打造一個產品。雖然礙於時間有限，並沒有辦法深入鑽研每一個環節，但整個課程包含了一個新產品的創造過程，從一開始的定義問題及需求到製作三個不同保真度的原型，讓學生能夠體驗產品製作的不同階段性任務和不同角色分工，並對於各個環節都有一些基本的認識。雖然我沒有在業界開發產品的直接經驗，但據我的了解，業界在開發新產品時，也是透過類似的流程，並將整個專案分派給不同部門或員工，例如專案經理訂定整個產品開發的時間線和資源人力分配，產品經理定義問題、目標使用者、產品訴求和功能，UI/UX設計師負責設計外觀、介面和流程，以及工程師寫程式和處理背後的技術問題。

對於從未接觸過設計思維的我來說，第一次學習時，也覺得這些概念相當有趣。透過這樣的框架，什麼樣的問題似乎都能夠有條有理地一步一步剖析並找到解決方法，我想這也是d. school每年可以吸引這麼多學生的主要原因。史丹佛的學生都擁有相當強的專業能力，搭配上d. school的方法學，難怪有那麼多厲害的學生成功創業。（什麼時候才輪到我？😂）

總而言之，我認為這是一門非常有趣的實作課程。能夠遇到另外三位認真看待課程專案，並不惜犧牲睡眠的組員們，我也感到相當幸運。感謝史丹佛、d. school和我的同學們，讓我在十週的課程活動中受益匪淺。

## 我對設計思維的重點理解
-	在初期探索方向時，要專注在使用者的感受和潛在需求而不是解決方案
-	腦力激盪解決方案時，要遵從腦力激盪原則盡量激發大家的創意
-	透過製作簡單且快速的原型來驗證假設
-	原型要多找人來測試、試用，並根據反饋調整設計
