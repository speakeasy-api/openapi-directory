package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account-key")
    public String accountKey;
    public PutAccountPathParams withAccountKey(String accountKey) {
        this.accountKey = accountKey;
        return this;
    }
}