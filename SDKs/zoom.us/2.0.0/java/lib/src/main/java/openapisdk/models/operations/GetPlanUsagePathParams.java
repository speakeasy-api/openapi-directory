package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlanUsagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public GetPlanUsagePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}