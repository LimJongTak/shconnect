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
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjVfMTU0%2FMDAxNjkyOTAwMzQwNjgx.lsZ77PAw9ny7DqUs4zksTPL1kar53g0D6AGVuYsa_ykg.MGWnZhOCrdBo-hAzpwie_trG6MioHt9ILVjjGK6Iw7Ug.PNG.from55%2F%25C0%25CC%25B5%25F0%25BE%25C6%25C4%25BF%25C7%25C71.png&type=sc960_832',
    link: 'https://map.naver.com/p/search/%EC%9D%B4%EB%94%94%EC%95%BC%20%EC%BB%A4%ED%94%BC%20%EC%88%9C%EC%B2%9C%EB%8C%80/place/1597297281?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
  },
  {
    name: '하이오커피 순천대점',
    category: '카페',
    address: '전남 순천시 중앙로 268 1층',
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221109_19%2F1668002799163UYpv9_JPEG%2FKakaoTalk_20221109_230551502.jpg',
    link: 'https://map.naver.com/p/search/%ED%95%98%EC%9D%B4%EC%98%A4%EC%BB%A4%ED%94%BC%20%EC%88%9C%EC%B2%9C%EB%8C%80/place/1360182805?c=15.00,0,0,0,dh&isCorrectAnswer=true'
  },
  {
    name: '설빙 전남순천대점',
    category: '카페',
    address: '전남 순천시 순천대2길 10-10',
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMzFfMTgy%2FMDAxNzQzNDAxNDEzMDY2.hOrtoirgaKWeJAKKsRs_acnjM5_KOz2D_RWYYc3bmRwg.WgIm7VBZWjU9vPauA9_mNwXqPNS197YmkcFp-gJ691sg.JPEG%2F3.jpg&type=sc960_832',
    link: 'https://map.naver.com/p/search/%EC%84%A4%EB%B9%99/place/34007267?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
  },
  {
    name: '토끼신사',
    category: '카페',
    address: '전남 순천시 환선로 154 1층',
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221114_41%2F1668404227721lNoi4_JPEG%2F445C8AAD-8239-4703-880F-31F346800C19.jpeg',
    link: 'https://map.naver.com/p/search/%ED%86%A0%EB%81%BC%EC%8B%A0%EC%82%AC/place/31986129?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
  },
  {
    name: '빽다방 순천대점',
    category: '카페',
    address: '전남 순천시 삼산2길 33 1층',
    imageUrl: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F04%2F21%2F13%2F042113691bfdec05578af6398160aa5d.jpg&type=sc960_832',
    link: 'https://map.naver.com/p/search/%EB%B9%BD%EB%8B%A4%EB%B0%A9/place/1850397639?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
  },
  {
    name: '순천달보드레',
    category: '카페',
    address: '전남 순천시 순천대1길 32',
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230417_245%2F1681697708500x9KXy_JPEG%2F8399DB08-AA88-491F-8786-5238FCDD06E5.jpeg',
    link: 'https://map.naver.com/p/search/%EC%88%9C%EC%B2%9C%EB%8B%AC%EB%B3%B4%EB%93%9C%EB%A0%88/place/1886847381?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
  },
  {
    name: '라붐',
    category: '카페',
    address: '전남 순천시 중앙로 248-1 1층',
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250303_291%2F1740971069367NUF0z_JPEG%2F1000016074.jpg',
    link: 'https://map.naver.com/p/search/%EB%9D%BC%EB%B6%90/place/1075310523?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
  },
  {
    name: '에이소울',
    category: '카페',
    address: '전남 순천시 중앙로 244 1층',
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200324_168%2F158502796971183urt_JPEG%2FK7qGhWLv-QqTzHqmrB-eRkCc.jpg',
    link: 'https://map.naver.com/p/search/%EC%97%90%EC%9D%B4%EC%86%8C%EC%9A%B8/place/38275919?c=15.00,0,0,0,dh&isCorrectAnswer=true'
  },
  {
    name: '마이요거트립 순천대점',
    category: '카페',
    address: '전남 순천시 순천대1길 36-12',
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240131_121%2F1706682751682T1AyB_JPEG%2FKakaoTalk_20240131_152009197.jpg',
    link: 'https://map.naver.com/p/search/%EB%A7%88%EC%9D%B4%EC%9A%94%EA%B1%B0%ED%8A%B8%EB%A6%BD%20%EC%88%9C%EC%B2%9C%EB%8C%80/place/1686609786?c=15.00,0,0,0,dh&isCorrectAnswer=true'
  },
  {
    name: '벤엔제리스아이스크림 순천대DV점',
    category: '카페',
    address: '전남 순천시 순천대1길 36-12',
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240922_217%2F1727012128632L5Q5b_PNG%2F%25BA%25A5%25BE%25D8%25C1%25A6%25B8%25AE%25BD%25BA_%25BF%25CD%25BA%25ED%25B7%25AF.png&type=sc960_832',
    link: 'https://place.map.kakao.com/799828651'
  },
  {
    name: '코드0.1',
    category: '카페',
    address: '전남 순천시 순천대1길 36-20',
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MTVfMjI0%2FMDAxNzQ0NzA0NTY3MDQ4.0OnW4QybuyeRTUDokGC5jvgnduiORVgxYbRANp09S8Yg.jEO5h78Pg0je0qhXMf0gZp8V_ZkNjh2S3wabaYkRFIog.JPEG%2FKakaoTalk_20250415_125707803_02.jpg',
    link: 'https://map.naver.com/p/search/%EC%BD%94%EB%93%9C0.1/place/1865735126?c=15.00,0,0,0,dh&isCorrectAnswer=true'
  },
  {
    name: '비레스트',
    category: '카페',
    address: '전남 순천시 중앙로 238-1 1층',
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200325_13%2F1585114780223khm83_JPEG%2FxjFoeATTMU2JF8G4hfDS6NZj.jpg',
    link: 'https://map.naver.com/p/search/%EB%B9%84%EB%A0%88%EC%8A%A4%ED%8A%B8/place/38711566?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
  },
  {
    name: '크레메',
    category: '카페',
    address: '전남 순천시 순천대1길 36-55 1층',
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210503_166%2F1620031586527wSNQ3_JPEG%2FbuYgc9HF-v0eTSGNGIoRrzqN.jpg',
    link: 'https://map.naver.com/p/search/%ED%81%AC%EB%A0%88%EB%A9%94/place/1494275962?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
  },
  {
    name: '엠커피하우스',
    category: '카페',
    address: '전남 순천시 중앙로 232 다목적홀 1층',
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220901_22%2F1662022458831xJc9i_JPEG%2FF6AB41E3-80D3-46ED-A931-558E1B68A760.jpeg',
    link: 'https://map.naver.com/p/entry/place/1219220571?c=15.00,0,0,0,dh'
  },
  {
    name: '크로커스',
    category: '카페',
    address: '전남 순천시 북문길 176',
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMThfMjcg%2FMDAxNzAwMzEwMzczNjEz.BtRCRIJtgXRkkBN18VkFVjv-sdyRq76qMjdPWK5Q7O4g.ZQx9sSMHJCNLwfe45ol5n-bmX48QCIDIi7S-Y2eYYDgg.JPEG.yujin1948%2FKakaoTalk_20231118_212413128_01.jpg',
    link: 'https://map.naver.com/p/search/%ED%81%AC%EB%A1%9C%EC%BB%A4%EC%8A%A4/place/1634139293?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
  }
