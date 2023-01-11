package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardWebinarParticipantQosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public DashboardWebinarParticipantQosTypeEnum type;
    public DashboardWebinarParticipantQosQueryParams withType(DashboardWebinarParticipantQosTypeEnum type) {
        this.type = type;
        return this;
    }
}