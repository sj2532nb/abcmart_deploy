<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page import="bbs.UserDAO" %> 
<%@ page import="bbs.UserDTO" %> 
<%@ page import="java.util.ArrayList" %> 


<%
// 요청 파라미터에서 userId와 userPw 가져오기
String userId = request.getParameter("userId");
String userPw = request.getParameter("userPw");

// UserInfoDAO 객체 생성
UserDAO userDao = new UserDAO();
UserDTO userInfo = userDao.getUserInfo(userId, userPw);

// 회원정보를 JSON 형식으로 응답하기 위해 contentType 설정
response.setContentType("application/json");
%>
<%
if (userInfo != null) {
    // 회원정보를 JSON 형식으로 응답
    out.print("{");
    out.print("\"userId\": \"" + userInfo.getUserId() + "\",");
    out.print("\"userPw\": \"" + userInfo.getUserPw() + "\",");
    out.print("\"userName\": \"" + userInfo.getUserName() + "\",");
    out.print("\"userEmail\": \"" + userInfo.getUserEmail() + "\",");
    out.print("\"userPhone\": \"" + userInfo.getUserPhone() + "\"");
    out.print("}");
} else {
    // 회원정보가 없는 경우 빈 JSON 응답
%>
    {"result":0}
<%
}
%>