package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarPanelistDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=panelistId")
    public Long panelistId;
    public WebinarPanelistDeletePathParams withPanelistId(Long panelistId) {
        this.panelistId = panelistId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarPanelistDeletePathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}