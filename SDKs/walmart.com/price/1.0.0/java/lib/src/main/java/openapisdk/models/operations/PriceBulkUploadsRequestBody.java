package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PriceBulkUploadsRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PriceBulkUploadsRequestBodyFile file;
    public PriceBulkUploadsRequestBody withFile(PriceBulkUploadsRequestBodyFile file) {
        this.file = file;
        return this;
    }
}