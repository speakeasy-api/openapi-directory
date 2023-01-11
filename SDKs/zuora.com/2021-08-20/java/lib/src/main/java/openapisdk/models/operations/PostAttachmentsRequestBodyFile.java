package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachmentsRequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostAttachmentsRequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public PostAttachmentsRequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}