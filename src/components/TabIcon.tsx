import { Image } from "react-native";

const CustomTabIcon: React.FC<{ source: any; focused: boolean }> = ({
    source,
    focused,
  }) => (
    <Image
      source={source}
      style={{
        width: 26,
        height: 26
      }}
    />
);

export default CustomTabIcon;