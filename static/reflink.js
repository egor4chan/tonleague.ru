document.querySelector('#link').addEventListener(
    'click',
    async (event) => {
      const code = document.getElementById('link').innerHTML
      await navigator.clipboard.writeText(code);
      alert(`${code} copied!`);
    }
  );