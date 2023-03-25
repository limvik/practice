import domain.User;
import util.EnterKeyDetector;
import util.WordLoader;

import java.io.IOException;
import java.util.NoSuchElementException;
import java.util.Scanner;

public class SimpleFlashcardsApplication {
    public static final String GREETING = "안녕하세요. 플래시카드 어플리케이션입니다.";
    public static final String MENU = """
                                      메뉴를 선택해주세요.
                                      1. 학습 시작
                                      2. 종료
                                      >""";
    public static final String SELECT_ERROR = "잘못된 선택입니다.";
    public static final String FILE_ERROR = "파일이 존재하지 않습니다.";
    public static final String EXIT = "프로그램을 종료합니다.";
    public static final String LOADING = "카드를 불러옵니다.";
    private static final String CHECK_BACK = "엔터 키 입력 시 뒷면을 확인합니다.";
    private static final String NEXT = "엔터 키 입력 시 다음 문제로 넘어갑니다.";
    private static final String LAST = "마지막 문제입니다. 엔터 키 입력 시 프로그램이 종료됩니다.";

    public static void printMenu() {
        System.out.print(MENU);
    }

    public static void printError() {
        System.out.println(SELECT_ERROR);
    }
    public static void clearScreen() {
        try {
            String os = System.getProperty("os.name");

            if (os.contains("Windows")) {
                // Windows 환경에서 콘솔 화면 지우기
                new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
            } else {
                // Unix/Linux/macOS 환경에서 콘솔 화면 지우기
                System.out.print("\033[H\033[2J");
                System.out.flush();
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void exit() {
        System.out.println(EXIT);
        System.exit(0);
    }

    public static void main(String[] args) {

        System.out.println(GREETING);

        // 메뉴 선택하기
        printMenu();
        int selectedMenu = 0;

        Scanner sc = null;
        while(selectedMenu != 1 && selectedMenu != 2) {
            try {
                sc = new Scanner(System.in);
                selectedMenu = sc.nextInt();
            } catch(NoSuchElementException e) {
                printError();
                printMenu();
            }
            if (selectedMenu != 1 && selectedMenu != 2) {
                printError();
                printMenu();
            }
        }
//        sc.close();
        clearScreen();

        // "2. 종료"를 선택한 경우
        if (selectedMenu == 2) exit();

        // "1. 학습 시작"을 선택한 경우
        final User user = new User();
        user.startStudy(System.currentTimeMillis());
        System.out.println(LOADING);

        try {
            final WordLoader wl = new WordLoader();
            boolean isFront = true;
            for (int i = 0; i < wl.getCards().size(); ++i) {

                System.out.println("=".repeat(30));

                if (isFront) {
                    wl.getCards().get(i).showFront();
                    isFront = false;
                    System.out.println(CHECK_BACK);
                    --i;
                } else {
                    wl.getCards().get(i).showBack();
                    isFront = true;
                    if (i != wl.getCards().size() - 1) System.out.println(NEXT);
                    else System.out.println(LAST);
                    user.nextCard();
                }

                System.out.println("=".repeat(30));
                EnterKeyDetector.detectEnter();
            }
            sc.close();
        } catch (IOException e) {
            System.out.println(FILE_ERROR);
            exit();
        }
        user.exitStudy(System.currentTimeMillis());

    }

}
