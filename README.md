# 10차 과제 

## DEMO SITE
https://wb96choi.github.io/10th_project/


![audiotechinca](https://user-images.githubusercontent.com/81698301/179644710-772eefb0-a2a9-4282-883c-ec45ef0f7804.gif)

[10차 과제]
오디오 테크니카 모바일 웹사이트를 만들었습니다.
-----------------


## 기능 구현

-----------------
**메인프레임**

* 헤더, 푸터, 토글메뉴창이 모든 페이지마다 실행되도록 함
```c
 - 헤더 안에 뒤로가기버튼, 두가지 로고가 번갈아 Fadein&out하는 로고애니메이션, 토글 메뉴버튼을 넣었습니다.
 - 뒤로가기버튼이 필요없는 페이지는 간단한 클래스를 추가하여 보이지 않게 했습니다.  {onclick="history.back()"}
 - 토글메뉴버튼 클릭시 메뉴창이 실행되며, 토글메뉴버튼은 닫기버튼으로 전환됨
 - 메뉴창 안에 로그인, 장바구니, 찜한 상품등 간단한 페이지로 넘어갈 수 있도록 구현해 놓았습니다.
 - 메인카테고리메뉴 옆 + 버튼을 누르면 서브메뉴가 애니메이션으로 Slidedown하고 이는 토글클릭이 가능합니다.
```

------------------
**메인페이지**

* 메인페이지 각각의 칼럼에 간단한 정보가 기입되어 있고 자세히보기 버튼(CTA 버튼) 클릭시 제품 상세페이지로 이동됨

-------------------
**로그인 창**
 
* input 태그를 사용하여 아이디 및 패스워드를 입력할 수 있게 하였으며 아이디 저장 및 자동 로그인에 checkbox를 삽입하였으나 기본 모양이 마음에 들지 않아 간단한 코드를 추가하여 원하는 이미지대로 나오게끔 작성함

------------------
**제품 페이지**

* 제품의 정보는 JSON파일로 정리하였으며 fetch 코드로 불러내어 html형식에 맞게 출력되도록 작성하였습니다.
* 제품 페이지 카테고리메뉴(소세지 메뉴)를 클릭하면 카테고리별로 분류가 됩니다.
* 제품 클릭시 상세페이지로 이동됩니다.

------------------
**상세 페이지**

* 상세페이지 상단에는 제품 정보가 기입되어 있고
이미지 슬라이더(swiper)를 삽입하여 사용자가 직접 넘겨서 다음이미지를 볼 수 있게끔 설정해놨습니다.
* radio버튼으로 색상을 선택할 수 있고 수량버튼을 추가하여 플러스버튼과 마이너스버튼으로 수량을 선택할 수 있게 만들었습니다.(Javascript 사용)




## 사용 라이브러리
|JavaScript|HTML5|CSS|
|---|---|---|
