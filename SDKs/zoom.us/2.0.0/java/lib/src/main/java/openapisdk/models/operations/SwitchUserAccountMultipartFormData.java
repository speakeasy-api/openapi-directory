package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SwitchUserAccountMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=account_id")
    public String accountId;
    public SwitchUserAccountMultipartFormData withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}