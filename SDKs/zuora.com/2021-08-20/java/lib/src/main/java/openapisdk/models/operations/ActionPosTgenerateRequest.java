package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionPosTgenerateRequest {
    public ActionPosTgenerateQueryParams queryParams;
    public ActionPosTgenerateRequest withQueryParams(ActionPosTgenerateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ActionPosTgenerateHeaders headers;
    public ActionPosTgenerateRequest withHeaders(ActionPosTgenerateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyActiongenerateRequest request;
    public ActionPosTgenerateRequest withRequest(openapisdk.models.shared.ProxyActiongenerateRequest request) {
        this.request = request;
        return this;
    }
}