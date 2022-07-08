import sqlite3

# 3 types of plans are there
# 3 - 3 days fasting; 7 - 7 days fasting and 10 - 10 days fasting

def choose_program(email, name_program):
    conn = sqlite3.connect('application.db')
    cursor = conn.cursor()
    cursor.execute("UPDATE USERS SET PROGRAM_NAME=%s, STATUS='T' WHERE EMAIL=%s" % (name_program,email))
    conn.close()
