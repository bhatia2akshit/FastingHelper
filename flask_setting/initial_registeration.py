from flask import Flask, redirect, url_for, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)

import ast
fasting_count=0
team=''
team_level=1
team_points=0
CORS(app, resources={r"/*": {"origins": "*"}})
@app.route('/', methods=['POST'])
@cross_origin()
def register_user():
    data = request.data
    # data=data.decode('utf-8')
    # print(data)

    dict_str = data.decode("UTF-8")
    data = ast.literal_eval(dict_str)

    user_name = data['username']
    password = data['password']
    email = data['email']
    address = data['address']

    return "Positive"


#second screen
@app.route('/mascot/',methods=['POST'])
def choose_team():
    data=request.data
    team=data['team_type']
    team_level=1
    team_points=10
    return ""

@app.route('/program/',methods=['POST'])
def choose_program():

    data=request.data
    fast_limit = data['fast_days']
    global fasting_count
    fasting_count +=1
    # current_day = 0
    # if len(current_day_count_list)==0:
    #     current_day_count_list.append(1)
    # elif len(current_day_count_list)>current_index:
    #     current_day_count_list[current_index]+=1  # because the user is starting fasting again.
    # name_program_list.append(name_program)
    # religion_list.append(religion)
    return ""


def increment_day():
    # conn=sqlite3.connect('application.db')
    # cursor=conn.cursor()
    # cursor.execute('Select PROGRAM_NUMBER, DAY_COUNT from STATUS where EMAIL=%s')  # this will return the day he is on.
    # program_number, day_count=cursor.fetchone()
    program_number=name_program_list[current_index]
    day_count = current_day_count_list[current_index]
    day_count+=1
    if (day_count==3 and program_number==3) or (day_count==7 and program_number==7) or (day_count==10 and program_number==10):
        #unlock the mascot
        mascot_evolve()
    else:
        current_day_count_list[current_index]=day_count  # increment the day of fasting
        mascot_point_increment_daily()

if __name__ == '__main__':
    app.run()
