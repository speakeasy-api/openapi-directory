package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostBillRunRequest {
    public ObjectPostBillRunQueryParams queryParams;
    public ObjectPostBillRunRequest withQueryParams(ObjectPostBillRunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostBillRunHeaders headers;
    public ObjectPostBillRunRequest withHeaders(ObjectPostBillRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyCreateBillRun request;
    public ObjectPostBillRunRequest withRequest(openapisdk.models.shared.ProxyCreateBillRun request) {
        this.request = request;
        return this;
    }
}