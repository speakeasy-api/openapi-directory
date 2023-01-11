package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarRegistrantsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarRegistrantsPathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}