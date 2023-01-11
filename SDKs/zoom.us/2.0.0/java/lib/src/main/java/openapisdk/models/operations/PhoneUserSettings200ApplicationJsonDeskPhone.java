package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhoneUserSettings200ApplicationJsonDeskPhone
 * Contains information on phones or devices provisioned for the user.
**/
public class PhoneUserSettings200ApplicationJsonDeskPhone {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keys_positions")
    public PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions keysPositions;
    public PhoneUserSettings200ApplicationJsonDeskPhone withKeysPositions(PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions keysPositions) {
        this.keysPositions = keysPositions;
        return this;
    }
}