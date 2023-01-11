package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserCtrlGetUsersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public String accountId;
    public UserCtrlGetUsersPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}