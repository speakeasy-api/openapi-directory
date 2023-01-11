package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadFileForDebitMemoRequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostUploadFileForDebitMemoRequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public PostUploadFileForDebitMemoRequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}