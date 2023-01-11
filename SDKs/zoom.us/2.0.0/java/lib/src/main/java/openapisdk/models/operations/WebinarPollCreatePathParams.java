package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarPollCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarPollCreatePathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}