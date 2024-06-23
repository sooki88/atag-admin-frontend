import { StateType, TargetType } from '@/services/main/schema';

export const STATE_BUTTONS: Array<{ value: StateType; text: string }> = [
  { value: 'all', text: '전체' },
  { value: 'pending', text: '진행중' },
  { value: 'done', text: '완료' },
];

export const TARGET_BUTTONS: Array<{ value: TargetType; text: string }> = [
  { value: 'all', text: '전체' },
  { value: 'ai', text: 'AI 생성' },
  { value: 'inspect', text: '해설진 검수' },
  { value: 'comment', text: '해설진 작성' },
];

export const MAIN_DATA_LIMIT = '14';
