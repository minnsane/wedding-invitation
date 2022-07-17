<script lang="ts">
  import { Icon } from "svelte-chota";
  import { mdiContentCopy, mdiCheck } from "@mdi/js";
  import ClipBoard from "svelte-clipboard";
  import { fade } from "svelte/transition";

  export let accountRoleName;
  export let account;

  let isCopied = false;

  function afterCopy(): void {
    isCopied = true;
    setTimeout(() => (isCopied = false), 1500);
  }
</script>

<div class="title">
  {accountRoleName}
  {account.role}
  <ClipBoard text={account.number} let:copy on:copy={afterCopy}>
    <button class="btn copy text-grey pull-right" on:click={copy}>
      {#if !isCopied}
        <Icon src={mdiContentCopy} /> 복사하기
      {:else}
        <span class="text-success" in:fade>
          <Icon src={mdiCheck} /> 복사완료!
        </span>
      {/if}
    </button>
  </ClipBoard>
</div>
<div class="info">
  <span class="bank">{account.bank}</span>
  <span class="number">{account.number}</span>
  <span class="name">(예금주: {account.name})</span>
</div>

<style lang="scss">
  .title {
    font-size: 17px;
    border-bottom: 1px dashed #c6c6c6;
    padding-bottom: 3px;
    margin: 30px 0 10px 0;
    color: #797a71;
  }
  .copy {
    font-size: 14px;
    background-color: transparent;
  }
  .info {
    font-weight: 300;
  }
  .after-copy {
    font-size: 8px;
    margin-right: -20px;
  }
</style>
