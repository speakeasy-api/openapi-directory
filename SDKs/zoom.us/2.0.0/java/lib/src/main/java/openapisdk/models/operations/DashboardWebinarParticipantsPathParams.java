package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardWebinarParticipantsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public String webinarId;
    public DashboardWebinarParticipantsPathParams withWebinarId(String webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}