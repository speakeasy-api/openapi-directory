package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardWebinarParticipantSharePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public String webinarId;
    public DashboardWebinarParticipantSharePathParams withWebinarId(String webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}