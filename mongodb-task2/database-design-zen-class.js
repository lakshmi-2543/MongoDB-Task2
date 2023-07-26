// Design database : //Zen class programme
// users
// codekata
// attendance
// topics
// tasks
// company_drives
// mentors

use zen;
switched to db zen

// users

db.createCollection("users")
{ ok: 1 }
db.users.insertMany([{"studentID":1,"name":"Ashwin"},{"studentID":2,"name":"Anand"},{"studentID":3,"name":"Aishwarya"},{"studentID":4,"name":"Bindu"},{"studentID":5,"name":"Bindu"}]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64c0cc5353f968f766d9fa5f"),
    '1': ObjectId("64c0cc5353f968f766d9fa60"),
    '2': ObjectId("64c0cc5353f968f766d9fa61"),
    '3': ObjectId("64c0cc5353f968f766d9fa62"),
    '4': ObjectId("64c0cc5353f968f766d9fa63")
  }
}

// codekata


db.createCollection("codekata")
{ ok: 1 }
db.codekata.insertMany([{"studentID":1,"solved":233,"total":500},{"studentID":2,"solved":280,"total":500},{"studentID":3,"solved":183,"total":500},{"studentID":4,"solved":350,"total":500},{"studentID":5,"solved":335,"total":500}]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64c0cd1c53f968f766d9fa64"),
    '1': ObjectId("64c0cd1c53f968f766d9fa65"),
    '2': ObjectId("64c0cd1c53f968f766d9fa66"),
    '3': ObjectId("64c0cd1c53f968f766d9fa67"),
    '4': ObjectId("64c0cd1c53f968f766d9fa68")
  }
}

db.codekata.insertMany([{"studentID":6,"solved":335,"total":500},{"studentID":7,"solved":335,"total":500},{"studentID":8,"solved":335,"total":500},{"studentID":9,"solved":335,"total":500},{"studentID":10,"solved":335,"total":500},{"studentID":11,"solved":229,"total":500},{"studentID":12,"solved":229,"total":500},{"studentID":13,"solved":229,"total":500},{"studentID":14,"solved":229,"total":500},{"studentID":15,"solved":229,"total":500},{"studentID":16,"solved":229,"total":500},{"studentID":17,"solved":229,"total":500},{"studentID":18,"solved":229,"total":500},{"studentID":19,"solved":229,"total":500},{"studentID":20,"solved":401,"total":500},{"studentID":21,"solved":401,"total":500},{"studentID":22,"solved":401,"total":500},{"studentID":23,"solved":401,"total":500},{"studentID":24,"solved":401,"total":500},{"studentID":25,"solved":401,"total":500},]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64c0cd5753f968f766d9fa69"),
    '1': ObjectId("64c0cd5753f968f766d9fa6a"),
    '2': ObjectId("64c0cd5753f968f766d9fa6b"),
    '3': ObjectId("64c0cd5753f968f766d9fa6c"),
    '4': ObjectId("64c0cd5753f968f766d9fa6d"),
    '5': ObjectId("64c0cd5753f968f766d9fa6e"),
    '6': ObjectId("64c0cd5753f968f766d9fa6f"),
    '7': ObjectId("64c0cd5753f968f766d9fa70"),
    '8': ObjectId("64c0cd5753f968f766d9fa71"),
    '9': ObjectId("64c0cd5753f968f766d9fa72"),
    '10': ObjectId("64c0cd5753f968f766d9fa73"),
    '11': ObjectId("64c0cd5753f968f766d9fa74"),
    '12': ObjectId("64c0cd5753f968f766d9fa75"),
    '13': ObjectId("64c0cd5753f968f766d9fa76"),
    '14': ObjectId("64c0cd5753f968f766d9fa77"),
    '15': ObjectId("64c0cd5753f968f766d9fa78"),
    '16': ObjectId("64c0cd5753f968f766d9fa79"),
    '17': ObjectId("64c0cd5753f968f766d9fa7a"),
    '18': ObjectId("64c0cd5753f968f766d9fa7b"),
    '19': ObjectId("64c0cd5753f968f766d9fa7c")
  }
}

// attendance

