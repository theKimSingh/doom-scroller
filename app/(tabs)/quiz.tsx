import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

// Sample JSON data
const quizData = {
  question: "What is the capital of France?",
  choices: ["Berlin", "Madrid", "Paris", "Rome"],
  correctAnswer: "Paris"
};

const QuizPage = () => {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChoiceSelection = (choice: string) => {
    setSelectedChoice(choice);
  };

  const handleSubmitAnswer = () => {
    setShowAnswer(true);
    setIsCorrect(selectedChoice === quizData.correctAnswer);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{quizData.question}</Text>
      <View style={styles.choicesContainer}>
        {quizData.choices.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.choiceButton,
              selectedChoice === choice && styles.selectedChoice
            ]}
            onPress={() => handleChoiceSelection(choice)}
          >
            <Text style={styles.choiceText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button
        title="Submit Answer"
        onPress={handleSubmitAnswer}
        disabled={!selectedChoice}
      />
      {showAnswer && (
        <Text style={styles.answerText}>
          {isCorrect ? "Correct!" : "Incorrect. The correct answer is " + quizData.correctAnswer}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  choicesContainer: {
    marginBottom: 20
  },
  choiceButton: {
    backgroundColor: '#ddd',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5
  },
  selectedChoice: {
    backgroundColor: '#add8e6'
  },
  choiceText: {
    fontSize: 18
  },
  answerText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default QuizPage;
