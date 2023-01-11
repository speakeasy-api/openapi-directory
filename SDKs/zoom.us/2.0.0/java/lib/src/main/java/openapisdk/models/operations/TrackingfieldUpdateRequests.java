package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrackingfieldUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TrackingfieldUpdateTrackingField trackingField;
    public TrackingfieldUpdateRequests withTrackingField(TrackingfieldUpdateTrackingField trackingField) {
        this.trackingField = trackingField;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public TrackingfieldUpdateTrackingField trackingField1;
    public TrackingfieldUpdateRequests withTrackingField1(TrackingfieldUpdateTrackingField trackingField1) {
        this.trackingField1 = trackingField1;
        return this;
    }
}