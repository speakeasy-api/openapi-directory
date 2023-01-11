package openapisdk.models.operations;



public class TrackingfieldGetResponse {
    public byte[] body;
    public TrackingfieldGetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TrackingfieldGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TrackingfieldGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TrackingfieldGetTrackingField trackingField;
    public TrackingfieldGetResponse withTrackingField(TrackingfieldGetTrackingField trackingField) {
        this.trackingField = trackingField;
        return this;
    }
}