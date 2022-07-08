from main_application import current_email, email_list, current_index, password_list

def retrieve_information(email, password):
    current_index = email_list.index(email)
    if password_list[current_index]==password:
        # check if ongoing program
        return True




