package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionPosTqueryRequest {
    public ActionPosTqueryQueryParams queryParams;
    public ActionPosTqueryRequest withQueryParams(ActionPosTqueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ActionPosTqueryHeaders headers;
    public ActionPosTqueryRequest withHeaders(ActionPosTqueryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyActionqueryRequest request;
    public ActionPosTqueryRequest withRequest(openapisdk.models.shared.ProxyActionqueryRequest request) {
        this.request = request;
        return this;
    }
}