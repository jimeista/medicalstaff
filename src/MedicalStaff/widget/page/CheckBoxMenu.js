import React, { useState } from "react";
import { Menu, Dropdown, Button, Typography, DatePicker } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Checkbox, Row, Col } from "antd";

const CheckBoxMenu = ({ titleBtn, checkBox }) => {
  const [visible, setVisible] = useState(false);

  const menu = (
    <Menu className="Ant_Drop_Block_Style">
      <div>
        <Checkbox.Group
          className="Ant_Drop_Block_Style_Checkbox"
          options={checkBox}
        />
      </div>
    </Menu>
  );
  return (
    <Dropdown
      overlay={menu}
      trigger={["click"]}
      visible={visible}
      onVisibleChange={(val) => setVisible(val)}
      className="ant_drop_menu"
    >
      <Button className="ant_drop_btn">
        {titleBtn}
        <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default CheckBoxMenu;
