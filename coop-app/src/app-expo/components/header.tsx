import { View, Text } from 'react-native';
import globalStyles from '@/ux/styles';

export default function Header() {
  return (
    <View style={globalStyles.headerStack}>
      <Text style={{ color: 'white' }}>Header</Text>
    </View>
  );
}