package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettings200ApplicationJson3PasswordRequirement
 * This object refers to the [enhanced password rules](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_bf8a25f6-9a66-447a-befd-f02ed3404f89) that allows Zoom account admins and owners to apply extra requiremets to the users' Zoom login password. 
**/
public class AccountSettings200ApplicationJson3PasswordRequirement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consecutive_characters_length")
    public Long consecutiveCharactersLength;
    public AccountSettings200ApplicationJson3PasswordRequirement withConsecutiveCharactersLength(Long consecutiveCharactersLength) {
        this.consecutiveCharactersLength = consecutiveCharactersLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_special_character")
    public Boolean haveSpecialCharacter;
    public AccountSettings200ApplicationJson3PasswordRequirement withHaveSpecialCharacter(Boolean haveSpecialCharacter) {
        this.haveSpecialCharacter = haveSpecialCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimum_password_length")
    public Long minimumPasswordLength;
    public AccountSettings200ApplicationJson3PasswordRequirement withMinimumPasswordLength(Long minimumPasswordLength) {
        this.minimumPasswordLength = minimumPasswordLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weak_enhance_detection")
    public Boolean weakEnhanceDetection;
    public AccountSettings200ApplicationJson3PasswordRequirement withWeakEnhanceDetection(Boolean weakEnhanceDetection) {
        this.weakEnhanceDetection = weakEnhanceDetection;
        return this;
    }
}