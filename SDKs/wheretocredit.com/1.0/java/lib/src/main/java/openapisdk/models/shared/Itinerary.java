package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Itinerary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseFareUSD")
    public Double baseFareUSD;
    public Itinerary withBaseFareUsd(Double baseFareUSD) {
        this.baseFareUSD = baseFareUSD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Itinerary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("segments")
    public Segment[] segments;
    public Itinerary withSegments(Segment[] segments) {
        this.segments = segments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ticketingCarrier")
    public String ticketingCarrier;
    public Itinerary withTicketingCarrier(String ticketingCarrier) {
        this.ticketingCarrier = ticketingCarrier;
        return this;
    }
}