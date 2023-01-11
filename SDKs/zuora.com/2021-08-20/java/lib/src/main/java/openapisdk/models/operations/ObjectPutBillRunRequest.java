package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutBillRunRequest {
    public ObjectPutBillRunPathParams pathParams;
    public ObjectPutBillRunRequest withPathParams(ObjectPutBillRunPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutBillRunQueryParams queryParams;
    public ObjectPutBillRunRequest withQueryParams(ObjectPutBillRunQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutBillRunHeaders headers;
    public ObjectPutBillRunRequest withHeaders(ObjectPutBillRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyModifyBillRun request;
    public ObjectPutBillRunRequest withRequest(openapisdk.models.shared.ProxyModifyBillRun request) {
        this.request = request;
        return this;
    }
}