db.createCollection("attendance")
{ ok: 1 }
 db.attendance.insertMany([{"attendanceDate":"20201005","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"topic":"JavascriptBasics","absentees":[21,23,25]},{"attendanceDate":"20201010","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,20],"topic":"JavascriptArraymethods","absentees":[20,14,15]},{"attendanceDate":"20201015","studentsPresent":[2,3,4,5,6,7,8,9,10,11,12,13,14,15],"topic":"JavascriptHTMLDOM","absentees":[1,17]},{"attendanceDate":"20201020","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,20,21,23],"topic":"JavascriptFetchAPI","absentees":[19,22]},{"attendanceDate":"20201023","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,22,25],"topic":"JavascriptAsync","absentees":[20,16]},{"attendanceDate":"20201025","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,19,20,21,22],"topic":"ReactBasics","absentees":[24,25]},{"attendanceDate":"20201029","studentsPresent":[1,2,3,4,5,6,7,8,10,11,12,13,14,15],"topic":"Reactstateandprops","absentees":[9,19]},{"attendanceDate":"20201030","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,14,15],"topic":"ReactRouterDOM","absentees":[13,17]},{"attendanceDate":"20201101","studentsPresent":[1,2,3,4,6,7,8,9,10,11,12,13,14,15,20,23,22,25,17],"topic":"ReactReduxStore","absentees":[5,21]},])
 {
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64c0cddf53f968f766d9fa7d"),
    '1': ObjectId("64c0cddf53f968f766d9fa7e"),
    '2': ObjectId("64c0cddf53f968f766d9fa7f"),
    '3': ObjectId("64c0cddf53f968f766d9fa80"),
    '4': ObjectId("64c0cddf53f968f766d9fa81"),
    '5': ObjectId("64c0cddf53f968f766d9fa82"),
    '6': ObjectId("64c0cddf53f968f766d9fa83"),
    '7': ObjectId("64c0cddf53f968f766d9fa84"),
    '8': ObjectId("64c0cddf53f968f766d9fa85")
  }
}

db.attendance.insertMany([{"attendanceDate":"20200910","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"topic":"HTML5Basics","absentees":[21,23,25]},{"attendanceDate":"20200920","studentsPresent":[1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,20],"topic":"CSSFlexBox","absentees":[20,14,15]}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64c0ce1e53f968f766d9fa86"),
    '1': ObjectId("64c0ce1e53f968f766d9fa87")
  }
}

// mentors

db.createCollection("mentor");
{ ok: 1 }

db.mentor.insertMany([{"mentorID":1,"mentor":"Sanjay","mentee":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},{"mentorID":2,"mentor":"Vishnu","mentee":[6,7,8,9,10,21,22,23,24,25]},{"mentorID":3,"mentor":"Farook","mentee":[1,2,3,4,5,18,19,20]},]); 
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64c0cec853f968f766d9fa8b"),
    '1': ObjectId("64c0cec853f968f766d9fa8c"),
    '2': ObjectId("64c0cec853f968f766d9fa8d")
  }
}

// companydrives

db.createCollection("companydrives");
{ ok: 1 }

db.companydrives.insertMany([{"drive":"Amazon","dateHeld":"20200909","attendedStudents":[1,2,3,4,5]},{"drive":"Meta","dateHeld":"20201019","attendedStudents":[6,7,8,9,10]},{"drive":"Google","dateHeld":"20201029","attendedStudents":[11,12,13,14,15]},{"drive":"Myntra","dateHeld":"20201110","attendedStudents":[16,17,18,19,20]},]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64c0cf5553f968f766d9fa8e"),
    '1': ObjectId("64c0cf5553f968f766d9fa8f"),
    '2': ObjectId("64c0cf5553f968f766d9fa90"),
    '3': ObjectId("64c0cf5553f968f766d9fa91")
  }
}


//topics

db.createCollection("topics");
{ ok: 1 }

db.topics.insertMany([{"topicDate":"20201005","topic":"JavascriptBasics"},{"topicDate":"20201010","topic":"JavascriptArraymethods"},{"topicDate":"20201015","topic":"JavascriptHTMLDOM",},{"topicDate":"20201020","topic":"JavascriptFetchAPI"},{"topicDate":"20201023","topic":"JavascriptAsync"},{"topicDate":"20201025","topic":"ReactBasics",},{"topicDate":"20201029","topic":"Reactstateandprops",},{"topicDate":"20201030","topic":"ReactRouterDOM",},{"topicDate":"20201101","topic":"ReactReduxStore",},]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64c0cfc853f968f766d9fa92"),
    '1': ObjectId("64c0cfc853f968f766d9fa93"),
    '2': ObjectId("64c0cfc853f968f766d9fa94"),
    '3': ObjectId("64c0cfc853f968f766d9fa95"),
    '4': ObjectId("64c0cfc853f968f766d9fa96"),
    '5': ObjectId("64c0cfc853f968f766d9fa97"),
    '6': ObjectId("64c0cfc853f968f766d9fa98"),
    '7': ObjectId("64c0cfc853f968f766d9fa99"),
    '8': ObjectId("64c0cfc853f968f766d9fa9a")
  }
}

