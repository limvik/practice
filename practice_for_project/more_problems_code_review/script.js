const problems = [
    "javascript에는 class가 존재하지 않는다.",
    "javascript 배열의 length 프로퍼티는 배열의 최대 인덱스보다 항상 크다.",
];
const solutions = [false, true];
const totalProblems = problems.length;
let problemCnt = 0;
const correct = "정답입니다.";
const incorrect = "오답입니다.";

function init() {
    document.getElementById("quiz").textContent = problems[0];
}

function check(answer) {
    if (answer === solutions[problemCnt]) {
        alert(correct);
    } else {
        alert(incorrect);
    }
    nextProblem();
}

function nextProblem() {
    problemCnt++;
    if (problemCnt === totalProblems) {
        alert("모든 문제 풀이를 완료하였습니다. 첫 문제로 돌아갑니다.");
        problemCnt = 0;
    }
    document.getElementById("quiz").textContent = problems[problemCnt];
}

document.getElementById("trueButton").addEventListener("click", () => check(true));
document.getElementById("falseButton").addEventListener("click", () => check(false));

document.addEventListener("DOMContentLoaded", init);
