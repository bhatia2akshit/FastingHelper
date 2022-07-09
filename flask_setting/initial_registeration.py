from flask import Flask, redirect, url_for, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)

import ast
fasting_round=0
fast_limit=0
current_day=0

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

    return redirect('./mascot.html')


#second screen
@app.route('/team/',methods=['POST'])
@cross_origin()
def choose_team():
    global  team_level, team_points
    data=request.data
    team=data['team']
    team_level=1
    team_points+=10
    return ""

@app.route('/program/',methods=['POST'])
@cross_origin()
def choose_program():
    global fast_limit
    data=request.data
    fast_limit = data['value_input']



    # if len(current_day_count_list)==0:
    #     current_day_count_list.append(1)
    # elif len(current_day_count_list)>current_index:
    #     current_day_count_list[current_index]+=1  # because the user is starting fasting again.
    # name_program_list.append(name_program)
    # religion_list.append(religion)
    return ""

@app.route('/increment/',methods=['POST'])
@cross_origin()
def increment_day():

    global current_day, fast_limit

    current_day+=1


    if (current_day==3 and fast_limit==3) or (current_day==7 and fast_limit==7) or (current_day==10 and fast_limit==10):
        #unlock the mascot
        mascot_evolve(fast_limit)
        current_day=0

    else:
        mascot_point_increment_daily()

    return (team_level,team_points)

def mascot_evolve(cycle_days):
    '''give higher reward for higher fasting period'''

    global team, team_level, team_points
    if cycle_days==3:
      #increase points by 100 points for evolution
        increment = 100
    elif cycle_days==7:
        increment=200
    else:
        increment=300
    if team_level == 10:
        team_points+=increment
    else:
        team_level+=1
        team_points+=increment

def mascot_point_increment_daily():
    '''increase 30 points as every day passes'''
    global team_points
    team_points+=30

if __name__ == '__main__':
    app.run()