,
  {
    name: '꾸꾸',
    category: '카페',
    address: '전남 순천시 북정4길 63 1층',
    imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220923_10%2F1663916586408O0SLv_JPEG%2FD4125E24-D488-4D60-861A-6D565E590A10.jpeg',
    link: 'https://map.naver.com/p/search/%EA%BE%B8%EA%BE%B8/place/1321102820?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
  }
,
{
  name: '기우',
  category: '주점',
  address: '전남 순천시 순천대1길 28 기우',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240521_254%2F1716274751210hOuBM_JPEG%2FKakaoTalk_20240521_155824107.jpg',
  link: 'https://map.naver.com/p/search/%EA%B8%B0%EC%9A%B0/place/1559075918'
},
{
  name: '퍼즐',
  category: '주점',
  address: '전남 순천시 순천대2길 10-17 2층',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230519_42%2F1684472265794jtlOv_JPEG%2FIMG_5927.jpeg',
  link: 'https://map.naver.com/p/search/%ED%8D%BC%EC%A6%90/place/1728424311'
},
{
  name: '코코카이',
  category: '주점',
  address: '전남 순천시 중앙로 242 (석현동)',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MTFfNTgg%2FMDAxNzE4MDMxNjg2MTMz.KFC8TVH37Nw1zER5hx4Myc6Q-3e7B6D8wSMJUL-q-B4g.E08ECfArn6DwTEOC-z36CiNHkcTSoz-T7ABCE7K4ij0g.JPEG%2FIMG_2597.JPG',
  link: 'https://map.naver.com/p/search/%EC%BD%94%EC%BD%94%EC%B9%B4%EC%9D%B4/place/1453274593'
},
{
  name: '코어 분식&포차',
  category: '주점',
  address: '전남 순천시 중앙로 232 1층 코어 분식&포차',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250102_41%2F1735802553071KQ1oR_JPEG%2F1000014001.jpg',
  link: 'https://map.naver.com/p/search/%EC%BD%94%EC%96%B4%20%EB%B6%84%EC%8B%9D/place/1583759276'
},
{
  name: '칵테일스토리',
  category: '주점',
  address: '전남 순천시 중앙로 268 1층',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MTNfMTQz%2FMDAxNzQ0NTMwMTMwNjk3.tNJJY8WU5wplq3v_OwtPrzHvI2xJ7H6szgbU_M-KNwEg.8r6XiN2RXYXUHZL0F3h8LxcREswFsuB4f_TBAuOk2h4g.JPEG%2FIMG_7800.jpg',
  link: 'https://map.naver.com/p/search/%EC%B9%B5%ED%85%8C%EC%9D%BC%20%EC%8A%A4%ED%86%A0%EB%A6%AC/place/1942322883'
},
{
  name: '에델바이스',
  category: '주점',
  address: '전남 순천시 순천대1길 34 석현동 96-34번지',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231030_127%2F16986674912428hIsn_JPEG%2F%25BF%25A1%25B5%25A8%25B9%25D9%25C0%25CC%25BD%25BA_%25B4%25EB%25C7%25A5_%25BB%25E7%25C1%25F8_20231030_205932.jpg',
  link: 'https://map.naver.com/p/search/%EC%97%90%EB%8D%B8%EB%B0%94%EC%9D%B4%EC%8A%A4/place/1552722763'
},
{
  name: '델라 1호점',
  category: '주점',
  address: '전남 순천시 순천대2길 16',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjNfMjU5%2FMDAxNjY2NDk3NDUxNTcy.7AB7y2nXRfgH_EHwzs4MMrO_Vn6IxL3Y6BCnHR0rr-og.5RFKH4wwBp1OmqIHl9IU7WjXlViv9yuOS67GSTyK6i0g.JPEG.mj9898z%2FIMG_2295.JPG',
  link: 'https://map.naver.com/p/search/%EB%8D%B8%EB%9D%BC/place/1183491815'
},
{
  name: '다이닝타몽 순천대점',
  category: '주점',
  address: '전남 순천시 순천대2길 10-5 1층',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA1MDRfMjg4%2FMDAxNzQ2MzM5MjcxNjU0.o_cL-eG8K3Oh5saMo--VwmJkjper1zebq8VndtFOKmgg.HG-0dMIYEUQm4eyEc7mDwSFsXX-EzLWYmafa921cEwIg.JPEG%2FIMG_7907.jpg',
  link: 'https://map.naver.com/p/search/%EB%8B%A4%EC%9D%B4%EB%8B%9D%ED%83%80%EB%AA%BD/place/2028206743'
},
{
name: '1도씨 맥주 순천대점',
category: '주점',
address: '전남 순천시 역전길 17-1',
imageUrl: 'https://ldb-phinf.pstatic.net/20220924_61/1664026293398cel4F_JPEG/image.jpg',
link: 'https://map.naver.com/p/search/1%EB%8F%84%EC%94%A8%20%EB%A7%A5%EC%A3%BC/place/1636081055?c=13.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
name: '술창고',
category: '주점',
address: '전남 순천시 중앙로 156',
imageUrl: 'https://ldb-phinf.pstatic.net/20170929_167/1506658611619xNUY6_JPEG/CL7w1XVk2TfRE9_eIVH_JcxF.jpg',
link: 'https://map.naver.com/p/search/%EC%88%A0%EC%B0%BD%EA%B3%A0/place/1074693374?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
name: '미스터슈',
category: '주점',
address: '전남 순천시 중앙로 172 1층',
imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjVfMjcz%2FMDAxNzA2MTg4NTE2NzM2.bZXYVrqrVs_qnX62TQOwFLyi4kAY771OIm_l38qo_asg.qM1r1ZoYadMEy8wayD1aas6_BHGLI880-rynW96Wjugg.JPEG.alonepray%2F20240124%25A3%25DF190052.jpg',
link: 'https://map.naver.com/p/search/%EB%AF%B8%EC%8A%A4%ED%84%B0%EC%8A%88/place/32429522?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
name: '낙우송',
category: '주점',
address: '전남 순천시 중앙로 171',
imageUrl: 'https://ldb-phinf.pstatic.net/20200325_278/1585115111893jBB1E_JPEG/X6Lk1JkcqCqtP2OneYyOYr84.jpg',
link: 'https://map.naver.com/p/search/%EB%82%99%EC%9A%B0%EC%86%A1/place/36560422?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
name: '빵꼴',
category: '주점',
address: '전남 순천시 역전길 23-1',
imageUrl: 'https://ldb-phinf.pstatic.net/20250228_9/1740671923546BEMne_JPEG/IMG_1172.jpeg',
link: 'https://map.naver.com/p/search/%EB%B9%B5%EA%BC%B4/place/1224334125?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
name: '더박스',
category: '주점',
address: '전남 순천시 역전길 24-1',
imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20231114_14%2F1699959892852aQDcK_JPEG%2Fscaled_1698000819373.jpg',
link: 'https://map.naver.com/p/search/%EB%8D%94%EB%B0%95%EC%8A%A4%20%EC%88%9C%EC%B2%9C/place/1934647697?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
name: '만카이',
category: '주점',
address: '전남 순천시 중앙로 139 1층',
imageUrl: 'https://ldb-phinf.pstatic.net/20230826_5/1693011839748QkqEI_JPEG/1000001556.jpg',
link: 'https://map.naver.com/p/search/%EB%A7%8C%EC%B9%B4%EC%9D%B4/place/1924929065?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
name: '뚱땡이포차',
category: '주점',
address: '전남 순천시 역전2길 22',
imageUrl: 'https://ldb-phinf.pstatic.net/20250210_121/17391311326190sezJ_JPEG/IMG_3384.jpeg',
link: 'https://map.naver.com/p/search/%EB%9A%B1%EB%95%A1%EC%9D%B4%ED%8F%AC%EC%B0%A8/place/1646755376?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
name: '추카추카',
category: '주점',
address: '전남 순천시 중앙로 212',
imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzEwMjVfMTEg%2FMDAxNjk4MjIyNzE2MTAw.gmFurYatCnjdBbiKzTWw8i5LyOjkf4gAqmdKR8pae7Mg.A-6NbcRvvGGsMwoWdDpC34aenzVFjEa9C3nde_wm_h0g.JPEG%2Fupload_3d58a3ea1837b45e17ca782701997a11.jpg%3Ftype%3Dw1500_60_sharpen',
link: 'https://map.naver.com/p/search/%EC%B6%94%EC%B9%B4%EC%B6%94%EC%B9%B4/place/17030156?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
name: '무궁화주택 순천대점',
category: '주점',
address: '전남 순천시 장명로 45',
imageUrl: 'https://play-lh.googleusercontent.com/4ba13O4KLwYABQ2KvFaDpKsc_GuyxwItIRBH4L9sg4jciAnFD4KOr2eU1_tZxoz5pg',
link: 'https://map.naver.com/p/search/%EB%AC%B4%EA%B6%81%ED%99%94%EC%A3%BC%ED%83%9D%20%EC%88%9C%EC%B2%9C/place/1614596220?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
name: '투다리 순대점',
category: '주점',
address: '전남 순천시 중앙로 132',
imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20130802_82%2Fcafe20day_13753776727984ad8C_JPEG%2F%25C5%25F5%25B4%25D9%25B8%25AE_%25B7%25CE%25B0%25ED_Converted.jpg&type=sc960_832',
link: 'https://map.naver.com/p/search/%ED%88%AC%EB%8B%A4%EB%A6%AC%20%EC%88%9C%EC%B2%9C/place/11762914?c=11.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
name: '아리랑',
category: '주점',
address: '전남 순천시 중앙로 229',
imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMjZfNjEg%2FMDAxNzA4OTE4OTk4OTI3.d96enD5PlM6c1ouJRfKUgCFUgoeMWQFmtd-QA81n4GYg.ANvu1znNngTLKiZJR2TtEoHvbgTSlNUTq-thRpNVi84g.JPEG%2F20240214%25A3%25DF184631.jpg',
link: 'https://map.naver.com/p/search/%EC%95%84%EB%A6%AC%EB%9E%91/place/19583383?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
name: '술술',
category: '주점',
address: '전남 순천시 중앙로 225 2층',
imageUrl: 'https://ldb-phinf.pstatic.net/20230829_293/1693278333190U4gpB_JPEG/20230804_194511.jpg',
link: 'https://map.naver.com/p/search/%EC%88%A0%EC%88%A0/place/1126589805?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '이파리 순대점',
  category: '음식점',
  address: '전남 순천시 중앙로 258 이파리 순대점',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MzBfMjc1%2FMDAxNzE3MDM0NTEzOTYy.--EOj0x4spgWHTfUzB60hXEm0bdbnRP8YGb1anzctj8g.br4DFqh127aha6pipTEgEILgghJ0yQdiXBEGsciXzqMg.JPEG%2FIMG_0904.jpg',
  link: 'https://map.naver.com/p/search/%EC%9D%B4%ED%8C%8C%EB%A6%AC%20%EC%88%9C%EC%B2%9C/place/17030653?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '태리로제떡볶이&닭강정 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대1길 16 상가 1층',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210610_228%2F1623304319184nv006_JPEG%2FoYIwLvm6LNQ9AVRfAAF6YmHE.jpeg.jpg',
  link: 'https://map.naver.com/p/search/%ED%83%9C%EB%A6%AC%EB%A1%9C%EC%A0%9C%EB%96%A1%EB%B3%B6%EC%9D%B4%26%EB%8B%AD%EA%B0%95%EC%A0%95%20%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90/place/1113416057?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '홍이참숯구이',
  category: '음식점',
  address: '전남 순천시 환선로 168-1',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MThfMTY3%2FMDAxNjg0NDA1OTg4NTQ2.r69e5hPJ3Qg9l9m89HSpZFl2m_qDIF7OQHBz5QZQs7kg.VlA9SLrc-UoVt6JvbL2OqGXhNyHHNUTsJVIk8e3hrHsg.JPEG.jhkang6018%2F%25BC%25F8%25C3%25B5_%25C8%25AB%25C0%25CC%25C2%25FC%25BD%25A1%25B1%25B8%25C0%25CC_%25281%2529.jpg',
  link: 'https://map.naver.com/p/search/%ED%99%8D%EC%9D%B4%EC%B0%B8%EC%88%AF%EA%B5%AC%EC%9D%B4/place/1343212749?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '맛있는한끼미광',
  category: '음식점',
  address: '전남 순천시 환선로 145 1층',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241211_222%2F1733906587144yJS4H_JPEG%2F%25B9%25CC%25B1%25A41.jpg',
  link: 'https://map.naver.com/p/search/%EB%A7%9B%EC%9E%88%EB%8A%94%ED%95%9C%EB%81%BC%EB%AF%B8%EA%B4%91/place/1504985540?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '국수나무 순천대점',
  category: '음식점',
  address: '전남 순천시 중앙로 270',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241024_177%2F1729764036802A1FL8_PNG%2FfvrjCO-cEqebE3fJFpwx_T8GZTyxHNRdxEA_32PBycFDQT9TyhGvOI5wuXokq3iPHGSlbTe8DDJVmthU.png&type=sc960_832',
  link: 'https://map.naver.com/p/search/%EA%B5%AD%EC%88%9C%EB%82%98%EB%AC%B4%20%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90/place/1516374226?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '석현정육식당',
  category: '음식점',
  address: '전남 순천시 환선로 147-1',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191015_89%2F15711487380051wcpA_JPEG%2F0okiNYDhJ8oxp0Cpva9NNt6q.jpeg.jpg',
  link: 'https://map.naver.com/p/search/%EC%84%9D%ED%98%84%EC%A0%95%EC%9C%A1%EC%8B%9D%EB%8B%B9/place/487345145?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '봉구스밥버거 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대길 1길 24',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190130_20%2F15487805385295oiXF_JPEG%2FoqksYAUjxvpcamH35ks5-W1T.jpg',
  link: 'https://map.naver.com/p/search/%EB%B4%89%EA%B5%AC%EC%8A%A4%EB%B0%A5%EB%B2%84%EA%B1%B0%20%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90/place/32565731?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '육백리스넥반점',
  category: '음식점',
  address: '전남 순천시 순천대1길 20 육백리스낵반점',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190129_3%2F15487692941680VBsl_JPEG%2FHvWp-LHWAHKZNiy3kz1gwgUG.jpeg.jpg',
  link: 'https://map.naver.com/p/search/%EC%9C%A1%EB%B0%B1%EB%A6%AC%EC%8A%A4%EB%84%A5%EB%B0%98%EC%A0%90/place/17029990?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '대박마라탕 순천점',
  category: '음식점',
  address: '전남 순천시 중앙로 240',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNTAyMDRfMTM2%2FMDAxNzM4NjcyNDU2MjU0.om2Pj7GNkJFzoR35_mKILXAOKYzIZIpJFVMSol2Q474g.ehEEcu33I96x-SoGgl-NAkK5JWvb7KUWzh62VfUJDbwg.JPEG%2F1000077053.jpg.jpg%3Ftype%3Dw1500_60_sharpen',
  link: 'https://map.naver.com/p/search/%EB%8C%80%EB%B0%95%EB%A7%88%EB%9D%BC%ED%83%95%20%EC%88%9C%EC%B2%9C%EC%A0%90/place/1394232424?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '유부남 순천점',
  category: '음식점',
  address: '전남 순천시 순천대1길 36-20 1층 유부남',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200204_222%2F1580749382849VdI3j_JPEG%2FGzzX0GKCskBRw-_gAe6TpbRf.jpg',
  link: 'https://map.naver.com/p/search/%EC%9C%A0%EB%B6%80%EB%82%A8%20%EC%88%9C%EC%B2%9C%EC%A0%90/place/1592867705?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '신당동찌개',
  category: '음식점',
  address: '전남 순천시 중앙로 248-1',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MzBfMzAw%2FMDAxNzQ1OTk3NTg5NDA2.lBTG0tCOdy5nEc9IAiPL0T-W7qN00LJMMtGRiwMCB80g.VHKROw8Ul4tyP5exfyIQTWPrjeVW6Ie9BQlFZOX5h4gg.JPEG%2F900%25A3%25DF20250401%25A3%25DF131140.jpg',
  link: 'https://map.naver.com/p/search/%EC%8B%A0%EB%8B%B9%EB%8F%99%EC%B0%8C%EA%B0%9C%20%EC%88%9C%EC%B2%9C/place/1554563971?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '총각쉐프의 꿉닭먹짱 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대2길 10',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200325_189%2F1585117903121DETOc_JPEG%2FQfUUbutz3aASDRLf90J82diJ.jpg',
  link: 'https://map.naver.com/p/search/%EC%B4%9D%EA%B0%81%EC%89%90%ED%94%84%EC%9D%98%20%EA%BF%89%EB%8B%AD%EB%A8%B9%EC%A7%B1/place/37076483?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '두찜 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대1길 40',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230503_300%2F1683090974374wdewA_JPEG%2F%25B5%25CE%25C2%25F2%25B7%25CE%25B0%25ED.jpg',
  link: 'https://map.naver.com/p/search/%EB%91%90%EC%B0%9C%20%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90/place/1123890904?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '집밥한끼',
  category: '음식점',
  address: '전남 순천시 순천대1길 46 1층상가',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220829_287%2F1661761552115415Qu_JPEG%2F20220829_170604.jpg',
  link: 'https://map.naver.com/p/search/%EC%A7%91%EB%B0%A5%ED%95%9C%EB%81%BC/place/1916048475?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '요하마라21순대점',
  category: '음식점',
  address: '전남 순천시 순천대1길 50 1층',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240927_203%2F1727407498177HjH72_JPEG%2F1727407484466.jpg&type=sc960_832',
  link: 'https://map.naver.com/p/search/%EC%9A%94%ED%95%98%EB%A7%88%EB%9D%BC21%EC%88%9C%EB%8C%80%EC%A0%90/place/1635658597?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '멕시카나치킨 순천 석현점',
  category: '음식점',
  address: '전남 순천시 석현동 72-30',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MjZfNTMg%2FMDAxNjUzNTM5NDE0OTc1.Fov7occWPzjU9nx0vuf2mH-swZBAqUGO6_cI2tIynvAg.TZFlwSITXaClL0uWq5CsxdiKsXC7dQFKPN_qvIBzTFgg.JPEG.rosmary9011%2FKakaoTalk_20220526_131354724_05.jpg&type=sc960_832',
  link: 'https://map.naver.com/p/search/%EB%A9%95%EC%8B%9C%EC%B9%B4%EB%82%98%EC%B9%98%ED%82%A8%20%EC%88%9C%EC%B2%9C%20%EC%84%9D%ED%98%84%EC%A0%90/place/11801505?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '연이식당',
  category: '음식점',
  address: '전남 순천시 매산큰길 99',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjEyMjdfMjU5%2FMDAxNjcyMTEzMjE2ODYw.d6AMK8EKfDvwGGsrCC3_d10cBXhsPNFGjrhTTNCANikg.1Rej6zLz3KhYM0kBXZ2tBhQXLlnMTvFrUsmjvbhqrrkg.JPEG%2F20221227_123416.jpg%3Ftype%3Dw1500_60_sharpen',
  link: 'https://map.naver.com/p/search/%EC%97%B0%EC%9D%B4%EC%8B%9D%EB%8B%B9/place/1695479209?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '밥은화 전남 순천대점',
  category: '음식점',
  address: '전남 순천시 삼산2길 48 1층 밥은화',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191118_270%2F1574049780345XlkGw_JPEG%2FgHYxdJ6NVu77HpBLm4Ruwjsn.jpg',
  link: 'https://map.naver.com/p/search/%EB%B0%A5%EC%9D%80%ED%99%94%20%EC%A0%84%EB%82%A8%20%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90/place/1336588986?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '중국성',
  category: '음식점',
  address: '전남 순천시 순천대2길 20',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMTdfMTkx%2FMDAxNjk3NTA3ODc1NzU0.C_Q_par9nitEetKDGN-E6v41_I46LftgwiIX49rWpikg.kW56X8AoGff2gPQnwr0Ih_wJbUuBVonjcfODbXfyVS8g.JPEG.ryuuuu333%2F20231016%25A3%25DF131916.jpg',
  link: 'https://map.naver.com/p/search/%EC%A4%91%EA%B5%AD%EC%84%B1/place/1421226588?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '용우동 순천대점',
  category: '음식점',
  address: '전남 순천시 석현동 72-7 1층',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200325_24%2F1585115931299MeUqp_JPEG%2F5HdoZfbHVGKREaJWfAMXCk4w.jpg',
  link: 'https://map.naver.com/p/search/%EC%9A%A9%EC%9A%B0%EB%8F%99%20%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90/place/90577537?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '옛날 꿀꿀이 숯불촌',
  category: '음식점',
  address: '전남 순천시 석현동 72-9',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190129_292%2F1548769170388cekNp_JPEG%2F12Ak3fwAeHsN09fAAsOOFXP9.jpeg.jpg',
  link: 'https://map.naver.com/p/search/%EC%98%9B%EB%82%A0%20%EA%BF%80%EA%80%80%EC%9D%B4%20%EC%88%AF%EB%B6%88%EC%B4%8C/place/1737061450?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '돼지마을',
  category: '음식점',
  address: '전남 순천시 삼산2길 36',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190930_3%2F15698446787477rT2E_JPEG%2FDLuRwYRTkfcHd4WH68s3gF8V.jpeg.jpg',
  link: 'https://map.naver.com/p/search/%EB%8F%BC%EC%A7%80%EB%A7%88%EC%9D%84/place/17030364?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '등뼈가 순천대학점',
  category: '음식점',
  address: '전남 순천시 순천대2길 36',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180926_64%2F15379275040853Cj43_JPEG%2F_6KTxPK3ixZCjJpAe6jC9yhp.jpg',
  link: 'https://map.naver.com/p/search/%EB%93%B1%EB%BC%88%EA%B0%80%20%EC%88%9C%EC%B2%9C%EB%8C%80%ED%95%99%EC%A0%90/place/17030839?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '창조식당',
  category: '음식점',
  address: '전남 순천시 순천대2길 38 창조식당',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190207_165%2F1549521819531Fu0DD_JPEG%2FJ6Shi1_69XjxnTmpfnAAhIAr.jpg',
  link: 'https://map.naver.com/p/search/%EC%B0%BD%EC%A1%B0%EC%8B%9D%EB%8B%B9/place/1104826709?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '춘천거시기닭갈비',
  category: '음식점',
  address: '전남 순천시 순천대2길 42',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241103_18%2F1730620691149Ltdqx_JPEG%2F20241103_165742.jpg',
  link: 'https://map.naver.com/p/search/%EC%B6%98%EC%B2%9C%EA%B1%B0%EC%8B%9C%EA%B8%B0%EB%8B%AD%EA%B0%88%EB%B9%84/place/17030596?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '춘천마쪼은닭갈비',
  category: '음식점',
  address: '전남 순천시 삼산2길 29 춘천마쪼은닭갈비',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190129_20%2F1548769727342fcg85_JPEG%2F9zlIn9L96vNnoR9r2eHVEh3S.jpeg.jpg',
  link: 'https://map.naver.com/p/search/%EC%B6%98%EC%B2%9C%EB%A7%88%EC%AA%BC%EC%9D%80%EB%8B%AD%EA%B0%88%EB%B9%84/place/17030592?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '사이',
  category: '음식점',
  address: '전남 순천시 순천대1길 36-20 1층 사이카레',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150831_235%2F1441003510721skLrf_JPEG%2FSUBMIT_1415256407794_35476367.jpg',
  link: 'https://map.naver.com/p/search/%EC%82%AC%EC%9D%B4%EC%B9%B4%EB%A0%88%20/place/35476367?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '꽃밥먹으러',
  category: '음식점',
  address: '전남 순천시 순천대1길 36-51 1층',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250107_84%2F1736195428180rC9tV_JPEG%2F1000004158.jpg',
  link: 'https://map.naver.com/p/search/%EA%BD%83%EB%B0%A5%EB%A8%B9%EC%9C%BC%EB%9F%AC/place/1889919975?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '한솥도시락 순천대학교점',
  category: '음식점',
  address: '전남 순천시 중앙로 238-1 넥스트문구',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250430_188%2F1745996348711AwNEN_JPEG%2F%25B7%25CE%25B0%25ED_1.jpg',
  link: 'https://map.naver.com/p/search/%ED%95%9C%EC%86%A5%EB%8F%84%EC%8B%9C%EB%9D%BD%20%EC%88%9C%EC%B2%9C%EB%8C%80%ED%95%99%EA%B5%90%EC%A0%90/place/21745041?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '에너지버거그릴',
  category: '음식점',
  address: '전남 순천시 순천대1길 6 2층 에너지버거그릴',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200325_78%2F1585118220023VG9hJ_JPEG%2FDRh9nmBidGKuUEBlDqXO_NLJ.jpg',
  link: 'https://map.naver.com/p/search/%EC%97%90%EB%84%88%EC%A7%80%EB%B2%84%EA%B1%B0%EA%B7%B8%EB%A6%B4/place/1830064578?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '기차마을',
  category: '음식점',
  address: '전남 순천시 순천대3길 24',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMzBfODUg%2FMDAxNjk4NjQzMTA2ODE2.P45_rIc8DR4K2oUa3vsZ29N6NkpkcXgn3eohXDkiA1cg.AApO82Oo6YdBqrdPz6WpEsnFXIDnMRaOtXeCPq_Rfh4g.JPEG.tak6030%2FKakaoTalk_20231030_141233001.jpg',
  link: 'https://map.naver.com/p/search/%EA%B8%B0%EC%B0%A8%EB%A7%88%EC%9D%84/place/1286146562?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '우리할매보쌈족발',
  category: '음식점',
  address: '전남 순천시 환선로 168',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200502_292%2F1588402526607uh8vQ_JPEG%2FyiBnQLRa6uMneSWWkcOOEIuU.jpeg.jpg',
  link: 'https://map.naver.com/p/search/%EC%9A%B0%EB%A6%AC%ED%95%A0%EB%A7%A4%EB%B3%B4%EC%8C%88%EC%A1%B0%EB%B0%9C/place/32737877?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '남가네설악추어탕 순천대점',
  category: '음식점',
  address: '전남 순천시 환선로 161 1층',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250324_40%2F1742808826157CgThQ_JPEG%2Ftemp_picture.jpg',
  link: 'https://map.naver.com/p/search/%EB%82%A8%EA%B0%80%EB%84%A4%EC%84%A4%EC%95%85%EC%B6%94%EC%96%B4%ED%83%95%20%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90/place/1091768160?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '우리집 오리 순대점',
  category: '음식점',
  address: '전남 순천시 환선로 156-1',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNTAxMTVfMjY2%2FMDAxNzM2OTIyNTY1MzI5.U72_Unnw7snDEYQZiMC9ymEXQDVFZKOoCuWmHY-Un4Ig.8J98zFBXz_sM-2CdAQ85yGLELgAL_OcRXJ5TO3oVm3Qg.JPEG%2F1000058177.heic.jpg%3Ftype%3Dw1500_60_sharpen',
  link: 'https://map.naver.com/p/search/%EC%9A%B0%EB%A6%AC%EC%A7%91%EC%98%A4%EB%A6%AC%20%EC%88%9C%EB%8C%80%EC%A0%90/place/1070326177?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '이삭토스트 순천대점',
  category: '음식점',
  address: '전남 순천시 매산큰길 99',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240429_10%2F1714362212485GnOUa_JPEG%2F1.jpg',
  link: 'https://map.naver.com/p/search/%EC%9D%B4%EC%82%AD%ED%86%A0%EC%8A%A4%ED%8A%B8%20%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90/place/38227500?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '이백장돈가스 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대2길 8 1층',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230309_262%2F1678348042687I6h3V_JPEG%2F01_%25BD%25BA%25B8%25B6%25C6%25AE%25C7%25C3%25B7%25B9%25C0%25CC%25BD%25BA%25BF%25EB-%25B7%25CE%25B0%25ED%2528%25B4%25EB%25C7%25A5%25BB%25E7%25C1%25F8%2529.jpg',
  link: 'https://map.naver.com/p/search/%EC%9D%B4%EB%B0%B1%EC%9E%A5%EB%8F%88%EA%B0%80%EC%8A%A4%20%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90/place/1556137388?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '신라장',
  category: '음식점',
  address: '전남 순천시 순천대2길 8',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA1MDZfMjMg%2FMDAxNjgzMzM4NjI5NTcy.ulPEUjiuqZ6Gf4qnSEqDQRkjLe_JV9sBnmtN92QaFWcg.upUgjsVdxZF3rmTI20Xk1VwbFe1wnYW_BbpM0exMr7Ug.JPEG.skaksdml34%2F20230504%25A3%25DF171241.jpg',
  link: 'https://map.naver.com/p/search/%EC%8B%A0%EB%9D%BC%EC%9E%A5/place/1648130705?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '원조왕족발',
  category: '음식점',
  address: '전남 순천시 순천대2길 6 원조왕족발',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200325_78%2F1585118220023VG9hJ_JPEG%2FDRh9nmBidGKuUEBlDqXO_NLJ.jpg',
  link: 'https://map.naver.com/p/search/%EC%9B%90%EC%A1%B0%EC%99%95%EC%A1%B1%EB%B0%9C/place/17030720?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '테마라면 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대1길 36-24',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfOTIg%2FMDAxNzI3OTUyMjk4MDMw.Hcc33hLbneCYatG74NE0k-23uw7X2yuqTWujTcubDzUg.xuNv-z-4La2sWFVKVBJVcO-v2zgzYhZ5mEEU2N8U1ekg.JPEG%2F%25BC%25F8%25C3%25B5_%25C5%25D7%25B8%25B6%25B6%25F3%25B8%25E9_%25BC%25F8%25C3%25B5%25B4%25EB%25C1%25A1_%25B8%25C0%25C1%25FD_%25BD%25C4%25B4%25E7_%252814%2529.jpg',
  link: 'https://map.naver.com/p/search/%ED%85%8C%EB%A7%88%EB%9D%BC%EB%A9%B4%20%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90/place/34959546?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '퀸테이블',
  category: '음식점',
  address: '전남 순천시 순천대1길 36-55 1층 퀸테이블',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMjBfMTMg%2FMDAxNzQyNDc2NjU4MjMx.F2ymMnsdMnx64J8azKxcrEaTeYIsUZHL3ARlrY-BQdcg.5W-sz-qjg-xKwiA9nbUAzxp5r7b_m8d2_c-g37WFPeIg.JPEG%2FKakaoTalk_20250320_221521816.jpg',
  link: 'https://map.naver.com/p/search/%ED%80%B8%ED%85%8C%EC%9D%B4%EB%B8%94/place/1518464570?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '굴천지.초계국수&황토수육국밥 석현점',
  category: '음식점',
  address: '전남 순천시 삼산로 17 순천문화예술회관 맞은편',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240412_24%2F1712912190881xooxA_JPEG%2F%25B2%25D9%25B9%25CC%25B1%25E2%25BB%25EF%25BB%25EA%25C1%25A1_%25B8%25C5%25C0%25E5%25C0%25FC%25B8%25E9.jpg',
  link: 'https://map.naver.com/p/search/%EA%B5%B4%EC%B2%9C%EC%A7%80.%EC%B4%88%EA%B3%84%EA%B5%AD%EC%88%9C%26%ED%99%A9%ED%86%A0%EC%88%9C%EC%9C%A1%EA%B5%AD%EB%B0%A5%20%EC%84%9D%ED%98%84%EC%A0%90/place/37278404?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '공화춘',
  category: '음식점',
  address: '전남 순천시 삼산로 13',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMTNfMjkz%2FMDAxNzQxODE0NDM3MDYy.Kvw4BrpgpeT6LgE9iQLt3itvyRBnOTS-xdB6RRVxEQIg.sZnDJ6PPJ4wzz-68KIZIhtbRSoSda2cDQaAj85-OCOwg.JPEG%2FIMG_4513.JPG',
  link: 'https://map.naver.com/p/search/%EA%B3%B5%ED%99%94%EC%B6%98%20%EC%88%9C%EC%B2%9C/place/17030002?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '송원곱창닭갈비',
  category: '음식점',
  address: '전남 순천시 순천대2길 12 질러바노래연습장',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190131_63%2F15489042856669KFoI_JPEG%2F-kcksx4MTNate9XIpAcEo2wh.jpg',
  link: 'https://map.naver.com/p/search/%EC%86%A1%EC%9B%90%EA%B3%B1%EC%B0%BD%EB%8B%AD%EA%B0%88%EB%B9%84/place/17029385?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '도야짬뽕 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대2길 26',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMThfODUg%2FMDAxNjc0MDExMzY3MjI4.mT5mYARBXdPqTbSi7nXIngtXyCgmD3fxPNYOIDQBtxgg.7Jb8vH6SL9zpmyLHP4aSkp2rRYjiWGuE6ltdiqpJMAUg.JPEG.doyafood%2F%25B5%25B5%25BE%25DF%25C2%25AB%25BB%25CD%25B7%25CE%25B0%25ED.jpg&type=sc960_832',
  link: 'https://map.naver.com/p/search/%EB%8F%84%EC%95%BC%EC%A7%AC%EB%BD%95%20%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90/place/1837174739?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '김밥천국 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대2길 28',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200325_223%2F1585117306684bqjYg_JPEG%2FWC3AgeVEnNEXAsXgAkTKHrSe.jpg',
  link: 'https://map.naver.com/p/search/%EA%B9%80%EB%B0%A5%EC%B2%9C%EA%B5%AD%20%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90/place/17031134?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '교촌치킨 순천대점',
  category: '음식점',
  address: '전남 순천시 순천대2길 30',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221130_290%2F1669782289053g3gih_JPEG%2F%25B1%25B3%25C3%25CC%25C4%25A1%25C5%25B2_%25BD%25C5%25B1%25D4_BI_%25BE%25C6%25C0%25CC%25C4%25DC%2528%25C4%25AB%25C4%25AB%25BF%25C0%2529.jpg',
  link: 'https://map.naver.com/p/search/%EA%B5%90%EC%B4%8C%EC%B9%98%ED%82%A8%20%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90/place/11832986?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '포포식당',
  category: '음식점',
  address: '전남 순천시 순천대3길 11 1층',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNTAyMDVfMjM3%2FMDAxNzM4NzM1NTY1Mzkz.JRZehTTjqJFKMSP-kr5C0SHLuduff8JVloedGuEUtoYg.nwHQVRqbKrqzRUJqt_bjRMzUQZIxiIuMh56la8fv7aEg.JPEG%2F1000021761.jpg.jpg%3Ftype%3Dw1500_60_sharpen',
  link: 'https://map.naver.com/p/search/%ED%8F%AC%ED%8F%AC%EC%8B%9D%EB%8B%B9/place/1509023380?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp'
},
{
  name: '샤브로21 순천대점',
  category: '음식점',
  address: '전남 순천시 중앙로 270 1층 103호 샤브로21 순천대점',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230830_277%2F1693371161721QM0yg_JPEG%2FKakaoTalk_20230830_135156498_09.jpg',
  link: 'https://map.naver.com/p/search/%EC%83%A4%EB%B8%8C%EB%A1%9C21%20%EC%88%9C%EC%B2%9C%EB%8C%80%EC%A0%90/place/1823823131?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '처갓집 양념치킨 순천대학점',
  category: '음식점',
  address: '전남 순천시 석현동 86-5',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200120_298%2F1579504110347tJgty_JPEG%2FC_lo6OmP2LbyOHVZh-W2FOtu.jpg',
  link: 'https://map.naver.com/p/search/%EC%B2%98%EA%B0%93%EC%A7%91%20%EC%96%91%EB%85%90%EC%B9%98%ED%82%A8%20%EC%88%9C%EC%B2%9C%EB%8C%80%ED%95%99%EC%A0%90/place/11825601?c=15.00,0,0,0,dh&isCorrectAnswer=true'
},
{
  name: '다다하다 순천대점',
  category: '주점',
  address: '전남 순천시 순천대2길 2 1층',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240904_277%2F172542901693926yn4_PNG%2F%25BC%25F8%25C3%25B502.png',
  link: 'https://map.naver.com/p/entry/place/1584721975?c=15.00,0,0,0,dh'
},{
  name: '역전할머니맥주 순천대점',
  category: '주점',
  address: '전남 순천시 중앙로 276',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjdfMTQz%2FMDAxNjQwNTgyMjAwMDI1.f9321e5b2-VLrWTq15yhUMPTxtXdFl9nmEdNHSi8uHgg.ZaXWYgZlHfAvH4s2VHz_I0y-wRatmiT_9jsciXMVb-Eg.PNG.duddjq4xla%2F20211227_141612.png&type=sc960_832',
  link: 'https://map.naver.com/p/entry/place/1379049258?c=15.00,0,0,0,dh'
},{
  name: '딱 여기네',
  category: '주점',
  address: '전남 순천시 순천대1길 24',
  imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200328_110%2F1585359369404bOgwJ_JPEG%2FEZcEzCnJjJEHs2azhdHr-5nN.jpg',
  link: 'https://map.naver.com/p/entry/place/1453839849?c=15.00,0,0,0,dh'
},{
  name: '아는이모',
  category: '주점',
  address: '전남 순천시 순천대1길 30 1층 아는이모',
  imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MDdfOTgg%2FMDAxNjg2MTQwMTMxMjYx.WgJh5fwgEhwFu-3LedLCE2ooC2oq_QskfSKsPsXWpM0g._vOGw1ca9YUwlvfRB0EMIv7ptaNqwcg-y5M6eLTtJrgg.JPEG.anas9953%2FKakaoTalk_20230517_200026606_01.jpg',
  link: 'https://map.naver.com/p/entry/place/1578616582?c=15.00,0,0,0,dh'
}


];

