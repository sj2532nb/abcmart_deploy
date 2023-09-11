<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "bbs.UserDAO" %>


<% 
    request.setCharacterEncoding("UTF-8"); 
%>

<jsp:useBean id="userDTO" class="bbs.UserDTO" scope="page"/> 
<jsp:setProperty name='userDTO'  property="userId"/>
<jsp:setProperty name='userDTO'  property="userPw"/>

<%
    if(
           userDTO.getUserId()==null
        || userDTO.getUserPw()==null
    ){
%>
        {"result":<%= userDTO.getUserId()==null || userDTO.getUserPw()==null %>}
<%
    }
    else{
        UserDAO userDAO = new UserDAO();
        int result = userDAO.delete( userDTO.getUserId(), userDTO.getUserPw() );
%>
        

        <% 
            if(result>=1){ 
            session.invalidate();
        %>
            
            {"result":<%= result %>}
        <% 
            }
            else { 
        %>
                
                {"result":<%= result %>}
        <%
            }
        %>


<%
    }
%>


