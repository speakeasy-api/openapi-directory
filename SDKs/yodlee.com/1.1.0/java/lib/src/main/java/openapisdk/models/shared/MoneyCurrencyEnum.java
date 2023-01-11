package openapisdk.models.shared;


public enum MoneyCurrencyEnum {
    AUD("AUD"),
    BRL("BRL"),
    CAD("CAD"),
    EUR("EUR"),
    GBP("GBP"),
    HKD("HKD"),
    IDR("IDR"),
    INR("INR"),
    JPY("JPY"),
    NZD("NZD"),
    SGD("SGD"),
    USD("USD"),
    ZAR("ZAR"),
    CNY("CNY"),
    VND("VND"),
    MYR("MYR"),
    CHF("CHF");

    public final String value;

    private MoneyCurrencyEnum(String value) {
        this.value = value;
    }
}
