package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostImportRequest {
    public ObjectPostImportQueryParams queryParams;
    public ObjectPostImportRequest withQueryParams(ObjectPostImportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostImportHeaders headers;
    public ObjectPostImportRequest withHeaders(ObjectPostImportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ObjectPostImportRequestBody request;
    public ObjectPostImportRequest withRequest(ObjectPostImportRequestBody request) {
        this.request = request;
        return this;
    }
}