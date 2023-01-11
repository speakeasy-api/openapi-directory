package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllFinancialProductsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetAllFinancialProductsHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}