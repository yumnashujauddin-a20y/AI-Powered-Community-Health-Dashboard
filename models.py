from database import db

class Patient(db.Model):
    __tablename__ = "patients"

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(100), nullable=False)

    age = db.Column(db.Integer)

    gender = db.Column(db.String(20))

    fever = db.Column(db.Integer)

    cough = db.Column(db.Integer)

    prediction = db.Column(db.String(100))