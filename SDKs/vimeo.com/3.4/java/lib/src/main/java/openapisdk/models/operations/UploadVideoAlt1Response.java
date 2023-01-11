package openapisdk.models.operations;



public class UploadVideoAlt1Response {
    public String contentType;
    public UploadVideoAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UploadVideoAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public UploadVideoAlt1Response withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Video video;
    public UploadVideoAlt1Response withVideo(openapisdk.models.shared.Video video) {
        this.video = video;
        return this;
    }
}