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
<jsp:setProperty name="userDTO" property="userId"/>
<jsp:setProperty name="userDTO" property="userPw"/>
<jsp:setProperty name="userDTO" property="userName"/>
<jsp:setProperty name="userDTO" property="userEmail"/>
<jsp:setProperty name="userDTO" property="userPhone"/>

<%
    if(
           userDTO.getUserId()==null
        || userDTO.getUserPw()==null
        || userDTO.getUserName()==null
        || userDTO.getUserEmail()==null
        || userDTO.getUserPhone()==null
    ){
        //빈값
%>
    {"result": false}
    
<%
    }
    else{
        UserDAO userDAO = new UserDAO();
        int result = userDAO.update(userDTO);
%>
        

        <% 
            if(result>=1){ 
                //성공
        %>
            {"result":<%= result %>}
            
        <% 
                }
            else {
                //실패
        %>
                {"result":0>}
                
        <%
            }
        %>

<%
    }
%>


