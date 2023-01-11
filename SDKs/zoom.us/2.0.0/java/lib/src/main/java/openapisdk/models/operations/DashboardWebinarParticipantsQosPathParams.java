package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardWebinarParticipantsQosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public String webinarId;
    public DashboardWebinarParticipantsQosPathParams withWebinarId(String webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}