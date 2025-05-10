import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
import { dummyPlaces, Place } from '../data/dummyPlaces';
import '../assets/styles/App.scss';

const MainPage: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>([]);
  const [selectedTab, setSelectedTab] = useState<'search' | 'intro'>('search');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // 카테고리별 개수 계산 함수
  const getCategoryCount = (category: string) => {
    return dummyPlaces.filter((place) => place.category === category).length;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const input = document.getElementById('searchInput') as HTMLInputElement;
    const query = input.value;
    setKeyword(query);
    setFilteredPlaces(dummyPlaces.filter((place) => place.name.includes(query)));
  };

  const handleCategory = (cat: string) => {
    setSelectedCategory(cat);
    setFilteredPlaces(dummyPlaces.filter((place) => place.category === cat));
  };

  const introItems = [
    {
      title: '📍 사업 개요',
      content: (
        <>
          <p>사업 기간: 2025.05.12.(월) ~ 2025.06.09.(월)</p>
          <p>주최/주관: 국립순천대학교 제41대 서화 총학생회</p>
          <p>대상: 순천대학교 재학생 및 순천시 구도심·대학가 상권 내 자영업체</p>
        </>
      ),
    },
    {
      title: '📌 추진 목적 및 필요성',
      content: (
        <>
          <p>‘이음 프로젝트’는 순천 구도심과 대학가 상권의 활력을 되살리고, 대학과 지역사회의 상생을 실현하기 위해 기획되었습니다.</p>
          <p>서화 총학생회는 지역 자영업자와의 협력을 통해 학생들의 지역 참여와 소비를 촉진하고자 합니다.</p>
        </>
      ),
    },
    {
      title: '📝 참여 방법',
      content: (
        <>
          <p>1. 재학생은 교내에서 응모권을 먼저 수령</p>
          <p>2. 제휴 업체를 방문하여 결제 시 응모권에 스티커 부착</p>
          <p>3. 스티커 10개를 모으면 응모 자격 획득</p>
          <p>4. 스티커 부착된 응모권을 응모함에 제출</p>
          <p>5. 추첨을 통해 순천사랑상품권 증정</p>
        </>
      ),
    },
    {
      title: '🌟 기대 효과',
      content: (
        <>
          <p>1. 지역 상권 활성화 및 대학가 소비 촉진</p>
          <p>2. 대학생들의 지역사회 참여 증진</p>
          <p>3. 대학과 지역사회의 지속 가능한 상생 협력 기반 마련</p>
        </>
      ),
    },
  ];

  return (
    <>
      <Header />
      <div className="main-container">
        <div style={{ marginBottom: '2rem' }}>
          <button
            onClick={() => setSelectedTab('search')}
            className={`tab-button ${selectedTab === 'search' ? 'active' : ''}`}
          >
            제휴 업체 찾기
          </button>
          <button
            onClick={() => setSelectedTab('intro')}
            className={`tab-button ${selectedTab === 'intro' ? 'active' : ''}`}
          >
            프로그램 소개
          </button>
        </div>

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
                  className="search-input"
                />
                <button id="search-button" type="submit" className="search-button">
                  검색
                </button>
              </form>

              <div style={{ marginBottom: '2rem' }}>
                <p>검색된 업체 수</p>
                <div className="result-card">
                  <span>{filteredPlaces.length}</span>
                </div>

                {['음식점', '카페', '주점'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategory(cat)}
                    className={`category-button ${selectedCategory === cat ? 'active' : ''}`}
                  >
                    {cat} ({getCategoryCount(cat)})
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                {filteredPlaces.map((place, index) => (
                  <motion.a
                    key={index}
                    href={place.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="place-card">
                      <img src={place.imageUrl} alt={place.name} />
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
              <Accordion items={introItems} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;