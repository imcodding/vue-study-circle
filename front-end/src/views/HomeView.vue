<template>
  <div>
    <div style="text-align: center;">
      <button class="studyBtn">스터디 만들기</button>
    </div>
    <div class="studyKind">
      <span>모두의 스터디</span>
      <span>|</span>
      <span>나의 스터디</span>
    </div>
    <div class="category">
      <ul>
        <li>교육</li>
        <li>개발</li>
        <li>영어</li>
        <li>기타</li>
      </ul>
    </div>
    <div class="viewType">보는 방식</div>
  
    <div class="studyList">
      <table>
        <colgroup>
          <col width="5%">
          <col width="10%">
          <col width="50%">
          <col width="10%">
          <col width="20%">
          <col width="5%">
        </colgroup>
        <tr>
          <th>No</th>
          <th>카테고리</th>
          <th>제목</th>
          <th>참여인원수</th>
          <th>기간</th>
          <th>상태</th>
        </tr>
        <tr>
          <td>1</td>
          <td>개발</td>
          <td>하몬된다 스터디</td>
          <td>3</td>
          <td>2024.01.12 - 2024.02.28</td>
          <td>진행중</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  }
}
</script>

<style></style>