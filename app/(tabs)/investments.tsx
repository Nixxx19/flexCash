import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function InvestmentsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <ThemedText style={styles.title}>Investments</ThemedText>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>

        {/* Portfolio Overview */}
        <LinearGradient
          colors={['#10b981', '#059669', '#047857']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.portfolioCard}
        >
          <View style={styles.portfolioHeader}>
            <ThemedText style={styles.portfolioLabel}>Total Portfolio</ThemedText>
            <TouchableOpacity>
              <Ionicons name="eye" size={20} color="rgba(255,255,255,0.8)" />
            </TouchableOpacity>
          </View>
          <ThemedText style={styles.portfolioAmount}>₹2,45,680</ThemedText>
          <View style={styles.portfolioStats}>
            <View style={styles.statItem}>
              <Ionicons name="trending-up" size={16} color="#ffffff" />
              <ThemedText style={styles.statText}>+8.2%</ThemedText>
            </View>
            <ThemedText style={styles.statPeriod}>+₹18,450 this month</ThemedText>
          </View>
        </LinearGradient>

        {/* Investment Categories */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Investment Categories</ThemedText>
          <View style={styles.categoriesGrid}>
            {[
              { name: 'Mutual Funds', amount: '₹1,25,000', percentage: 51, icon: 'trending-up', color: '#3b82f6' },
              { name: 'Fixed Deposits', amount: '₹75,000', percentage: 30, icon: 'shield-checkmark', color: '#10b981' },
              { name: 'Stocks', amount: '₹35,000', percentage: 14, icon: 'bar-chart', color: '#f59e0b' },
              { name: 'Bonds', amount: '₹10,680', percentage: 5, icon: 'document-text', color: '#8b5cf6' },
            ].map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryCard}>
                <View style={styles.categoryIcon}>
                  <Ionicons name={category.icon as any} size={24} color={category.color} />
                </View>
                <ThemedText style={styles.categoryName}>{category.name}</ThemedText>
                <ThemedText style={styles.categoryAmount}>{category.amount}</ThemedText>
                <ThemedText style={styles.categoryPercentage}>{category.percentage}%</ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Investments */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText style={styles.sectionTitle}>Recent Investments</ThemedText>
            <TouchableOpacity>
              <ThemedText style={styles.seeAllText}>See All</ThemedText>
            </TouchableOpacity>
          </View>
          
          <View style={styles.investmentsList}>
            {[
              { 
                name: 'HDFC Mid-Cap Opportunities Fund', 
                type: 'Mutual Fund', 
                amount: '₹25,000', 
                date: '2 days ago',
                status: 'Active',
                return: '+12.5%'
              },
              { 
                name: 'SBI Fixed Deposit', 
                type: 'Fixed Deposit', 
                amount: '₹50,000', 
                date: '1 week ago',
                status: 'Active',
                return: '+6.8%'
              },
              { 
                name: 'Reliance Industries', 
                type: 'Stock', 
                amount: '₹15,000', 
                date: '2 weeks ago',
                status: 'Active',
                return: '+8.2%'
              },
            ].map((investment, index) => (
              <TouchableOpacity key={index} style={styles.investmentItem}>
                <View style={styles.investmentIcon}>
                  <Ionicons 
                    name={investment.type === 'Mutual Fund' ? 'trending-up' : 
                          investment.type === 'Fixed Deposit' ? 'shield-checkmark' : 'bar-chart'} 
                    size={20} 
                    color="#6366f1" 
                  />
                </View>
                <View style={styles.investmentDetails}>
                  <ThemedText style={styles.investmentName}>{investment.name}</ThemedText>
                  <ThemedText style={styles.investmentType}>{investment.type} • {investment.date}</ThemedText>
                </View>
                <View style={styles.investmentAmount}>
                  <ThemedText style={styles.amountText}>{investment.amount}</ThemedText>
                  <ThemedText style={styles.returnText}>{investment.return}</ThemedText>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Market Trends */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Market Trends</ThemedText>
          <View style={styles.trendsCard}>
            <View style={styles.trendItem}>
              <View style={styles.trendInfo}>
                <ThemedText style={styles.trendName}>Nifty 50</ThemedText>
                <ThemedText style={styles.trendValue}>₹19,850</ThemedText>
              </View>
              <View style={styles.trendChange}>
                <Ionicons name="trending-up" size={16} color="#10b981" />
                <ThemedText style={styles.trendPercentage}>+1.2%</ThemedText>
              </View>
            </View>
            
            <View style={styles.trendItem}>
              <View style={styles.trendInfo}>
                <ThemedText style={styles.trendName}>Sensex</ThemedText>
                <ThemedText style={styles.trendValue}>₹66,120</ThemedText>
              </View>
              <View style={styles.trendChange}>
                <Ionicons name="trending-up" size={16} color="#10b981" />
                <ThemedText style={styles.trendPercentage}>+0.8%</ThemedText>
              </View>
            </View>
            
            <View style={styles.trendItem}>
              <View style={styles.trendInfo}>
                <ThemedText style={styles.trendName}>Bank Nifty</ThemedText>
                <ThemedText style={styles.trendValue}>₹44,350</ThemedText>
              </View>
              <View style={styles.trendChange}>
                <Ionicons name="trending-down" size={16} color="#ef4444" />
                <ThemedText style={[styles.trendPercentage, { color: '#ef4444' }]}>-0.5%</ThemedText>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
  },
  addButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  portfolioCard: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  portfolioHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  portfolioLabel: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '600',
  },
  portfolioAmount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 12,
  },
  portfolioStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
  },
  statPeriod: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '600',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 4,
  },
  categoryAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 2,
  },
  categoryPercentage: {
    fontSize: 12,
    color: '#9ca3af',
  },
  investmentsList: {
    gap: 12,
  },
  investmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  investmentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  investmentDetails: {
    flex: 1,
  },
  investmentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  investmentType: {
    fontSize: 14,
    color: '#9ca3af',
  },
  investmentAmount: {
    alignItems: 'flex-end',
  },
  amountText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 2,
  },
  returnText: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '600',
  },
  trendsCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    gap: 16,
  },
  trendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trendInfo: {
    flex: 1,
  },
  trendName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  trendValue: {
    fontSize: 14,
    color: '#9ca3af',
  },
  trendChange: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  trendPercentage: {
    fontSize: 14,
    color: '#10b981',
    fontWeight: '600',
  },
});
