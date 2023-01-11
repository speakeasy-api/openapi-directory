package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportWebinarDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public String webinarId;
    public ReportWebinarDetailsPathParams withWebinarId(String webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}