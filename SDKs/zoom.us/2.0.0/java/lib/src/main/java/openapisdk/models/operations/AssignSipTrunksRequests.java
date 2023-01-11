package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignSipTrunksRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssignSipTrunksApplicationJson object;
    public AssignSipTrunksRequests withObject(AssignSipTrunksApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AssignSipTrunksMultipartFormData1 object1;
    public AssignSipTrunksRequests withObject1(AssignSipTrunksMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}