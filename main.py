from registeration import initial_registeration
from main_application import email_list, current_day_count_list
initial_registeration.register_user('akshit','bhatia@gmail.com','India','password')

initial_registeration.choose_program(3,'Hindu')
initial_registeration.choose_team('avatar')

from working.day_counting import increment_day
for i in range(3):
    increment_day()
increment_day()
increment_day()

print(current_day_count_list, email_list)