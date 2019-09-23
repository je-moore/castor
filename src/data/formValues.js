const formValues = {
  eyeResponse: {
    legend: "Best Eye Response",
    instruction: 'If local injury, edema, or otherwise unable to be assessed, mark "Not testable (NT)".',
    inputs: [
      "Spontaneously (+4)",
      "To verbal command (+3)",
      "To pain (+2)",
      "No eye opening (+1)",
      "Not testable (NT)"
    ]
  },
  verbalResponse: {
    legend: "Best Verbal Response",
    instruction: 'If intubated or otherwise unable to be assessed, mark NT.',
    inputs: [
      "Oriented (+5)",
      "Confused (+4)",
      "Inappropriate words (+3)",
      "Incomprehensible sounds (+2)",
      "No verbal response (+1)",
      "Not testable (NT)"
    ]
  },
  motorResponse: {
    legend: "Best Motor Response",
    instruction: 'If on sedation/paralysis or unable to be assessed, mark NT.',
    inputs: [
      "Obeys commands (+6)",
      "Localizes pain (+5)",
      "Withdrawal from pain (+4)",
      "Flexion to pain (+3)",
      "Extension to pain (+2)",
      "No motor response (+1)",
      "Not testable (NT)"
    ]
  }
}

export default formValues