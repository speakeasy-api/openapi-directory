package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditMessageMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=message")
    public String message;
    public EditMessageMultipartFormData withMessage(String message) {
        this.message = message;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=to_channel")
    public String toChannel;
    public EditMessageMultipartFormData withToChannel(String toChannel) {
        this.toChannel = toChannel;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=to_contact")
    public String toContact;
    public EditMessageMultipartFormData withToContact(String toContact) {
        this.toContact = toContact;
        return this;
    }
}