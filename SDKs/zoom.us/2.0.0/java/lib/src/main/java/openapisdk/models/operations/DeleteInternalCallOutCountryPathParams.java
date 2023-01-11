package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInternalCallOutCountryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public DeleteInternalCallOutCountryPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=countryId")
    public String countryId;
    public DeleteInternalCallOutCountryPathParams withCountryId(String countryId) {
        this.countryId = countryId;
        return this;
    }
}