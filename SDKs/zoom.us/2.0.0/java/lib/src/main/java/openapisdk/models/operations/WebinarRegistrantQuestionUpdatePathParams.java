package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarRegistrantQuestionUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarRegistrantQuestionUpdatePathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}