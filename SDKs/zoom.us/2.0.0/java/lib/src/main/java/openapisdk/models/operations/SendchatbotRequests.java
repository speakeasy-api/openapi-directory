package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendchatbotRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SendchatbotApplicationJson object;
    public SendchatbotRequests withObject(SendchatbotApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public SendchatbotMultipartFormData object1;
    public SendchatbotRequests withObject1(SendchatbotMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}