import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useBeauritZoneArticlesStore = defineStore('beauritZoneArticles', () => {
  const articles = ref([
    { id: 0, },
    {
      id: 1,
      img: '/beaurit-zone-article-1.png',
      title: '나만의 홈트존 뷰릿툴로 만들어 보세요.',
      author: 'by beaurit_official',
      content: `저는 평소 집 꾸미기를 좋아하는 32살 직장인 입니다.<br>
      <br>
      뷰릿은 솔쌤 인스타그램을 통해 접하게 되었어요.<br>
      평소 집이라는 공간을 너무 소중하게 생각하고 있어서 운동하는 공간도 예쁘고 내가 좋아하는 것들로 채우고 싶은 니즈가 있었어요. 그리고 좋아하는 공간으로 만들면 운동을 더 하고 싶다는 생각이 들 수 있을거라고 생각했죠.<br>
      <br>
      실제로 현재 저는 코어클럽을 주5회 참여하고 있어요.<br>
      퇴근하고 집에 오자마자 잠옷으로 갈아입고 수업에 참여하고 있어요.<br>
      코어클럽 29기 첫 수업인 오늘! 모두들 곧 만나요.<br>
      평소 얼굴 부종으로 고민한 적이 있었더라면 이번 코클 29기에서 공개될 <얼굴부종 타파루틴> 을 기대해 주세요.<br>
      코어클럽 29기 첫 수업인 오늘! 모두들 곧 만나요.`,
      date: 'Sunday, 9 May 2024',
    },
  ]);

  return { articles };
});
