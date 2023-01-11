package openapisdk.models.operations;



public class UserApiGetSongListsResponse {
    public byte[] body;
    public UserApiGetSongListsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiGetSongListsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultSongListForApiContract partialFindResultSongListForApiContract;
    public UserApiGetSongListsResponse withPartialFindResultSongListForApiContract(openapisdk.models.shared.PartialFindResultSongListForApiContract partialFindResultSongListForApiContract) {
        this.partialFindResultSongListForApiContract = partialFindResultSongListForApiContract;
        return this;
    }
    public Long statusCode;
    public UserApiGetSongListsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}