package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApiKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public DeleteApiKeyPathParams withKey(String key) {
        this.key = key;
        return this;
    }
}