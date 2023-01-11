package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContact200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direct_numbers")
    public String[] directNumbers;
    public GetUserContact200ApplicationJson withDirectNumbers(String[] directNumbers) {
        this.directNumbers = directNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GetUserContact200ApplicationJson withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public String extensionNumber;
    public GetUserContact200ApplicationJson withExtensionNumber(String extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public GetUserContact200ApplicationJson withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetUserContact200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public GetUserContact200ApplicationJson withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public GetUserContact200ApplicationJson withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presence_status")
    public GetUserContact200ApplicationJsonPresenceStatusEnum presenceStatus;
    public GetUserContact200ApplicationJson withPresenceStatus(GetUserContact200ApplicationJsonPresenceStatusEnum presenceStatus) {
        this.presenceStatus = presenceStatus;
        return this;
    }
}