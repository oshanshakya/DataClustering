from bs4 import BeautifulSoup
import xlsxwriter
import os
from pathlib import Path


def web_scraping():
    path = "html files"
    os.chdir(path)
    row = 0
    column = 0
    # writing data in  xlsx (excel) file
    workbook = xlsxwriter.Workbook('data/data_list.xlsx')
    worksheet = workbook.add_worksheet()
    # in one worksheet
    for file in os.listdir():
        if file.endswith('.html'):

            with open(file, encoding="utf8") as html_file:
                content = html_file.read()
                soup = BeautifulSoup(content, 'lxml')
                friend_tags = soup.find_all('span',
                                            class_='d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 d3f4x2em mdeji52x a5q79mjw g1cxx5fr lrazzd5p oo9gr5id')

                #writingfile
                worksheet.write(row, column, Path(file).stem)
                friend_list(worksheet, row, friend_tags)
                #column+=1
                #row = friend_list(worksheet, row, friend_tags)

                

    workbook.close()


def friend_list(worksheet, row, friend_tags):
    a = 0
    for friends in friend_tags:
        if a < 2:
            a = a + 1
        else:
            friends_list = friends.text
            full_name = ""
            for friends in friends_list:
                # worksheet.write(row, column, friends)
                full_name = full_name + friends
                
            #print(full_name)
            worksheet.write(row, 1, full_name)
            row += 1

    return row


web_scraping()





