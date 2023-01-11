package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarPathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}