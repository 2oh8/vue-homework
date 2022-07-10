<template>
  <v-app>
    <v-app-bar app :color="getColorization()" dark>
      <div class="d-flex align-center">
        <OpenlyLogoWhite v-if="useOpenlyTheme" :size="size" />
        <v-icon v-else :size="size - 40" color="white">fa-rocket</v-icon>
      </div>

      <v-spacer></v-spacer>
      <v-btn @click="simulateSignInAsync()" :disabled="loadingAndLoggedIn" :loading="loadingAndLoggedIn" v-if="isLoggedIn" :color="getColorization()">
        Sign Out&nbsp; <v-icon small>fa-power-off</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-dialog v-model="loadingAndLoggedIn" hide-overlay persistent width="300">
          <v-card :color="getColorization()" dark>
            <!-- <OpenlyLogoWhite style="position: asbolute" v-if="useOpenlyTheme" :size="size - 30"></OpenlyLogoWhite>
      <v-icon v-else :size="size - 40" color="white">fa-rocket</v-icon> -->
            <v-card-text class="pt-2">
              Goodbye...
              <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
        <LoginPrompt :use-openly-theme="useOpenlyTheme" v-if="!isLoggedIn"/>
        <router-view v-else />
      </v-container>
    </v-main>
    <v-btn v-on:click="toggleOpenlyTheme" :color="getInverseColorization()" dark fixed bottom right fab>
      <v-icon v-if="useOpenlyTheme" color="white">fa-tachometer-alt</v-icon>
      <OpenlyLogoWhite v-else :size="40"></OpenlyLogoWhite>
    </v-btn>
  </v-app>
</template>

<script>

  import OpenlyLogoWhite from './components/Prebuilt/OpenlyLogoWhite.vue'
  import LoginPrompt from './components/Prebuilt/LoginPrompt.vue'

  export default {
    name: 'App',
    computed: {
      useOpenlyTheme() {
        return this.$store.state.useOpenlyTheme
      },
      isLoggedIn() {
        return this.$store.state.simulateIsLoggedIn
      },
      isSimulatingLoading() {
        return this.$store.state.simulateIsLoadingLogIn
      },
      loadingAndLoggedIn() {
        return this.$store.state.simulateIsLoggedIn && this.$store.state.simulateIsLoadingLogIn
      }
    },
    methods: {
      async simulateSignInAsync() {
        this.$store.dispatch('toggleSimulatedLoginLoadingState');
        const storeDispatch = this.$store.dispatch
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            storeDispatch('toggleSimulatedLoginLoadingState');
            storeDispatch('toggleSimulatedLoginState');
          }, 3500)
        })
      },
      toggleOpenlyTheme() {
        this.$store.dispatch('toggleOpenlyTheme')
      },
      getColorization() {
        const willUseTheme = this.useOpenlyTheme
        return willUseTheme ? 'primary' : 'blue'
      },
      getInverseColorization() {
        const willUseTheme = !this.useOpenlyTheme
        return willUseTheme ? 'primary' : 'blue'
      }
    },
    data: () => ({
      size: 80
    }),
    components: {
      OpenlyLogoWhite,
      LoginPrompt
    }
  };
</script>