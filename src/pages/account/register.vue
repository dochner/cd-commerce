<script setup lang="ts">
import { useQuasar } from "quasar";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { type QuasarInputRules } from "~/types";

const $q = useQuasar();
const { t } = useI18n();

const formData = ref({
  name: "",
  password: "",
  confirmPassword: "",
  email: "",
  cellPhone: "",
});

const passwordScore = computed(() => {
  let score = 0;

  if (/.{8,}/.test(formData.value.password)) {
    score++;
  }
  if (/^(?=.*?[A-Z])/.test(formData.value.password)) {
    score++;
  }
  if (/(?=.*?[a-z])/.test(formData.value.password)) {
    score++;
  }
  if (/(?=.*?[0-9])/.test(formData.value.password)) {
    score++;
  }
  if (/(?=.*?[#?!@$%^&*-])/.test(formData.value.password)) {
    score++;
  }
  return score / 5;
});

const passwordScoreColor = computed(() =>
  passwordScore.value < 0.4
    ? "negative"
    : passwordScore.value <= 0.8
    ? "warning"
    : "positive"
);

const inputRules = {
  name: (val: string) => !!val || t("input_rules.required"),
  email: (val: string, rules: QuasarInputRules) =>
    rules.email(val) || t("input_rules.email"),
  password: (val: string) =>
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/.test(val) ||
    t("input_rules.password"),
  confirmPassword: (val: string) =>
    formData.value.password === val || t("input_rules.confirm_password"),
};

const formm = ref();
const showPassword = ref(false);
const confirmShowPassword = ref(false);

const handleSignUp = () => {
  console.log("Signup: ", formm.value);
};
</script>

<template>
  <QForm
    ref="formm"
    class="full-width row justify-center"
    @submit.prevent="handleSignUp"
  >
    <QCard
      class="col-grow"
      style="overflow: visible; max-width: 375px"
      flat
    >
      <QCardSection class="text-center">
        <h1 class="text-h4">
          {{ t("title.register") }}
        </h1>
        <span>{{ t("p.fill_all_fields_to_get_a_account") }}</span>
      </QCardSection>
      <QCardSection class="q-gutter-y-md">
        <QInput
          v-model="formData.name"
          autocomplete="name"
          :label="t('label.name')"
          :rules="[inputRules.name]"
          filled
        />
        <QInput
          v-model="formData.email"
          autocomplete="username"
          :label="t('label.email')"
          :rules="[inputRules.email]"
          filled
        />
        <QInput
          v-model="formData.password"
          autocomplete="new-password"
          class="cd-input-password"
          :label="t('label.password')"
          :rules="[inputRules.password]"
          :type="showPassword ? 'text' : 'password'"
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
        <div class="q-pb-md">
          <QLinearProgress
            :value="passwordScore"
            :color="passwordScoreColor"
            size="16px"
          />
        </div>
        <QInput
          v-model="formData.confirmPassword"
          autocomplete="current-password"
          class="cd-input-password"
          :rules="[inputRules.confirmPassword]"
          :label="t('label.password_confirmation')"
          :type="confirmShowPassword ? 'text' : 'password'"
          filled
        >
          <template #append>
            <QBtn
              :icon="confirmShowPassword ? 'i-mdi-eye' : 'i-mdi-eye-off'"
              flat
              no-ripple
              stretch
              @click="confirmShowPassword = !confirmShowPassword"
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
          size="lg"
          type="submit"
          :label="t('button.create')"
          :dense="$q.screen.width > 1240"
        />
        <div class="full-width row justify-center items-center">
          <QSeparator
            spaced
            class="col"
            style="height: 1px"
          />
          <div class="col-9 text-center">
            {{ t("p.already_have_account") }}
          </div>
          <QSeparator
            spaced
            class="col"
            style="height: 1px"
          />
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
