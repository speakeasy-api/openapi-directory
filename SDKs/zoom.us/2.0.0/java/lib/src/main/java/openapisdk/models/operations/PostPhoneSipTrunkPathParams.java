package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPhoneSipTrunkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public PostPhoneSipTrunkPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}