<script setup lang="ts">
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useAuth } from "~/composables/auth";
import { useI18n } from "vue-i18n";

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
  <QForm class="full-width row justify-center">
    <QCard class="col-grow" style="overflow: visible; max-width: 375px" flat>
      <QCardSection class="text-center">
        <h1 class="text-h4">{{ t("title.login") }}</h1>
      </QCardSection>
      <QCardSection class="q-gutter-y-md">
        <QInput
          v-model="formData.email"
          autocomplete="email"
          :label="t('label.email')"
          filled
        />
        <QInput
          class="dc-input-password"
          v-model="formData.password"
          autocomplete="current-password"
          :label="t('label.password')"
          :type="showPassword ? 'text' : 'password'"
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
          :dense="$q.screen.width > 1240"
          @click="onSignIn"
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
