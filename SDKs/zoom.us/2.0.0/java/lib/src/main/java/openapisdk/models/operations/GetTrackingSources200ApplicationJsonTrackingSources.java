package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTrackingSources200ApplicationJsonTrackingSources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetTrackingSources200ApplicationJsonTrackingSources withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_count")
    public Long registrationCount;
    public GetTrackingSources200ApplicationJsonTrackingSources withRegistrationCount(Long registrationCount) {
        this.registrationCount = registrationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_name")
    public String sourceName;
    public GetTrackingSources200ApplicationJsonTrackingSources withSourceName(String sourceName) {
        this.sourceName = sourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_url")
    public String trackingUrl;
    public GetTrackingSources200ApplicationJsonTrackingSources withTrackingUrl(String trackingUrl) {
        this.trackingUrl = trackingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visitor_count")
    public Long visitorCount;
    public GetTrackingSources200ApplicationJsonTrackingSources withVisitorCount(Long visitorCount) {
        this.visitorCount = visitorCount;
        return this;
    }
}