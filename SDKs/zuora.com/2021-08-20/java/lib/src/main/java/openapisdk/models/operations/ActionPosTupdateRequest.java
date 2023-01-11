package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionPosTupdateRequest {
    public ActionPosTupdateQueryParams queryParams;
    public ActionPosTupdateRequest withQueryParams(ActionPosTupdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ActionPosTupdateHeaders headers;
    public ActionPosTupdateRequest withHeaders(ActionPosTupdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyActionupdateRequest request;
    public ActionPosTupdateRequest withRequest(openapisdk.models.shared.ProxyActionupdateRequest request) {
        this.request = request;
        return this;
    }
}