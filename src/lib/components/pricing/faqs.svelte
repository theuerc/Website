<script lang="ts">
  import Section from "../section.svelte";
  import Faqs from "../faqs/faqs.svelte";

  import { pricingFAQ, faqOldPlan } from "$lib/contents/pricing";
</script>

<Section>
  <Faqs headlineClasses="!mb-micro" faq={pricingFAQ}>
    <p slot="subheading" class="text-p-large mb-x-small text-center">
      Find all the details of our pay-as-you-go pricing in our docs.
    </p>
  </Faqs>

  <h3 class="h3 md:mt-xx-large mt-small !mb-micro md:!mb-x-small text-center">
    Existing customers on old pricing model
  </h3>
  <Faqs faq={faqOldPlan} />
</Section>
