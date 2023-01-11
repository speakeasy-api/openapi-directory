package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadFileForCreditMemoRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PostUploadFileForCreditMemoRequestBodyFile file;
    public PostUploadFileForCreditMemoRequestBody withFile(PostUploadFileForCreditMemoRequestBodyFile file) {
        this.file = file;
        return this;
    }
}