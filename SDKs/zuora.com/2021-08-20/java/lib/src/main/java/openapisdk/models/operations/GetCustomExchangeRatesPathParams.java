package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomExchangeRatesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=currency")
    public String currency;
    public GetCustomExchangeRatesPathParams withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}