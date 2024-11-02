from flask import Flask , request , jsonify
# from flask_mail import Mail, Message
import random
import psycopg2
from flask_cors import CORS
import json
import pandas as pd


app = Flask(__name__)
CORS(app)

def connection():
    con=  psycopg2.connect(
        host="localhost",
        database="postgres",
        user="postgres",
        password="admin")
    
    cur = con.cursor()
    return con , cur


    



def generate_random_6_digit_number():
    return random.randint(100000, 999999)

@app.route('/sendOtp' , methods=['GET' , 'POST'])
def generateOtp():
    data = request.data
   
    phone_no = data.decode()

    conn , cur = connection()
    query ="SELECT phone_no FROM public.login"

    try:
        df = pd.read_sql(query ,con=conn)
        df = df.to_dict()
        result = df['phone_no'].values()
        isPhoneNoExists=False
        if phone_no in result:
            isPhoneNoExists = True
       
    except:
        return jsonify("failed")

    finally:
        conn.commit()
        cur.close()
        conn.close()
    
   
    return jsonify(isPhoneNoExists)

@app.route("/addToTable" , methods=['GET' , 'POST'])
def addToTable():
    data = request.data
    print("data" , data)
    user_info = json.loads(data.decode())
    
    print("0000000000" , user_info , type(user_info))
    email = user_info['email']
    phoneNo = int(user_info['phoneNo'])
    firstName = user_info['firstName']
    lastName = user_info['lastName']
    print(user_info ,firstName, type(firstName),'user_info')
    conn , cur = connection()
    # cur = conn.cursor()


    query =f"INSERT INTO login (phone_no, first_name, last_name , email) VALUES {phoneNo , firstName,lastName,email}"
    print(query,'query')
    # fetchData = pd.read_sql_query(query , conn)
    # print(fetchData , 'fetchData')
    cur.execute(query)
    conn.commit()
    cur.close()
    conn.close()

    return jsonify('ok')










if __name__ == '__main__':
    app.run(debug=True)