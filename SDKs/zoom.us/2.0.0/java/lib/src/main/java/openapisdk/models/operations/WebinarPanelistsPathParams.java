package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarPanelistsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarPanelistsPathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}