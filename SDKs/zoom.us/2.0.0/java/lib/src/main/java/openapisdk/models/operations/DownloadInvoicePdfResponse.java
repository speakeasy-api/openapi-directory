package openapisdk.models.operations;



public class DownloadInvoicePdfResponse {
    public byte[] body;
    public DownloadInvoicePdfResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DownloadInvoicePdfResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DownloadInvoicePdfResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object downloadInvoicePDF200ApplicationJSONAny;
    public DownloadInvoicePdfResponse withDownloadInvoicePdf200ApplicationJsonAny(Object downloadInvoicePDF200ApplicationJSONAny) {
        this.downloadInvoicePDF200ApplicationJSONAny = downloadInvoicePDF200ApplicationJSONAny;
        return this;
    }
}