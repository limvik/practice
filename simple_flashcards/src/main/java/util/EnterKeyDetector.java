package util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class EnterKeyDetector {

    public static boolean detectEnter() {

        boolean isEnter;
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try {
            isEnter = reader.read() == '\n';
        } catch (IOException e) {
            return false;
        }

        return isEnter;
    }

}
