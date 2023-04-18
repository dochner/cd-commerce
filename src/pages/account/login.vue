<script setup lang="ts">
import { useQuasar } from "quasar";
import { ref, toRefs } from "vue";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "~/stores/auth";
import { type QuasarInputRules } from "~/types";

const auth = useAuthStore();
const { t } = useI18n();

const $q = useQuasar();

const { userCredentials } = toRefs(auth);

const showPassword = ref(false);

const onSignIn = async () => {
  await auth.signIn();
};

const inputRules = {
  email: (val: string, rules: QuasarInputRules) =>
    rules.email(val) || t("input_rules.email"),
  password: (val: string) =>
    !!val || t("input_rules.required", { name: t("label.password") }),
};
</script>

<template>
  <QForm
    class="full-width row justify-center"
    @submit.prevent="onSignIn"
  >
    <QCard
      class="col-grow"
      style="overflow: visible; max-width: 375px"
      flat
    >
      <QCardSection class="text-center">
        <h1 class="text-h4">
          {{ t("title.login") }}
        </h1>
      </QCardSection>
      <QCardSection class="q-gutter-y-md">
        <QInput
          v-model="userCredentials.email"
          autocomplete="email"
          :rules="[inputRules.email]"
          lazy-rules
          :label="t('label.email')"
          filled
        />
        <QInput
          v-model="userCredentials.password"
          class="cd-input-password"
          autocomplete="current-password"
          :rules="[inputRules.password]"
          :label="t('label.password')"
          :type="showPassword ? 'text' : 'password'"
          reactive-rules
          filled
        >
          <template #append>
            <QBtn
              :icon="showPassword ? 'i-mdi-eye' : 'i-mdi-eye-off'"
              stretch
              flat
              no-ripple
              @click="showPassword = !showPassword"
            />
          </template>
        </QInput>
      </QCardSection>
      <QCardActions
        align="center"
        class="q-gutter-y-md q-pa-md"
        vertical
      >
        <QBtn
          class="full-width"
          color="primary"
          :label="t('button.enter')"
          size="lg"
          type="submit"
          :dense="$q.screen.width > 1240"
        />

        <div class="full-width row justify-center items-center">
          <QSeparator
            spaced
            class="col-5"
            style="height: 1px"
          />
          <div class="col-1 text-center">
            {{ t("or") }}
          </div>
          <QSeparator
            spaced
            class="col-5"
            style="height: 1px"
          />
        </div>

        <QBtn
          to="/account/register"
          class="full-width q-mt-lg"
          color="secondary"
          :label="t('button.create_your_account')"
          no-caps
        />
      </QCardActions>
    </QCard>
  </QForm>
</template>
