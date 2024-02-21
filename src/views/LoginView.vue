<template>
  <div class="w-full h-full flex flex-col items-center bg-pink-400">
    <div class="mt-24 font-lobster text-5xl text-center text-white">
      Core<br>
      Club<br>
      Diary
    </div>
    <div class="mt-16 flex flex-col">
      <label class="text-white" for="id">아이디</label>
      <input class="h-12 px-3 rounded-xl w-64 mt-1" name="id" type="text" placeholder="아이디" />
    </div>
    <div class="mt-4 flex flex-col">
      <label class="text-white" for="password">비밀번호</label>
      <input class="h-12 px-3 rounded-xl w-64 mt-1" name="password" type="password" placeholder="비밀번호" />
    </div>
    <div class="mt-10">
      <router-link to="/home">
        <button class="h-12 w-64 bg-white hover:bg-blue-50 active:bg-blue-100 rounded-xl">로그인</button>
      </router-link>
    </div>
    <div class="mt-20">
      <router-link class="text-white underline" to="/signup">회원가입</router-link>
    </div>
    <div class="mt-4">
      <router-link class="text-white underline" to="/find-password">아이디가 기억나지 않으세요?</router-link>
    </div>
  </div>
</template>