package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement
 * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
**/
public class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_letter")
    public Boolean haveLetter;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement withHaveLetter(Boolean haveLetter) {
        this.haveLetter = haveLetter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_number")
    public Boolean haveNumber;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement withHaveNumber(Boolean haveNumber) {
        this.haveNumber = haveNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("have_special_character")
    public Boolean haveSpecialCharacter;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement withHaveSpecialCharacter(Boolean haveSpecialCharacter) {
        this.haveSpecialCharacter = haveSpecialCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Long length;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement withLength(Long length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("only_allow_numeric")
    public Boolean onlyAllowNumeric;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement withOnlyAllowNumeric(Boolean onlyAllowNumeric) {
        this.onlyAllowNumeric = onlyAllowNumeric;
        return this;
    }
}