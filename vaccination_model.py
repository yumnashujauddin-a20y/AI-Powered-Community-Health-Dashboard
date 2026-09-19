from database import db

class Vaccination(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    patient_name = db.Column(db.String(100))

    vaccine = db.Column(db.String(100))

    dose = db.Column(db.String(50))

    vaccination_date = db.Column(db.String(50))

    next_due_date = db.Column(db.String(50))