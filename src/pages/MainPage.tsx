import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Place {
  name: string;
  category: string;
  address: string;
  imageUrl: string;
  link: string;
}

const dummyPlaces: Place[] = [
  {
    name: '메가MGC커피 순천대점',
    category: '카페',
    address: '전남 순천시 순천대2길 2 1층',
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAzMjJfMjEz%2FMDAxNzExMDk0NDIzNzcx.MZpKNDow3sszo7CZZpO7ivtkM7KW67x1Q23lig3WQPQg.fbKRpjOgYBPOfYFOUsUah35GkG_UNaMSo0q1xbxk02Yg.JPEG%2F%25B8%25DE%25B0%25A1%25C4%25BF%25C7%25C7_%25C5%25B8%25C0%25CC%25C6%25B2.jpg&type=sc960_832',
    link: 'https://map.naver.com/p/entry/place/1092023526?lng=127.4843679&lat=34.9687906&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh'
  },
  {
    name: '플라워카페1002',
    category: '카페',
    address: '전남 순천시 중앙로 284-1 1층',
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191206_234%2F1575611474439JYXi9_JPEG%2FNpbdPJ3FhJQOvxoVX63MnP82.jpg',
    link: 'https://map.naver.com/p/search/%ED%94%8C%EB%9D%BC%EC%9B%8C%EC%B9%B4%ED%8E%98/place/1192266345?c=13.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
  },
  {
    name: '데일리커피',
    category: '카페',
    address: '전남 순천시 삼산로 21 1층',
    imageUrl: 'https://via.placeholder.com/120x120?text=데일리커피',
    link: 'https://place.map.kakao.com/1860894765'
  },
  {
    name: '카페시애틀',
    category: '카페',
    address: '전남 순천시 삼산로 20',
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150901_175%2F1441112685878LHzvb_JPEG%2F156377405834252_0.jpeg',
    link: 'https://map.naver.com/p/search/%EC%B9%B4%ED%8E%98%EC%8B%9C%EC%95%A0%ED%8B%80/place/34849747?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
  },
  {
    name: '이디야커피 순천대정문점',
    category: '카페',
    address: '전남 순천시 중앙로 270 1층',
    imageUrl: 'https://via.placeholder.com/120x120?text=이디야커피 순천대정문점',
    link: 'https://map.naver.com'
  },
  {
    name: '하이오커피 순천대점',
    category: '카페',
    address: '전남 순천시 중앙로 268 1층',
    imageUrl: 'https://via.placeholder.com/120x120?text=하이오커피 순천대점',
    link: 'https://map.naver.com'
  },
  {
    name: '설빙 전남순천대점',
    category: '카페',
    address: '전남 순천시 순천대2길 10-10',
    imageUrl: 'https://via.placeholder.com/120x120?text=설빙 전남순천대점',
    link: 'https://map.naver.com'
  },
  {
    name: '토끼신사',
    category: '카페',
    address: '전남 순천시 환선로 154 1층',
    imageUrl: 'https://via.placeholder.com/120x120?text=토끼신사',
    link: 'https://map.naver.com'
  },
  {
    name: '빽다방 순천대점',
    category: '카페',
    address: '전남 순천시 삼산2길 33 1층',
    imageUrl: 'https://via.placeholder.com/120x120?text=빽다방 순천대점',
    link: 'https://map.naver.com'
  },
  {
    name: '순천달보드레',
    category: '카페',
    address: '전남 순천시 순천대1길 32',
    imageUrl: 'https://via.placeholder.com/120x120?text=순천달보드레',
    link: 'https://map.naver.com'
  },
  {
    name: '라붐',
    category: '카페',
    address: '전남 순천시 중앙로 248-1 1층',
    imageUrl: 'https://via.placeholder.com/120x120?text=라붐',
    link: 'https://map.naver.com'
  },
  {
    name: '에이소울',
    category: '카페',
    address: '전남 순천시 중앙로 244 1층',
    imageUrl: 'https://via.placeholder.com/120x120?text=에이소울',
    link: 'https://map.naver.com'
  },
  {
    name: '마이요거트립 순천대점',
    category: '카페',
    address: '전남 순천시 순천대1길 36-12',
    imageUrl: 'https://via.placeholder.com/120x120?text=마이요거트립 순천대점',
    link: 'https://map.naver.com'
  },
  {
    name: '벤엔제리스아이스크림 순천대DV점',
    category: '카페',
    address: '전남 순천시 순천대1길 36-12',
    imageUrl: 'https://via.placeholder.com/120x120?text=벤엔제리스아이스크림 순천대DV점',
    link: 'https://map.naver.com'
  },
  {
    name: '코드0.1',
    category: '카페',
    address: '전남 순천시 순천대1길 36-20',
    imageUrl: 'https://via.placeholder.com/120x120?text=코드0.1',
    link: 'https://map.naver.com'
  },
  {
    name: '비레스트',
    category: '카페',
    address: '전남 순천시 중앙로 238-1 1층',
    imageUrl: 'https://via.placeholder.com/120x120?text=비레스트',
    link: 'https://map.naver.com'
  },
  {
    name: '크레메',
    category: '카페',
    address: '전남 순천시 순천대1길 36-55 1층',
    imageUrl: 'https://via.placeholder.com/120x120?text=크레메',
    link: 'https://map.naver.com'
  },
  {
    name: '엠커피하우스',
    category: '카페',
    address: '전남 순천시 중앙로 232 다목적홀 1층',
    imageUrl: 'https://via.placeholder.com/120x120?text=엠커피하우스',
    link: 'https://map.naver.com'
  },
  {
    name: '크로커스',
    category: '카페',
    address: '전남 순천시 북문길 176',
    imageUrl: 'https://via.placeholder.com/120x120?text=크로커스',
    link: 'https://map.naver.com'
  }
,
  {
    name: '꾸꾸',
    category: '카페',
    address: '전남 순천시 북정4길 63 1층',
    imageUrl: 'https://via.placeholder.com/120x120?text=꾸꾸',
    link: 'https://map.naver.com'
  }
,
{
  name: '기우',
  category: '주점',
  address: '전남 순천시 순천대1길 28 기우',
  imageUrl: 'https://via.placeholder.com/120x120?text=기우',
  link: 'https://map.naver.com'
},
{
  name: '퍼즐',
  category: '주점',
  address: '전남 순천시 순천대2길 10-17 2층',
  imageUrl: 'https://via.placeholder.com/120x120?text=퍼즐',
  link: 'https://map.naver.com'
},
{
  name: '코코카이',
  category: '주점',
  address: '전남 순천시 중앙로 242 (석현동)',
  imageUrl: 'https://via.placeholder.com/120x120?text=코코카이',
  link: 'https://map.naver.com'
},
{
  name: '코어 분식&포차',
  category: '주점',
  address: '전남 순천시 중앙로 232 1층 코어 분식&포차',
  imageUrl: 'https://via.placeholder.com/120x120?text=코어+분식&포차',
  link: 'https://map.naver.com'
},
{
  name: '칵테일 스토리',
  category: '주점',
  address: '전남 순천시 중앙로 268 1층',
  imageUrl: 'https://via.placeholder.com/120x120?text=칵테일+스토리',
  link: 'https://map.naver.com'
},
{
  name: '에델바이스 주점',
  category: '주점',
  address: '전남 순천시 순천대1길 34 석현동 96-34번지',
  imageUrl: 'https://via.placeholder.com/120x120?text=에델바이스+주점',
  link: 'https://map.naver.com'
},
{
  name: '델라 1호점',
  category: '주점',
  address: '전남 순천시 순천대2길 16',
  imageUrl: 'https://via.placeholder.com/120x120?text=델라+1호점',
  link: 'https://map.naver.com'
},
{
  name: '다이닝타몽 순천대점',
  category: '주점',
  address: '전남 순천시 순천대2길 10-5 1층',
  imageUrl: 'https://via.placeholder.com/120x120?text=다이닝타몽+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '1도씨맥주 순천대점',
  category: '주점',
  address: '전남 순천시 순천대2길 6-1 상가',
  imageUrl: 'https://via.placeholder.com/120x120?text=1도씨맥주+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '술창고',
  category: '주점',
  address: '전남 순천시 순천대1길 36-34',
  imageUrl: 'https://via.placeholder.com/120x120?text=술창고',
  link: 'https://map.naver.com'
},
{
  name: '미스터슈',
  category: '주점',
  address: '전남 순천시 중앙로 238',
  imageUrl: 'https://via.placeholder.com/120x120?text=미스터슈',
  link: 'https://map.naver.com'
},
{
  name: '낙우송',
  category: '주점',
  address: '전남 순천시 순천대1길 24',
  imageUrl: 'https://via.placeholder.com/120x120?text=낙우송',
  link: 'https://map.naver.com'
},
{
  name: '빵꼴',
  category: '주점',
  address: '전남 순천시 순천대1길 28 빵꼴',
  imageUrl: 'https://via.placeholder.com/120x120?text=빵꼴',
  link: 'https://map.naver.com'
},
{
  name: '더박스',
  category: '주점',
  address: '전남 순천시 순천대2길 26 2층 더박스',
  imageUrl: 'https://via.placeholder.com/120x120?text=더박스',
  link: 'https://map.naver.com'
},
{
  name: '만카이',
  category: '주점',
  address: '전남 순천시 중앙로 248-1 1동 1층',
  imageUrl: 'https://via.placeholder.com/120x120?text=만카이',
  link: 'https://map.naver.com'
},
{
  name: '뚱땡이포차',
  category: '주점',
  address: '전남 순천시 순천대2길 22 1층',
  imageUrl: 'https://via.placeholder.com/120x120?text=뚱땡이포차',
  link: 'https://map.naver.com'
},
{
  name: '추카추카',
  category: '주점',
  address: '전남 순천시 순천대2길 24',
  imageUrl: 'https://via.placeholder.com/120x120?text=추카추카',
  link: 'https://map.naver.com'
},
{
  name: '무궁화주택 순천대점',
  category: '주점',
  address: '전남 순천시 중앙로 270 2층',
  imageUrl: 'https://via.placeholder.com/120x120?text=무궁화주택+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '투다리 순대점',
  category: '주점',
  address: '전남 순천시 순천대2길 14',
  imageUrl: 'https://via.placeholder.com/120x120?text=투다리+순대점',
  link: 'https://map.naver.com'
},
{
  name: '아리랑',
  category: '주점',
  address: '전남 순천시 매산큰길 101',
  imageUrl: 'https://via.placeholder.com/120x120?text=아리랑',
  link: 'https://map.naver.com'
},
{
  name: '술술',
  category: '주점',
  address: '전남 순천시 순천대1길 34 1층',
  imageUrl: 'https://via.placeholder.com/120x120?text=술술',
  link: 'https://map.naver.com'
},
{
  name: '이파리 순대점',
  category: '음식점',
  address: '전남 순천시 중앙로 258 이파리 순대점',
  imageUrl: 'https://via.placeholder.com/120x120?text=이파리+순대점',
  link: 'https://map.naver.com'
},
{
  name: '태리로제떡볶이&닭강정 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대1길 16 상가 1층',
  imageUrl: 'https://via.placeholder.com/120x120?text=태리로제떡볶이&닭강정+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '홍이참숯구이',
  category: '음식점',
  address: '전남 순천시 환선로 168-1',
  imageUrl: 'https://via.placeholder.com/120x120?text=홍이참숯구이',
  link: 'https://map.naver.com'
},
{
  name: '맛있는한끼미광',
  category: '음식점',
  address: '전남 순천시 환선로 145 1층',
  imageUrl: 'https://via.placeholder.com/120x120?text=맛있는한끼미광',
  link: 'https://map.naver.com'
},
{
  name: '국수나무 순천대점',
  category: '음식점',
  address: '전남 순천시 중앙로 270',
  imageUrl: 'https://via.placeholder.com/120x120?text=국수나무+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '석현정육식당',
  category: '음식점',
  address: '전남 순천시 환선로 147-1',
  imageUrl: 'https://via.placeholder.com/120x120?text=석현정육식당',
  link: 'https://map.naver.com'
},
{
  name: '봉구스밥버거 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대길 1길 24',
  imageUrl: 'https://via.placeholder.com/120x120?text=봉구스밥버거+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '육백리스넥반점',
  category: '음식점',
  address: '전남 순천시 순천대1길 20 육백리스낵반점',
  imageUrl: 'https://via.placeholder.com/120x120?text=육백리스넥반점',
  link: 'https://map.naver.com'
},
{
  name: '대박마라탕 순천점',
  category: '음식점',
  address: '전남 순천시 중앙로 240',
  imageUrl: 'https://via.placeholder.com/120x120?text=대박마라탕+순천점',
  link: 'https://map.naver.com'
},
{
  name: '유부남 순천점',
  category: '음식점',
  address: '전남 순천시 순천대1길 36-20 1층 유부남',
  imageUrl: 'https://via.placeholder.com/120x120?text=유부남+순천점',
  link: 'https://map.naver.com'
},
{
  name: '신당동찌개',
  category: '음식점',
  address: '전남 순천시 중앙로 248-1',
  imageUrl: 'https://via.placeholder.com/120x120?text=신당동찌개',
  link: 'https://map.naver.com'
},
{
  name: '총각쉐프의 꿉닭먹짱',
  category: '음식점',
  address: '전남 순천시 순천대2길 10',
  imageUrl: 'https://via.placeholder.com/120x120?text=총각쉐프의+꿉닭먹짱',
  link: 'https://map.naver.com'
},
{
  name: '두찜 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대1길 40',
  imageUrl: 'https://via.placeholder.com/120x120?text=두찜+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '집밥한끼',
  category: '음식점',
  address: '전남 순천시 순천대1길 46 1층상가',
  imageUrl: 'https://via.placeholder.com/120x120?text=집밥한끼',
  link: 'https://map.naver.com'
},
{
  name: '요하마라21순대점',
  category: '음식점',
  address: '전남 순천시 순천대1길 50 1층',
  imageUrl: 'https://via.placeholder.com/120x120?text=요하마라21순대점',
  link: 'https://map.naver.com'
},
{
  name: '멕시카나치킨 순천 석현점',
  category: '음식점',
  address: '전남 순천시 석현동 72-30',
  imageUrl: 'https://via.placeholder.com/120x120?text=멕시카나치킨+순천+석현점',
  link: 'https://map.naver.com'
},
{
  name: '연이식당',
  category: '음식점',
  address: '전남 순천시 매산큰길 99',
  imageUrl: 'https://via.placeholder.com/120x120?text=연이식당',
  link: 'https://map.naver.com'
},
{
  name: '밥은화 전남 순천대점',
  category: '음식점',
  address: '전남 순천시 삼산2길 48 1층 밥은화',
  imageUrl: 'https://via.placeholder.com/120x120?text=밥은화+전남+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '중국성',
  category: '음식점',
  address: '전남 순천시 순천대2길 20',
  imageUrl: 'https://via.placeholder.com/120x120?text=중국성',
  link: 'https://map.naver.com'
},
{
  name: '용우동 순천대점',
  category: '음식점',
  address: '전남 순천시 석현동 72-7 1층',
  imageUrl: 'https://via.placeholder.com/120x120?text=용우동+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '옛날 꿀꿀이 숯불촌',
  category: '음식점',
  address: '전남 순천시 석현동 72-9',
  imageUrl: 'https://via.placeholder.com/120x120?text=옛날+꿀꿀이+숯불촌',
  link: 'https://map.naver.com'
},
{
  name: '돼지마을',
  category: '음식점',
  address: '전남 순천시 삼산2길 36',
  imageUrl: 'https://via.placeholder.com/120x120?text=돼지마을',
  link: 'https://map.naver.com'
},
{
  name: '등뼈가 순천대학점',
  category: '음식점',
  address: '전남 순천시 순천대2길 36',
  imageUrl: 'https://via.placeholder.com/120x120?text=등뼈가+순천대학점',
  link: 'https://map.naver.com'
},
{
  name: '창조식당',
  category: '음식점',
  address: '전남 순천시 순천대2길 38 창조식당',
  imageUrl: 'https://via.placeholder.com/120x120?text=창조식당',
  link: 'https://map.naver.com'
},
{
  name: '춘천거시기닭갈비',
  category: '음식점',
  address: '전남 순천시 순천대2길 42',
  imageUrl: 'https://via.placeholder.com/120x120?text=춘천거시기닭갈비',
  link: 'https://map.naver.com'
},
{
  name: '춘천마쪼은닭갈비',
  category: '음식점',
  address: '전남 순천시 삼산2길 29 춘천마쪼은닭갈비',
  imageUrl: 'https://via.placeholder.com/120x120?text=춘천마쪼은닭갈비',
  link: 'https://map.naver.com'
},
{
  name: '사이카레',
  category: '음식점',
  address: '전남 순천시 순천대1길 36-20 1층 사이카레',
  imageUrl: 'https://via.placeholder.com/120x120?text=사이카레',
  link: 'https://map.naver.com'
},
{
  name: '꽃밥먹으러',
  category: '음식점',
  address: '전남 순천시 순천대1길 36-51 1층',
  imageUrl: 'https://via.placeholder.com/120x120?text=꽃밥먹으러',
  link: 'https://map.naver.com'
},
{
  name: '한솥도시락 순천대학교점',
  category: '음식점',
  address: '전남 순천시 중앙로 238-1 넥스트문구',
  imageUrl: 'https://via.placeholder.com/120x120?text=한솥도시락+순천대학교점',
  link: 'https://map.naver.com'
},
{
  name: '에너지버거그릴',
  category: '음식점',
  address: '전남 순천시 순천대1길 6 2층 에너지버거그릴',
  imageUrl: 'https://via.placeholder.com/120x120?text=에너지버거그릴',
  link: 'https://map.naver.com'
},
{
  name: '기차마을',
  category: '음식점',
  address: '전남 순천시 순천대3길 24',
  imageUrl: 'https://via.placeholder.com/120x120?text=기차마을',
  link: 'https://map.naver.com'
},
{
  name: '우리할매보쌈족발',
  category: '음식점',
  address: '전남 순천시 환선로 168',
  imageUrl: 'https://via.placeholder.com/120x120?text=우리할매보쌈족발',
  link: 'https://map.naver.com'
},
{
  name: '남가네설악추어탕 순천대점',
  category: '음식점',
  address: '전남 순천시 환선로 161 1층',
  imageUrl: 'https://via.placeholder.com/120x120?text=남가네설악추어탕+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '우리집오리 순대점',
  category: '음식점',
  address: '전남 순천시 환선로 156-1',
  imageUrl: 'https://via.placeholder.com/120x120?text=우리집오리+순대점',
  link: 'https://map.naver.com'
},
{
  name: '이삭토스트 순천대점',
  category: '음식점',
  address: '전남 순천시 매산큰길 99',
  imageUrl: 'https://via.placeholder.com/120x120?text=이삭토스트+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '이백장돈가스 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대2길 8 1층',
  imageUrl: 'https://via.placeholder.com/120x120?text=이백장돈가스+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '신라장',
  category: '음식점',
  address: '전남 순천시 순천대2길 8',
  imageUrl: 'https://via.placeholder.com/120x120?text=신라장',
  link: 'https://map.naver.com'
},
{
  name: '원조왕족발',
  category: '음식점',
  address: '전남 순천시 순천대2길 6 원조왕족발',
  imageUrl: 'https://via.placeholder.com/120x120?text=원조왕족발',
  link: 'https://map.naver.com'
},
{
  name: '테마라면 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대1길 36-24',
  imageUrl: 'https://via.placeholder.com/120x120?text=테마라면+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '퀸테이블',
  category: '음식점',
  address: '전남 순천시 순천대1길 36-55 1층 퀸테이블',
  imageUrl: 'https://via.placeholder.com/120x120?text=퀸테이블',
  link: 'https://map.naver.com'
},
{
  name: '굴천지.초계국수&황토수육국밥 석현점',
  category: '음식점',
  address: '전남 순천시 삼산로 17 순천문화예술회관 맟은편',
  imageUrl: 'https://via.placeholder.com/120x120?text=굴천지.초계국수&황토수육국밥+석현점',
  link: 'https://map.naver.com'
},
{
  name: '공화춘',
  category: '음식점',
  address: '전남 순천시 삼산로 13',
  imageUrl: 'https://via.placeholder.com/120x120?text=공화춘',
  link: 'https://map.naver.com'
},
{
  name: '송원곱창닭갈비',
  category: '음식점',
  address: '전남 순천시 순천대2길 12 질러바노래연습장',
  imageUrl: 'https://via.placeholder.com/120x120?text=송원곱창닭갈비',
  link: 'https://map.naver.com'
},
{
  name: '도야짬뽕 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대2길 26',
  imageUrl: 'https://via.placeholder.com/120x120?text=도야짬뽕+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '김밥천국 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대2길 28',
  imageUrl: 'https://via.placeholder.com/120x120?text=김밥천국+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '교촌치킨 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대2길 30',
  imageUrl: 'https://via.placeholder.com/120x120?text=교촌치킨+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '포포식당',
  category: '음식점',
  address: '전남 순천시 순천대3길 11 1층',
  imageUrl: 'https://via.placeholder.com/120x120?text=포포식당',
  link: 'https://map.naver.com'
},
{
  name: '샤브로21 순천대점',
  category: '음식점',
  address: '전남 순천시 중앙로 270 1층 103호 샤브로21 순천대점',
  imageUrl: 'https://via.placeholder.com/120x120?text=샤브로21+순천대점',
  link: 'https://map.naver.com'
},
{
  name: '처갓집 양념치킨 순천대학점',
  category: '음식점',
  address: '전남 순천시 석현동 86-5',
  imageUrl: 'https://via.placeholder.com/120x120?text=처갓집+양념치킨+순천대학점',
  link: 'https://map.naver.com'
}
];

