from asyncore import write
import profile
from bs4 import BeautifulSoup
from matplotlib.pyplot import text
import xlsxwriter
import os
import operator


def profile_scrapping():
    path = "profile_data"
    os.chdir(path)
    row = 0
    column = 0
    input = "null"
    # writing data in  xlsx (excel) file
    workbook = xlsxwriter.Workbook('data/profile_list.xlsx')
    worksheet = workbook.add_worksheet()
    #in one worksheet
    singled_Data=""
    for file in os.listdir():
        if file.endswith('.html'):
            print(file)
            with open(file, encoding="utf8") as html_file:

                content = html_file.read()
                soup = BeautifulSoup(content, 'html.parser')
                profileName= soup.find(class_='d2edcug0 hpfvmrgz qv66sw1b c1et5uql oi732d6d ik7dh3pa ' 
                    'ht8s03o8 a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 '
                    'nxhoafnm aigsh9s9 embtmqzv h6olsfn3 mhxlubs3 p5u9llcw '
                    'hnhda86s oo9gr5id hzawbc8m').find('h1', class_="gmql0nx0 l94mrbxd p1ri9a11 lzcic4wl")
                
                profile_des = soup.find_all(class_="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 hpfvmrgz rj1gh0hx buofh1pr g5gj957u o8rfisnq p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt")
                
                for details in profile_des:   
                    write_File(worksheet, row, column, details.text)
                    
        row+=1
    workbook.close()


def write_File(worksheet, row, column, text):
    #worksheet.write(row, column, text)
    a = 0
    if (text == "No workplaces to show" and a==0):
        print("null")
        a+=1
    elif a==0:
        print(text)
        print(" ")

    if (text == "No schools to show" and a==2):
        print("null")
        a+=1
    elif a==2:
        print(text)         

    


profile_scrapping()








