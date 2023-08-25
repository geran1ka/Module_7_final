import { main } from '../../helper/const.js';
import {createCard} from './createCard.js';

export const cardPageInit = () => {
  // const pageCard = document.querySelector('.page-card');
  main.textContent = '';
  const data = {
    'title': '15.6" Игровой ноутбук ASUS G513IE-HN004T',
    'description': 'ROG Strix G15/17 – это игровая платформа для массового пользователя, работающая на базе операционной системы Windows 10 Pro. Благодаря мощной конфигурации, которая может включать в себя процессор AMD Ryzen 9 5900HX и видеокарту GeForce RTX 3070, этот ноутбук подходит для широкого спектра задач. Его дисплей доступен в двух вариантах: с киберспортивного уровня частотой обновления в 300 Гц или с высоким разрешением WQHD. Оба варианта обладают низким временем отклика (3 мс) и поддерживают адаптивную синхронизацию Adaptive-Sync. Оптимизированная система охлаждения гарантирует стабильную работу устройства под тяжелыми нагрузками, поэтому ROG Strix G15/17 позволит вам проявить все свое мастерство в любой игровой ситуации!',
    'price': '140590',
    'discount': '15',
    'count': '1',
    'units': 'шт',
    'image': 'image/9251673155.jpg',
    'category': 'Электроника',
    'id': '9251673155',
  };

  const cardItem = createCard(data);
  main?.prepend(cardItem);
};