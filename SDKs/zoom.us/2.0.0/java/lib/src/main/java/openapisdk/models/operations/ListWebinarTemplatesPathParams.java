package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWebinarTemplatesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public ListWebinarTemplatesPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}