package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionPosTexecuteRequest {
    public ActionPosTexecuteQueryParams queryParams;
    public ActionPosTexecuteRequest withQueryParams(ActionPosTexecuteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ActionPosTexecuteHeaders headers;
    public ActionPosTexecuteRequest withHeaders(ActionPosTexecuteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyActionexecuteRequest request;
    public ActionPosTexecuteRequest withRequest(openapisdk.models.shared.ProxyActionexecuteRequest request) {
        this.request = request;
        return this;
    }
}