package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReconcileRefundRequest {
    public PostReconcileRefundPathParams pathParams;
    public PostReconcileRefundRequest withPathParams(PostReconcileRefundPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostReconcileRefundHeaders headers;
    public PostReconcileRefundRequest withHeaders(PostReconcileRefundHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostReconcileRefundRequest request;
    public PostReconcileRefundRequest withRequest(openapisdk.models.shared.PostReconcileRefundRequest request) {
        this.request = request;
        return this;
    }
}