const MainPage: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([]);
  const [selectedTab, setSelectedTab] = useState<'search' | 'intro'>('search');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const input = document.getElementById('searchInput') as HTMLInputElement;
    const query = input.value;
    setKeyword(query);
    setFilteredPlaces(dummyPlaces.filter(place => place.name.includes(query)));
  };

  const handleCategory = (cat: string) => {
    setKeyword(cat);
    setFilteredPlaces(dummyPlaces.filter(place => place.category === cat));
  };

  return (
    <>
      <Header />

      <div style={{ textAlign: 'center', padding: '2rem 1rem', background: '#f4f6f9', minHeight: '100vh' }}>
        <div style={{ marginBottom: '2rem' }}>
          <button
            onClick={() => setSelectedTab('search')}
            style={{
              padding: '0.6rem 1.2rem',
              marginRight: '1rem',
              borderRadius: '20px',
              border: '1px solid #007bff',
              backgroundColor: selectedTab === 'search' ? '#007bff' : 'white',
              color: selectedTab === 'search' ? 'white' : '#007bff',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            제휴 업체 찾기
          </button>

          <button
            onClick={() => setSelectedTab('intro')}
            style={{
              padding: '0.6rem 1.2rem',
              borderRadius: '20px',
              border: '1px solid #007bff',
              backgroundColor: selectedTab === 'intro' ? '#007bff' : 'white',
              color: selectedTab === 'intro' ? 'white' : '#007bff',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            프로그램 소개
          </button>
        </div>

        {/* 🔥 애니메이션 처리 */}
        <AnimatePresence mode="wait">
  {selectedTab === 'search' && (
    <motion.div
      key="search"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>제휴 업체</h2>
      <form onSubmit={handleSearch} style={{ marginBottom: '1rem' }}>
        <input
          id="searchInput"
          type="text"
          placeholder="검색어 입력"
          style={{
            padding: '0.6rem 1rem',
            width: '250px',
            borderRadius: '20px',
            border: '1px solid #ccc',
            outline: 'none',
            fontSize: '1rem'
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: '0.5rem',
            padding: '0.6rem 1.2rem',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          검색
        </button>
      </form>

      <div style={{ marginBottom: '2rem' }}>
        {['음식점', '카페', '주점'].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            style={{
              margin: '0 0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              border: '1px solid #007bff',
              backgroundColor: 'white',
              color: '#007bff',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}
      >
        {filteredPlaces.map((place, index) => (
          <motion.a
            key={index}
            href={place.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              width: '100%',
              maxWidth: '500px'
            }}
            whileHover={{ scale: 1.03 }}
          >
            <div
              style={{
                padding: '1rem',
                border: '1px solid #ddd',
                borderRadius: '12px',
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
              }}
            >
              <img
                src={place.imageUrl}
                alt={place.name}
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>{place.name}</h3>
                <p style={{ margin: '0.2rem 0' }}>📌 분류: {place.category}</p>
                <p style={{ margin: '0.2rem 0' }}>📍 주소: {place.address}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )}

  {selectedTab === 'intro' && (
    <motion.div
      key="intro"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h2>프로그램 소개</h2>
      <p>서화총학생회 X 이음 프로젝트는 학생들과 지역 사회를 연결하기 위한 플랫폼입니다.</p>
      <p>📌 목적: 지역 상권과의 상생</p>
      <p>📌 내용: 제휴 업체 검색, 할인 혜택, 문화 교류</p>
      <p>📌 주최: 국립순천대학교 제41대 서화총학생회</p>
    </motion.div>
  )}
</AnimatePresence>
      </div>

      <Footer />
    </>
  );
};

export default MainPage;