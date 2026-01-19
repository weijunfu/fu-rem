/**
 * 动态设置根字体大小工具
 * @param {Object} options 配置项
 * @param {number} options.designWidth 设计稿宽度，默认 750
 * @param {number} options.baseSize 基准值，默认 100
 */
function setRem(options = {}) {
  const designWidth = options.designWidth || 750;
  const baseSize = options.baseSize || 100;
  let ticking = false;

  function updateRem() {
    const scale = document.documentElement.clientWidth / designWidth;
    document.documentElement.style.fontSize = baseSize * scale + 'px';
    ticking = false;
  }

  function onResize() {
    if (!ticking) {
      window.requestAnimationFrame(updateRem);
      ticking = true;
    }
  }

  // 初始化
  updateRem();

  // 监听窗口变化
  window.addEventListener('resize', onResize);
}

// 支持 CommonJS 和 ESM
if (typeof module !== 'undefined' && module.exports) {
  module.exports = setRem;
} else if (typeof window !== 'undefined') {
  window.setRem = setRem;
}
export default setRem;
