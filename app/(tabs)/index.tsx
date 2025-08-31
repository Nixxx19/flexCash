import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function DashboardScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <ThemedText style={styles.greeting}>Good morning, User</ThemedText>
            <ThemedText style={styles.subtitle}>Here's your financial overview</ThemedText>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="person-circle" size={40} color="#6366f1" />
          </TouchableOpacity>
        </View>

        {/* Balance Card */}
        <LinearGradient
          colors={['#6366f1', '#8b5cf6', '#a855f7']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.balanceCard}
        >
          <View style={styles.balanceHeader}>
            <ThemedText style={styles.balanceLabel}>Total Balance</ThemedText>
            <TouchableOpacity>
              <Ionicons name="eye" size={20} color="rgba(255,255,255,0.8)" />
            </TouchableOpacity>
          </View>
          <ThemedText style={styles.balanceAmount}>₹1,25,430</ThemedText>
          <View style={styles.balanceStats}>
            <View style={styles.statItem}>
              <Ionicons name="trending-up" size={16} color="#10b981" />
              <ThemedText style={styles.statText}>+12.5%</ThemedText>
            </View>
            <ThemedText style={styles.statPeriod}>vs last month</ThemedText>
          </View>
        </LinearGradient>

        {/* Quick Actions */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Quick Actions</ThemedText>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionCard}>
              <LinearGradient
                colors={['#10b981', '#059669']}
                style={styles.actionGradient}
              >
                <Ionicons name="add-circle" size={24} color="white" />
              </LinearGradient>
              <ThemedText style={styles.actionLabel}>Add Expense</ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionCard}>
              <LinearGradient
                colors={['#3b82f6', '#2563eb']}
                style={styles.actionGradient}
              >
                <Ionicons name="card" size={24} color="white" />
              </LinearGradient>
              <ThemedText style={styles.actionLabel}>Add Card</ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionCard}>
              <LinearGradient
                colors={['#f59e0b', '#d97706']}
                style={styles.actionGradient}
              >
                <Ionicons name="trending-up" size={24} color="white" />
              </LinearGradient>
              <ThemedText style={styles.actionLabel}>Invest</ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionCard}>
              <LinearGradient
                colors={['#ef4444', '#dc2626']}
                style={styles.actionGradient}
              >
                <Ionicons name="analytics" size={24} color="white" />
              </LinearGradient>
              <ThemedText style={styles.actionLabel}>Analytics</ThemedText>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <ThemedText style={styles.sectionTitle}>Recent Transactions</ThemedText>
            <TouchableOpacity>
              <ThemedText style={styles.seeAllText}>See All</ThemedText>
            </TouchableOpacity>
          </View>
          
          <View style={styles.transactionsList}>
            {[
              { icon: 'restaurant', title: 'Swiggy', amount: '-₹450', category: 'Food', time: '2h ago' },
              { icon: 'car', title: 'Uber', amount: '-₹120', category: 'Transport', time: '4h ago' },
              { icon: 'shirt', title: 'Zara', amount: '-₹2,500', category: 'Shopping', time: '1d ago' },
              { icon: 'trending-up', title: 'Investment', amount: '+₹5,000', category: 'Income', time: '2d ago' },
            ].map((transaction, index) => (
              <TouchableOpacity key={index} style={styles.transactionItem}>
                <View style={styles.transactionIcon}>
                  <Ionicons 
                    name={transaction.icon as any} 
                    size={20} 
                    color={transaction.amount.startsWith('+') ? '#10b981' : '#ef4444'} 
                  />
                </View>
                <View style={styles.transactionDetails}>
                  <ThemedText style={styles.transactionTitle}>{transaction.title}</ThemedText>
                  <ThemedText style={styles.transactionCategory}>{transaction.category} • {transaction.time}</ThemedText>
                </View>
                <ThemedText style={[
                  styles.transactionAmount,
                  { color: transaction.amount.startsWith('+') ? '#10b981' : '#ef4444' }
                ]}>
                  {transaction.amount}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Spending Overview */}
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>This Month's Spending</ThemedText>
          <View style={styles.spendingCard}>
            <View style={styles.spendingHeader}>
              <ThemedText style={styles.spendingAmount}>₹12,450</ThemedText>
              <ThemedText style={styles.spendingLabel}>Total Spent</ThemedText>
            </View>
            <View style={styles.spendingCategories}>
              {[
                { name: 'Food', amount: '₹4,200', percentage: 34, color: '#ef4444' },
                { name: 'Transport', amount: '₹2,800', percentage: 22, color: '#3b82f6' },
                { name: 'Shopping', amount: '₹3,100', percentage: 25, color: '#f59e0b' },
                { name: 'Others', amount: '₹2,350', percentage: 19, color: '#8b5cf6' },
              ].map((category, index) => (
                <View key={index} style={styles.categoryItem}>
                  <View style={styles.categoryInfo}>
                    <View style={[styles.categoryDot, { backgroundColor: category.color }]} />
                    <ThemedText style={styles.categoryName}>{category.name}</ThemedText>
                  </View>
                  <View style={styles.categoryAmount}>
                    <ThemedText style={styles.categoryAmountText}>{category.amount}</ThemedText>
                    <ThemedText style={styles.categoryPercentage}>{category.percentage}%</ThemedText>
                  </View>
                </View>
              ))}
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
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#9ca3af',
    fontWeight: '500',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceCard: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  balanceLabel: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '600',
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 12,
  },
  balanceStats: {
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
    color: '#10b981',
    fontWeight: '600',
  },
  statPeriod: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
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
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  actionCard: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  actionGradient: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  actionLabel: {
    fontSize: 12,
    color: '#9ca3af',
    fontWeight: '600',
    textAlign: 'center',
  },
  transactionsList: {
    gap: 12,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  transactionCategory: {
    fontSize: 14,
    color: '#9ca3af',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '700',
  },
  spendingCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  spendingHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  spendingAmount: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  spendingLabel: {
    fontSize: 14,
    color: '#9ca3af',
  },
  spendingCategories: {
    gap: 12,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  categoryDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  categoryName: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '500',
  },
  categoryAmount: {
    alignItems: 'flex-end',
  },
  categoryAmountText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
  },
  categoryPercentage: {
    fontSize: 12,
    color: '#9ca3af',
  },
});