const MainPage: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([]);
  const [selectedTab, setSelectedTab] = useState<'search' | 'intro'>('search');
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // 선택된 카테고리 상태 추가

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const input = document.getElementById('searchInput') as HTMLInputElement;
    const query = input.value;
    setKeyword(query);
    setFilteredPlaces(dummyPlaces.filter((place) => place.name.includes(query)));
  };

  const handleCategory = (cat: string) => {
    setSelectedCategory(cat); // 선택된 카테고리 업데이트
    setFilteredPlaces(dummyPlaces.filter((place) => place.category === cat));
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
              cursor: 'pointer',
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
              cursor: 'pointer',
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
                  placeholder="검색어를 입력하세요."
                  style={{
                    padding: '0.6rem 1rem',
                    width: '200px',
                    borderRadius: '20px',
                    border: '1px solid #ccc',
                    outline: 'none',
                    fontSize: '1rem',
                  }}
                />
                <button
                  id="search-button"
                  type="submit"
                  style={{
                    marginLeft: '0.5rem',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '20px',
                    border: 'none',
                    backgroundColor: '#007bff',
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: 'bold',
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
                      backgroundColor: selectedCategory === cat ? '#007bff' : 'white', // 선택된 카테고리 색상 변경
                      color: selectedCategory === cat ? 'white' : '#007bff',
                      cursor: 'pointer',
                      fontWeight: 'bold',
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
                  gap: '1.5rem',
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
                      maxWidth: '500px',
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
                        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                      }}
                    >
                      <img
                        src={place.imageUrl}
                        alt={place.name}
                        style={{
                          width: '120px',
                          height: '120px',
                          objectFit: 'cover',
                          borderRadius: '8px',
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
<p>📍 사업 기간: 2025.05.12.(월) ~ 2025.06.08.(일)</p>
<p>📍 주최/주관: 국립순천대학교 제41대 서화 총학생회</p>
<p>📍 대상: 순천대학교 재학생 및 순천시 구도심·대학가 상권 내 자영업체</p>

<h2>추진 목적 및 필요성</h2>
<p>‘이음 프로젝트’는 순천 구도심과 대학가 상권의 활력을 되살리고, 대학과 지역사회의 상생을 실현하기 위해 기획되었습니다. 서화 총학생회는 지역 자영업자와의 협력을 통해 학생들의 지역 참여와 소비를 촉진하고자 합니다.</p>

<h2>주요 내용</h2>
<p>1. 재학생은 교내에서 응모권을 먼저 수령</p>
<p>2. 제휴 업체를 방문하여 결제 시 응모권을 제시하면, 업체에서 응모권에 스티커를 직접 부착</p>
<p>3. 한 달간 스티커 10개를 모으면 응모 자격 획득</p>
<p>4. 스티커 10개가 부착된 응모권을 학생회관 1층 ‘읻터’ 앞 응모함에 제출하면 응모 완료</p>
<p>5. 추첨을 통해 순천사랑상품권 증정 (5만 원권 1명, 3만 원권 20명)</p>

<h2>기대 효과</h2>
<p>1. 지역 상권 활성화 및 대학가 소비 촉진</p>
<p>2. 대학생들의 지역사회 참여 증진</p>
<p>3. 대학과 지역사회의 지속 가능한 상생 협력 기반 마련</p>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </>
  );
};

export default MainPage;