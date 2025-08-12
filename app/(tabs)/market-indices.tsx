import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function MarketIndicesScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Market Indices</ThemedText>
      <ThemedText>Real-time market data</ThemedText>
      <ThemedText>Track major market indices and stay updated with market trends.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
