<script lang="ts">
  import { Card, Button } from "svelte-chota";
  import AccountInfo from "./AccountInfo.svelte";

  export let accounts = [];
  export let accountRoleName = "";
  export let isModalOpen;
</script>

{#if accountRoleName && accounts.length}
  <Card class="bg-error">
    <h3 slot="header">{accountRoleName}측 계좌번호</h3>
    {#each accounts as account}
      <AccountInfo {accountRoleName} {account} />
    {/each}
    <div slot="footer" class="footer is-center">
      <Button secondary on:click={() => (isModalOpen = false)}>닫기</Button>
    </div>
  </Card>
{/if}

<style lang="scss">
  .footer {
    margin-top: 30px;
  }
</style>
