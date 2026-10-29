import test from 'node:test';
import assert from 'node:assert/strict';
import {
  scheduleNextReview,
  getDueSrsCards,
  computeSrsStats,
  computeSpeechAccuracy,
  SrsCard,
} from './srsEngine';

test('scheduleNextReview resets repetition on "again"', () => {
  const card: SrsCard = {
    id: 'w_1',
    type: 'word',
    english: 'Hello',
    bengali: 'হ্যালো',
    category: 'Basics',
    level: 'A1',
    repetition: 3,
    intervalDays: 10,
    easeFactor: 2.5,
    dueDate: '2026-10-29',
    historyCount: 3,
  };

  const updated = scheduleNextReview(card, 'again', '2026-10-29');
  assert.equal(updated.repetition, 0);
  assert.equal(updated.intervalDays, 1);
  assert.equal(updated.historyCount, 4);
  assert.equal(updated.dueDate, '2026-10-30');
});

test('scheduleNextReview scales interval on "good" and "easy"', () => {
  const card: SrsCard = {
    id: 'w_2',
    type: 'word',
    english: 'Friend',
    bengali: 'বন্ধু',
    category: 'Social',
    level: 'A1',
    repetition: 0,
    intervalDays: 1,
    easeFactor: 2.5,
    dueDate: '2026-10-29',
    historyCount: 0,
  };

  const step1 = scheduleNextReview(card, 'good', '2026-10-29');
  assert.equal(step1.repetition, 1);
  assert.equal(step1.intervalDays, 1);

  const step2 = scheduleNextReview(step1, 'good', '2026-10-30');
  assert.equal(step2.repetition, 2);
  assert.equal(step2.intervalDays, 3);

  const step3 = scheduleNextReview(step2, 'easy', '2026-11-02');
  assert.equal(step3.repetition, 3);
  assert.ok(step3.intervalDays >= 7);
});

test('getDueSrsCards correctly identifies due cards', () => {
  const cards: SrsCard[] = [
    {
      id: '1',
      type: 'word',
      english: 'Water',
      bengali: 'পানি',
      category: 'Food',
      level: 'A1',
      repetition: 0,
      intervalDays: 1,
      easeFactor: 2.5,
      dueDate: '2026-10-29',
      historyCount: 0,
    },
    {
      id: '2',
      type: 'word',
      english: 'Sky',
      bengali: 'আকাশ',
      category: 'Nature',
      level: 'A1',
      repetition: 2,
      intervalDays: 5,
      easeFactor: 2.5,
      dueDate: '2026-11-05',
      historyCount: 2,
    },
  ];

  const due = getDueSrsCards(cards, '2026-10-29');
  assert.equal(due.length, 1);
  assert.equal(due[0].english, 'Water');
});

test('computeSpeechAccuracy accurately scores spoken words against target', () => {
  const score100 = computeSpeechAccuracy('I go to work by bus', 'I go to work by bus.');
  assert.equal(score100, 100);

  const scorePartial = computeSpeechAccuracy('I go work by train', 'I go to work by bus.');
  assert.ok(scorePartial >= 50 && scorePartial < 100);

  const score0 = computeSpeechAccuracy('', 'Hello world');
  assert.equal(score0, 0);
});

test('computeSrsStats calculates aggregate stats', () => {
  const cards: SrsCard[] = [
    {
      id: '1',
      type: 'word',
      english: 'A',
      bengali: 'ক',
      category: 'Basics',
      level: 'A1',
      repetition: 0,
      intervalDays: 1,
      easeFactor: 2.5,
      dueDate: '2026-10-29',
      historyCount: 1,
    },
    {
      id: '2',
      type: 'sentence',
      english: 'B',
      bengali: 'খ',
      category: 'Daily',
      level: 'A1',
      repetition: 3,
      intervalDays: 25,
      easeFactor: 2.6,
      dueDate: '2026-11-20',
      historyCount: 4,
    },
  ];

  const stats = computeSrsStats(cards, '2026-10-29');
  assert.equal(stats.total, 2);
  assert.equal(stats.dueToday, 1);
  assert.equal(stats.learning, 1);
  assert.equal(stats.mastered, 1);
});
