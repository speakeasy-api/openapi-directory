package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInternalCalloutCountriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public ListInternalCalloutCountriesPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}