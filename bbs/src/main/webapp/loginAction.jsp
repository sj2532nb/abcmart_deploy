<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import = "bbs.UserDAO" %>

<%
	request.setCharacterEncoding("UTF-8");
%> 

<jsp:useBean id="UserDTO" class="bbs.UserDTO" scope="page"/> 
<jsp:setProperty name='UserDTO'  property="userId"/>
<jsp:setProperty name='UserDTO'  property="userPw"/>

    



<%
	if( UserDTO.getUserId()==null || UserDTO.getUserPw()==null ){
%>
	<script>
		alert("빈값은 허용하지 않습니다. \n 확인하고 다시 시도하세요");
		history.go(-1);
	</script>
<%
	}
	else{
		
		UserDAO userDAO = new UserDAO();
		int result = userDAO.login(UserDTO.getUserId(), UserDTO.getUserPw());
		
		if(result==1){
			// 로그인 성공하면 세션(session)의 속성(Attribute 어트리뷰트)을 셀정(setter 세터)하기		
			// session.setAttribute("세션이름 키(아이디)", 세션값 키값(아이디)); //세션할당
			session.setAttribute("userId", UserDTO.getUserId());
%>			
			
			{"result":<%= result %>}		
<%			
		}		
		else if(result==0){
%>

			
			{"result":<%= result %>}
<%			
		}		
		else if(result==-1){
%>		
	
			
			{"result":<%= result %>}			
<%			
		}		
		else {
%>		

		
		{"result":<%= result %>}
<%			
		}
		
		
	}
%>
