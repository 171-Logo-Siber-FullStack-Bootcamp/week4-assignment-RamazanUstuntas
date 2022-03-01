<template>
  <PageWrapper></PageWrapper>
  <ScrollToTop></ScrollToTop>
  <LogoutModal></LogoutModal>
</template>

<script>
import PageWrapper from './components/PageWrapper'
import ScrollToTop from './components/ScrollToTop'
import LogoutModal from './components/LogoutModal'

export default {
  name: 'App',
  components: {
    PageWrapper,
    ScrollToTop,
    LogoutModal
  }
}
</script>

