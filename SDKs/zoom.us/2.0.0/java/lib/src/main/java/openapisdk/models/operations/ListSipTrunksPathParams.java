package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSipTrunksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public ListSipTrunksPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}