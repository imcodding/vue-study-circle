<template>
  <div class="modalWrap">
    <div class="modalContainer studyMemberForm">
      <div class="selectList">
        <input type="text" placeholder="검색" />
        <span class="txt">아래 구성원 선택 시, 제외됩니다.</span>
        <div>
          <ul>
            <li v-for="member in memberList" :key="member.name">
              <span>{{ member.name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="showList">
        <ul>
          <li>임팡팡</li>
          <li>임파라팡</li>
          <li>임팡</li>
          <li>임팡팡</li>
          <li>임파라팡</li>
          <li>임팡</li>
          <li>임팡팡</li>
          <li>임파라팡</li>
          <li>임팡</li>
          <li>임팡팡</li>
          <li>임파라팡</li>
        </ul>
      </div>
      <div class="modalBtn">
        <button class="grayBtn" @click="close">취소</button>
        <button class="blackBtn" @click="save">완료</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memberList: [
        {name:'임팡'}, {name:'임팡팡'},
        { name: '임팡2' }, { name: '임팡팡3' },
        { name: '임팡4' }, { name: '임팡팡5' },
        { name: '임팡6' }, { name: '임팡팡7' },
      ]
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    save() {
      this.$emit('save')
    }
  }
}
</script>

<style>

</style>