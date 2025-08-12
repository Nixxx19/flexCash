import { Tabs, usePathname, useRouter } from 'expo-router';
import { Platform, ScrollView, TouchableOpacity, Text, View, StyleSheet, Dimensions } from 'react-native';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type ValidIconName =
  | 'chart.bar.fill'
  | 'chart.line.uptrend.xyaxis'
  | 'creditcard.fill'
  | 'chart.pie.fill'
  | 'gearshape.fill';

// Helper function to map SF Symbols to Ionicons (fallback)
const getIoniconsName = (sfSymbolName: string): keyof typeof Ionicons.glyphMap => {
  const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
    'chart.bar.fill': 'bar-chart',
    'chart.line.uptrend.xyaxis': 'trending-up',
    'creditcard.fill': 'card',
    'chart.pie.fill': 'pie-chart',
    'gearshape.fill': 'settings',
  };
  return iconMap[sfSymbolName] || 'ellipse';
};

// Debounce utility function for optimized auto-scroll
const debounce = (func: Function, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

function CustomScrollableTabBar({ currentRoute, onTabPress }: { currentRoute: string, onTabPress: (route: string) => void }) {
  const colorScheme = useColorScheme();
  const scrollViewRef = useRef<ScrollView>(null);
  const [tabLayouts, setTabLayouts] = useState<{ [key: string]: { x: number; width: number } }>({});
  
  const tabs = [
    { route: 'index', icon: 'chart.bar.fill', label: 'Dashboard' },
    { route: 'investments', icon: 'chart.line.uptrend.xyaxis', label: 'Investments' },
    { route: 'credit-card-ai', icon: 'creditcard.fill', label: 'Credit Card AI' },
    { route: 'market-indices', icon: 'chart.pie.fill', label: 'Market Indices' },
    { route: 'settings', icon: 'gearshape.fill', label: 'Settings' },
  ];

  // Enhanced haptic feedback function
  const handleTabPress = (route: string) => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onTabPress(route);
  };

  // Track layout of each tab
  const handleTabLayout = (route: string, event: any) => {
    const { x, width } = event.nativeEvent.layout;
    setTabLayouts(prev => ({
      ...prev,
      [route]: { x, width }
    }));
  };

  // Optimized auto-scroll with debounce
  const scrollToActiveTab = useCallback(
    debounce((route: string) => {
      if (tabLayouts[route] && scrollViewRef.current) {
        const activeTabLayout = tabLayouts[route];
        const screenWidth = Dimensions.get('window').width - 32;
        const scrollOffset = activeTabLayout.x - (screenWidth / 2) + (activeTabLayout.width / 2);
        
        scrollViewRef.current.scrollTo({
          x: Math.max(0, scrollOffset),
          animated: true,
        });
      }
    }, 100),
    [tabLayouts]
  );

  useEffect(() => {
    if (tabLayouts[currentRoute] && scrollViewRef.current) {
      scrollToActiveTab(currentRoute);
    }
  }, [currentRoute, scrollToActiveTab]);

  return (
    <View style={styles.tabBarWrapper}>
      <View style={styles.floatingPill}>
        <TabBarBackground />
        <ScrollView 
          ref={scrollViewRef}
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          style={styles.scrollView}
          onContentSizeChange={() => {
            if (tabLayouts[currentRoute]) {
              scrollToActiveTab(currentRoute);
            }
          }}
        >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.route}
              style={[
                styles.tab,
                currentRoute === tab.route && styles.activeTab
              ]}
              onPress={() => handleTabPress(tab.route)}
              onLayout={(event) => handleTabLayout(tab.route, event)}
              activeOpacity={0.8}
              accessible={true}
              accessibilityRole="tab"
              accessibilityState={{ selected: currentRoute === tab.route }}
              accessibilityLabel={`${tab.label} tab`}
              accessibilityHint={`Navigate to ${tab.label} screen`}
            >
              {Platform.OS === 'ios' ? (
                <IconSymbol 
                  size={22} 
                  name={tab.icon as ValidIconName} 
                  color={currentRoute === tab.route 
                    ? Colors[colorScheme ?? 'light'].tint 
                    : colorScheme === 'dark' ? '#888' : '#666'
                  }
                />
              ) : (
                <Ionicons 
                  size={22} 
                  name={getIoniconsName(tab.icon)} 
                  color={currentRoute === tab.route 
                    ? Colors[colorScheme ?? 'light'].tint 
                    : colorScheme === 'dark' ? '#888' : '#666'
                  }
                />
              )}
              <Text style={[
                styles.tabLabel,
                { 
                  color: currentRoute === tab.route 
                    ? Colors[colorScheme ?? 'light'].tint 
                    : colorScheme === 'dark' ? '#888' : '#666'
                }
              ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  const router = useRouter();

  const currentRoute = pathname.split('/').pop() || 'index';

  const handleTabPress = (route: string) => {
    switch (route) {
      case 'index': router.push('/'); break;
      case 'investments': router.push('/(tabs)/investments'); break;
      case 'credit-card-ai': router.push('/(tabs)/credit-card-ai'); break;
      case 'market-indices': router.push('/(tabs)/market-indices'); break;
      case 'settings': router.push('/(tabs)/settings'); break;
      default: break;
    }
  };

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: { display: 'none' },
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="investments" />
        <Tabs.Screen name="credit-card-ai" />
        <Tabs.Screen name="market-indices" />
        <Tabs.Screen name="settings" />
      </Tabs>
      
      <CustomScrollableTabBar currentRoute={currentRoute} onTabPress={handleTabPress} />
    </>
  );
}

const styles = StyleSheet.create({
  tabBarWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    height: 70,
    justifyContent: 'center',
  },
  floatingPill: {
    borderRadius: 35,
    height: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(20px)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.25,
        shadowRadius: 25,
      },
      android: { 
        elevation: 12,
        shadowColor: '#000',
      },
    }),
    overflow: 'hidden',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    minWidth: '100%',
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 70,
    position: 'relative',
  },
  activeTab: {
    borderRadius: 20,
    backgroundColor: 'rgba(99, 102, 241, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(99, 102, 241, 0.5)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 3,
    textAlign: 'center',
    fontWeight: '600',
  },
});
