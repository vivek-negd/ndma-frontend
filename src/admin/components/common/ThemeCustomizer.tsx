import {
  Drawer,
  Space,
  ColorPicker,
  Select,
  Button,
  Divider,
  Switch,
} from "antd";
import { useTheme } from "../../../context";
import type { Color } from "antd/es/color-picker";

interface ThemeCustomizerProps {
  open: boolean;
  onClose: () => void;
}

const fontOptions = [
  {
    label: "Inter",
    value: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
  { label: "Roboto", value: "Roboto, sans-serif" },
  { label: "Open Sans", value: "'Open Sans', sans-serif" },
  { label: "Lato", value: "Lato, sans-serif" },
  { label: "Montserrat", value: "Montserrat, sans-serif" },
  { label: "Poppins", value: "Poppins, sans-serif" },
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Courier New", value: "'Courier New', monospace" },
];

const gradientPresets = [
  {
    name: "Default Black",
    gradient: "linear-gradient(180deg, #000000 0%, #1a1a1a 100%)",
  },
  {
    name: "Ocean Blue",
    gradient: "linear-gradient(180deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
  },
  {
    name: "Purple Dream",
    gradient: "linear-gradient(180deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%)",
  },
  {
    name: "Sunset Orange",
    gradient: "linear-gradient(180deg, #c94b4b 0%, #d35f5f 50%, #e76f51 100%)",
  },
  {
    name: "Forest Green",
    gradient: "linear-gradient(180deg, #134e4a 0%, #14532d 50%, #166534 100%)",
  },
  {
    name: "Royal Purple",
    gradient: "linear-gradient(180deg, #4c1d95 0%, #5b21b6 50%, #7c3aed 100%)",
  },
  {
    name: "Midnight Blue",
    gradient: "linear-gradient(180deg, #1e1b4b 0%, #312e81 50%, #3730a3 100%)",
  },
  {
    name: "Rose Red",
    gradient: "linear-gradient(180deg, #881337 0%, #9f1239 50%, #be123c 100%)",
  },
  {
    name: "Teal Ocean",
    gradient: "linear-gradient(180deg, #0e7490 0%, #0891b2 50%, #06b6d4 100%)",
  },
  {
    name: "Amber Glow",
    gradient: "linear-gradient(180deg, #92400e 0%, #b45309 50%, #d97706 100%)",
  },
];

export const ThemeCustomizer = ({ open, onClose }: ThemeCustomizerProps) => {
  const {
    theme,
    toggleTheme,
    colors,
    updateColors,
    fontFamily,
    updateFontFamily,
    resetTheme,
  } = useTheme();

  const handleColorChange = (key: keyof typeof colors, color: Color) => {
    updateColors({ [key]: color.toHexString() });
  };

  return (
    <Drawer
      title="Theme Customizer"
      placement="right"
      onClose={onClose}
      open={open}
      width={360}
    >
      <Space direction="vertical" style={{ width: "100%" }} size="large">
        <div>
          <div style={{ marginBottom: 8, fontWeight: 500 }}>Theme Mode</div>
          <Space>
            <span>Light</span>
            <Switch checked={theme === "dark"} onChange={toggleTheme} />
            <span>Dark</span>
          </Space>
        </div>

        <Divider />

        <div>
          <div style={{ marginBottom: 8, fontWeight: 500 }}>Font Family</div>
          <Select
            style={{ width: "100%" }}
            value={fontFamily}
            onChange={updateFontFamily}
            options={fontOptions}
          />
        </div>

        <Divider />

        <div>
          <div style={{ marginBottom: 16, fontWeight: 500 }}>
            Sidebar Gradient Presets
          </div>
          <Space direction="vertical" style={{ width: "100%" }} size="small">
            {gradientPresets.map((preset) => (
              <Button
                key={preset.name}
                block
                onClick={() => updateColors({ sidebarBg: preset.gradient })}
                style={{
                  background: preset.gradient,
                  color: "white",
                  border: "none",
                  height: "40px",
                }}
              >
                {preset.name}
              </Button>
            ))}
          </Space>
        </div>

        <Divider />

        <div>
          <div style={{ marginBottom: 16, fontWeight: 500 }}>Color Scheme</div>

          <Space direction="vertical" style={{ width: "100%" }} size="middle">
            <div>
              <div style={{ marginBottom: 8, fontSize: 13 }}>Primary Color</div>
              <ColorPicker
                value={colors.primaryColor}
                onChange={(color) => handleColorChange("primaryColor", color)}
                showText
                style={{ width: "100%" }}
              />
            </div>

            <div>
              <div style={{ marginBottom: 8, fontSize: 13 }}>
                Header Background
              </div>
              <ColorPicker
                value={colors.headerBg}
                onChange={(color) => handleColorChange("headerBg", color)}
                showText
                style={{ width: "100%" }}
              />
            </div>

            <div>
              <div style={{ marginBottom: 8, fontSize: 13 }}>
                Sidebar Background
              </div>
              <ColorPicker
                value={colors.sidebarBg}
                onChange={(color) => handleColorChange("sidebarBg", color)}
                showText
                style={{ width: "100%" }}
              />
            </div>

            <div>
              <div style={{ marginBottom: 8, fontSize: 13 }}>Text Color</div>
              <ColorPicker
                value={colors.textColor}
                onChange={(color) => handleColorChange("textColor", color)}
                showText
                style={{ width: "100%" }}
              />
            </div>

            <div>
              <div style={{ marginBottom: 8, fontSize: 13 }}>
                Background Color
              </div>
              <ColorPicker
                value={colors.bgColor}
                onChange={(color) => handleColorChange("bgColor", color)}
                showText
                style={{ width: "100%" }}
              />
            </div>
          </Space>
        </div>

        <Divider />

        <Button type="default" block onClick={resetTheme}>
          Reset to Default
        </Button>
      </Space>
    </Drawer>
  );
};
