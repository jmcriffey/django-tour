describe('DjangoTour', function() {

    it('should handle no tour', function() {
        var tour = new window.DjangoTour();
        tour.run();

        // examine the result
        expect(document.getElementsByClassName('tour-wrap').length).toBe(0);
    });

    it('should handle an empty tour', function() {
        var tourHtml = [
            '<div class="tour-wrap">',
            '    <div class="tour-name">',
            '        Example Tour',
            '   </div>',
            '   <div class="tour-bar-wrap ">',
            '       <div class="tour-bar">',
            '           <div class="completed"></div>',
            '       </div>',
            '   </div>',
            '</div>',
        ].join('\n');
        var container = document.createElement('div');
        container.innerHTML = tourHtml;
        document.body.appendChild(container);

        var tour = new window.DjangoTour();
        tour.run();

        document.body.removeChild(container);
    });

    it('should handle no complete steps', function() {
        var tourHtml = [
            '<div class="tour-wrap">',
            '    <div class="tour-name">',
            '        Example Tour',
            '   </div>',
            '   <div class="tour-bar-wrap ">',
            '       <div class="tour-bar">',
            '           <div class="completed"></div>',
            '       </div>',
            '       <a href="/step/one/" class="step-circle current incomplete available ">',
            '           <span class="step-name">Step One</span>',
            '       </a>',
            '   </div>',
            '</div>',
        ].join('\n');
        var container = document.createElement('div');
        container.innerHTML = tourHtml;
        document.body.appendChild(container);

        var tour = new window.DjangoTour();
        tour.run();

        var wrap = document.getElementsByClassName('tour-wrap')[0];
        var completeBar = wrap.getElementsByClassName('completed')[0];
        expect(completeBar.style.width).toBe('100%');

        document.body.removeChild(container);
    });

    it('should handle no available steps', function() {
        // This is mostly for coverage
        var tourHtml = [
            '<div class="tour-wrap">',
            '    <div class="tour-name">',
            '        Example Tour',
            '   </div>',
            '   <div class="tour-bar-wrap ">',
            '       <div class="tour-bar">',
            '           <div class="completed"></div>',
            '       </div>',
            '       <a href="/step/one/" class="step-circle incomplete unavailable ">',
            '           <span class="step-name">Step One</span>',
            '       </a>',
            '   </div>',
            '</div>',
        ].join('\n');
        var container = document.createElement('div');
        container.innerHTML = tourHtml;
        document.body.appendChild(container);

        var tour = new window.DjangoTour();
        tour.run();

        var wrap = document.getElementsByClassName('tour-wrap')[0];
        var completeBar = wrap.getElementsByClassName('completed')[0];
        expect(completeBar.style.width).toBe('');

        document.body.removeChild(container);
    });

    it('should handle current complete step', function() {
        var tourHtml = [
            '<div class="tour-wrap">',
            '    <div class="tour-name">',
            '        Example Tour',
            '   </div>',
            '   <div class="tour-bar-wrap ">',
            '       <div class="tour-bar">',
            '           <div class="completed"></div>',
            '       </div>',
            '       <a href="/step/one/" class="step-circle current complete available ">',
            '           <span class="step-name">Step One</span>',
            '       </a>',
            '       <a href="/step/two/" class="step-circle complete available ">',
            '           <span class="step-name">Step Two</span>',
            '       </a>',
            '       <a href="/step/three/" class="step-circle incomplete available">',
            '           <span class="step-name">Step Three</span>',
            '       </a>',
            '       <a href="/step/four/" class="step-circle incomplete unavailable">',
            '           <span class="step-name">Step Four</span>',
            '       </a>',
            '   </div>',
            '</div>',
        ].join('\n');
        var container = document.createElement('div');
        container.innerHTML = tourHtml;
        document.body.appendChild(container);

        var tour = new window.DjangoTour();
        tour.run();

        var wrap = document.getElementsByClassName('tour-wrap')[0];
        var completeBar = wrap.getElementsByClassName('completed')[0];
        expect(completeBar.style.width).toBe('25%');
        document.body.removeChild(container);
    });

    it('should handle current incomplete step', function() {
        var tourHtml = [
            '<div class="tour-wrap">',
            '    <div class="tour-name">',
            '        Example Tour',
            '   </div>',
            '   <div class="tour-bar-wrap ">',
            '       <div class="tour-bar">',
            '           <div class="completed"></div>',
            '       </div>',
            '       <a href="/step/one/" class="step-circle complete available ">',
            '           <span class="step-name">Step One</span>',
            '       </a>',
            '       <a href="/step/two/" class="step-circle complete available ">',
            '           <span class="step-name">Step Two</span>',
            '       </a>',
            '       <a href="/step/three/" class="step-circle current incomplete available">',
            '           <span class="step-name">Step Three</span>',
            '       </a>',
            '       <a href="/step/four/" class="step-circle incomplete unavailable">',
            '           <span class="step-name">Step Four</span>',
            '       </a>',
            '   </div>',
            '</div>',
        ].join('\n');
        var container = document.createElement('div');
        container.innerHTML = tourHtml;
        document.body.appendChild(container);

        var tour = new window.DjangoTour();
        tour.run();

        var wrap = document.getElementsByClassName('tour-wrap')[0];
        var completeBar = wrap.getElementsByClassName('completed')[0];
        expect(completeBar.style.width).toBe('75%');
        document.body.removeChild(container);
    });

    it('should handle no current step', function() {
        var tourHtml = [
            '<div class="tour-wrap">',
            '    <div class="tour-name">',
            '        Example Tour',
            '   </div>',
            '   <div class="tour-bar-wrap ">',
            '       <div class="tour-bar">',
            '           <div class="completed"></div>',
            '       </div>',
            '       <a href="/step/one/" class="step-circle complete available ">',
            '           <span class="step-name">Step One</span>',
            '       </a>',
            '       <a href="/step/two/" class="step-circle complete available ">',
            '           <span class="step-name">Step Two</span>',
            '       </a>',
            '       <a href="/step/three/" class="step-circle incomplete available">',
            '           <span class="step-name">Step Three</span>',
            '       </a>',
            '       <a href="/step/four/" class="step-circle incomplete unavailable">',
            '           <span class="step-name">Step Four</span>',
            '       </a>',
            '   </div>',
            '</div>',
        ].join('\n');
        var container = document.createElement('div');
        container.innerHTML = tourHtml;
        document.body.appendChild(container);

        var tour = new window.DjangoTour();
        tour.run();

        var wrap = document.getElementsByClassName('tour-wrap')[0];
        var completeBar = wrap.getElementsByClassName('completed')[0];
        expect(completeBar.style.width).toBe('75%');
        document.body.removeChild(container);
    });

});
