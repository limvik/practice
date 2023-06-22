package com.limvik.xml;

import java.io.File;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class LoadObjectFromXml {
    public static void main(String[] args) {
        try {
            File xmlFile = new File("reflection/src/main/java/com/limvik/xml/limviks.xml");
    
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(xmlFile);
    
            doc.getDocumentElement().normalize();
    
            NodeList nList = doc.getElementsByTagName("limvik");
    
            for (int temp = 0; temp < nList.getLength(); temp++) {
                Node nNode = nList.item(temp);
    
                if (nNode.getNodeType() == Node.ELEMENT_NODE) {
                    Element eElement = (Element) nNode;
                    String className = eElement.getTextContent();
    
                    Class<?> clazz = Class.forName(className);
                    Object obj = clazz.getDeclaredConstructor().newInstance();
    
                    System.out.println("Class Name : " + clazz.getSimpleName());
                    System.out.println("Object : " + obj.toString());
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
