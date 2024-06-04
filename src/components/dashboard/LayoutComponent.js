import React, {useState} from 'react';
import './LayoutComponent.css';
import LineChart from '../LineChart';
import BarChart from '../BarChart';
import {useResizeDetector} from "react-resize-detector";

const LayoutComponent = ({id, type, title, description, data}) => {
  const [chartWidth, setChartWidth] = useState(400); // начальная ширина графика
  const [chartHeight, setChartHeight] = useState(400); // начальная высота графика

  // Обработчик изменения размеров контейнера для графика
  const onResize = (width, height) => {
    if (!isNaN(width) && !isNaN(height)) { // Проверяем, что ширина и высота являются числами
      setChartWidth(width - 0.1 * width);
      setChartHeight(height - 0.1 * width);
    }
  };

  const {ref} = useResizeDetector({onResize});

  let content;

  switch (type) {
    case 'line':
      content = <LineChart data={data} width={chartWidth} height={chartHeight}/>;
      break;
    case 'bar':
      content = <BarChart data={data} width={chartWidth} height={chartHeight}/>;
      break;
    case 'text':
      content = <div>{data}</div>;
      break;
    default:
      content = <div>Неизвестный тип графика</div>;
  }

  if (data === null || data.length === 0) {
    content = <div>Данные отсутствуют</div>;
  }

  return (
      <div className="layout-component" style={{minWidth: '200px', minHeight: '200px'}} ref={ref}>
        <div className="header">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="content" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {content}
        </div>
      </div>
  );
};

export default LayoutComponent;