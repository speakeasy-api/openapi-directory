package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarUpdatePathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}