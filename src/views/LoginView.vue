<template>
  <div class="w-full h-full flex flex-col items-center bg-[#F9BDD0]">
    <div class="mt-24 font-lobster text-xl text-center text-[#FE7385]">
      beaurit
    </div>
    <img src="/login/logo.png" class="h-36 mt-4" alt="logo" />
    <div class="mt-16 flex flex-col">
      <label class="text-white text-sm" for="id">아이디</label>
      <input class="h-12 px-3 rounded-xl border border-dashed border-pink-400 w-64 mt-1" name="id" type="text" placeholder="아이디" />
    </div>
    <div class="mt-4 flex flex-col">
      <label class="text-white text-sm" for="password">비밀번호</label>
      <input class="h-12 px-3 rounded-xl border border-dashed border-pink-400 w-64 mt-1" name="password" type="password" placeholder="비밀번호" />
    </div>
    <div class="mt-10">
      <router-link to="/home">
        <button class="h-12 w-64 bg-[#FCE5EC] hover:bg-pink-50 active:bg-pink-100 rounded-xl shadow-md">로그인</button>
      </router-link>
    </div>
    <div class="mt-12">
      <router-link class="text-white text-sm underline" to="/signup">회원가입</router-link>
    </div>
    <div class="mt-2">
      <router-link class="text-white text-sm underline" to="/find-password">아이디가 기억나지 않으세요?</router-link>
    </div>
  </div>
</template>