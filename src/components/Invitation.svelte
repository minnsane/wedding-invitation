<script lang="ts">
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
          <img src="/src/assets/{contact.type}.png" alt={contact.type} />
        </a>
      {/each}
    </div>
    <div class="parents">
      <div class="p-wrapper">
        <span class="p-title">신랑측 혼주</span>
        {#each $couple.groom.parents as parent}
          <span class="p-role">{parent.role}</span>
          <span class="p-name">{parent.name}</span>
          <div class="p-buttons">
            {#each parent.contacts as contact}
              <a href={contact.link}>
                <img src="/src/assets/{contact.type}.png" alt={contact.type} />
              </a>
            {/each}
          </div>
        {/each}
      </div>
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
    <div class="parents">
      <div class="p-wrapper">
        <span class="p-title">신부측 혼주</span>
        {#each $couple.bride.parents as parent}
          <span class="p-role">{parent.role}</span>
          <span class="p-name">{parent.name}</span>
          <div class="p-buttons">
            {#each parent.contacts as contact}
              <a href={contact.link}>
                <img src="/src/assets/{contact.type}.png" alt={contact.type} />
              </a>
            {/each}
          </div>
        {/each}
      </div>
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
    column-gap: 30px;
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
    width: 80%;
    opacity: 0.8;
  }

  .parents {
    margin-top: 4vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .parents .p-wrapper {
    text-align: center;
  }

  .groom .parents .p-wrapper {
    grid-column-start: 2;
    grid-column-end: 5;
  }

  .bride .parents .p-wrapper {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  .parents .p-title {
    display: block;
    color: #797a71;
    margin-bottom: 2.4vh;
    font-size: 18px;
  }

  .parents .p-role {
    color: #797a71;
    font-size: 14px;
  }

  .parents .p-name {
    font-size: 18px;
  }

  .parents .p-buttons {
    display: grid;
    padding: 8%;
    grid-template-columns: repeat(2, 1fr);
  }

  .parents .p-buttons a img {
    width: 60%;
    opacity: 0.8;
  }
</style>
