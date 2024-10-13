'use client'

import { Button } from '@/components/ui/button'

function ChromeStoreButton({ placeholder }: { placeholder: string }) {
  const navigateToChromeWebStore = () => {
    window.open('https://chromewebstore.google.com/detail/x-guard/lljdlddjpnlabinhkgmhmnfacgjkggim?hl=zh-CN&utm_source=ext_sidebar', '_blank')
  }

  return (
    <Button 
      onClick={navigateToChromeWebStore} 
      className="bg-primary hover:bg-primary/80 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      {placeholder}
    </Button>
  )
}

export { ChromeStoreButton }