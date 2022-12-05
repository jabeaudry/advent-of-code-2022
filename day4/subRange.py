def subRange():
    with open('input.txt') as f:
        lines = f.readlines()
    total = 0
    for line in lines:
        sections = line.split(',')
        elf1 = sections[0].split('-')
        elf2 = sections[1].split('-')
        print(elf2[0])
        if ((int(elf1[0]) <= int(elf2[0]) and int(elf1[1]) >= int(elf2[1])) or (int(elf1[0]) >= int(elf2[0]) and int(elf1[1]) <= int(elf2[1]))):
            total += 1
    print(total)


 subRange()

def subRange2():
    with open('input.txt') as f:
        lines = f.readlines()
    total = 0
    notTotal = 0
    for line in lines:
        sections = line.split(',')
        elf1 = sections[0].split('-')
        elf2 = sections[1].split('-')
        if (int(elf1[0]) < int(elf2[0]) and int(elf1[1]) < int(elf2[0])):
            notTotal += 1
        elif (int(elf1[1]) > int(elf2[1]) and int(elf1[0]) > int(elf2[1])):
            notTotal += 1
        elif (int(elf2[1]) < int(elf1[0]) and int(elf2[0]) < int(elf1[0])):
            notTotal += 1
        elif (int(elf2[1]) > int(elf1[1]) and int(elf2[0]) > int(elf1[1])):
            notTotal += 1
        else:
            total+=1
        

    print(total)
    print(notTotal)


subRange2()
