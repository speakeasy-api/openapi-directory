package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllBankAccountsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-api-key")
    public String xApiKey;
    public GetAllBankAccountsHeaders withXApiKey(String xApiKey) {
        this.xApiKey = xApiKey;
        return this;
    }
}