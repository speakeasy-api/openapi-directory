package openapisdk.models.operations;



public class GetFreeBetsResponse {
    public String contentType;
    public GetFreeBetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFreeBetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FreeBetDetail[] freeBet;
    public GetFreeBetsResponse withFreeBet(openapisdk.models.shared.FreeBetDetail[] freeBet) {
        this.freeBet = freeBet;
        return this;
    }
}