package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy
 * Indicates who accepted the call.
**/
public class PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public String extensionNumber;
    public PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy withExtensionNumber(String extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_type")
    public String numberType;
    public PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy withNumberType(String numberType) {
        this.numberType = numberType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}