from main_application import mascot_dict_list, team_mascot_list, current_index, level_mascot_list, point_mascot_list

def mascot_evolve():
    mascot = team_mascot_list[current_index]
    level_mascot_current = level_mascot_list[current_index]  # retrieve the current mascot
    if level_mascot_current == 10:
        # because maximum level, add 300 extra points
        point_mascot_list[current_index]+=300
    else:
        level_mascot_list[current_index]+=1

def mascot_point_increment_daily():
    point_mascot_list[current_index]+=30


