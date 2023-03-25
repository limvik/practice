package domain;

public class User {
    private static final String STUDY_CARDS = "총 학습 카드 갯수는 %d개 입니다.\n";
    private static final String STUDY_TIME = "총 학습 시간은 %d시간 %d분 %d초 입니다.\n";
    private static final String EXIT = "수고하셨습니다. 프로그램을 종료합니다.";

    private long startTime;
    private long endTime;
    private int numCards;

    public void startStudy(long startTime) {
        this.startTime = startTime;
        this.numCards = 0;
    }

    public void exitStudy(long endTime) {
        this.endTime = endTime;
        printExitMessage();
    }

    private void printExitMessage() {
        long studyTime = (this.endTime - this.startTime) / 1000;
        System.out.printf(STUDY_CARDS, this.numCards);
        System.out.printf(STUDY_TIME, studyTime/3600, studyTime/3600%60, studyTime%60);
        System.out.println(EXIT);
    }

    public void nextCard() {
        ++this.numCards;
    }

}
