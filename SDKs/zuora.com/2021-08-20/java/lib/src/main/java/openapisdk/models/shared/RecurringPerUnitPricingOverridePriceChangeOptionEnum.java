package openapisdk.models.shared;


public enum RecurringPerUnitPricingOverridePriceChangeOptionEnum {
    NO_CHANGE("NoChange"),
    SPECIFIC_PERCENTAGE_VALUE("SpecificPercentageValue"),
    USE_LATEST_PRODUCT_CATALOG_PRICING("UseLatestProductCatalogPricing");

    public final String value;

    private RecurringPerUnitPricingOverridePriceChangeOptionEnum(String value) {
        this.value = value;
    }
}
