package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostExportRequest {
    public ObjectPostExportQueryParams queryParams;
    public ObjectPostExportRequest withQueryParams(ObjectPostExportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostExportHeaders headers;
    public ObjectPostExportRequest withHeaders(ObjectPostExportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyCreateExport request;
    public ObjectPostExportRequest withRequest(openapisdk.models.shared.ProxyCreateExport request) {
        this.request = request;
        return this;
    }
}