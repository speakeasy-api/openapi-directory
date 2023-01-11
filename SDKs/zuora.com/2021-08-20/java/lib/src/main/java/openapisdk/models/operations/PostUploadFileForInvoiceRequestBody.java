package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadFileForInvoiceRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PostUploadFileForInvoiceRequestBodyFile file;
    public PostUploadFileForInvoiceRequestBody withFile(PostUploadFileForInvoiceRequestBodyFile file) {
        this.file = file;
        return this;
    }
}