package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobScheduleUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobScheduleId")
    public String jobScheduleId;
    public JobScheduleUpdatePathParams withJobScheduleId(String jobScheduleId) {
        this.jobScheduleId = jobScheduleId;
        return this;
    }
}