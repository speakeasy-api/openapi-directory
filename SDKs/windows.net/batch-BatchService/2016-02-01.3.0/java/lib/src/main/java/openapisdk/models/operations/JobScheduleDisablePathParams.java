package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobScheduleDisablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobScheduleId")
    public String jobScheduleId;
    public JobScheduleDisablePathParams withJobScheduleId(String jobScheduleId) {
        this.jobScheduleId = jobScheduleId;
        return this;
    }
}