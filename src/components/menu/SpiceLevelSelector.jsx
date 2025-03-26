import React from 'react';

const SpiceLevelSelector = ({ id, spiceLevel, onSpiceLevelChange }) => {
  return (
    <div className="spice-options">
      <p>ระดับความเผ็ด:</p>
      <div className="spice-levels">
        <div className="spice-option">
          <input 
            type="radio" 
            id={`no-spice-${id}`} 
            name={`spice-${id}`} 
            value="No Spice" 
            checked={spiceLevel === "No Spice"}
            onChange={() => onSpiceLevelChange("No Spice")}
          />
          <label htmlFor={`no-spice-${id}`}>ไม่เผ็ด</label>
        </div>
        
        <div className="spice-option">
          <input 
            type="radio" 
            id={`mild-${id}`} 
            name={`spice-${id}`} 
            value="Mild_Spicy" 
            checked={spiceLevel === "Mild_Spicy"}
            onChange={() => onSpiceLevelChange("Mild_Spicy")}
          />
          <label htmlFor={`mild-${id}`}>
            เผ็ดน้อย <img src="/product_img/icon/chili-pepper.png" alt="Chili" className="chili-icon" />
          </label>
        </div>
        
        <div className="spice-option">
          <input 
            type="radio" 
            id={`medium-${id}`} 
            name={`spice-${id}`} 
            value="Medium_Spicy" 
            checked={spiceLevel === "Medium_Spicy"}
            onChange={() => onSpiceLevelChange("Medium_Spicy")}
          />
          <label htmlFor={`medium-${id}`}>
            เผ็ดปานกลาง 
            <img src="/product_img/icon/chili-pepper.png" alt="Chili" className="chili-icon" />
            <img src="/product_img/icon/chili-pepper.png" alt="Chili" className="chili-icon" />
          </label>
        </div> 
        
        <div className="spice-option">
          <input 
            type="radio" 
            id={`hot-${id}`} 
            name={`spice-${id}`} 
            value="Hot_Spicy" 
            checked={spiceLevel === "Hot_Spicy"}
            onChange={() => onSpiceLevelChange("Hot_Spicy")}
          />
          <label htmlFor={`hot-${id}`}>
            เผ็ดมาก 
            <img src="/product_img/icon/chili-pepper.png" alt="Chili" className="chili-icon" />
            <img src="/product_img/icon/chili-pepper.png" alt="Chili" className="chili-icon" />
            <img src="/product_img/icon/chili-pepper.png" alt="Chili" className="chili-icon" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SpiceLevelSelector;