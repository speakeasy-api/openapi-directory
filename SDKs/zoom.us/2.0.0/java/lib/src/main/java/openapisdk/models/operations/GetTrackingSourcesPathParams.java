package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrackingSourcesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public GetTrackingSourcesPathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}