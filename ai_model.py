import joblib

model = joblib.load("model.pkl")

def predict(fever, cough, headache, fatigue):

    prediction = model.predict([
        [fever, cough, headache, fatigue]
    ])

    return prediction[0]