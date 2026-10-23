// 提前保留浏览器安装事件，避免React水合前丢失。
window.addEventListener('beforeinstallprompt',function(event){event.preventDefault();window.aetheriaInstallPrompt=event;window.dispatchEvent(new Event('aetheria-install-available'));});
window.addEventListener('appinstalled',function(){window.aetheriaInstalled=true;window.aetheriaInstallPrompt=null;});
