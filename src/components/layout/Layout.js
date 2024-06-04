import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './Layout.css'; // Подключаем файл стилей

import LayoutComponent from '../dashboard/LayoutComponent';

const Layout = () => {
  const [layout, setLayout] = useState([
    { i: '1', x: 0, y: 0, w: 4, h: 4 },
    { i: '2', x: 4, y: 0, w: 4, h: 4 }
  ]);

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  const addComponent = () => {
    const newComponent = {
      i: String(layout.length + 1),
      x: 0,
      y: Infinity,
      w: 4,
      h: 4
    };
    setLayout([...layout, newComponent]);
  };

  return (
      <div className="layout-container">
        <div className="button-container">
          <button className="add-button" onClick={addComponent}>Добавить компонент</button>
        </div>
        <GridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            width={1200}
            onLayoutChange={onLayoutChange}
            draggableHandle=".drag-handle" // Указываем элемент, за который можно перемещать компоненты
        >
        {layout.map(item => (
              <LayoutComponent key={item.i} id={item.i} />
          ))}
        </GridLayout>
      </div>
  );
};

export default Layout;