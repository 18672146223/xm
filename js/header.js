$(function(){
    $('.headtp').append(
           "<div class='container'>"+
            "<div class='fl'>"+
                "<a href='#' onclick='AddFavorite(window.location,document.title)'>收藏首页</a>"+
               "<a href='jjhlsh.html'>我们是谁</a>"+
                "<a href='#' target='_blank'>我们的团队</a>"+
            "</div>"+
            "<div class='fr'>"+
                "<div class='search'>"+
                    "<form>"+
                        "<input class='iptxt' type='text' onblur='if(this.value=='')this.value='搜索关键词...';' onfocus='if(this.value=='搜索关键词...')this.value='';' value='搜索关键词...' title='搜索' id='mykey' style='color: rgb(198, 198, 198);'>"+
                        "<a class='subtn' type='button' value='' id='mysub' href='javascript:void(0);'></a>"+
                    "</form>"+
                "</div>"+
            "</div>"+
        "</div>"
)



	$('.headcon').append(
		 "<div class='container'>"+
            "<a href='index.html' target='_blank'>"+
            	"<img src='images/img/3abf8151b7ec09a16c13548b585dc7e.png'/>"+
            "</a>"+
        "</div>"
	)



                            $('#mysub').click(function () {
                                if ($.trim($('#mykey').val()) == '搜索') {
                                    alert('请输入关键字！');
                                    return;
                                }
                                location.href = '/aspx/pageabout.aspx?type=search&keyword=' + escape($('#mykey').val()) + '';
                            });
                            function AddFavorite(sURL, sTitle) {
                                sURL = encodeURI(sURL);
                                try{
                                    window.external.addFavorite(sURL, sTitle);
                                }catch(e) {
                                    try{
                                        window.sidebar.addPanel(sTitle, sURL, '');
                                    }catch (e) {
                                        alert('加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.');
                                    }
                                }
                            }
                       
}
);