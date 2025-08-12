import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function CreditCardAIScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Credit Card AI</ThemedText>
      <ThemedText>AI-powered credit card management</ThemedText>
      <ThemedText>Get intelligent insights and recommendations for your credit cards.</ThemedText>
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
