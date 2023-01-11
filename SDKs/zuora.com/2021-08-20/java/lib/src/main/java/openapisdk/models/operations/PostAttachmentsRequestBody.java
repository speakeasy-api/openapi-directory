package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachmentsRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PostAttachmentsRequestBodyFile file;
    public PostAttachmentsRequestBody withFile(PostAttachmentsRequestBodyFile file) {
        this.file = file;
        return this;
    }
}