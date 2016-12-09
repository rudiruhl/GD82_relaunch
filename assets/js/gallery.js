  $(document).ready(function() {
      $('.mygallery').justifiedGallery({
          rowHeight: 100,
          margins: 3,
          border: 0,
          rel: 'mygallery',
          lastRow: 'nojustify',
          captions: false,
          randomize: false,
      }).on('jg.complete', function() {
          $(this).find('a').colorbox({
              maxWidth: '80%',
              maxHeight: '80%',
              opacity: 0.8,
              transition: 'elastic',
              current: ''
          });
      });
  });
