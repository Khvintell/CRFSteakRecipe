document.getElementById('download-link').addEventListener('click', function() {
    // Detect user's device platform
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isAndroid = /Android/.test(navigator.userAgent);

    let appLink = '';
    if (isIOS) {
        appLink = 'https://itunes.apple.com/us/app/mafcarrefour/idAPP-ID-HERE';
    } else if (isAndroid) {
        appLink = 'https://play.google.com/store/apps/details?id=com.example.mafcarrefour';
    }

    if (appLink !== '') {
        window.location.href = appLink;
    } else {
        alert('App not available for this platform.');
    }
});

