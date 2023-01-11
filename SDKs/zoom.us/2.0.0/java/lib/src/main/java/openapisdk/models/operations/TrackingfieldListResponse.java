package openapisdk.models.operations;



public class TrackingfieldListResponse {
    public byte[] body;
    public TrackingfieldListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TrackingfieldListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TrackingfieldListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TrackingfieldListTrackingFieldList trackingFieldList;
    public TrackingfieldListResponse withTrackingFieldList(TrackingfieldListTrackingFieldList trackingFieldList) {
        this.trackingFieldList = trackingFieldList;
        return this;
    }
}