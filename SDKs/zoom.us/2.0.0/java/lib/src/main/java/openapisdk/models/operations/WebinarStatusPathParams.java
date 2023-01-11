package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarStatusPathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}