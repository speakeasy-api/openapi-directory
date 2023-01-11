package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetConfiguredInvestmentProductPrices200ApplicationJson {
    @JsonProperty("investment_product_unit_prices")
    public Object[] investmentProductUnitPrices;
    public GetConfiguredInvestmentProductPrices200ApplicationJson withInvestmentProductUnitPrices(Object[] investmentProductUnitPrices) {
        this.investmentProductUnitPrices = investmentProductUnitPrices;
        return this;
    }
    @JsonProperty("next_page_available")
    public Boolean nextPageAvailable;
    public GetConfiguredInvestmentProductPrices200ApplicationJson withNextPageAvailable(Boolean nextPageAvailable) {
        this.nextPageAvailable = nextPageAvailable;
        return this;
    }
}