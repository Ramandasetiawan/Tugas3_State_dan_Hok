import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';

const App: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const price = 10000;
  const total = price * quantity;

  const handleBookNow = () => {
    Alert.alert('Booking Successful', `You booked ${quantity} ticket(s)!`);
  };

  return (
    <View style={styles.container}>
      {/* Header Gambar */}
      <ImageBackground
        source={require('./assets/images/labuan.jpg')}
        style={styles.headerImage}
        imageStyle={styles.headerImageStyle}
      >
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={{ fontSize: 18 }}>←</Text>
          </TouchableOpacity>

          <View style={styles.weather}>
            <Text style={{ color: '#fff', fontWeight: '600' }}>☀️ 24°C</Text>
          </View>
        </View>
      </ImageBackground>

      {/* Konten */}
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Labuan Bajo</Text>

        <View style={styles.rating}>
          <Text style={{ fontSize: 18 }}>⭐</Text>
          <Text style={{ marginLeft: 5, fontWeight: '600' }}>5.0</Text>
        </View>

        <Text style={styles.desc}>
          From crystal-clear waters to breathtaking sunsets, Labuan Bajo is
          calling! Explore hidden islands, swim with manta rays, and create
          memories that last a lifetime.
        </Text>

        {/* Review */}
        <View style={styles.reviewCard}>
          <Text style={styles.reviewTitle}>Discover the Beauty of Labuan Bajo</Text>
          <Text style={styles.reviewAuthor}>By Bakti Ganteng</Text>
          <Text style={styles.reviewText}>
            Wow, tempat ini bagus sekali yah! Aku ingin ke sana nanti.
          </Text>

          <TouchableOpacity style={styles.viewAllBtn}>
            <Text>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Rekomendasi */}
        <Text style={styles.recommendTitle}>Recommendation in Bajo</Text>
        <View style={styles.recommendCard}>
          <Image
            source={require('./assets/images/boat.jpg')}
            style={styles.recommendImage}
          />
          <View style={{ padding: 10, flex: 1 }}>
            <Text style={styles.recommendName}>
              Phinisi Luxury Private Trip
            </Text>
            <Text style={styles.recommendDesc}>
              Complimentary pick-up from Labuan Bajo Airport.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer (Total Harga & Counter) */}
      <View style={styles.footer}>
        <View style={styles.counter}>
          <TouchableOpacity
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
            style={styles.counterBtn}
          >
            <Text style={styles.counterText}>–</Text>
          </TouchableOpacity>

          <Text style={styles.counterValue}>{quantity}</Text>

          <TouchableOpacity
            onPress={() => setQuantity(quantity + 1)}
            style={styles.counterBtn}
          >
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ color: '#ccc', fontSize: 12 }}>Total Amount</Text>
          <Text style={styles.totalText}>${total.toLocaleString()}</Text>
        </View>
      </View>

      {/* Tombol Booking */}
      <TouchableOpacity style={styles.bookBtn} onPress={handleBookNow}>
        <Text style={styles.bookText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8' },

  // Header
  headerImage: {
    height: 350,
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  headerImageStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 8,
    borderRadius: 20,
  },
  weather: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 8,
  },

  // Konten
  scroll: { padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#000' },
  rating: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  desc: { marginTop: 10, color: '#555', lineHeight: 20 },

  // Review
  reviewCard: {
    marginTop: 25,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    elevation: 3,
  },
  reviewTitle: { fontWeight: 'bold', fontSize: 18 },
  reviewAuthor: { fontSize: 12, color: '#777', marginTop: 10 },
  reviewText: { marginTop: 5, color: '#444' },
  viewAllBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 10,
  },

  // Rekomendasi
  recommendTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 25 },
  recommendCard: {
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    elevation: 3,
  },
  recommendImage: { width: 120, height: 100 },
  recommendName: { fontWeight: 'bold' },
  recommendDesc: { fontSize: 12, color: '#777', marginTop: 5 },

  // Footer
  footer: {
    backgroundColor: '#1E2A47',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  counter: { flexDirection: 'row', alignItems: 'center' },
  counterBtn: {
    backgroundColor: '#F85F35',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: { color: '#fff', fontSize: 18 },
  counterValue: { color: '#fff', marginHorizontal: 15, fontSize: 18 },
  totalText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },

  // Tombol Booking
  bookBtn: {
    backgroundColor: '#F85F35',
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  bookText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
