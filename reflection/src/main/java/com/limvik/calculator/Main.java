package com.limvik.calculator;

import java.lang.reflect.Method;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);

        System.out.print("클래스 이름을 입력하세요: ");
        String className = scanner.nextLine();

        System.out.print("메소드 이름을 입력하세요: ");
        String methodName = scanner.nextLine();

        // 클래스 이름으로 클래스 객체를 동적으로 가져옴
        // Class<?> cls = Class.forName("com.limvik.calculator." + className);
        // GPT가 추천해준 방식
        // loadClass() 메소드를 사용하면 명시적으로 클래스 로더를 지정할 수 있어 더 명확하게 클래스를 로드할 수 있습니다.
        Class<?> cls = ClassLoader.getSystemClassLoader().loadClass("com.limvik.calculator." + className);

        // 메소드 이름으로 메소드 객체를 동적으로 가져옴
        Method method = cls.getMethod(methodName, int.class, int.class);

        // 인스턴스 생성 (기본 생성자를 사용)
        Object instance = cls.getDeclaredConstructor().newInstance();

        // 메소드 호출
        System.out.println(method.invoke(instance, 5, 14));
    }
}
