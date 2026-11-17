package com.learning.corejava;

public class Student {

    String name;
    int age;
    String course;
    long rollNo;

    ///Constructor
    Student(String name, int age, String course, long rollNo) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.rollNo = rollNo;
    }

    ///Display Method
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Course: " + course);
        System.out.println("Roll No: " + rollNo);
    }

    public static void main(String[] args) {
        Student s1 = new Student("Abhishek", 20, "B.Tech", 2400320100050l);
        s1.display();
    }
}
