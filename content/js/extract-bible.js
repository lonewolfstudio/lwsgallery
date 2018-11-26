$("#btn").click(function() {
    reference='Matt+2'
    $.getJSON('http://www.esvapi.org/crossref/ref.php?reference=' + reference + '&callback=?',
        function(text){
            if(text){
                $('body').html(text.content);
            } else {
                $('body').html('Error');
            }
        });
});