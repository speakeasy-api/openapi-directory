package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarRegistrantCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarRegistrantCreatePathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}