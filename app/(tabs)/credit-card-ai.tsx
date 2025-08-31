import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function CreditCardAIScreen() {
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('CC Geek');

  const messages = [
    {
      id: 1,
      type: 'ai',
      text: "Hello! I'm your financial assistant for credit cards in India. How can I help you today?",
      time: '2:30 PM'
    },
    {
      id: 2,
      type: 'user',
      text: "I'm looking for a credit card with good cashback on online shopping",
      time: '2:31 PM'
    },
    {
      id: 3,
      type: 'ai',
      text: "Great choice! Here are some excellent options for online shopping cashback:",
      time: '2:31 PM'
    }
  ];

  const recommendedCards = [
    {
      name: 'Amazon Pay ICICI Bank',
      type: 'Cashback Card',
      cashback: '5% cashback',
      annualFee: '₹500',
      color: '#000000',
      logo: '🛒'
    },
    {
      name: 'SBI Card CASH B<CK',
      type: 'Rewards Card',
      cashback: '3.5% cashback',
      annualFee: '₹999',
      color: '#8b5cf6',
      logo: '💳'
    },
    {
      name: 'HDFC Millennia',
      type: 'Digital Card',
      cashback: '5% on digital spends',
      annualFee: '₹1,000',
      color: '#3b82f6',
      logo: '📱'
    }
  ];

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ThemedText style={styles.title}>Credit Card AI</ThemedText>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color="#6366f1" />
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'CC Optimization' && styles.activeTab]}
          onPress={() => setActiveTab('CC Optimization')}
        >
          <ThemedText style={[styles.tabText, activeTab === 'CC Optimization' && styles.activeTabText]}>
            CC Optimization
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'CC Geek' && styles.activeTab]}
          onPress={() => setActiveTab('CC Geek')}
        >
          <ThemedText style={[styles.tabText, activeTab === 'CC Geek' && styles.activeTabText]}>
            CC Geek
          </ThemedText>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.chatContainer} showsVerticalScrollIndicator={false}>
        {/* Welcome Message */}
        <View style={styles.welcomeCard}>
          <LinearGradient
            colors={['#6366f1', '#8b5cf6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.welcomeGradient}
          >
            <Ionicons name="sparkles" size={32} color="#ffffff" />
            <ThemedText style={styles.welcomeTitle}>AI Credit Card Assistant</ThemedText>
            <ThemedText style={styles.welcomeSubtitle}>
              Get personalized credit card recommendations and optimization tips
            </ThemedText>
          </LinearGradient>
        </View>

        {/* Chat Messages */}
        <View style={styles.messagesContainer}>
          {messages.map((msg) => (
            <View key={msg.id} style={[
              styles.messageBubble,
              msg.type === 'user' ? styles.userMessage : styles.aiMessage
            ]}>
              <ThemedText style={styles.messageText}>{msg.text}</ThemedText>
              <ThemedText style={styles.messageTime}>{msg.time}</ThemedText>
            </View>
          ))}
        </View>

        {/* Credit Card Recommendations */}
        <View style={styles.recommendationsSection}>
          <ThemedText style={styles.sectionTitle}>Recommended Cards</ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsScroll}>
            {recommendedCards.map((card, index) => (
              <TouchableOpacity key={index} style={styles.cardItem}>
                <LinearGradient
                  colors={[card.color, card.color + 'CC']}
                  style={styles.cardGradient}
                >
                  <View style={styles.cardHeader}>
                    <ThemedText style={styles.cardLogo}>{card.logo}</ThemedText>
                    <Ionicons name="wifi" size={16} color="rgba(255,255,255,0.8)" />
                  </View>
                  <ThemedText style={styles.cardName}>{card.name}</ThemedText>
                  <ThemedText style={styles.cardType}>{card.type}</ThemedText>
                  <View style={styles.cardDetails}>
                    <ThemedText style={styles.cardCashback}>{card.cashback}</ThemedText>
                    <ThemedText style={styles.cardFee}>₹{card.annualFee}</ThemedText>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <ThemedText style={styles.sectionTitle}>Quick Questions</ThemedText>
          <View style={styles.actionsGrid}>
            {[
              'Best cashback cards?',
              'Low annual fee cards',
              'Travel rewards cards',
              'Student credit cards'
            ].map((action, index) => (
              <TouchableOpacity key={index} style={styles.actionChip}>
                <ThemedText style={styles.actionChipText}>{action}</ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your message..."
            placeholderTextColor="#9ca3af"
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 12,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  activeTab: {
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9ca3af',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#ffffff',
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  welcomeCard: {
    marginBottom: 24,
    borderRadius: 20,
    overflow: 'hidden',
  },
  welcomeGradient: {
    padding: 24,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 12,
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    lineHeight: 20,
  },
  messagesContainer: {
    gap: 16,
    marginBottom: 24,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 16,
    borderRadius: 20,
    borderBottomLeftRadius: 4,
  },
  aiMessage: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    alignSelf: 'flex-start',
  },
  userMessage: {
    backgroundColor: '#6366f1',
    alignSelf: 'flex-end',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 22,
    marginBottom: 4,
  },
  messageTime: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
  },
  recommendationsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
  },
  cardsScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  cardItem: {
    width: 280,
    height: 180,
    marginRight: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  cardGradient: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLogo: {
    fontSize: 24,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  cardType: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardCashback: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  cardFee: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
  },
  quickActions: {
    marginBottom: 100,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  actionChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  actionChipText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '500',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#0f0f23',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#ffffff',
    maxHeight: 100,
    paddingVertical: 8,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});
