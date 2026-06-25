public class TestSearch {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Book", "Education"),
            new Product(104, "Phone", "Electronics")
        };
        Product result1 = SearchAlgorithms.linearSearch(products, 103);
        System.out.println("Linear Search Result: " + result1);
        Product result2 = SearchAlgorithms.binarySearch(products, 104);
        System.out.println("Binary Search Result: " + result2);
    }
}
