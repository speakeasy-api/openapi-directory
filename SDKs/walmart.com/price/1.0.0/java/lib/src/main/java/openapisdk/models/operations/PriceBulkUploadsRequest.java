package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PriceBulkUploadsRequest {
    public PriceBulkUploadsQueryParams queryParams;
    public PriceBulkUploadsRequest withQueryParams(PriceBulkUploadsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PriceBulkUploadsHeaders headers;
    public PriceBulkUploadsRequest withHeaders(PriceBulkUploadsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PriceBulkUploadsRequestBody request;
    public PriceBulkUploadsRequest withRequest(PriceBulkUploadsRequestBody request) {
        this.request = request;
        return this;
    }
}