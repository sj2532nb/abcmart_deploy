<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "bbs.UserDAO" %>    

<%
	request.setCharacterEncoding("UTF-8");
%>  
  
<jsp:useBean id="UserDTO" class="bbs.UserDTO" scope="page"/>    
<jsp:setProperty name="UserDTO" property="userId"/>
<jsp:setProperty name="UserDTO" property="userPw"/>
<jsp:setProperty name="UserDTO" property="userName"/>
<jsp:setProperty name="UserDTO" property="userEmail"/>
<jsp:setProperty name="UserDTO" property="userPhone"/>

    


	<%
		// 유효성 체크
		if(UserDTO.getUserId()==null || UserDTO.getUserPw()==null || UserDTO.getUserName()==null){
	%>		

			{"result" : <%=UserDTO.getUserId()==null || UserDTO.getUserPw()==null || UserDTO.getUserName()==null %>}
	<%			
		}
		else{
			// DAO 클래스의 정보를 저장하고 그리고 리턴값 받는다
			UserDAO userDAO = new UserDAO();
			int result = userDAO.signup(UserDTO); // 모든 입력값 하나의 아규먼트1개 매개변수로 전달
			if(result==-1){				
	%>			

				{"result" : <%=result%>}
	<%	
			}
			else {
	%>			
				{"result" : <%=result%>}
	<%	
			} 
			
		}  
	%>
