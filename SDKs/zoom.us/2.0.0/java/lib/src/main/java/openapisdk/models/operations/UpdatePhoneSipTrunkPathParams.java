package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePhoneSipTrunkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public UpdatePhoneSipTrunkPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sipTrunkId")
    public String sipTrunkId;
    public UpdatePhoneSipTrunkPathParams withSipTrunkId(String sipTrunkId) {
        this.sipTrunkId = sipTrunkId;
        return this;
    }
}