package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Segment {
    @JsonProperty("bookingClass")
    public String bookingClass;
    public Segment withBookingClass(String bookingClass) {
        this.bookingClass = bookingClass;
        return this;
    }
    @JsonProperty("carrier")
    public String carrier;
    public Segment withCarrier(String carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("departure")
    public OffsetDateTime departure;
    public Segment withDeparture(OffsetDateTime departure) {
        this.departure = departure;
        return this;
    }
    @JsonProperty("destination")
    public String destination;
    public Segment withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distance")
    public Double distance;
    public Segment withDistance(Double distance) {
        this.distance = distance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flightNumber")
    public Integer flightNumber;
    public Segment withFlightNumber(Integer flightNumber) {
        this.flightNumber = flightNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingCarrier")
    public String operatingCarrier;
    public Segment withOperatingCarrier(String operatingCarrier) {
        this.operatingCarrier = operatingCarrier;
        return this;
    }
    @JsonProperty("origin")
    public String origin;
    public Segment withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
}