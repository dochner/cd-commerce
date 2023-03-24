<script setup lang="ts">
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const $q = useQuasar();
const { t } = useI18n();

const formData = ref({
  name: "",
  password: "",
  confirmPassword: "",
  email: "",
  cellPhone: "",
});

const showPassword = ref(false);
const confirmShowPassword = ref(false);
</script>

<template>
  <QForm class="full-width row justify-center">
    <QCard class="col-grow" style="overflow: visible; max-width: 375px" flat>
      <QCardSection class="text-center">
        <h1 class="text-h4">{{ t("title.register") }}</h1>
        <span>{{ t("p.fill_all_fields_to_get_a_account") }}</span>
      </QCardSection>
      <QCardSection class="q-gutter-y-md">
        <QInput
          v-model="formData.name"
          autocomplete="name"
          :label="t('label.name')"
          filled
        />
        <QInput
          v-model="formData.email"
          autocomplete="username"
          :label="t('label.email')"
          filled
        />
        <QInput
          class="dc-input-password"
          v-model="formData.password"
          autocomplete="new-password"
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
        <QInput
          class="dc-input-password"
          v-model="formData.confirmPassword"
          :label="t('label.password_confirmation')"
          autocomplete="current-password"
          :type="confirmShowPassword ? 'text' : 'password'"
          filled
        >
          <template #append>
            <QBtn
              :icon="confirmShowPassword ? 'i-mdi-eye' : 'i-mdi-eye-off'"
              @click="confirmShowPassword = !confirmShowPassword"
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
          :label="t('button.create')"
          :dense="$q.screen.width > 1240"
          size="lg"
        />
        <div class="full-width row justify-center items-center">
          <QSeparator spaced class="col" style="height: 1px" />
          <div class="col-9 text-center">{{ t("p.already_have_account") }}</div>
          <QSeparator spaced class="col" style="height: 1px" />
        </div>
        <QBtn
          to="/account/login"
          class="full-width"
          color="secondary"
          :label="t('button.sign_in_to_your_account')"
          no-caps
        />
      </QCardActions>
    </QCard>
  </QForm>
</template>
