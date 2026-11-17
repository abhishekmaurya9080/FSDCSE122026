//package com.learning.corejava;
//
//public class Main {
//    String name;
//    public Main() {
//       name = "Abhishek";
//    }
//
//    public static void main(String[] args) {
//        System.out.println("Hello World");
//        Main obj = new Main();
//        System.out.println(obj.name);
//    }
//}
///  new method

package com.learning.corejava;

public class Main {
    String name;
    public Main(String name) {
        this.name = name;
    }

    public static void main(String[] args) {
        System.out.println("Hello World");
        Main obj = new Main("Abhishek");
        Main obj1= new Main("Abhi");
        System.out.println(obj.name);
        System.out.println(obj1.name);
        System.out.println(obj1.hashCode());

        obj=obj1;
        System.out.println(obj.name);
        System.out.println(obj1.name);
        System.out.println(obj1.hashCode());


    }
}