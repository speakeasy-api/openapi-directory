package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CallLog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charge")
    public Double charge;
    public CallLog withCharge(Double charge) {
        this.charge = charge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_device_name")
    public String destinationDeviceName;
    public CallLog withDestinationDeviceName(String destinationDeviceName) {
        this.destinationDeviceName = destinationDeviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_extension")
    public Double destinationExtension;
    public CallLog withDestinationExtension(Double destinationExtension) {
        this.destinationExtension = destinationExtension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_sip_id")
    public String destinationSipId;
    public CallLog withDestinationSipId(String destinationSipId) {
        this.destinationSipId = destinationSipId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_user")
    public String destinationUser;
    public CallLog withDestinationUser(String destinationUser) {
        this.destinationUser = destinationUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_user_full_name")
    public String destinationUserFullName;
    public CallLog withDestinationUserFullName(String destinationUserFullName) {
        this.destinationUserFullName = destinationUserFullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public String direction;
    public CallLog withDirection(String direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public String end;
    public CallLog withEnd(String end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public CallLog withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CallLog withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_network")
    public Boolean inNetwork;
    public CallLog withInNetwork(Boolean inNetwork) {
        this.inNetwork = inNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("international")
    public Boolean international;
    public CallLog withInternational(Boolean international) {
        this.international = international;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Double length;
    public CallLog withLength(Double length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public Double rate;
    public CallLog withRate(Double rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recorded")
    public Boolean recorded;
    public CallLog withRecorded(Boolean recorded) {
        this.recorded = recorded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public String result;
    public CallLog withResult(String result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_device_name")
    public String sourceDeviceName;
    public CallLog withSourceDeviceName(String sourceDeviceName) {
        this.sourceDeviceName = sourceDeviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_extension")
    public Double sourceExtension;
    public CallLog withSourceExtension(Double sourceExtension) {
        this.sourceExtension = sourceExtension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_sip_id")
    public String sourceSipId;
    public CallLog withSourceSipId(String sourceSipId) {
        this.sourceSipId = sourceSipId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_user")
    public String sourceUser;
    public CallLog withSourceUser(String sourceUser) {
        this.sourceUser = sourceUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_user_full_name")
    public String sourceUserFullName;
    public CallLog withSourceUserFullName(String sourceUserFullName) {
        this.sourceUserFullName = sourceUserFullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public String start;
    public CallLog withStart(String start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public CallLog withTo(String to) {
        this.to = to;
        return this;
    }
}