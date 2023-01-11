package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendaChatMessageRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SendaChatMessageApplicationJson object;
    public SendaChatMessageRequests withObject(SendaChatMessageApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public SendaChatMessageMultipartFormData1 object1;
    public SendaChatMessageRequests withObject1(SendaChatMessageMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}