function sendZalo() {
  var msg = 'Xin chào Khang Kim Quang!\n'
    + 'Tên: ' + (document.getElementById('fn').value || 'Khách') + '\n'
    + 'SĐT: ' + document.getElementById('fp').value + '\n'
    + 'Sản phẩm: ' + document.getElementById('fc').value + '\n'
    + 'Ghi chú: ' + document.getElementById('fnt').value;
  window.open('https://zalo.me/0778853928?text=' + encodeURIComponent(msg), '_blank');
}
