package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackingfieldListTrackingFieldList
 * Tracking Field List
**/
public class TrackingfieldListTrackingFieldList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public TrackingfieldListTrackingFieldList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_fields")
    public TrackingfieldListTrackingFieldListTrackingField[] trackingFields;
    public TrackingfieldListTrackingFieldList withTrackingFields(TrackingfieldListTrackingFieldListTrackingField[] trackingFields) {
        this.trackingFields = trackingFields;
        return this;
    }
}