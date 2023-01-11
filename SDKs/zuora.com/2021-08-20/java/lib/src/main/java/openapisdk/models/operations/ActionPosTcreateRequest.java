package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionPosTcreateRequest {
    public ActionPosTcreateQueryParams queryParams;
    public ActionPosTcreateRequest withQueryParams(ActionPosTcreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ActionPosTcreateHeaders headers;
    public ActionPosTcreateRequest withHeaders(ActionPosTcreateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyActioncreateRequest request;
    public ActionPosTcreateRequest withRequest(openapisdk.models.shared.ProxyActioncreateRequest request) {
        this.request = request;
        return this;
    }
}