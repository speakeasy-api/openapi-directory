package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement
 * This object represents the minimum password requirements set for recordings via Account Recording Settings.
**/
public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_letter")
    public Boolean haveLetter;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement withHaveLetter(Boolean haveLetter) {
        this.haveLetter = haveLetter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_number")
    public Boolean haveNumber;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement withHaveNumber(Boolean haveNumber) {
        this.haveNumber = haveNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_special_character")
    public Boolean haveSpecialCharacter;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement withHaveSpecialCharacter(Boolean haveSpecialCharacter) {
        this.haveSpecialCharacter = haveSpecialCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement withLength(Long length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("only_allow_numeric")
    public Boolean onlyAllowNumeric;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement withOnlyAllowNumeric(Boolean onlyAllowNumeric) {
        this.onlyAllowNumeric = onlyAllowNumeric;
        return this;
    }
}