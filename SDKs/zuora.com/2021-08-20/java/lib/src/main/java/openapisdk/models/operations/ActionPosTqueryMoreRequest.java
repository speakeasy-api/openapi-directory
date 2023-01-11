package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionPosTqueryMoreRequest {
    public ActionPosTqueryMoreQueryParams queryParams;
    public ActionPosTqueryMoreRequest withQueryParams(ActionPosTqueryMoreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ActionPosTqueryMoreHeaders headers;
    public ActionPosTqueryMoreRequest withHeaders(ActionPosTqueryMoreHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyActionqueryMoreRequest request;
    public ActionPosTqueryMoreRequest withRequest(openapisdk.models.shared.ProxyActionqueryMoreRequest request) {
        this.request = request;
        return this;
    }
}