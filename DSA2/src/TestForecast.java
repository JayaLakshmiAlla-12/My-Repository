public class TestForecast {
    public static void main(String[] args) {
        double currentValue = 1000;
        double growthRate = 0.05;
        int years = 5;
        double result = Forecast.futureValue(currentValue, growthRate, years);
        System.out.println("Future Value after " + years + " years: " + result);
    }
}
