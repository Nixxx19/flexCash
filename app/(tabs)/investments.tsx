import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function InvestmentsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Investments</ThemedText>
      <ThemedText>Manage your investment portfolio</ThemedText>
      <ThemedText>Track your stocks, bonds, and other investment assets.</ThemedText>
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
