package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionPosTamendRequest {
    public ActionPosTamendQueryParams queryParams;
    public ActionPosTamendRequest withQueryParams(ActionPosTamendQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ActionPosTamendHeaders headers;
    public ActionPosTamendRequest withHeaders(ActionPosTamendHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyActionamendRequest request;
    public ActionPosTamendRequest withRequest(openapisdk.models.shared.ProxyActionamendRequest request) {
        this.request = request;
        return this;
    }
}