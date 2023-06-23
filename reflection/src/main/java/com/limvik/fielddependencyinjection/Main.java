package com.limvik.fielddependencyinjection;

public class Main {
    public static void main(String[] args) throws Exception {
        DIContainer diContainer = new DIContainer();
        diContainer.getInstance(Limvik.class).callSeahorse();;
    } 
}
