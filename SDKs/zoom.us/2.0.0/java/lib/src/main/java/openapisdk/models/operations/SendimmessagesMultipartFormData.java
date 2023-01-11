package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendimmessagesMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=message")
    public String message;
    public SendimmessagesMultipartFormData withMessage(String message) {
        this.message = message;
        return this;
    }
}