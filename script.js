const questions = [
{
question:"1. ข้อใดเป็นคำประสม",
choices:["น้ำใจ","บ้านเรือน","รถไฟ","โต๊ะ"],
answer:2
},
{
question:"2. คำว่า 'เด็ก' มีกี่พยางค์",
choices:["1","2","3","4"],
answer:0
},
{
question:"3. ข้อใดมีสระประสม",
choices:["บ้าน","เสือ","โต๊ะ","ดิน"],
answer:1
},
{function checkQuiz(){

const name=document.getElementById("name").value.trim();
const classroom=document.getElementById("classroom").value.trim();
const studentId=document.getElementById("studentId").value.trim();

if(name==""||classroom==""||studentId==""){
alert("กรุณากรอกข้อมูลให้ครบ");
return;
}

let score=0;

let html=`
<h2>📋 ผลการทำแบบทดสอบ</h2>

<p><b>ชื่อ :</b> ${name}</p>
<p><b>ชั้น :</b> ${classroom}</p>
<p><b>เลขประจำตัว :</b> ${studentId}</p>

<hr><br>
`;

questions.forEach((q,index)=>{

const choose=document.querySelector(
'input[name="q'+index+'"]:checked'
);

if(!choose){

alert("กรุณาตอบข้อ "+(index+1));

throw "";

}

const user=Number(choose.value);

if(user===q.answer){

score++;

html+=`
<p class="correct">
✅ ข้อ ${index+1} ถูกต้อง
</p>
`;

}else{

html+=`
<p class="wrong">
❌ ข้อ ${index+1}
ตอบ ${["ก","ข","ค","ง"][user]}
|
เฉลย ${["ก","ข","ค","ง"][q.answer]}
</p>
`;

}

});

html+=`
<div class="score">

🎉 คะแนน ${score} / ${questions.length}

</div>

<button onclick="location.reload()">

🔄 ทำใหม่

</button>
`;

document.getElementById("result").style.display="block";
document.getElementById("result").innerHTML=html;

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

}
question:"4. ข้อใดเป็นอักษรสูง",
choices:["ข","ง","ด","บ"],
answer:0
},
{
question:"5. คำใดมีตัวสะกดแม่กน",
choices:["บ้าน","รัก","มาก","จบ"],
answer:0
},
{
question:"6. ข้อใดเป็นคำควบกล้ำแท้",
choices:["ปลา","สวย","กล้วย","เสือ"],
answer:0
},
{
question:"7. ข้อใดมีสระเสียงยาว",
choices:["มี","กิน","นิด","ลึก"],
answer:0
},
{
question:"8. พยัญชนะไทยมีกี่ตัว",
choices:["42","44","46","48"],
answer:1
},
{
question:"9. ข้อใดเป็นคำตาย",
choices:["มา","ดี","รัก","ถือ"],
answer:2
},
{
question:"10. ข้อใดเป็นคำเป็น",
choices:["กบ","รัก","ดิน","กา"],
answer:3
},
{
question:"11. คำใดมีสระเอีย",
choices:["เสีย","เสือ","เรือ","มือ"],
answer:0
},
{
question:"12. ข้อใดเป็นอักษรกลาง",
choices:["ก","ข","ผ","ห"],
answer:0
},
{
question:"13. ข้อใดเป็นคำซ้อน",
choices:["บ้าน","เล็กน้อย","สูงต่ำ","วิ่ง"],
answer:2
},
{
question:"14. ข้อใดใช้วรรณยุกต์ถูกต้อง",
choices:["โต๊ะ","ก๋อน","ป่าา","ห๊อม"],
answer:0
},
{
question:"15. ภาษาไทยมีวรรณยุกต์กี่รูป",
choices:["3","4","5","6"],
answer:1
}
];

const quiz=document.getElementById("quiz");

questions.forEach((q,index)=>{

let html=`
<div class="question">
<h3>${q.question}</h3>
`;

q.choices.forEach((c,i)=>{

html+=`
<label class="option">
<input type="radio"
name="q${index}"
value="${i}">
${String.fromCharCode(3585+i)}. ${c}
</label>
`;

});

html+=`</div>`;

quiz.innerHTML+=html;

});
