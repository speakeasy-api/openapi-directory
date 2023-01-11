package openapisdk.models.shared;


public enum DiscountPricingUpdatePriceChangeOptionEnum {
    NO_CHANGE("NoChange"),
    USE_LATEST_PRODUCT_CATALOG_PRICING("UseLatestProductCatalogPricing");

    public final String value;

    private DiscountPricingUpdatePriceChangeOptionEnum(String value) {
        this.value = value;
    }
}
