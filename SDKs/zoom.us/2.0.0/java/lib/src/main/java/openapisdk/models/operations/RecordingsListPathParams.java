package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public RecordingsListPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}