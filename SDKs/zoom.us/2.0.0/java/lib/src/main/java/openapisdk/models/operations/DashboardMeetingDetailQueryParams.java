package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardMeetingDetailQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public DashboardMeetingDetailTypeEnum type;
    public DashboardMeetingDetailQueryParams withType(DashboardMeetingDetailTypeEnum type) {
        this.type = type;
        return this;
    }
}