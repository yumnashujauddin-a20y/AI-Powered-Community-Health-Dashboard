from database import db

class Resource(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    total_beds = db.Column(db.Integer)
    available_beds = db.Column(db.Integer)

    doctors = db.Column(db.Integer)
    nurses = db.Column(db.Integer)

    ambulances = db.Column(db.Integer)
    available_ambulances = db.Column(db.Integer)

    medicine_stock = db.Column(db.Integer)