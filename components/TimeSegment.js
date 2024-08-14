import { Text, View, StyleSheet } from "react-native";

export function TimeSegment({ number, unit, textStyle }) {
  return (
    <View style={styles.segmentContainer}>
      <Text style={[styles.number, textStyle]}>{number}</Text>
      <Text style={textStyle}>{unit}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  segmentContainer: {
    padding: 12,
    margin: 4,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 24,
    fontWeight: "bold",
    fontVariant: ["tabular-nums"],
  },
});
