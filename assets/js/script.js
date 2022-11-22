const date = new Date()
const copyright = document.querySelector('.copyright')

function writeCopyright() {
    copyright.innerHTML = "&copy; " + date.getFullYear() + " SELLESTIALL. ALL RIGHTS RESERVED."
}

writeCopyright()