package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTrackingSources200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public GetTrackingSources200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_sources")
    public GetTrackingSources200ApplicationJsonTrackingSources[] trackingSources;
    public GetTrackingSources200ApplicationJson withTrackingSources(GetTrackingSources200ApplicationJsonTrackingSources[] trackingSources) {
        this.trackingSources = trackingSources;
        return this;
    }
}