package domain;

public class Card {
    private String front;
    private String back;

    public Card(String front, String back) {
        this.front = front;
        this.back = back;
    }

    public void showFront() {
        System.out.println(front);
    }

    public void showBack() {
        System.out.println(back);
    }

}
