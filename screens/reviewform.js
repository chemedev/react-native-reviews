import React from "react";
import { Text, Button, TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";

import FlatButton from "../shared/button";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          addReview(values);
          // actions.resetForm();
        }}
      >
        {({
          touched,
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          values,
        }) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Game title"
              onChangeText={handleChange("title")}
              value={values.title}
              onBlur={handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {touched.title && errors.title}
            </Text>
            <TextInput
              multiline
              minHeight={100}
              style={globalStyles.input}
              placeholder="Tell us your thoughts"
              onChangeText={handleChange("body")}
              value={values.body}
              onBlur={handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {touched.body && errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="How many hearts you give it?"
              onChangeText={handleChange("rating")}
              value={values.rating}
              keyboardType="numeric"
              onBlur={handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {touched.rating && errors.rating}
            </Text>
            <FlatButton text="Submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
