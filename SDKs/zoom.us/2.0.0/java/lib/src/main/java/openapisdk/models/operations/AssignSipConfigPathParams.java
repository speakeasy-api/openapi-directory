package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignSipConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AssignSipConfigPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}