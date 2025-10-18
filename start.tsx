import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [quantity, setQuantity] = useState(1);
  const [temperature, setTemperature] = useState(24);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const h = date.getHours().toString().padStart(2, "0");
    const m = date.getMinutes().toString().padStart(2, "0");
    return `${h}:${m}`;
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#FAFAFA" }}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero Section */}
      <View style={{ position: "relative" }}>
        <Image
          source={require("../assets/images/jogja.jpg")}
          style={{ width: "100%", height: 360 }}
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.35)",
          }}
        />

        {/* Back Button */}
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 50,
            left: 20,
            backgroundColor: "rgba(255,255,255,0.25)",
            borderRadius: 25,
            width: 45,
            height: 45,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>←</Text>
        </TouchableOpacity>

        {/* Suhu & waktu di kanan bawah */}
        <View
          style={{
            position: "absolute",
            bottom: 30,
            right: 20,
            backgroundColor: "rgba(255,255,255,0.25)",
            borderRadius: 20,
            paddingHorizontal: 15,
            paddingVertical: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16, marginRight: 5 }}>☀️</Text>
          <Text style={{ color: "white", fontSize: 16 }}>{temperature}°C</Text>
          <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
            🕒 {formatTime(currentTime)}
          </Text>
        </View>

        {/* Judul & deskripsi di tengah bawah */}
        <View
          style={{
            position: "absolute",
            bottom: 100,
            left: 0,
            right: 0,
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 34,
              fontWeight: "800",
              marginBottom: 5,
              textAlign: "center",
            }}
          >
            Candi Borobudur
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 14,
              textAlign: "center",
              lineHeight: 20,
              opacity: 0.9,
            }}
          >
            Keajaiban Abadi di Tengah Alam — warisan dunia yang menenangkan jiwa.
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          marginTop: -20,
          padding: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: "#E53935",
              marginRight: 8,
            }}
          />
          <Text style={{ fontSize: 14, color: "#666" }}>Indonesia</Text>
        </View>

        <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 10 }}>
          Rasakan Sensasi Keajaiban
        </Text>

        {/* Review */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F8F8F8",
            padding: 12,
            borderRadius: 12,
            marginBottom: 20,
          }}
        >
          <Image
            source={require("../assets/images/icon.png")}
            style={{
              width: 35,
              height: 35,
              borderRadius: 17.5,
              marginRight: 10,
            }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, color: "#666", marginBottom: 2 }}>Anomali</Text>
            <Text style={{ fontSize: 13, color: "#333" }}>
              “Bagus banget wisatanya, rekomen banget buat refreshing!”
            </Text>
          </View>
        </View>

        {/* Tombol Jelajahi */}
        <TouchableOpacity
          style={{
            backgroundColor: "#FF6B4A",
            padding: 14,
            borderRadius: 25,
            alignItems: "center",
            marginBottom: 25,
          }}
        >
          <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>
            Jelajahi lebih banyak
          </Text>
        </TouchableOpacity>

        {/* Rekomendasi Wisata */}
        <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 15 }}>
          Rekomendasi Wisata di Jawa Tengah
        </Text>

        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            overflow: "hidden",
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 5,
            elevation: 4,
          }}
        >
          <Image
            source={require("../assets/images/indonesia.jpg")}
            style={{ width: "100%", height: 150 }}
          />
          <View style={{ padding: 20 }}>
            <Text style={{ color: "#1E293B", fontSize: 18, fontWeight: "700", marginBottom: 5 }}>
              Candi Borobudur
            </Text>
            <Text style={{ color: "#475569", fontSize: 13, marginBottom: 15 }}>
              Keajaiban Abadi di Tengah Alam.
            </Text>

            {/* Quantity dan Harga */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{
                    backgroundColor: "#E2E8F0",
                    width: 35,
                    height: 35,
                    borderRadius: 17.5,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 15,
                  }}
                >
                  <Text style={{ color: "#1E293B", fontSize: 20, fontWeight: "600" }}>-</Text>
                </TouchableOpacity>
                <Text
                  style={{ color: "#1E293B", fontSize: 18, fontWeight: "700", marginRight: 15 }}
                >
                  {quantity}
                </Text>
                <TouchableOpacity
                  onPress={() => setQuantity(quantity + 1)}
                  style={{
                    backgroundColor: "#FF6B4A",
                    width: 35,
                    height: 35,
                    borderRadius: 17.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>+</Text>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "flex-end" }}>
                <Text style={{ color: "#94A3B8", fontSize: 12, marginBottom: 2 }}>
                  Jumlah Total
                </Text>
                <Text style={{ color: "#1E293B", fontSize: 24, fontWeight: "700" }}>
                  Rp{(100 * quantity).toFixed(0)}
                </Text>
              </View>
            </View>

            {/* Tombol Pesan */}
            <TouchableOpacity
              style={{
                backgroundColor: "#1E293B",
                padding: 15,
                borderRadius: 25,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
                Pesan Sekarang
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
