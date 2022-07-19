<script>
  import { timecards } from "../shared/app.store";
</script>

<h2 class="title">커플 타임라인</h2>
<div class="wrapper">
  <div class="timeline">
    <div class="outer">
      {#each $timecards as card}
        <div class="time-card">
          <div class="time-info">
            <h3 class="time-title">{card.title}</h3>
            <p>{@html card.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .title {
    margin-top: 70px;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    margin-bottom: 70px;
  }
  .timeline {
    padding: 0 30px;
    display: flex;
    justify-content: center;
  }

  .time-card {
    position: relative;
    max-width: 400px;
  }

  .time-card:nth-child(odd) {
    padding: 20px 0 20px 20px;
  }
  .time-card:nth-child(even) {
    padding: 20px 20px 20px 0;
  }
  .time-card::before {
    content: "";
    position: absolute;
    width: 50%;
    border: solid #bebf9b;
  }
  .time-card:nth-child(odd)::before {
    left: 0;
    top: -5px;
    bottom: -4.5px;
    border-width: 5px 0 5px 5px;
    border-radius: 50px 0 0 50px;
  }
  .time-card:nth-child(even)::before {
    right: 0;
    top: 0;
    bottom: 0;
    border-width: 5px 5px 5px 0;
    border-radius: 0 50px 50px 0;
  }
  .time-card:first-child::before {
    border-top: 0;
    border-top-left-radius: 0;
  }
  .time-card:last-child:nth-child(odd)::before {
    border-bottom: 0;
    border-bottom-left-radius: 0;
  }
  .time-card:last-child:nth-child(even)::before {
    border-bottom: 0;
    border-bottom-right-radius: 0;
  }

  .time-info {
    display: flex;
    flex-direction: column;
    background: #fff;
    color: #333e42;
    border-radius: 10px;
    padding: 10px;
  }

  .time-title {
    color: #898c70;
    position: relative;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
  }

  .time-title::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 999px;
    border: 3px solid #bebf9b;
  }

  .time-info p {
    font-size: 13px;
    line-height: 15px;
    word-break: keep-all;
    color: #525252;
  }

  .time-card:nth-child(even) > .time-info > .time-title {
    text-align: right;
  }

  .time-card:nth-child(odd) > .time-info > .time-title::before {
    left: -32px;
  }

  .time-card:nth-child(even) > .time-info > p {
    text-align: right;
  }

  .time-card:nth-child(even) > .time-info > .time-title::before {
    right: -32px;
  }
</style>
