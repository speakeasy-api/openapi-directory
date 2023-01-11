package openapisdk.models.operations;



public class GetRSforSubscChargeResponse {
    public String contentType;
    public GetRSforSubscChargeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetrsDetailsByChargeType getrsDetailsByChargeType;
    public GetRSforSubscChargeResponse withGetrsDetailsByChargeType(openapisdk.models.shared.GetrsDetailsByChargeType getrsDetailsByChargeType) {
        this.getrsDetailsByChargeType = getrsDetailsByChargeType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRSforSubscChargeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRSforSubscChargeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}