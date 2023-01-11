package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadFileForDebitMemoRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PostUploadFileForDebitMemoRequestBodyFile file;
    public PostUploadFileForDebitMemoRequestBody withFile(PostUploadFileForDebitMemoRequestBodyFile file) {
        this.file = file;
        return this;
    }
}