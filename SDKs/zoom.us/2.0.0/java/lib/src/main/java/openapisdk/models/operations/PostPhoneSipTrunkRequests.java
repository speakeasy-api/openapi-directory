package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPhoneSipTrunkRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostPhoneSipTrunkApplicationJson object;
    public PostPhoneSipTrunkRequests withObject(PostPhoneSipTrunkApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostPhoneSipTrunkMultipartFormData1 object1;
    public PostPhoneSipTrunkRequests withObject1(PostPhoneSipTrunkMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}