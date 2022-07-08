import sqlite3

from main_application import address_list, name_list, email_list, password_list, name_program_list,religion_list,team_mascot_list, level_mascot_list, point_mascot_list

def register_user(name, email, address,password):

    email_list.append(email)
    password_list.append(password)
    name_list.append(name)
    address_list.append(address)

    # conn=sqlite3.connect('application.db')
    # cursor=conn.cursor()
    # cursor.execute("INSERT INTO USERS (EMAIL, NAME, ADDRESS, PASSWORD) values (%s,%s,%s,%s)" % (email, name, address,password))
    # cursor.execute("INSERT INTO STATUS (EMAIL, FASTING_CYCLES,PROGRAM, DAY,CURRENT_STATUS) values (%s,0,0,0,'F')" % (str(email)))
    # conn.close()

def choose_program(name_program, religion):
    # conn = sqlite3.connect('application.db')
    # cursor = conn.cursor()
    # cursor.execute("UPDATE USERS SET PROGRAM_NAME=%s, STATUS='T' WHERE EMAIL=%s" % (name_program,email))
    # conn.close()
    name_program_list.append(name_program)
    religion_list.append(religion)
    # add prompt for box delivery


def choose_team(team_type):
    # conn = sqlite3.connect('application.db')
    # cursor = conn.cursor()
    # cursor.execute("INSERT INTO TEAM (EMAIL, TEAM_TYPE, LEVEL) VALUES (%s, %s, 0)")
    # conn.close()
    team_mascot_list.append(team_type)
    level_mascot_list.append(1)  # add a new user to both of these lists
    point_mascot_list.append(10)  # 10 points for registeration to each mascot


