package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarRegistrantStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarRegistrantStatusPathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}