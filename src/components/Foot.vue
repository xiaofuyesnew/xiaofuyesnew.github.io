<template>
  <div class="foot-box">
    <a class="icp-link" href="https://beian.miit.gov.cn/">鄂 ICP 备 20000157 号 - 1</a>
    <div class="spot">·</div>
    <a
      class="police-link"
      href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011502001172"
    >
      <img class="police" src="/images/police_icon.png" />鄂公网安备 42011502001172号
    </a>
  </div>
</template>

<style lang="scss" scoped>
a {
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #666;
  }
}

.spot {
  margin: 0 10px;
}

.foot-box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #666;
}

.police-link {
  .police {
    width: 16px;
    margin-right: 4px;
  }
}
</style>