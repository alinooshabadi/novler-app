import React from "react";
import { StyleSheet, Text, View } from "react-native";
import useSWR from "swr";

const fetchJSON = async (...args) => {
  const res = await fetch(...args);
  return await res.json();
};

console.log(useSWR);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

const Fetch = () => {
  const { data } = useSWR("https://api.github.com/repos/facebook/react", fetchJSON);

  return (
    <View style={styles.container}>
      {data ? (
        <View>
          <Text>Repo: {data.full_name}</Text>
          <Text>forks: {data.forks_count}</Text>
          <Text>stars: {data.stargazers_count}</Text>
          <Text>watchers: {data.watchers}</Text>
        </View>
      ) : (
        <Text>loading...</Text>
      )}
    </View>
  );
};

export default Fetch;
