package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAChatbotMessageRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteAChatbotMessageApplicationJson object;
    public DeleteAChatbotMessageRequests withObject(DeleteAChatbotMessageApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public DeleteAChatbotMessageMultipartFormData object1;
    public DeleteAChatbotMessageRequests withObject1(DeleteAChatbotMessageMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}