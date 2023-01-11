package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadVbPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public UploadVbPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}