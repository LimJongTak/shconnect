import React, { useState } from 'react';
import '../assets/styles/Accordion.scss';

interface AccordionItem {
  title: string;
  content: string | JSX.Element;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, idx) => (
        <div key={idx}>
          <div
            className={`qna-item ${activeIndex === idx ? 'active' : ''}`}
            onClick={() => toggle(idx)}
          >
            <span>{item.title}</span>
            {/* 아이콘을 ▲ 또는 ▼로 직접 변경 */}
            <span className="dropdown-icon">{activeIndex === idx ? '▲' : '▼'}</span>
          </div>
          {activeIndex === idx && (
            <div className="qna-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;