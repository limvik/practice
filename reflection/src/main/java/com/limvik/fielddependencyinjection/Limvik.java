package com.limvik.fielddependencyinjection;

public class Limvik {

    @Inject
    private Seahorse seahorse;

    public void callSeahorse() {
        seahorse.swim();
    }
}
