package com.limvik.constructordependencyinjection;

public class Limvik {
    private Seahorse seahorse;
    private Plankton plankton;

    @Inject
    public Limvik(Seahorse seahorse, Plankton plankton) {
        this.seahorse = seahorse;
        this.plankton = plankton;
    }

    public void play() {
        seahorse.chasePlankton();
        plankton.escapeSeahorse();
    }
}
