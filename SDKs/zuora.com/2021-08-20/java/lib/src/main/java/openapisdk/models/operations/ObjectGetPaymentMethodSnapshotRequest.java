package openapisdk.models.operations;



public class ObjectGetPaymentMethodSnapshotRequest {
    public ObjectGetPaymentMethodSnapshotPathParams pathParams;
    public ObjectGetPaymentMethodSnapshotRequest withPathParams(ObjectGetPaymentMethodSnapshotPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectGetPaymentMethodSnapshotQueryParams queryParams;
    public ObjectGetPaymentMethodSnapshotRequest withQueryParams(ObjectGetPaymentMethodSnapshotQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectGetPaymentMethodSnapshotHeaders headers;
    public ObjectGetPaymentMethodSnapshotRequest withHeaders(ObjectGetPaymentMethodSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
}