<script>
  const cards = [
    {
      title: `2017년 2월`,
      description: `일산의 '크로스핏 무도'에서 운동을 하면서 동갑내기 친구로 만났어요. 운동1: 모임9의 비율로 만나며 <span style="font-weight: 500">동네친구</span>가 되었어요.`,
    },
    {
      title: `2018년 12월`,
      description: `남들 다 본 영화를 늦게 접한 둘이서 '보헤미안 랩소디'를 보게 되었어요. 둘이 만나 할 얘기도 없고, 너무 어색해서 영화보기 5분 전에 만나 끝나고 바로 헤어졌습니다.<br>만난 시간 139분, <span style="font-weight: 500">대화 나눈 시간 3분.</span>`,
    },
    {
      title: `2019년 1월`,
      description: `다른 크로스핏 친구들과 여럿이 라오스 여행을 갑니다. 비행기를 같이 앉게 되어 끝말잇기로 시간을 보내면서 <span style="font-weight: 500">제법 친해지게 되었어요.</span>`,
    },
    {
      title: `2019년 4월`,
      description: `또다른 크로스핏 친구들과 (운동은 안하면서) 제주도 여행을 갔습니다. 돌아오는 길에 민정이 놓고 내린 기념품을 성화가 챙겨주며 한번 더 보게 되었고, <span style="font-weight: 500">우리의 인연은 시작되었습니다.</span>`,
    },
    {
      title: `2022년 9월`,
      description: `그렇게 3년 5개월동안 함께 웃고, 울고, 꿈꾸는 시간을 보낸 뒤, <span style="font-weight: 500">2022년 9월 17일, 우리 결혼합니다!</span>`,
    },
  ];
</script>

<div class="timeline">
  <div class="outer">
    {#each cards as card}
      <div class="card">
        <div class="info">
          <h3 class="title">{card.title}</h3>
          <p>{@html card.description}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .timeline {
    margin: 20px auto;
    padding: 20px;
    display: flex;
    justify-content: center;
  }

  .card {
    position: relative;
    max-width: 400px;
  }

  .card:nth-child(odd) {
    padding: 20px 0 20px 20px;
  }
  .card:nth-child(even) {
    padding: 20px 20px 20px 0;
  }
  .card::before {
    content: "";
    position: absolute;
    width: 50%;
    border: solid rgb(104, 104, 171);
  }
  .card:nth-child(odd)::before {
    left: 0;
    top: -5px;
    bottom: -4.5px;
    border-width: 5px 0 5px 5px;
    border-radius: 50px 0 0 50px;
  }
  .card:nth-child(even)::before {
    right: 0;
    top: 0;
    bottom: 0;
    border-width: 5px 5px 5px 0;
    border-radius: 0 50px 50px 0;
  }
  .card:first-child::before {
    border-top: 0;
    border-top-left-radius: 0;
  }
  .card:last-child:nth-child(odd)::before {
    border-bottom: 0;
    border-bottom-left-radius: 0;
  }
  .card:last-child:nth-child(even)::before {
    border-bottom: 0;
    border-bottom-right-radius: 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    background: #f1f0ec;
    color: gray;
    border-radius: 10px;
    padding: 10px;
  }

  .title {
    color: rgb(104, 104, 171);
    position: relative;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
  }

  .title::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 999px;
    border: 3px solid rgb(104, 104, 171);
  }

  .info p {
    font-size: 13px;
    line-height: 15px;
    word-break: keep-all;
    font-weight: 300;
  }

  .card:nth-child(even) > .info > .title {
    text-align: right;
  }

  .card:nth-child(odd) > .info > .title::before {
    left: -35px;
  }

  .card:nth-child(even) > .info > p {
    text-align: right;
  }

  .card:nth-child(even) > .info > .title::before {
    right: -35px;
  }
</style>
