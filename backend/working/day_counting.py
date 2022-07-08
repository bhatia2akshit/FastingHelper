import sqlite3

from working.mascot_management import mascot_evolve, mascot_point_increment_daily
# from registeration.initial_registeration import app
from main_application import current_index, current_day_count_list, name_program_list



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


