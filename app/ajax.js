function sendMessage(json) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formspree.io/serdimoa@gmail.com', true);
  xhr.onreadystatechange = (() => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
      } else {
        console.log(xhr.responseText);
      }
    }
  });
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(json);
}

export default sendMessage;
