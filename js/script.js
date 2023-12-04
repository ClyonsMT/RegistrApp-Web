var web = document.getElementById('web');
var android = document.getElementById('android');
var ios = document.getElementById('ios');
var userAgent = navigator.userAgent;

if(userAgent.match(/iPhone/i)) {
    web.style.display = 'none';
    android.style.display = 'none'
    ios.style.display = 'flex';
} else if(userAgent.match(/Android/i)) {
    web.style.display = 'none';
    ios.style.display = 'none';
    android.style.display = 'flex';
} else {
    android.style.display = 'none'
    ios.style.display = 'none';
    web.style.display = 'flex';
}