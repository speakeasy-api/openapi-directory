package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardWebinarParticipantQosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=participantId")
    public String participantId;
    public DashboardWebinarParticipantQosPathParams withParticipantId(String participantId) {
        this.participantId = participantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public String webinarId;
    public DashboardWebinarParticipantQosPathParams withWebinarId(String webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}