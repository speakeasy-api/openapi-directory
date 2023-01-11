package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardMeetingParticipantQosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public DashboardMeetingParticipantQosTypeEnum type;
    public DashboardMeetingParticipantQosQueryParams withType(DashboardMeetingParticipantQosTypeEnum type) {
        this.type = type;
        return this;
    }
}