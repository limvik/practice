package com.limvik.annotation;

@Seahorse(value = "limvik")
public class Main {
    public static void main(String[] args) {
        Seahorse seahorse = Main.class.getAnnotation(Seahorse.class);
        System.out.println(seahorse.value());
    }
}
