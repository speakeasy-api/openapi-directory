package openapisdk.models.shared;


public enum UsageFlatFeePricingOverridePriceChangeOptionEnum {
    NO_CHANGE("NoChange"),
    SPECIFIC_PERCENTAGE_VALUE("SpecificPercentageValue"),
    USE_LATEST_PRODUCT_CATALOG_PRICING("UseLatestProductCatalogPricing");

    public final String value;

    private UsageFlatFeePricingOverridePriceChangeOptionEnum(String value) {
        this.value = value;
    }
}
