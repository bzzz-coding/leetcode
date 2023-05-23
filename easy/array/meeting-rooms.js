/*
Given an array of meeting time intervals consisting of start and end times[[s1,e1],[s2,e2],...](si< ei), determine if a person could attend all meetings.

https://aaronice.gitbook.io/lintcode/sweep-line/meeting-rooms
*/

const canAttendAllMeetings = (arr) => {
  let sortedByStartingTimeArr = arr.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < sortedByStartingTimeArr.length - 1; i++) {
    if (sortedByStartingTimeArr[i][1] > sortedByStartingTimeArr[i+1][0]) {
      return false;
    }
  }
  return true;
};

console.log(canAttendAllMeetings([[0,30],[5,10],[15,20]]));
console.log(canAttendAllMeetings([[7,10],[2,4]]));