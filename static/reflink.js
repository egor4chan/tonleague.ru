document.querySelector('#link').addEventListener(
    'click',
    async (event) => {
      const code = document.getElementById('linkw').innerHTML
      await navigator.clipboard.writeText(code);
      notify(`Success!`);
      console.log(code)
    }
  );