package openapisdk.models.operations;



public class GetTaxationItemsOfInvoiceItemResponse {
    public String contentType;
    public GetTaxationItemsOfInvoiceItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInvoiceTaxationItemsResponse getInvoiceTaxationItemsResponse;
    public GetTaxationItemsOfInvoiceItemResponse withGetInvoiceTaxationItemsResponse(openapisdk.models.shared.GetInvoiceTaxationItemsResponse getInvoiceTaxationItemsResponse) {
        this.getInvoiceTaxationItemsResponse = getInvoiceTaxationItemsResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTaxationItemsOfInvoiceItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTaxationItemsOfInvoiceItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}