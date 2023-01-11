package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddBatchWebinarRegistrantsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public String webinarId;
    public AddBatchWebinarRegistrantsPathParams withWebinarId(String webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}