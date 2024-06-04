import React from 'react';
import styled from 'styled-components';
import LayoutComponent from './LayoutComponent';
import GridLayout from "react-grid-layout";

// Примеры данных
const data1 = [
  { x: 0, y: 10 },
  { x: 1, y: 20 },
  { x: 2, y: 30 },
  { x: 3, y: 40 },
  // Добавьте другие точки данных
];

const data2 = [
  { x: 'A', y: 100 },
  { x: 'B', y: 200 },
  { x: 'C', y: 300 },
  { x: 'D', y: 400 },
  // Добавьте другие точки данных
];

const data3 = [
  { angle: 0, radius: 10 },
  { angle: 90, radius: 20 },
  { angle: 180, radius: 30 },
  { angle: 270, radius: 40 },
  // Добавьте другие точки данных
];

const Dashboard = () => {
  const dashboardWidgets = [
    {
      i: '1',
      x: 0,
      y: 0,
      w: 4,
      h: 4,
      type: 'line',
      title: 'Продажи за последний месяц',
      description: 'Динамика продаж за последний месяц',
      data: data1,
      minH: 4, // минимальная высота для типа 'line'
      minW: 4 // минимальная ширина для типа 'line'
    },
    {
      i: '2',
      x: 4,
      y: 0,
      w: 4,
      h: 4,
      type: 'bar',
      title: 'Посещаемость сайта',
      description: 'Статистика посещаемости сайта за неделю',
      data: data2,
      minH: 4, // минимальная высота для типа 'bar'
      minW: 4 // минимальная ширина для типа 'bar'
    },
    {
      i: '3',
      x: 8,
      y: 0,
      w: 4,
      h: 4,
      type: 'radial',
      title: 'Распределение продуктов',
      description: 'Распределение продуктов по категориям',
      data: data3,
      minH: 4, // минимальная высота для типа 'radial'
      minW: 4 // минимальная ширина для типа 'radial'
    },
    // Остальные виджеты...
  ];

  return (
      <div className="dashboard-container">
        <h1>Дашборд</h1>
        <p>Здесь вы можете отслеживать различные показатели и визуализации данных.</p>
        <h2>Текущие показатели</h2>
        <GridLayout
            className="layout"
            layout={dashboardWidgets}
            cols={12}
            rowHeight={50}
            width={1100}
        >
          {dashboardWidgets.map(widget => (
              <div key={widget.i} data-grid={widget}>
                <LayoutComponent
                    id={widget.i}
                    type={widget.type}
                    title={widget.title}
                    description={widget.description}
                    data={widget.data}
                    minH={widget.minH}
                    minW={widget.minW}
                />
              </div>
          ))}
        </GridLayout>
      </div>
  );
};

const DashboardContainer = styled.div`
  padding: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Header = styled.div`
  grid-column: 1 / -1;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

const WidgetsContainer = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const WidgetContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
`;

export default Dashboard;