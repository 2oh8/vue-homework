<template>
    <v-card elevation="3" class="transition-fast-in-fast-out v-card--reveal">
        <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field v-if="!isSimulatingLoading" v-model="username" :rules="usernameRules"
                    label="Userame" required>
                </v-text-field>

                <v-text-field v-if="!isSimulatingLoading" v-model="password" :rules="passwordRules" label="Password"
                    type="password" required>
                </v-text-field>

                <v-skeleton-loader class="pt-5 pb-6" v-else type="list-item, list-item">
                </v-skeleton-loader>

                <v-btn :loading="isSimulatingLoading" :disabled="!valid" :color="getColorization()"
                    class="white--text mr-4" @click="validate">
                    Sign-in
                </v-btn>

                <v-btn :disabled="isSimulatingLoading" :color="getSecondaryColorization()" class="white--text mr-4"
                    @click="reset">
                    Clear
                </v-btn>


                <!-- <v-btn :color="useOpenlyTheme ? 'primary' : 'warning'" :outlined="useOpenlyTheme" @click="resetValidation">
                    Reset Validation
                </v-btn> -->
            </v-form>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        props: {
            useOpenlyTheme: Boolean
        },
        computed: {
            username() {
                return `testuser@${this.useOpenlyTheme ? 'openly.com' : 'example.com'}`
            },
            isSimulatingLoading() {
                return this.$store.state.simulateIsLoadingLogIn
            }
        },
        data: () => {
            return {
                valid: true,
                usernameRules: [
                    v => !!v || 'Userame is required'
                ],
                password: 'logMeIn',
                passwordRules: [
                    v => !!v || 'Password is required',
                ]
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
                    }, 2500)
                })
            },
            validate() {
                this.$refs.form.validate()
                this.simulateSignInAsync()
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
            getColorization() {
                const willUseTheme = this.useOpenlyTheme
                return willUseTheme ? 'primary' : 'blue'
            },
            getSecondaryColorization() {
                const willUseTheme = this.useOpenlyTheme
                return willUseTheme ? 'secondary' : 'blue lighten-2'
            },
            getInverseColorization() {
                const willUseTheme = !this.useOpenlyTheme
                return willUseTheme ? 'primary' : 'blue'
            }
        },
    }
</script>