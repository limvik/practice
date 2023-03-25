package util;

import domain.Card;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class WordLoader {

    private static final String RESOURCES = "src/main/resources/";
    private static final String FILE_NAME = "words.csv";
    private final List<Card> cards;
    public WordLoader() throws IOException {
        final Path path = Paths.get(RESOURCES + FILE_NAME);
        final List<String> lines = Files.readAllLines(path);
        this.cards = parseLinesFromCSV(lines);
    }
    private Card parseFromCSV(String line) {
        final String[] contents = line.split(",");

        final String front = contents[0];
        String back = "";
        for(int i = 1; i < contents.length; ++i) {
            back += contents[i] + '\n';
        }

        return new Card(front, back);
    }

    private List<Card> parseLinesFromCSV(List<String> lines) {
        final List<Card> cards = new ArrayList<>();
        for(final String line: lines) {
            cards.add(parseFromCSV(line));
        }
        return cards;
    }

    public List<Card> getCards() {
        return cards;
    }
}
