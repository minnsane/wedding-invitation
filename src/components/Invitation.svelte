<script lang="ts">
  import { derived } from "svelte/store";
  import { couple, greetings } from "../shared/app.store";
</script>

<div class="container">
  <div class="introduction">
    <p>
      {#each $greetings as greeting}
        {#if greeting.isSubText}
          <span class="subtxt">{greeting.text}</span>
        {:else}
          {greeting.text}
        {/if}
        {#each { length: greeting.followingGapLines } as _}
          <br />
        {/each}
      {/each}
    </p>
  </div>
  <div class="contact groom">
    <span class="role">신랑</span>
    <span class="name">{$couple.groom.name}</span>
    <div class="buttons">
      <div />
      {#each $couple.groom.contacts as contact}
        <a href={contact.link}>
          <img src="/src/assets/{contact.type}.png" alt="hh" />
        </a>
      {/each}
    </div>
  </div>
  <div class="contact bride">
    <span class="name">{$couple.bride.name}</span>
    <span class="role">신부</span><br />
    <div class="buttons">
      {#each $couple.bride.contacts as contact}
        <a href={contact.link}>
          <img src="/src/assets/{contact.type}.png" alt="hh" />
        </a>
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    height: inherit;
    display: grid;
    grid-template-columns: 1fr 4fr 4fr 1fr;
    grid-template-rows: 1fr 3fr 5fr 1fr;
    row-gap: 10px;
    column-gap: 20px;
  }

  .introduction {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 5;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .introduction p {
    text-align: center;
    width: 100%;
    line-height: 30px;
    color: #535c52;
  }

  .introduction p .subtxt {
    font-size: 14px;
    color: #797a71;
  }

  .contact.groom {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 3;
    padding-top: 30px;
    text-align: right;
  }

  .contact.bride {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 3;
    grid-column-end: 5;
    padding-top: 30px;
    text-align: left;
  }

  .contact .name {
    font-size: 26px;
  }

  .contact .role {
    color: #797a71;
  }

  .contact.groom .role {
    padding-right: 10px;
  }

  .contact.bride .role {
    padding-left: 10px;
  }

  .contact .buttons {
    display: grid;
    margin-top: 10px;
    grid-template-columns: repeat(4, 1fr);
  }

  .contact .buttons a {
    text-decoration: none;
    margin-right: 3px;
  }

  .contact .buttons a img {
    width: 85%;
  }
</style>
