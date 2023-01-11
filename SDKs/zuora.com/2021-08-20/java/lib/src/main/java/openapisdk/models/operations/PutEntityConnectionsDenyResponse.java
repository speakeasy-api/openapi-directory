package openapisdk.models.operations;



public class PutEntityConnectionsDenyResponse {
    public String contentType;
    public PutEntityConnectionsDenyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutEntityConnectionsDenyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutEntityConnectionsDenyResponseType putEntityConnectionsDenyResponseType;
    public PutEntityConnectionsDenyResponse withPutEntityConnectionsDenyResponseType(openapisdk.models.shared.PutEntityConnectionsDenyResponseType putEntityConnectionsDenyResponseType) {
        this.putEntityConnectionsDenyResponseType = putEntityConnectionsDenyResponseType;
        return this;
    }
    public Long statusCode;
    public PutEntityConnectionsDenyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}