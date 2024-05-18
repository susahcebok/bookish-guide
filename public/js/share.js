let shareData = {
        title: 'PFP #SAVEPALESTINE',
        text: 'Join the online revolution',
        url: 'https://savegazza.netlify.app/',
      }

      const btn = document.querySelector('em');
      const resultPara = document.querySelector('.result');

      btn.addEventListener('click', () => {
        navigator.share(shareData)
          .then(() =>
            resultPara.textContent = 'PFP #SAVEPALESTINE shared successfully'
          )
          .catch((e) =>
            resultPara.textContent = 'Error: Share canceled!'
          )
      });
