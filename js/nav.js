$(function(){
    $('#container').append(
        "<div class='navbar container'>"+
    "<ul>"+
        "<li><a href='index.html'>网站首页</a></li>"+
        
        "<li id='m_about'><a href='about.html'>了解我们</a>"+
            "<div class='navbox abtnav'>"+
                "<div class='navlist'>"+
                    "<span class='navsj'></span>"+
                    "<div class='navl fl'>"+
                        "<h2>了解我们</h2>"+
                        "<dl>"+
                            "<dd class='bd1' onmousemove='showbyid('rig1')'><a href='about.html'>基金会简介</a></dd>"+
                            "<dd class='bd1' onmousemove='showbyid('rig2')'><a href='#'>基金会章程</a></dd>"+
                            "<dd class='bd1' onmousemove='showbyid('rig3')'><a href='#'>基金会结构</a></dd>"+
                            "<dd class='bd1' ><a href='#'>信息公开</a></dd>"+
                        "</dl>"+
                    "</div>"+
                    "<div class='navc fl' id='rig1' style='display:none'>"+
                        "<h3>基金会简介</h3>"+
                        "<p>"+
                        	"北京燕创慈善基金会主营业务分为3大块:基金会的简述和基本项目类型以及项目的合作流程."+
					                 "北京燕创慈善基金会成立于2018年9月12日，上级主管单位为北京市民政局。基金会以开展慈善活动为宗旨，不以营利为目的，通过资助扶贫、助医的公益活动，推动公益慈善事业的发展 。 "+                          
					                "其开展业务有:资助贫困学生就业  贫困患者就医  疾病筛查和预防 资助非营利性医疗机构基础设施改善。"+
                        "</p>"+
                        "<a class='more' href='about.html'>更多》</a>"+
                    "</div>"+
                    "<div class='navc fl' id='rig2' style='display:none'>"+
                        "<h3>基金会章程</h3>"+
			             "<span> <a class='wd' href='about.html'>01北京燕创慈善基金会重大事项报告制度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> </span>"+ 
			              "<span> <a class='wd' href='about.html' >02北京燕创慈善基金会志愿者管理制度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> </span>"+
			               "<h4> <a class='wd' href='about.html' >03北京燕创慈善基金会证书管理制度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> </h4>"+
			                "<h4> <a class='wd' href='about.html' >04北京燕创慈善基金会印章管理制度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> </h4>"+
			                 "<h4> <a class='wd' href='about.html' > 05北京燕创慈善基金会信息公开制度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> </h4>"+
			                 "<h4> <a class='wd' href='about.html' >06北京燕创慈善基金会财务管理制度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> </h4>"+
			                   "<h4> <a class='wd' href='about.html' >07北京燕创慈善基金会采购管理制度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> </h4>"+
			                    "<h4> <a class='wd' href='about.html' >01北京燕创慈善基金会大事记工作制度&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> </h4>"+
			                     "<h4> <a class='wd' href='about.html' >01北京燕创慈善基金会档案管理办法&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> </h4>"+
			                      "<h4> <a class='wd' href='about.html' >01北京燕创慈善基金会党员民主生活会议&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> </h4>"+
                        "<a class='more' href='constitution.html'>更多》</a>"+
                    "</div>"+
                    
                    "<div class='navc fl' id='rig3' style='display:none'>"+
                        "<h3>基金会结构</h3>"+
                        "<p><img class='navczjg' src='images/img/jg.jpg' />"+
                            "<a class='more' href='organization.html'>更多》</a>"+
                        "</p>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</li>"+
        "<li id='m_news'><a href='information.html'>信息公开</a></li>"+
        "<li id='m_member'>"+
        	"<a href='#'>项目信息</a>"+
            "<div class='navbox memnav'>"+
                "<div class='navlist'>"+
                    "<span class='navsj'></span>"+
                    "<div class='navl fl'>"+
                        "<h2></h2>"+
                        "<dl>"+
                        	"<dd class='bd1'><a href='javascript:void(0);'>项目图文</a></dd>"+
                            "<dd class='bd1'><a href='javascript:void(0);'>项目详情</a></dd>"+
                        "</dl>"+
                   "</div>"+
                    "<div class='navc fl'>"+
                        "<h3></h3>"+
                        "<p>"+
                        "</p>"+
                        "<a class='more' href='#'>更多》</a>"+
                    "</div>"+
                    "<div class='navr right'>"+
                        "<div class='navr3'>"+
                            "<h3></h3>"+
                            "<p>"+
                            "</p>"+
                           "<a class='more' href='#'>更多》</a>"+
                        "</div>"+
                    "</div>"+
                "</div>"+
            "</div>"+
        "</li>"+
          "<li id='m_committee'><a href='#'>项目成果</a>"+
            "<div class='navbox wynav' >"+
                "<div class='navlist'>"+
                    "<span class='navsj'></span>"+
                    "<div class='navl fl'>"+
                        "<h2></h2>"+
                        "<dl>"+
                          "<dd class='bd1' onmousemove='showbyid2('weiyuan601')'><a href='#'></a></dd>"+
                            "<dd class='bd1' onmousemove='showbyid2('weiyuan602')'><a href='#'></a></dd>"+
                            "<dd class='bd1' onmousemove='showbyid2('weiyuan603')'><a href='#'></a></dd>"+
                        "</dl>"+
                    "</div>"+
                    "<div class='navc2 fl' id='weiyuan601'  style='display:block'><div class='navc fl'>"+
                        "<h3></h3>"+
                        "<p>"+
                        "</p>"+
                    "</div>"+
                        "<div class='navc fl'>"+
                            "<h3></h3>"+
                            "<p>"+
                            "</p>"+
                        "</div>"+
                    "</div><div class='navc2 fl' id='weiyuan602'  style='display:none'><div class='navc fl'>"+
                    "<h3></h3>"+
                    "<p>"+
                   "</p>"+
                "</div>"+
                    "<div class='navc fl'>"+
                        "<h3></h3>"+
                        "<p></p>"+
                   "</div>"+
                "</div><div class='navc2 fl' id='weiyuan603'  style='display:none'></div>"+
                "</div>"+
            "</div>"+
        "</li>"+
         "<li><a href='member.html'>志愿者服务</a></li>"+
                "<li><a href='#'>专家智库</a></li>"+
        "<li><a href='contact.html'>联系我们</a></li>"+
    "</ul>"+
"</div>")
              
          
}
);