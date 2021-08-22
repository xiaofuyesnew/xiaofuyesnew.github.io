<template>
  <div class="foot-box">
    <div class="copyright">Copyright © 2021 xiaofuyesnew. All Rights Reserved. </div>
    <div class="spot"></div>
    <a class="icp-link" href="https://beian.miit.gov.cn/">鄂ICP备 20000157号-1</a>
    <div class="spot"></div>
    <a
      class="police-link"
      href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011502001172"
    >鄂公网安备 42011502001172号</a>
  </div>
</template>

<style lang="scss" scoped>
.spot {
  &::before {
    content: '|';
  }
}

a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #999;
  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #999;
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
  color: #999;
  font-weight: bold;
}

.police-link {
  .police {
    width: 16px;
    margin-right: 4px;
  }
}
</style>