package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobScheduleExistsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobScheduleId")
    public String jobScheduleId;
    public JobScheduleExistsPathParams withJobScheduleId(String jobScheduleId) {
        this.jobScheduleId = jobScheduleId;
        return this;
    }
}