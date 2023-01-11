package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarDeletePathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}