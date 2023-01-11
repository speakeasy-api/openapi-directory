package openapisdk.models.operations;



public class GetInvoiceFilesRequest {
    public GetInvoiceFilesPathParams pathParams;
    public GetInvoiceFilesRequest withPathParams(GetInvoiceFilesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetInvoiceFilesQueryParams queryParams;
    public GetInvoiceFilesRequest withQueryParams(GetInvoiceFilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetInvoiceFilesHeaders headers;
    public GetInvoiceFilesRequest withHeaders(GetInvoiceFilesHeaders headers) {
        this.headers = headers;
        return this;
    }
}