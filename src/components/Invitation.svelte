<script lang="ts">
  import { couple, greetings } from "../shared/app.store";

  enum MainRole {
    Groom = "groom",
    Bride = "bride",
  }

  function getKRName(role: MainRole): string {
    return role === MainRole.Groom ? "신랑" : "신부";
  }
</script>

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
<div class="contact">
  {#each [MainRole.Groom, MainRole.Bride] as role}
    <div class={role}>
      <div class="main-role">
        {#if role === MainRole.Groom}
          <span class="role">{getKRName(role)}</span>
          <span class="name">{$couple[role].name}</span>
        {:else}
          <span class="name">{$couple[role].name}</span>
          <span class="role">{getKRName(role)}</span>
        {/if}
        <div class="buttons">
          {#each $couple[role].contacts as contact}
            <a href={contact.link}>
              <img src="/image/{contact.type}.png" alt={contact.type} />
            </a>
          {/each}
        </div>
      </div>

      <div class="parents">
        <div class="p-wrapper">
          <span class="p-title">{getKRName(role)}측 혼주</span>
          {#each $couple[role].parents as parent}
            <span class="p-role">{parent.role}</span>
            <span class="p-name">{parent.name}</span>
            <div class="p-buttons">
              {#each parent.contacts as contact}
                <a href={contact.link}>
                  <img src="/image/{contact.type}.png" alt={contact.type} />
                </a>
              {/each}
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .introduction {
    background: linear-gradient(
      0deg,
      rgba(244, 244, 244, 1) 0%,
      rgba(255, 255, 255, 1) 20%,
      rgba(255, 255, 255, 1) 80%,
      rgba(244, 244, 244, 1) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    min-height: 300px;
    p {
      text-align: center;
      width: 100%;
      line-height: 30px;
      color: #535c52;
      .subtxt {
        font-size: 14px;
        color: #797a71;
      }
    }
  }
  .contact {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 40px 0 60px 0;
    .groom {
      text-align: right;
      .main-role {
        padding-right: 15px;
      }
      .role {
        padding-right: 10px;
      }
      .parents {
        margin-left: auto;
        border-right: 1px dotted #c6c6c6;
      }
    }
    .bride {
      text-align: left;
      .main-role {
        padding-left: 15px;
      }
      .role {
        padding-left: 10px;
      }
    }
    .name {
      font-size: 26px;
    }
    .role {
      color: #797a71;
    }
    .buttons {
      margin-top: 10px;
      a {
        text-decoration: none;
        margin-right: 3px;
        img {
          width: 36px;
          opacity: 0.8;
        }
      }
    }
    .parents {
      margin-top: 30px;
      width: 150px;
      .p-wrapper {
        text-align: center;
      }
      .p-title {
        display: block;
        color: #797a71;
        margin-bottom: 20px;
        font-size: 18px;
      }
      .p-role {
        color: #797a71;
        font-size: 14px;
      }
      .p-name {
        font-size: 18px;
      }
      .p-buttons {
        margin: 10px 0;
        a img {
          width: 32px;
          padding: 0 5px;
          opacity: 0.8;
        }
      }
    }
  }
</style>
