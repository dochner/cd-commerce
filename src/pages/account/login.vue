<script setup lang="ts">
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useAuth } from "~/composables/auth";

const auth = useAuth();
const { t } = useI18n();

const $q = useQuasar();

const formData = ref({
  email: "",
  password: "",
});

const showPassword = ref(false);

const onSignIn = () => {
  auth.signIn(formData.value);
};
</script>

<template>
  <QForm @submit.prevent="onSignIn" class="full-width row justify-center">
    <QCard class="col-grow" style="overflow: visible; max-width: 375px" flat>
      <QCardSection class="text-center">
        <h1 class="text-h4">{{ t("title.login") }}</h1>
      </QCardSection>
      <QCardSection class="q-gutter-y-md">
        <QInput
          ref=""
          v-model="formData.email"
          autocomplete="email"
          :rules="[(val, rules) => rules.email(val) || 'Please enter a valid email address'] "
          lazy-rules
          :label="t('label.email')"
          filled
        />
        <QInput
          class="cd-input-password"
          v-model="formData.password"
          autocomplete="current-password"
          :rules="[(val) => val.length > 3 || 'Please type your password']"
          :label="t('label.password')"
          :type="showPassword ? 'text' : 'password'"
          reactive-rules
          filled
        >
          <template #append>
            <QBtn
              :icon="showPassword ? 'i-mdi-eye' : 'i-mdi-eye-off'"
              @click="showPassword = !showPassword"
              stretch
              flat
              no-ripple
            />
          </template>
        </QInput>
      </QCardSection>
      <QCardActions align="center" class="q-gutter-y-md q-pa-md" vertical>
        <QBtn
          class="full-width"
          color="primary"
          :label="t('button.enter')"
          size="lg"
          type="submit"
          :dense="$q.screen.width > 1240"
        />

        <div class="full-width row justify-center items-center">
          <QSeparator spaced class="col-5" style="height: 1px" />
          <div class="col-1 text-center">{{ t("or") }}</div>
          <QSeparator spaced class="col-5" style="height: 1px" />
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
