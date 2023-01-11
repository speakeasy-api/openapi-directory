package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReportWebinarParticipantsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public String webinarId;
    public ReportWebinarParticipantsPathParams withWebinarId(String webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}