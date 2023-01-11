package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBulkInventoryRequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UpdateBulkInventoryRequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public UpdateBulkInventoryRequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}