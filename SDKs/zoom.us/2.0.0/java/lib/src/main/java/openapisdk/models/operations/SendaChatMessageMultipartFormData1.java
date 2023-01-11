package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendaChatMessageMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=at_items,json")
    public SendaChatMessageMultipartFormDataAtItems[] atItems;
    public SendaChatMessageMultipartFormData1 withAtItems(SendaChatMessageMultipartFormDataAtItems[] atItems) {
        this.atItems = atItems;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=message")
    public String message;
    public SendaChatMessageMultipartFormData1 withMessage(String message) {
        this.message = message;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=to_channel")
    public String toChannel;
    public SendaChatMessageMultipartFormData1 withToChannel(String toChannel) {
        this.toChannel = toChannel;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=to_contact")
    public String toContact;
    public SendaChatMessageMultipartFormData1 withToContact(String toContact) {
        this.toContact = toContact;
        return this;
    }
}