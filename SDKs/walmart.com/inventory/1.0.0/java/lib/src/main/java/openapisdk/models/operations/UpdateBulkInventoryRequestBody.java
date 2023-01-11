package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBulkInventoryRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UpdateBulkInventoryRequestBodyFile file;
    public UpdateBulkInventoryRequestBody withFile(UpdateBulkInventoryRequestBodyFile file) {
        this.file = file;
        return this;
    }
}