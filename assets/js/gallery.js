  $(document).ready(function () {
          $('.mygallery').justifiedGallery({
                rowHeight: 120,
                maxRowHeight: null,
                margins: 1,
                border: 0,
                rel: 'mygallery',
                lastRow: 'justify',
                captions: false,
                randomize: false,
                sizeRangeSuffixes: {
                    lt100: '_t',
                    lt240: '_m',
                    lt320: '_n',
                    lt500: '',
                    lt640: '_z',
                    lt1024: '_b'
                }
            }).on('jg.complete', function () {
                $(this).find('a').colorbox({
                    maxWidth: '80%',
                    maxHeight: '80%',
                    opacity: 0.8,
                    transition: 'elastic',
                    current: ''
                });
            });
