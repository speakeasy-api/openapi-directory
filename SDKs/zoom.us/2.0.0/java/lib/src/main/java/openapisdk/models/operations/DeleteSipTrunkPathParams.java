package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSipTrunkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public DeleteSipTrunkPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=trunkId")
    public String trunkId;
    public DeleteSipTrunkPathParams withTrunkId(String trunkId) {
        this.trunkId = trunkId;
        return this;
    }
}