let shareData = {
        title: 'PFP #SAVEPALESTINE',
        text: 'Join the online revolution',
        url: 'https://savegazza.netlify.app/',
      }

      const btn = document.querySelector('span');
      const resultPara = document.querySelector('.result');

      btn.addEventListener('click', () => {
        navigator.share(shareData)
          .then(() =>
            resultPara.textContent = 'Couple Twibbon shared successfully'
          )
          .catch((e) =>
            resultPara.textContent = 'Error: Share canceled!'
          )
      });
