package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportWebinarQaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public String webinarId;
    public ReportWebinarQaPathParams withWebinarId(String webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}