package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobScheduleTerminatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobScheduleId")
    public String jobScheduleId;
    public JobScheduleTerminatePathParams withJobScheduleId(String jobScheduleId) {
        this.jobScheduleId = jobScheduleId;
        return this;
    }
}