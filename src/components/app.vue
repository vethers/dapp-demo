<script lang="ts" setup>
import { useConnect, useDisconnect, useAccount } from '@vethers/hooks'
import { watch } from 'vue';
const { connectors, connect, activeConnector, isConnecting, pendingConnector } = useConnect()
const { disconnect } = useDisconnect()
const { data, refetch, isLoading } = useAccount()

watch(isLoading, () => {
  console.log(isLoading)
  refetch.value()

})

</script>
<template>
  <button v-if="activeConnector" @click="() => {
    disconnect()
  
  }">
    Disconnect from {{ activeConnector?.name }}
  </button>
  <div v-for="conn in connectors" :key="conn.id" @click="connect(conn)">
    <button v-if="conn.ready && conn.id !== activeConnector?.id">
      {{ conn.name }}
      {{ isConnecting && conn.id === pendingConnector?.id && ' (connecting)' }}
    </button>
  </div>
  {{ isLoading }}
  {{ data?.address }}
</template>
