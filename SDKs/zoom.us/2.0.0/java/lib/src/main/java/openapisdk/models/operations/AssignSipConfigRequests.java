package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignSipConfigRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssignSipConfigApplicationJson object;
    public AssignSipConfigRequests withObject(AssignSipConfigApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AssignSipConfigMultipartFormData object1;
    public AssignSipConfigRequests withObject1(AssignSipConfigMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}