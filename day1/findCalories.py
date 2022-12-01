#challenge1

def findMostCalories():
    with open('input.txt') as f:
        lines = f.readlines()
        max = 0
        currentMax = 0
        for x in lines:
            if x == '\n':
                if currentMax > max:
                    max = currentMax
                currentMax = 0
            else:
                currentMax += int(x)
    print(max)

findMostCalories()

#challenge2

def findMThreeTopCalories():
    with open('input.txt') as f:
        lines = f.readlines()
        max1, max2, max3 = 0, 0, 0
        currentMax = 0
        for x in lines:
            if x == '\n':
                if currentMax > max1:
                    max3 = max2
                    max2 = max1
                    max1 = currentMax
                elif currentMax > max2:
                    max3 = max2
                    max2 = currentMax
                elif currentMax > max3:
                    max3 = currentMax
                currentMax = 0
            else:
                currentMax += int(x)
    print(max1+max2+max3)

findMThreeTopCalories()
