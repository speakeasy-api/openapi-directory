package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SwitchUserAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public SwitchUserAccountPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public SwitchUserAccountPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}