db.topics.insertMany([{"topicDate":"20200910","topic":"HTML5Basics"},{"topicDate":"20200920","topic":"CSSFlexBox"},])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64c0cfeb53f968f766d9fa9b"),
    '1': ObjectId("64c0cfeb53f968f766d9fa9c")
  }
}



// 1.Find all the topics and tasks which are thought in the month of October 

db.tasks.aggregate([{$match:{taskDate:/202010/}},{$lookup:{from:"topics",localField:"taskDate",foreignField:"topicDate",as:"topics"}},{$project:{"taskDate":1, "task":1,"topics.topic":1,_id:0,}}]);

 db.tasks.aggregate([{$match:{taskDate:/202010/}},{$lookup:{from:"topics",localField:"taskDate",foreignField:"topicDate",as:"topics"}},]); 

 db.tasks.aggregate([{$match:{taskDate:/202010/}},{$lookup:{from:"topics",localField:"taskDate",foreignField:"topicDate",as:"topics"}}]).forEach((doc)=>{print("Date:",doc.taskDate,"Task:",doc.task,"Topic:",doc.topics[0].topic)});

// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.companydrives.find({dateHeld:{$gte:"20201015",$lte:"20201030"}},{_id:0}).toArray();
[
  {
    drive: 'Meta',
    dateHeld: '20201019',
    attendedStudents: [ 6, 7, 8, 9, 10 ]
  },
  {
    drive: 'Google',
    dateHeld: '20201029',
    attendedStudents: [ 11, 12, 13, 14, 15 ]
  }
]

// 3.Find all the company drives and students who are appeared for the placement.
Date:
20200909

Company:
Amazon

participants:
ID:
1
Name:
Ashwin
ID:
2
Name:
Anand
ID:
3
Name:
Aishwarya
ID:
4
Name:
Bindu
ID:
5
Name:
Bindu

Date:
20201019

Company:
Meta

participants:

Date:
20201029

Company:
Google

participants:

Date:
20201110

Company:
Myntra

participants:

// 4.Find the number of problems solved by the user in codekata
db.users.aggregate([{$lookup:{from:"codekata",localField:"studentID",foreignField:"studentID",as:"codekata"}},{$project:{"studentID":1,"name":1,"codekata.solved":1,_id:0,}}])

{
  studentID: 1,
  name: 'Ashwin',
  codekata: [
    {
      solved: 233
    }
  ]
}
{
  studentID: 2,
  name: 'Anand',
  codekata: [
    {
      solved: 280
    }
  ]
}
{
  studentID: 3,
  name: 'Aishwarya',
  codekata: [
    {
      solved: 183
    }
  ]
}
{
  studentID: 4,
  name: 'Bindu',
  codekata: [
    {
      solved: 350
    }
  ]
}
{
  studentID: 5,
  name: 'Bindu',
  codekata: [
    {
      solved: 335
    }
  ]
}

// 5.Find all the mentors with who has the mentee's count more than 15

db.mentor.aggregate([{$project:{mentor:1,_id:0,mentees:{$size:"$mentee"}}},{$match:{mentees:{$gt:15}}}]);

{
  mentor: 'Sanjay',
  mentees: 17
}
{
  mentor: 'Sanjay',
  mentees: 17
}


// 6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.tasks.aggregate([{$match:{taskDate:{$gte:"20201015",$lte:"20201030"}}},{$lookup:{from:"attendance",localField:"taskDate",foreignField:"attendanceDate",as:"attendance"}},{$project:{"taskDate":1,"task":1,"taskPending":1,_id:0,"attendance.topic":1,"attendance.absentees":1}}]).toArray().forEach((doc)=>{print("\nDate:",doc.taskDate,"\nTask:",doc.task,"\nTask not submitted by:"),doc.taskPending.forEach((val)=>{db.users.find({studentID:val},{_id:0}).toArray().forEach((x)=>print("ID:",x.studentID,"Name:",x.name))}),print("Topic:",doc.attendance[0].topic,"\nAbsent for class:"),doc.attendance[0].absentees.forEach((abs)=>{db.users.find({studentID:abs},{_id:0}).toArray().forEach((y)=>print("ID:",y.studentID,"Name:",y.name))})});






