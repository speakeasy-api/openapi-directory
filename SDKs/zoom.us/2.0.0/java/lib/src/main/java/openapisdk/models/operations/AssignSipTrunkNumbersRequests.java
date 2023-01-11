package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignSipTrunkNumbersRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssignSipTrunkNumbersApplicationJson object;
    public AssignSipTrunkNumbersRequests withObject(AssignSipTrunkNumbersApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AssignSipTrunkNumbersMultipartFormData object1;
    public AssignSipTrunkNumbersRequests withObject1(AssignSipTrunkNumbersMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}