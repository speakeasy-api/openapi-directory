package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignCallingPlanRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssignCallingPlanApplicationJson object;
    public AssignCallingPlanRequests withObject(AssignCallingPlanApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AssignCallingPlanMultipartFormData1 object1;
    public AssignCallingPlanRequests withObject1(AssignCallingPlanMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}