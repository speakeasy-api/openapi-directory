package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadFileForCreditMemoRequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostUploadFileForCreditMemoRequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public PostUploadFileForCreditMemoRequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}