package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PastWebinarsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public PastWebinarsPathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}