package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddCalloutCountriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AddCalloutCountriesPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}