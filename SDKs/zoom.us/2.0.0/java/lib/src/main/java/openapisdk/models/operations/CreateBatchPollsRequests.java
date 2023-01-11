package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBatchPollsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateBatchPollsApplicationJson object;
    public CreateBatchPollsRequests withObject(CreateBatchPollsApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public CreateBatchPollsMultipartFormData1 object1;
    public CreateBatchPollsRequests withObject1(CreateBatchPollsMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}