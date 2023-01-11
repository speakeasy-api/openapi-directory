package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetConfiguredInvestmentProducts200ApplicationJson {
    @JsonProperty("investment_products")
    public Object[] investmentProducts;
    public GetConfiguredInvestmentProducts200ApplicationJson withInvestmentProducts(Object[] investmentProducts) {
        this.investmentProducts = investmentProducts;
        return this;
    }
    @JsonProperty("next_page_available")
    public Boolean nextPageAvailable;
    public GetConfiguredInvestmentProducts200ApplicationJson withNextPageAvailable(Boolean nextPageAvailable) {
        this.nextPageAvailable = nextPageAvailable;
        return this;
    }
}