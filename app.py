from flask import Flask, request, jsonify
from flask_cors import CORS

from database import db
from models import Patient
from ai_model import predict

from flask import send_file
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle
from reportlab.lib import colors

from resource_model import Resource
from vaccination_model import Vaccination
# from app import app
# from database import db

# with app.app_context():
#     db.create_all()

# exit()

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///health.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
CORS(app)

with app.app_context():
    db.create_all()


@app.route("/")
def home():
    return "Backend Running"

@app.route("/resources", methods=["GET"])
def get_resources():

    resource = Resource.query.first()

    if resource is None:

        resource = Resource(
            total_beds=120,
            available_beds=45,
            doctors=35,
            nurses=60,
            ambulances=8,
            available_ambulances=3,
            medicine_stock=560
        )

        db.session.add(resource)
        db.session.commit()

    return {
        "total_beds": resource.total_beds,
        "available_beds": resource.available_beds,
        "doctors": resource.doctors,
        "nurses": resource.nurses,
        "ambulances": resource.ambulances,
        "available_ambulances": resource.available_ambulances,
        "medicine_stock": resource.medicine_stock
    }

@app.route("/resources", methods=["POST"])
def update_resources():

    data = request.get_json()

    resource = Resource.query.first()

    resource.total_beds = data["total_beds"]
    resource.available_beds = data["available_beds"]
    resource.doctors = data["doctors"]
    resource.nurses = data["nurses"]
    resource.ambulances = data["ambulances"]
    resource.available_ambulances = data["available_ambulances"]
    resource.medicine_stock = data["medicine_stock"]

    db.session.commit()

    return {"message":"Updated Successfully"}


# @app.route("/predict", methods=["POST"])
# def prediction():

#     data = request.get_json()

#     age = int(data["age"])
#     fever = int(data["fever"])
#     cough = int(data["cough"])

#     result = predict(age, fever, cough)

#     patient = Patient(
#         name=data.get("name", "Unknown"),
#         age=age,
#         gender=data.get("gender", "Unknown"),
#         fever=fever,
#         cough=cough,
#         prediction=result
#     )

#     db.session.add(patient)
#     db.session.commit()

#     return jsonify({"prediction": result})
@app.route("/predict", methods=["POST"])
def prediction():

    data = request.get_json()

    patient_id = data.get("patient_id")

    if not patient_id:
        return jsonify({"error": "Please select a patient"}), 400

    patient = Patient.query.get(patient_id)

    if patient is None:
        return jsonify({"error": "Patient not found"}), 404

    fever = int(data.get("fever", 0))
    cough = int(data.get("cough", 0))
    headache = int(data.get("headache", 0))
    fatigue = int(data.get("fatigue", 0))

    result = predict(fever, cough, headache, fatigue)

    patient.fever = fever
    patient.cough = cough
    patient.prediction = result

    db.session.commit()

    return jsonify({
        "message": "Prediction saved successfully",
        "prediction": result
    })


# @app.route("/predict", methods=["POST"])
# def prediction():

#     data = request.get_json()

#     patient = Patient.query.get(data["patient_id"])

#     if patient is None:
#         return jsonify({"message": "Patient not found"}), 404

#     fever = int(data["fever"])
#     cough = int(data["cough"])
#     headache = int(data["headache"])
#     fatigue = int(data["fatigue"])

#     result = predict(fever, cough, headache, fatigue)

#     patient.fever = fever
#     patient.cough = cough
#     patient.prediction = result

#     db.session.commit()

#     return jsonify({
#         "prediction": result
#     })


@app.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    patient = Patient(
        name=data["name"],
        age=data["age"],
        gender=data["gender"],
        fever=0,
        cough=0,
        prediction=""
    )

    db.session.add(patient)
    db.session.commit()

    return jsonify({"message": "Patient Registered Successfully"})

@app.route("/vaccination", methods=["POST"])
def add_vaccination():

    data = request.get_json()

    vaccine = Vaccination(
        patient_name=data["patient_name"],
        vaccine=data["vaccine"],
        dose=data["dose"],
        vaccination_date=data["vaccination_date"],
        next_due_date=data["next_due_date"]
    )

    db.session.add(vaccine)
    db.session.commit()

    return jsonify({
        "message":"Vaccination Added Successfully"
    })

@app.route("/vaccination", methods=["GET"])
def get_vaccination():

    vaccines = Vaccination.query.all()

    output=[]

    for v in vaccines:

        output.append({

            "id":v.id,
            "patient_name":v.patient_name,
            "vaccine":v.vaccine,
            "dose":v.dose,
            "vaccination_date":v.vaccination_date,
            "next_due_date":v.next_due_date

        })

    return jsonify(output)


@app.route("/patients")
def patients():

    all_patients = Patient.query.all()

    output = []

    for p in all_patients:
        output.append({
            "id": p.id,
            "name": p.name,
            "age": p.age,
            "gender": p.gender,
            "prediction": p.prediction
        })

    return jsonify(output)

@app.route("/update/<int:id>", methods=["PUT"])
def update_patient(id):

    patient = Patient.query.get(id)

    if patient is None:
        return jsonify({"message": "Patient not found"}), 404

    data = request.get_json()

    patient.name = data["name"]
    patient.age = data["age"]
    patient.gender = data["gender"]

    db.session.commit()

    return jsonify({
        "message": "Patient Updated Successfully"
    })

@app.route("/delete/<int:id>", methods=["DELETE"])
def delete_patient(id):

    patient = Patient.query.get(id)

    if patient is None:
        return jsonify({"message": "Patient not found"}), 404

    db.session.delete(patient)
    db.session.commit()

    return jsonify({
        "message": "Patient Deleted Successfully"
    })

@app.route("/report")
def report():

    patients = Patient.query.all()

    pdf = SimpleDocTemplate("patients_report.pdf")

    data = []

    data.append([
        "ID",
        "Name",
        "Age",
        "Gender",
        "Prediction"
    ])

    for p in patients:

        data.append([
            p.id,
            p.name,
            p.age,
            p.gender,
            p.prediction
        ])

    table = Table(data)

    table.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,0), colors.blue),
        ("TEXTCOLOR", (0,0), (-1,0), colors.white),
        ("GRID", (0,0), (-1,-1), 1, colors.black),
        ("BACKGROUND", (0,1), (-1,-1), colors.beige),
        ("ALIGN", (0,0), (-1,-1), "CENTER"),
        ("BOTTOMPADDING", (0,0), (-1,0), 10),
    ]))

    pdf.build([table])

    return send_file(
        "patients_report.pdf",
        as_attachment=True
    )


if __name__ == "__main__":
    app.run(debug=True)
