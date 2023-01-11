package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarPanelistsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarPanelistsDeletePathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}