var readyState = function(callback)
{
    var body = document.body;
    
    if(body && body.readyState == 'loaded')
    {
        callback();
    }
    else
    {
        if (window.addEventListener)
        {
            window.addEventListener('load', callback, false);
        }
        else
        {
            window.attachEvent('onload', callback);
        }
    }   
}

readyState(function()
{
    /**
     * Scroll Page
     */
    function scrollPage(page)
    {
        $('#navigation a[data-nav="scroll"]').removeClass('active');

        $('#navigation a[href="#/' + page + '"]').addClass('active');

        $('html, body').animate({ scrollTop: $('#' + page).offset().top }, 800);
    }

    /**
     * Hash helper
     */
    function parseHash(newHash, oldHash)
    {
        crossroads.parse(newHash);
    }

    /**
     * Position of the intro text
     */
    function introPos()
    {
        $('#intro').css({'margin-top':( ($('.box:first').height() /2) - $('#header').height() - ($('#intro').height() /2) )});
    }

    /**
     * Panel offset
     */
    $('.panel').css({'margin-top':$('#header').height()});

    /**
     * Crossroad
     */
    crossroads.addRoute('{page}', function(page)
    {
            scrollPage(page);
    });
    
    /**
     * Hasher
     */
    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();
    
    introPos();

    $('#intro').fadeIn();

    /**
     * Window scroll
     */
    $(window).scroll(function()
    {
        if ($(this).scrollTop() > 100)
        {
            $('#back-top').fadeIn();
        }
        else
        {
            $('#back-top').fadeOut();
        }
    });

    /**
     * Window resize
     */
    $(window).resize(function()
    {
        introPos();
    });

    /**
     * Scroll to top links
     */    
    $('#back-top').click(function(event)
    {
        $('#navigation a[data-nav="scroll"]').removeClass('active');

        var firstItem = $('#navigation a[data-nav="scroll"]:first');
        
        firstItem.addClass('active');

        hasher.setHash(firstItem.attr('href').replace('#/', ''));

        $('html, body').animate({ scrollTop: 0 }, 800);
        
        return false;
    });

    $('#logo').click(function(event)
    {
        $('#navigation a[data-nav="scroll"]').removeClass('active');

        var firstItem = $('#navigation a[data-nav="scroll"]:first');

        firstItem.addClass('active');

        hasher.setHash(firstItem.attr('href').replace('#/', ''));

        $('html, body').animate({ scrollTop: 0 }, 800);
        
        return false;
    });

    /**
     * Lightbox
     */

    $('#lightbox').on('click', function(event)
    {
        $('#lightbox').hide();
    });

    $('.lightbox_trigger').click(function(event)
    {
        event.preventDefault();
        
        $('#bigimg').attr({'src':$(this).attr("href")});
        $('#lightbox').show();
    });

    /**
     * Flexslider
     */
    $('.flexslider').flexslider();

});