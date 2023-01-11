package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignSipTrunksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AssignSipTrunksPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}