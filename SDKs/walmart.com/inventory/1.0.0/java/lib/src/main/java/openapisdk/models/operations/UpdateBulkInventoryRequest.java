package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBulkInventoryRequest {
    public UpdateBulkInventoryQueryParams queryParams;
    public UpdateBulkInventoryRequest withQueryParams(UpdateBulkInventoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateBulkInventoryHeaders headers;
    public UpdateBulkInventoryRequest withHeaders(UpdateBulkInventoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateBulkInventoryRequestBody request;
    public UpdateBulkInventoryRequest withRequest(UpdateBulkInventoryRequestBody request) {
        this.request = request;
        return this;
    }
}