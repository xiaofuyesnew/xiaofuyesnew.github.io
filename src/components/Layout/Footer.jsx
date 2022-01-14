const Footer = () => {
  return (
    <footer className="w-full h-[40px] absolute bottom-0 flex items-center justify-center text-xs text-slate-500">
      <span>Copyright © 2021-present</span>
      <span className="px-2">|</span>
      <span>
        Created by <a className="hover:underline" href="https://github.com/xiaofuyesnew">🧙‍♂️xiaofuyesnew</a>
      </span>
      <span className="px-2">|</span>
      <a className="hover:underline" href="https://beian.miit.gov.cn/">
        鄂ICP备 20000157号-1
      </a>
      <span className="px-2">|</span>
      <a
        className="hover:underline"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011502001172"
      >
        鄂公网安备 42011502001172号
      </a>
    </footer>
  )
}

export default Footer
