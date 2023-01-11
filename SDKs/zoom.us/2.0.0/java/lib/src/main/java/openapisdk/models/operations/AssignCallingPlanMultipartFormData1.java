package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignCallingPlanMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=calling_plans,json")
    public AssignCallingPlanMultipartFormDataCallingPlans[] callingPlans;
    public AssignCallingPlanMultipartFormData1 withCallingPlans(AssignCallingPlanMultipartFormDataCallingPlans[] callingPlans) {
        this.callingPlans = callingPlans;
        return this;
    }
}