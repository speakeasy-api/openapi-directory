package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditChatbotMessageRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EditChatbotMessageApplicationJson object;
    public EditChatbotMessageRequests withObject(EditChatbotMessageApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public EditChatbotMessageMultipartFormData object1;
    public EditChatbotMessageRequests withObject1(EditChatbotMessageMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}