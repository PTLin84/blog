---
layout: post
title:  "能源轉型進行式：AI如何引領電池儲能新時代"
author: kyle
categories: [ 科技, 能源, 電池 ]
timestamp: "1735174883000"
language: zh
image: assets/images/article10_img0.jpg
inline-image0: /assets/images/article10_img0.jpg
inline-image1: /assets/images/article10_img1.jpg
---

2024年即將邁入尾聲，過去一年在科技領域仍然是以AI為主要話題，作為AI基礎建設的主要供應商之一，NVIDIA股價在過去一年也翻了將近三倍([NASDAQ: NVDA](https://www.nasdaq.com/market-activity/stocks/nvda))。在這充滿AI的時代裡，什麼東西都能跟AI搭上邊，然而，是否真正具有商業價值就又另當別論。我想大部分的人透過新聞媒體的介紹，對於現在最主流、最受歡迎的AI都有基本的了解，所以這篇文章我想簡單分享一下與我工作有關、不那麼廣為人知的AI應用 - **AI在能源及電池領域的應用**。

## 全球最大規模二次應用電池儲能系統

今年五月，敝司[Element Energy](https://elementenergy.com/)正式啟動了全球最大規模的二次應用電池儲能系統(second-life BESS)，在美國德州部署了53 MWh能量的電池儲能系統，相當於900台電動車的電池能量，詳見[新聞報導](https://www.energy-storage.news/element-energy-commissions-worlds-largest-second-life-bess-at-53mwh-partners-with-lg-es-vertech/)。二次應用是指原本用於其他用途的電池，因為使用過程中出現瑕疵或容量衰減等原因，無法再繼續用於原本的高需求場景，如電動車上，這些電池經過回收和再利用，轉而應用於儲能系統。撇開二次應用不談，這類大型電池儲能系統目前在全球皆快速成長。

{% include post_image.html src=page.inline-image0 alt="Utility Battery Energy Storage Systems" caption="大規模電池儲能系統示意圖" class="post-image" %}

## 電池儲能市場高速成長

根據麥肯錫顧問公司於2023年的[研究報導](https://www.mckinsey.com/industries/automotive-and-assembly/our-insights/enabling-renewable-energy-with-battery-energy-storage-systems)，用於電網(Power Grid)及能源供應(Utility)相關的電池儲能系統市場年複利成長率CAGR高達29%，預計在2030年達到860億美金($86B)，電池系統總能量達到520 - 700 GWh。

其中推動美國電池儲能系統發展的是拜登政府在2022年推行的**降低通膨法(Inflation Reduction Act)**，提供了3700億美金($370B)作為潔淨能源投資。這類大型電池儲能系統主要可以用在再生能源(如太陽能、風力、地熱發電)的緩衝、資料中心備用電源，除了供應用電設備以外，這些電池儲能系統還可以提升電網韌性並且進行電力市場套利操作。在用電的離峰時間，這些電池儲能系統可以用低價購入電力進行充電，並在用電的尖峰時間、電力價格較高時，進行放電賺取價差。除了套利以外，這樣的操作也可以讓電網更具彈性和韌性，幫助消除電力供給和需求之間的不匹配。

這些大型電池儲能系統不像是家用小電器，如計算機、相機、鍵盤、滑鼠等，只要把電池放進插槽裡就沒事了。大型電池儲能系統通常是用貨櫃來組裝，和運輸貨櫃一樣，通常有20英尺、40英尺等尺寸，也就是6公尺或12公尺長的貨櫃，裡面裝滿了電池。為了確保電池儲電系統的正常運作和安全，需要搭載**電池管理系統(Battery Management Systems, BMS)**。

## 什麼是電池管理系統？

電池管理系統，顧名思義，就是管理電池的系統。主要的目標是確保電池正常運作，不會著火也不會爆炸。更進一步，是透過監測系統和演算法，讓系統充放電盡量以穩定且平衡的方式進行，藉此增加電池的使用壽命。最後，電池管理系統也會提供重要數據資訊，讓使用者或系統管理者了解電池的歷史和當前使用狀況和壽命。

為了達到上述目標，電池管理系統通常會包含以下系統：

+ **電池數據監測**: 即時蒐集電池的電壓、電流、溫度等重要數據
+ **電壓/電流控制**: 控制系統的充放電時間及速率
+ **電壓平衡**: 主動或被動地將高電壓的電池電量轉移或消耗，避免因單一電池過度充放電而縮短壽命或導致系統故障
+ **過載保護**: 最簡單有效的安全措施，如同保險絲，在電流過大時自動斷電的保護系統
+ **冷卻系統**: 透過空氣或液體冷卻電池組，避免電池過熱縮短壽命或引發**熱失控**(thermal runaway)

要做出好的電池管理系統，除了要將上述各系統完善以外，電池儲能系統本身的電路設計、控制系統設計、結構設計、散熱設計也相當重要，但因為不是我的專長，就不深入討論了。


## AI如何應用在電池能源領域？

希望講到這裡，各位已經對電池儲能系統和電池管理系統有些基本的了解。回到一開始提到的能源及電池AI應用，到底電池儲能系統如何和AI搭上邊？身為電池演算法研發組的成員，我認為AI可以有效應用在電池管理演算法上，更具體來說，包含**安全監測**、**延長壽命**、**提升產出**、以及**電池研發**。

隨著運算力的提升，在2010年就有許多人號稱人類將進入**大數據時代**。而在接下來的幾年，**深度學習**相關的研究進展則帶動了AI的商業應用。任何事物，只要有足夠數據，似乎就能受益於大數據或AI，電池也不例外。為了能夠蒐集完整且精準的電池數據，[Element Energy](https://elementenergy.com/)採用的策略是將每個最小單元的電池都連接上電線，記錄電壓、電流、和溫度數據。

### 電池組合名詞定義

電池依照數量通常劃分為單元(cell)、模組(module)、和組(pack)，如圖所示，cell又有不同的形狀和包裝方式，包含圓柱形(cylindrical)、軟包裝(pouch)、和方罐(prismatic)，可參考[材料世界網](https://www.materialsnet.com.tw/DocView.aspx?id=53259#:~:text=%E7%94%B1%E4%BB%A5%E4%B8%8A%E5%9B%9B%E5%80%8B%E4%B8%BB%E8%A6%81,(b)~(e)%EF%BC%89%E3%80%82)。而將多個cell組合起來就是一個module，多個模組組合起來就是一個pack。

{% include post_image.html src=page.inline-image1 alt="Different levels of batteries" caption="電池外型設計及不同數量級名詞定義 (圖片來源: Wikimedia Commons)" class="post-image" %}

### 單元級電池管理AI系統 (Cell-level AI-BMS)
透過直接監測每個電池單元(cell)，可以精確地計算和評估每個電池的安全、壽命、能量產出狀態。由於電池內部的結構和物理過程非常複雜，傳統的監控系統無法非常精確地預測電池的行為和潛在風險。透過AI模型來預測電池的健康狀況，能夠讓管理者即時了解電池的狀態並提前採取行動。相較於傳統電池管理系統將模組(module)當作最小監控單元，這樣的做法雖然會提高成本，但也能蒐集更準確可靠的數據，確保重要的數據特徵不會被多個電池單元所稀釋。

### 優質數據多多益善
有了大量的好數據以後，這些數據可以拿來訓練AI演算法，開發安全監測演算法，在電池進入危險的狀態前就先被標記、加上充放電限制、或是更換。透過其他非破壞式的研究方法，如微分電壓(differential voltage)、微分電容量(differential capacity)等，也可以更有效分析電池各部件(正極、負極、鋰含量)隨時間和使用的衰退情形，如此可以針對電池的衰退狀況調整使用方式，藉以平衡電池壽命最大化和能量使用最大化。

### 解開黑盒子，提供電池製造商數據回饋

電池領域一大問題是缺乏足夠的實驗數據，目前最常見的鋰離子電池通常需要上千次的充放電循環以及數年的時間才能看見明顯的壽命衰退。透過蒐集大量的單元級電池實地數據，電池管理系統商可以與材料設計和電池製造商合作，分析大規模的電池數據並有效幫助新舊電池的開發或改良。

## 結語

儘管電池儲能系統市場快速增長，電池管理系統的技術仍在逐漸發展和突破。搭著AI技術的突破和雲端基礎建設的快速發展，新一代的電池和能源系統是否能幫助人類快速達成能源轉型並解決當今能源使用和短缺的挑戰呢？給這些新一代的能源開拓者們一點時間，讓我們一起見證答案。
