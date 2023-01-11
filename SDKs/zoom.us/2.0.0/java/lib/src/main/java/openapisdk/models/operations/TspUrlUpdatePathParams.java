package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TspUrlUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public TspUrlUpdatePathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}