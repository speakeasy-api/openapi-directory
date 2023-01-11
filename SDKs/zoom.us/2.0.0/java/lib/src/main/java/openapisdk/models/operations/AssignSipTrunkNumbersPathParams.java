package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignSipTrunkNumbersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AssignSipTrunkNumbersPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}