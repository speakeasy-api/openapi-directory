package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarPanelistCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarPanelistCreatePathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}