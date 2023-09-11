<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "bbs.UserDAO" %>
<%@ page import = "bbs.UserDTO" %>

<%
	request.setCharacterEncoding("UTF-8");
%> 


<jsp:useBean id="userDTO" class="bbs.UserDTO" scope="page"/>
<jsp:setProperty property="userId" name="userDTO"/>
<jsp:setProperty property="userPw" name="userDTO"/>

<%
    String userId = userDTO.getUserId();
    String userPw = userDTO.getUserPw();
    String userPw1 = request.getParameter("userPw1");
    String userPw2 = request.getParameter("userPw2");

    // 입력된 비밀번호가 유효하고 일치하는지 검사
    if (userPw1.equals(userPw2)) {
        UserDAO userDao = new UserDAO();
        
        // 기존 비밀번호 확인
        int loginResult = userDao.login(userId, userPw);
        
        if (loginResult == 1) {
            // 기존 비밀번호가 일치할 경우에만 변경 처리
            if (!userPw.equals(userPw1)) {
                userDTO.setUserPw(userPw1);

                int result = userDao.pwReset(userDTO.getUserPw(), userId);

                if (result == 1) {
                	
					%>
                    {"result":<%= result%>}
					<%
                } else {
                	
                    %>
                    {"result":<%= result%>}
					<%
                }
            } else {
                
                %>
                {"result":<%= !userPw.equals(userPw1)%>}
				<%
                
            }
        } else if (loginResult == 0) {
            
            %>
            {"result":<%= loginResult%>}
			<%
        } else {
            out.println("로그인 오류가 발생했습니다.");
        }
    } else {
        
        %>
        {"result":-1}
		<%
    }
%>
