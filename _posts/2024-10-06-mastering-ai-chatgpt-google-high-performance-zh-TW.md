---
layout: post
title:  "掌握AI：為什麼ChatGPT + Google是工作效率的黃金組合"
author: kyle
categories: [ 美國工作, 軟體開發, 科技 ]
timestamp: "1728261990000"
language: zh
image: assets/images/article6_img0.jpg
inline-image0: /assets/images/article6_img0.jpg

---

<h4>「你知道每天有多少人使用ChatGPT工作嗎？」</h4>

<h4>根據 <a href="https://stackoverflow.com/">Stack Overflow</a> 於 2023 年的 <a href="https://survey.stackoverflow.co/2023/#most-popular-technologies-ai-search-prof">問卷調查</a> 顯示，超過 83% 的專業程式開發者定期使用 ChatGPT 幫助完成工作。</h4>


幾個月前回台灣時，偶然在誠品看見史丹佛電腦科學碩士畢業的程世嘉學長的新書 - *[AI世界的底層邏輯與生存法則](https://www.gvm.com.tw/article/112580)*。書中提到了一個有趣的概念，**「取代你的不是AI，而是使用AI的人！」**自ChatGPT於2022年11月發表以來，已經過了將近兩年。除了ChatGPT模型的更新和進化，市面上也越來越多競爭對手，包含[Claude](https://claude.ai/)、[Google Gemini](https://gemini.google.com/)等，這些AI大型語言模型已經深刻改變最前線使用者的工作習慣。

## ChatGPT已經融入我的工作流程
幾週前，主管交辦我一件實驗性的專案，要對一些電池資料進行聚類分析（clustering），這是我從來沒有做過的工作，根本不確定該如何完成。當我開始執行這個專案時，我先花了15分鐘閱讀關於各種[聚類分析演算法](https://scikit-learn.org/stable/modules/clustering.html)的簡介，接著很熟練地請教我最博學多聞的同事 - ChatGPT，我該如何進行這樣的分析。他也不辜負我的期望，一步一步列出建議的執行步驟，包含可以使用哪個開源軟體的哪些模型以及如何使用。

由於專案是實驗性質，我的目標是在最短時間內先做出初步的分析並評估專案的潛在價值。於是我選用ChatGPT提供的方法中最簡單的一個，用一個下午的時間就產出了初步的分析結果。**如果沒有ChatGPT，同樣的成果可能得耗費我一週的時間。**

## ChatGPT三大應用面向
根據我在工作上使用[ChatGPT](https://chatgpt.com/)和[GitHub Copilot](https://github.com/features/copilot)的經驗觀察（以資料分析和軟體開發為主），我認為ChatGPT對程式開發者的幫助可以歸類為三大面向：

<h3 style="display:inline;">1. 語言/邏輯翻譯</h3> <h4 style="display:inline;">(Language and Logic Translation)</h4> 
**人類使用自然語言思考和溝通，機器和軟體則使用程式語言和代碼。**ChatGPT作為大型語言模型，具有解析語意和翻譯的能力，因此可以作為人類和機器之間的介面，將人類的想法轉換成機器能夠理解的程式代碼。舉例來說，我可以用文字描述"Use python to write a function that takes a csv file as input and plot the data into a figure."。ChatGPT給的回應包含，步驟一：使用pandas讀取csv檔案，步驟二：使用matplotlib畫圖，並且提供了對應的程式碼，以及在最後提供解釋，說明程式碼中呼叫的read_csv、plot、show函數分別的作用。

ChatGPT提供的程式碼：
```python
import pandas as pd
import matplotlib.pyplot as plt

def plot_csv_data(file_path):
    # Read the CSV file into a pandas DataFrame
    data = pd.read_csv(file_path)
    
    # Check the first few rows of the data to understand its structure
    print(data.head())
    
    # Plot the data
    data.plot(kind='line')  # You can change this to other plot types (e.g., 'bar', 'scatter')
    
    # Display the plot
    plt.title("Plot from CSV Data")
    plt.xlabel("Index")
    plt.ylabel("Values")
    plt.grid(True)
    plt.show()

# Example usage
# plot_csv_data('path_to_your_file.csv')
```

要注意的是，**目前ChatGPT提供的程式碼通常有幾個疑慮**：
- **正確率、可靠度**  
ChatGPT回應的可靠度會隨著目標任務的常見程度改變：越常見的功能，網路上也越多相關資料讓ChatGPT學習，通常他提供的程式碼正確率也較高。若是比較冷門的功能或程式語言，有比較高的機率會得到瞎掰的結果。

- **效率**  
就算程式碼可以運行，很多時候，ChatGPT提供的解答並沒有經過最佳化。也就是說，程式可以達成你的要求，但並不是最快最好的解法。這時候還是要透過工程師優化程式，讓程式正確、快速、且易於理解和管理。

- **安全性**  
同樣是能夠運行的程式碼，使用不同的解法可能會有不同的資安疑慮。尤其是當軟體具有高資安需求時，如銀行帳戶管理，還是需要工程師介入並確保程式具有高度的安全性。


<h3 style="display:inline;">2. 除錯</h3> <h4 style="display:inline;">(Debugging and Troubleshooting)</h4> 
程式除錯（debugging）一直是軟體工程師最大的敵人，透過提供程式碼給ChatGPT或GitHub Copilot分析，可以更有效率地找出bug（需注意是否有重要公司機密存在於程式碼中，避免洩漏）。有時比較簡單的情況，ChatGPT會直接指出程式碼中錯誤的地方並提供修改建議。就算沒辦法提出直接的答案，ChatGPT也很擅長提供一步一步的錯誤排除（troubleshooting）流程，例如：先檢查是否有簡單的typo，再檢查檔案名稱和路徑是否正確，再檢查系統參數設定是否正確...。雖然這還是需要工程師一步一步地執行除錯，但ChatGPT將常見的問題點指出和條列已經可以幫上很大的忙。

<h3 style="display:inline;">3. 框架建立/學習</h3> <h4 style="display:inline;">(Building High-Level Understanding)</h4> 
最後，是我最喜歡的部分，也就是透過ChatGPT幫你建立學習的框架。當我對於任何專有名詞、技術、程式語言等有任何問題時，我都會問ChatGPT，而他通常都會提供非常清楚的框架讓我迅速了解一個專有名詞或技術的背景知識，例如：名詞定義、特徵、常見應用、應用領域等。

在ChatGPT的回答中，我可能會發現新的專有名詞或技術，如果好奇可以再進一步追問，或是透過更多問題釐清回應中沒有細說的內容。透過這樣往復式的問答，可以讓我在幾分鐘的時間內快速了解某項技術的功能，並評估適不適合套用在我想做的工作上。

除此之外，我也喜歡請ChatGPT告訴我怎樣的做法符合業界常用標準（industry best practices），確保我的工作成果具有一定的品質。


## ChatGPT與Google的黃金組合
即使ChatGPT已經非常強大，目前的大型語言模型都還是具有一個致命的缺點：**AI幻覺（AI Hallucination）**。

**AI 幻覺**是指 AI 模型生成的錯誤或誤導性結果。這類錯誤可能由許多因素造成，包括訓練資料不足、模型的假設有誤，或是用來訓練模型的資料存在偏誤。對用來制定重要決策 (例如醫療診斷或金融交易) 的 AI 系統而言，AI 幻覺可能是一大問題。 — [Google Cloud 什麼是AI幻覺](https://cloud.google.com/discover/what-are-ai-hallucinations?hl=zh-TW)


簡單來說，有時候ChatGPT會瞎掰，而且講得煞有其事，慘痛的案例如：[去年美國有律師在法庭上使用ChatGPT提供的虛構判例而遭到處罰](https://www.reuters.com/legal/new-york-lawyers-sanctioned-using-fake-chatgpt-cases-legal-brief-2023-06-22/)。

為了避免這樣的慘劇，進行任何任務時，可以先使用ChatGPT獲得初步的程式碼、程式架構、或對於一項技術的宏觀（high-level）了解。有了大方向後，針對重要的細節，再透過Google搜尋可靠度高的網站，例如軟體技術的官方說明文件，並從中獲取正確且最新的資訊。**適當地搭配ChatGPT和Google，透過這樣交叉驗證的工作模式才是兼顧效率與正確性的做法。**

{% include post_image.html src=page.inline-image0 alt="Holding ChatGPT and Google on each hand" caption="在當今AI技術飛速發展的背景下，許多人已經開始運用ChatGPT等工具來提升工作效率。左手拿著ChatGPT，右手拿著Google，這無疑是一種常見的現象。" class="post-image" %}

## 結語
儘管ChatGPT等大型語言模型依舊存在一些重要問題待解決，我認為ChatGPT對於工作效率的提升仍然相當顯著。尤其是在快速開發時，工程師結合AI將能夠最大化生產力。但是在需要高可靠度和有安全疑慮的應用情況下，仍然要透過人工謹慎的查證。

展望未來，AI工具的演進無可避免，掌握新工具和技術的能力將是每位知識工作者必備的競爭力。提升自己的競爭力，才能避免被**「善用AI的人」**取代。

<Hr>

PS 文章標題和內文的一些格式也都是ChatGPT的傑作 👍

註：文中若有對大型語言模型錯誤的資訊或理解，請不吝批評指教🙂。

圖片素材來源：<a href="https://www.flaticon.com/free-icons/open-hand" title="open hand icons">Open hand icons created by Irfansusanto20 - Flaticon</a>