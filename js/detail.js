// 서버에 제품 데이터 요청(data request)(가져오기)
function getData() {
    // 
    const DataURL = 'https://raw.githubusercontent.com/ASBEN1/2022.07.12_Team_Project_only_json/main/data.json';
    //'깃허브 주소 (깃허브에 올린 json 파일(경로) 항목을 눌러서 row를 누른다 그 다음 주소를 복붙)'
    fetch(DataURL)
      .then(function (res) {
        return res.json(); // JSON 객체 변환
      })
      .then(function (obj) {
        // obj 데이터
        showDetail(obj);
        console.log(obj);
      });
  };
  
  
  function showDetail(obj) {
  
    // URL quary parameter(매개변수)
    const quary = location.search;
    console.log(quary);
    // ? URL quary문을 object(변수)로 변경 -> html 에서도
    let params = new URLSearchParams(quary).get('id');
    // const는 상수라 변경이 불가라서 let으로 변경해준다
    console.log(params);
  
  
    // 해당 id 제품 출력
    let mainGroup = obj[params].mainGroup;
    let category = obj[params].category;
    let name = obj[params].name;
    let price = obj[params].price;
    let imgUrl = obj[params].imgUrl;
    let imgUrl2 = obj[params].imgUrl2;
    let imgUrl3 = obj[params].imgUrl3;
    let imgUrl4 = obj[params].imgUrl4;
    let text = obj[params].text;
    let color1 = obj[params].color1;
    let color2 = obj[params].color2;
    let color3 = obj[params].color3;
  
    // products-detail.html에 각 변수값 주입
  
    // $('#products-detail #detail1 .mainallCT figure .swiper-wrapper .swiper-slide img').attr('src', imgUrl);
    // $('#products-detail #detail1 .mainallCT container h1 span').text(mainGroup);
    // $('#products-detail #detail1 .mainallCT container h1').text(category);
    // $('#products-detail #detail1 .mainallCT container h2').text(name);
    // $('#products-detail #detail1 .mainallCT container p').text(text);
    // $('#products-detail #detail1 .mainallCT p .ps1').text(price);
  
    let html = `
    <div class="mainallCT">
  
    <div class="containerD">
  
      <h1><span>${mainGroup}</span> > ${category}</h1>
  
      <h2>${name}</h2>
  
      <p>${text}</p>
  
    </div>
  
    <figure>
    <div class="swiper">
    <!-- 필수/추가 UI구성요소 -->
    <div class="swiper-wrapper">
    <!-- Slider 본체 ( 이곳에 이미지 삽입) -->
    <div class="swiper-slide">
        <img src="${imgUrl}" alt="${name}"> 
    </div>
    <div class="swiper-slide">
        <img src="${imgUrl2}" alt="${name}"> 
    </div>
    <div class="swiper-slide">
        <img src="${imgUrl3}" alt="${name}"> 
    </div>
        
    <!-- 계속 추가 가능 -->
    </div>
    <!-- 하단 pager(옵션) -->
    <div class="swiper-pagination"></div>           
</div>
  
    </figure>
  
    <div class="option">
  
      <div class="wrap">
  
        <div class="wrapcol1">
  
          <p class="wcolor">색상 : </p>
  
          <form class="wform">
            <input type="radio">
            <p>${color1}</p>
          </form>
  
        </div>
  
  
        <div class="wrapcol2">
  
          <p class="qtitle">수량: </p>
  
          <div class="quantity">
            <span id="minus">-</span>
            <span id="num">1</span>
            <span id="plus">+</span>
          </div>
  
        </div>
  
        
      </div>
  
    </div>
  
    <div class="buy">
  
      <p class="price">
        <span>판매가</span>
        <span>&#8361 ${price}</span>
      </p>
  
      <div class="buy-btn-group">
        <a href="#" class="btn-large btn-outline">장바구니</a>
        <a href="#" class="btn-large btn-buy">구매하기</a>
      </div>
  
    </div>
  
  </div>
    `

// 수량 버튼 real
$(function(){
    $('#minus').click(function(e){
    e.preventDefault();
    var stat = $('#num').text();
    var num = parseInt(stat,10);
    num--;
    if(num<=0){
  
    num =1;
    }
    $('#num').text(num);
    });
    $('#plus').click(function(e){
    e.preventDefault();
    var stat = $('#num').text();
    var num = parseInt(stat,10);
    num++;
    
    if(num>5){
  
    num=5;
    }
    $('#num').text(num);
    });
    });

    

    

  // 상세페이지 이미지 슬라이더
  $(function(){
    const swiper = new Swiper('.swiper', {
        // 옵션
      
        direction: 'horizontal',
        loop: true, // true: 무한 넘김 false: 끝이 있음
      
        // 하단 pager
        pagination: {
            // class명 지정
        el: '.swiper-pagination',
          type: 'bullets'
        },
      
      });
  });




  $('#detail1').append(html);


  }


  


  $(function () {
    getData();
  });
  
  
  // const plus = document.querySelector(".plus"),
  // minus = document.querySelector(".minus"),
  // num = document.querySelector(".num");
  
  // let a = 1;
  // plus.addEventListener("click", ()=>{
  //     a++;
  //     a = (a < 10) ? "0" + a : a;
  //     num.innerText = a;
  //     console.log("a");
  // });
  