package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarRegistrantsQuestionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarRegistrantsQuestionsGetPathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}