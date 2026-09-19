import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import joblib

data = {

    "fever":[1,1,0,1,0,1,0,1],
    "cough":[1,0,1,1,0,0,1,1],
    "headache":[1,1,0,1,0,1,0,0],
    "fatigue":[1,1,0,1,0,1,0,1],

    "disease":[
        "Flu",
        "Cold",
        "Healthy",
        "COVID",
        "Healthy",
        "Malaria",
        "Healthy",
        "COVID"
    ]
}

df = pd.DataFrame(data)

X = df[["fever","cough","headache","fatigue"]]

y = df["disease"]

model = DecisionTreeClassifier()

model.fit(X,y)

joblib.dump(model,"model.pkl")

print("Model Trained Successfully")