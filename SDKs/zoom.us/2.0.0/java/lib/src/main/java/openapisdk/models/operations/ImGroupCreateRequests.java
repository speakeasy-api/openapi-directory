package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImGroupCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ImGroupCreateApplicationJson object;
    public ImGroupCreateRequests withObject(ImGroupCreateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ImGroupCreateMultipartFormData object1;
    public ImGroupCreateRequests withObject1(ImGroupCreateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}