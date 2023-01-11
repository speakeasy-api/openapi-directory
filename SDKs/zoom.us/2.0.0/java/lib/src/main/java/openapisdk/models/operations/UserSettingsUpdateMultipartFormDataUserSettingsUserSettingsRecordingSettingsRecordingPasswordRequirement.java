package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement
 * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
**/
public class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_letter")
    public Boolean haveLetter;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement withHaveLetter(Boolean haveLetter) {
        this.haveLetter = haveLetter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_number")
    public Boolean haveNumber;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement withHaveNumber(Boolean haveNumber) {
        this.haveNumber = haveNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_special_character")
    public Boolean haveSpecialCharacter;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement withHaveSpecialCharacter(Boolean haveSpecialCharacter) {
        this.haveSpecialCharacter = haveSpecialCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement withLength(Long length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("only_allow_numeric")
    public Boolean onlyAllowNumeric;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement withOnlyAllowNumeric(Boolean onlyAllowNumeric) {
        this.onlyAllowNumeric = onlyAllowNumeric;
        return this;
    }
}