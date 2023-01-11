package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PriceBulkUploadsRequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PriceBulkUploadsRequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public PriceBulkUploadsRequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}