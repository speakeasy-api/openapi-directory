package openapisdk.models.shared;


public enum DiscountPricingOverridePriceChangeOptionEnum {
    NO_CHANGE("NoChange"),
    USE_LATEST_PRODUCT_CATALOG_PRICING("UseLatestProductCatalogPricing");

    public final String value;

    private DiscountPricingOverridePriceChangeOptionEnum(String value) {
        this.value = value;
    }
}
