package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePhoneSipTrunkRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdatePhoneSipTrunkApplicationJson object;
    public UpdatePhoneSipTrunkRequests withObject(UpdatePhoneSipTrunkApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdatePhoneSipTrunkMultipartFormData object1;
    public UpdatePhoneSipTrunkRequests withObject1(UpdatePhoneSipTrunkMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}