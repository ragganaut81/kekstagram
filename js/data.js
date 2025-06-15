import {
  getRandomInteger,
  createRandomIdFromRangeGenerator,
  createIdGenerator,
  getRandomArrayElement
} from './util.js';

const PHOTO_CAPTIONS = [
  'Неудачный ракурс или новая эстетика?',
  'Естественное состояние после пробуждения',
  'Когда позирование даётся с трудом',
  'Фотография для личного архива',
  'Попытка №5 сохранить серьёзное выражение',
  'Момент до осознания происходящего',
  'Случайный кадр, ставший лучшим',
  'В процессе поиска удобного положения',
  'Когда просят улыбнуться для фото',
  'Выражение лица, соответствующее обстоятельствам',
  'Хаотичная композиция с глубоким смыслом',
  'Попытка выглядеть презентабельно',
  'Состояние между сном и бодрствованием',
  'Сравнение ожидаемого и реального результата',
  'Анатомическая особенность как преимущество',
  'Гастрономический объект в фокусе',
  'Оптимизация энергозатрат в действии',
  'Непроизвольная мимическая реакция',
  'Типичная поза в естественной среде',
  'Возрастные изменения как элемент стиля',
  'Реальность без цифровой обработки',
  'Объёмное восприятие действительности',
  'Фоновый объект, привлекающий внимание',
  'Спонтанное движение, ошибочно принятое за искусство',
  'Удачный кадр с неизвестным происхождением'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Бздёжник',
  'Кекожуй',
  'Хрюндель',
  'Чмокер',
  'Плюшкот',
  'Сопун',
  'Бульк',
  'Шлёпс',
  'Фырч',
];
const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generatePhoto = createRandomIdFromRangeGenerator(1, 25);
const generatePhotoCaption = createRandomIdFromRangeGenerator(0, 24);
const generateId = createIdGenerator();

const createPost = () => {
  const createComments = () => {
    const generateMessageFromArray = function (array) {
      const shuffled = [...array].sort(() => 0.5 - Math.random());

      const count = Math.random() < 0.5 ? 1 : 2;
      const selected = shuffled.slice(0, count);

      return selected.join(' ');
    };
    const completeMessage = generateMessageFromArray(COMMENTS);
    return {
      id: generateId(),
      avatar: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
      message: completeMessage,
      name: getRandomArrayElement(NAMES),
    };
  };
  const commentsArray = Array.from({length: getRandomInteger(0, 30)}, createComments);

  return {
    id: generatePhotoId(),
    url: 'photos/' + generatePhoto() + '.jpg',
    description: PHOTO_CAPTIONS[(generatePhotoCaption())],
    likes: getRandomInteger(15, 200),
    comments: commentsArray,
  };
};

const similarPosts = () => Array.from({length: 25}, createPost);

export {similarPosts};

