---
layout: post
title:  "避免做白工：矽谷新創的MVP思維"
author: kyle
categories: [ 新創旅程, 科技, 美國工作 ]
timestamp: "1751238058000"
language: zh
image: assets/images/article13_img0.jpg
inline-image0: /assets/images/article13_img1.jpg
---

##### 20% 的公司專案最終以失敗收場。

在IT領域有個著名的研究調查報告 [Standish CHAOS report](https://wiki.sj.ifsc.edu.br/images/3/3b/CHAOSReport2015_rev.pdf)，專門針對IT產業的專案成果進行數據統計和分析。結果發現，**20% 的專案以失敗收場**（中斷、交付後未使用或無效），**50% 的專案遇到挑戰**（超出預算、時間延誤、只交付部分需求），**僅剩下最後 30% 的專案成功**。

不論是大公司或小公司，**很多的點子和專案最終都是白做工**。一個團隊可能花了一年時間開發出一個沒人需要的產品，運氣好一點還能重新來過，運氣不好就被競爭者淘汰或是組織重整。

如果專案註定要失敗，不如早點發現問題，早點失敗，早點停損。


### MVP不只是產品開發，而是一種做事思維
**Minimal Viable Product（MVP，最小可行性產品）**是個在矽谷新創圈廣為人知的概念。簡單來說，就是在想出任何創業點子後，先試著用最短的時間、最少的資源，實作出你的點子，並且實際測試功效，**失敗就轉向**（pivot）做其他點子。


{% include post_image.html src=page.inline-image0 alt="Build-Measure Learn" caption="MVP 迭代循環" class="post-image" %}

我過去以為只有在新創早期，仍在探索創業題目時，才會運用到 MVP 的概念開發產品或新事業。但在矽谷的新創公司實際工作兩年後，我發現 MVP 的概念可以應用在任何規模、成熟度的組織或產業。簡單來說，我認為 MVP 屬於廣義的 Prototyping，而 Prototyping 不只是打造出產品原型，更包含驗證許多最初點子裡面做出的各種假設。

舉例來說，今天我覺得打造出新的一個工具，可以提升員工的生產力和效率，間接增加提供給顧客的價值；或者今天我覺得改良現有的工作流程，可以讓員工的例行公事更輕鬆、並且降低犯錯率。這些假設在尚未驗證前，都只是你一廂情願的說詞，只有理論，沒有證據。如果我們**盲目地相信這些假設**，就要承擔可能在投入大量時間和資源後，**發現一切都是一場空的風險**。

因此，我們需要找出一套方法快速地驗證這些假設，這就是 MVP 發揮功用的最佳時機。

*註：有興趣的讀者可以參閱 Eric Ries 著名的 The Lean Startup（2011）一書，其中提及 MVP 概念以及 建造-測量-學習 的迭代循環（Build-Measure-Learn iteration loop），算是矽谷廣泛奉行的一套創業方法論。*


### 快速驗證：從想法到落實的最短路徑
以我自身的工作情境為例：假設今天我跟主管討論後，認為我們應該打造一個網頁工具，幫助公司內部更快、更準確地分析數據。我的思維邏輯可能如下：

- 「為甚麼我們需要一個新的工具？現有的做法/流程是什麼？使用者/工作負責人是誰？有什麼問題嗎？」
- 「新的工具目標解決的問題是什麼？預期可以帶來多少效益（估計量化數字）？」
- 「為了達成目標，這個工具需要哪些核心功能？」

在確定方向後，我會用最少的力氣在最短時間內打造出最核心的那一兩個功能，請使用者/工作負責人試用，並且從他們身上獲取實際的反饋。如果他們說這個新工具根本就是個垃圾，那可以考慮中止專案，或者進一步思考先前的思考邏輯中出了什麼錯誤，如何找出真正的痛點。如果他們說這個新工具還蠻不錯的，但是希望能有更多的功能...。那至少代表你的方向正確，可以考慮規劃接下來開發項目的優先順序。

簡而言之，MVP 的目的就是讓上述的**發想-實作-反饋**流程加速，讓專案可以及早進行方向調整或停損，減少不必要的時間和資源浪費。


### MVP的陷阱：技術債
MVP 雖然簡單有效，但是它也有弱點，那就是**技術債**（Technical Debt）。

在大多數情況下，不論是硬體還是軟體，產品原型多半無法成為最終產品。換句話說，創造產品原型通常較為粗糙，其目的僅是驗證概念和假設。當專案確定要打造出最終產品時，必須重新設計產品和製作流程，打造出最終具有高品質的產品。

*關於各階段的產品原型設計，可以參考我之前寫的文章[史丹佛的設計思維課 - 從APP介面設計學習創造性問題解決](https://blog.kyleptlin.com/stanford-design-thinking-course-zh-TW/)。*

技術債指的是，從粗糙的產品原型升級到精緻的最終產品的過程中，需要付出的代價。而這樣的代價，會在你依賴簡單快速的 MVP 時，穩定且持續地累積，等你意識到該處理時，可能已經是一屁股債。

不論是硬體或軟體，都可能在 MVP 階段時選用簡單但不可靠或難以規模化的設計。這些設計在開發前期通常都是無害的，等到了系統的負荷越來越大，才會突然發現這樣的設計無法承受，必須打掉重來。

MVP 與技術債之間的平衡，可以根據個案進行深入探討，但這邊我只是想提醒，在專注速度的過程中，也需要保持適當的平衡。針對產品的某些部分，在設計初期就該提早考慮到擴充性和量化可行性，這部分我認為需要考驗工程師及團隊的經驗去拿捏分寸，在快速及可靠之間找到甜蜜點。


### 新創環境更適合MVP：自由、快速、容錯
根據我在新創的工作經驗，我認為**新創環境比大公司更適合 MVP 思維**。

新創對比於大企業，在以下幾個面向有巨大差異:
- **權限開放** (可以存取各層級資料)
- **專案自由度** (不容易踩到別的部門的職責)
- **錯誤耐受度** (現有的系統就不完善，破壞創新的風險相對小)
	
在新創公司，我作為一個基層工程師具有相當高的權限，可能可以存取接近全公司所有的資料；在大公司，我的朋友告訴我，他光是請公司IT部門提供資料權限，來來回回可能就要花費一兩週時間。

專案自由度是另一個新創大獲全勝的面向。在大公司裡，一個專案或工作流程可能牽涉到好幾個不同的團隊和部門，如果我今天想要改變這個流程，我需要先和其他團隊溝通，甚至可能得花時間說服對方讓你試，最終很可能不了了之。而在新創公司，我只要先跟主管請示，主管或自行決定或跟幾個其他團隊的主管討論，通常一兩天內就可以達成共識。

最後，新創公司與大公司的錯誤耐受度差異巨大。大公司有既有的客戶、產品和工作流程，任何的創新或改變都潛藏著破壞現況的風險，這讓大公司普遍傾向保守的作法。反觀新創公司，本來的客戶就不多，產品可能也問題重重，創新的潛在機會經常遠大於風險，因此也更樂於接受改變。


### 結語
每個產業、產品、部門的限制都不同，但我相信人和專案的運作是通用的。

**你不一定要做 MVP，但要有 MVP 思維**，知道你眼下的工作正在解決甚麼問題、創造甚麼價值，隱含甚麼假設、承擔甚麼風險。

