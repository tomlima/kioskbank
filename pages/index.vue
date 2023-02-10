<template>
  <div>
    <TheHeader />
    <main class="l-main" id="main">
      <GridLeft />
      <Services />
      <Testimonial />
      <GridRight />
      <Faq />
    </main>
    <TheFooter />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$anchor()
  }
}
</script>
