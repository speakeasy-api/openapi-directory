package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobSchedulePatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobScheduleId")
    public String jobScheduleId;
    public JobSchedulePatchPathParams withJobScheduleId(String jobScheduleId) {
        this.jobScheduleId = jobScheduleId;
        return this;
    }
}