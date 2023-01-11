package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionPosTdeleteRequest {
    public ActionPosTdeleteQueryParams queryParams;
    public ActionPosTdeleteRequest withQueryParams(ActionPosTdeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ActionPosTdeleteHeaders headers;
    public ActionPosTdeleteRequest withHeaders(ActionPosTdeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyActiondeleteRequest request;
    public ActionPosTdeleteRequest withRequest(openapisdk.models.shared.ProxyActiondeleteRequest request) {
        this.request = request;
        return this;
    }
}