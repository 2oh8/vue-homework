<template>
    <v-img
          alt="Openly Logo"
          class="shrink mr-2"
          contain
          src="../../assets/OpenlyLogoWhite.svg"
          transition="scale-transition"
          :width="size"
        />
</template>

<script>
    export default {
        name: 'OpenlyLogoPurple',
        props: {
            size: Number
        },
        data: () => ({

        }),
    }
</script>