<template>
  <div class="modalWrap">
    <div class="modalContainer">
      <table width="100%">
        <colgroup>
          <col width="20%">
          <col width="80%">
        </colgroup>
        <tr>
          <td>카테고리</td>
          <td>
            <div class="modalCategory">
              <select>
                <option>교육</option>
                <option>개발</option>
                <option>영어</option>
                <option>기타</option>
              </select>
            </div>
          </td>
        </tr>
        <tr>
          <td>제목</td>
          <td>
            <input type="text" placeholder="내용을 입력해주세요." v-model="title" />
          </td>
        </tr>
        <tr>
          <td>구성원</td>
          <td><input type="text" placeholder="선택해주세요." readonly class="pointer" @click="showMemberModal" /></td>
        </tr>
        <tr>
          <td>시작일</td>
          <td>
            <!-- <input type="text" placeholder="날짜를 입력해주세요." /> -->
            <VueDatePicker 
              v-model="startDate"
              :enable-time-picker="false"
              :format="formatDate"
              locale="ko"
              position="left"
              input-format="'yyyy-MM-dd'"
              placeholder="날짜를 선택해주세요."
            />
          </td>
        </tr>
        <tr>
          <td>종료일</td>
          <td>
            <VueDatePicker 
              v-model="endDate"
              :enable-time-picker="false"
              :format="formatDate"
              locale="ko"
              position="left"
              placeholder="날짜를 선택해주세요."
            />
          </td>
        </tr>
      </table>
      <div class="modalBtn">
        <button class="grayBtn" @click="modalOpen">취소</button>
        <button class="greenBtn" @click="modalOpen">만들기</button>
      </div>
    </div>
    <study-member-form v-if="memberModal" @close="closeMemberModal" @save="saveMemberModal" />
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import StudyMemberForm from './StudyMemberForm.vue';

export default {
  components: {
    VueDatePicker,
    StudyMemberForm,
  },
  data() {
    return {
      title: '',
      startDate: null,
      endDate: null,
      memberList: [],
      memberModal: false
    }
  },
  methods: {
    
    modalOpen() {
      let params = {};
      params.startDate = this.formatDate(this.startDate).replaceAll('-','')
      params.endDate = this.formatDate(this.endDate).replaceAll('-','')
      console.log('params', params)
      this.$emit('close')
    },

    formatDate(date) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      if (month || day < 10) {
        const zeroDay = ('00' + day).slice(-2);
        const zeroMonth = ('00' + month).slice(-2);

        return `${year}-${zeroMonth}-${zeroDay}`;
      } else {

        return `${year}-${month}-${day}`;
      }
    },

    showMemberModal() {
      this.memberModal = true;
    },

    closeMemberModal() {
      this.memberModal = false;
    },

    saveMemberModal() {
      alert('save')
      this.closeMemberModal();
    },

    validation() {

    }
  },

}
</script>

<style></style>
