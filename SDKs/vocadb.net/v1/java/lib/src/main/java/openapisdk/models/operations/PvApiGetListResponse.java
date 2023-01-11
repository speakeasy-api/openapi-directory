package openapisdk.models.operations;



public class PvApiGetListResponse {
    public byte[] body;
    public PvApiGetListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PvApiGetListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultPvForSongContract partialFindResultPVForSongContract;
    public PvApiGetListResponse withPartialFindResultPvForSongContract(openapisdk.models.shared.PartialFindResultPvForSongContract partialFindResultPVForSongContract) {
        this.partialFindResultPVForSongContract = partialFindResultPVForSongContract;
        return this;
    }
    public Long statusCode;
    public PvApiGetListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}