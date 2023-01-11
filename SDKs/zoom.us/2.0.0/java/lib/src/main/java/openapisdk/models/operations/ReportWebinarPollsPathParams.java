package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportWebinarPollsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public String webinarId;
    public ReportWebinarPollsPathParams withWebinarId(String webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}