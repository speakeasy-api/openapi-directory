package openapisdk.models.shared;


public enum RecurringPerUnitPricingUpdatePriceChangeOptionEnum {
    NO_CHANGE("NoChange"),
    SPECIFIC_PERCENTAGE_VALUE("SpecificPercentageValue"),
    USE_LATEST_PRODUCT_CATALOG_PRICING("UseLatestProductCatalogPricing");

    public final String value;

    private RecurringPerUnitPricingUpdatePriceChangeOptionEnum(String value) {
        this.value = value;
    }
}
