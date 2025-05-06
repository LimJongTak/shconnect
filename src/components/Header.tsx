import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <img
        src="/assets/logo.png" // <- 이 경로는 public 폴더 안의 assets 폴더 기준입니다
        alt="로고"
        style={{
          width: '100px',
          height: '100px',
          marginRight: '1rem',
          display: 'block', // 이미지에 불필요한 여백 제거
        }}
      />
      <h2 style={{ margin: 0 }}>서화와 함께 동네 한바퀴 : 이음</h2>
    </header>
  );
};

export default Header;
