# def calculateGameScore():
# 	scores = {
# 		"x": 1,
# 		"y": 2,
# 		"z": 3
# 	}
#     with open('input.txt') as f:
#     	lines = f.readlines()
# 		for line in lines:
# 			oppPlay = line[0]
# 			myPlay = line[2]

scores = {
    "X": 1,
    "Y": 2,
        "Z": 3,
        "A": 1,
        "B": 2,
        "C": 3
}


def calculateGameScore():
    with open('input.txt') as f:
        lines = f.readlines()
        totalScore = 0
        for x in lines:
            oppPlay = x[0]
            myPlay = x[2]
			if scores[oppPlay] == scores[myPlay]:
				totalScore += (3+scores[myPlay])
			elif (myPlay == 'X' && oppPlay == 'C'):
				totalScore += (6+scores[myPlay])
			elif (myPlay == 'Y' && oppPlay=='A'):
				totalScore += (6+scores[myPlay])
			elif (myPlay == 'Z' && oppPlay=='A'):
				totalScore += (scores[myPlay])
			elif (myPlay == 'Z' && oppPlay=='B'):
				totalScore += (6+scores[myPlay])
			elif (myPlay == 'X' && oppPlay=='B'):
				totalScore += (scores[myPlay])
			elif (myPlay == 'Y' && oppPlay=='C'):
				totalScore += (scores[myPlay])
    	print(totalScore)
