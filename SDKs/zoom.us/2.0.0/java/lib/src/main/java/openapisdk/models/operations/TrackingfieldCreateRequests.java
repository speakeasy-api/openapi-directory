package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrackingfieldCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TrackingfieldCreateTrackingField trackingField;
    public TrackingfieldCreateRequests withTrackingField(TrackingfieldCreateTrackingField trackingField) {
        this.trackingField = trackingField;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public TrackingfieldCreateTrackingField trackingField1;
    public TrackingfieldCreateRequests withTrackingField1(TrackingfieldCreateTrackingField trackingField1) {
        this.trackingField1 = trackingField1;
        return this;
    }
}