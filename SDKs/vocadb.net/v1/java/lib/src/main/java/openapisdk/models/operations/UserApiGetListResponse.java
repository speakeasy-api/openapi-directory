package openapisdk.models.operations;



public class UserApiGetListResponse {
    public byte[] body;
    public UserApiGetListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiGetListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultUserForApiContract partialFindResultUserForApiContract;
    public UserApiGetListResponse withPartialFindResultUserForApiContract(openapisdk.models.shared.PartialFindResultUserForApiContract partialFindResultUserForApiContract) {
        this.partialFindResultUserForApiContract = partialFindResultUserForApiContract;
        return this;
    }
    public Long statusCode;
    public UserApiGetListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}