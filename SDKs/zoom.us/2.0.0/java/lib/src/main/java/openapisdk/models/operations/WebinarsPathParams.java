package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public WebinarsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}