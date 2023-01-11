package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionPosTsubscribeRequest {
    public ActionPosTsubscribeQueryParams queryParams;
    public ActionPosTsubscribeRequest withQueryParams(ActionPosTsubscribeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ActionPosTsubscribeHeaders headers;
    public ActionPosTsubscribeRequest withHeaders(ActionPosTsubscribeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyActionsubscribeRequest request;
    public ActionPosTsubscribeRequest withRequest(openapisdk.models.shared.ProxyActionsubscribeRequest request) {
        this.request = request;
        return this;
    }
}