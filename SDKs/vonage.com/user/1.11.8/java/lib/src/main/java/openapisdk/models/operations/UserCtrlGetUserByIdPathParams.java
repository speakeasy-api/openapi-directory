package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserCtrlGetUserByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public String accountId;
    public UserCtrlGetUserByIdPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public UserCtrlGetUserByIdPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}