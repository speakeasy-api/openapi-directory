package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration
 * Account Settings: Integration.
**/
public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("box")
    public Boolean box;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration withBox(Boolean box) {
        this.box = box;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dropbox")
    public Boolean dropbox;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration withDropbox(Boolean dropbox) {
        this.dropbox = dropbox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_calendar")
    public Boolean googleCalendar;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration withGoogleCalendar(Boolean googleCalendar) {
        this.googleCalendar = googleCalendar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_drive")
    public Boolean googleDrive;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration withGoogleDrive(Boolean googleDrive) {
        this.googleDrive = googleDrive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubi")
    public Boolean kubi;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration withKubi(Boolean kubi) {
        this.kubi = kubi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microsoft_one_drive")
    public Boolean microsoftOneDrive;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsIntegration withMicrosoftOneDrive(Boolean microsoftOneDrive) {
        this.microsoftOneDrive = microsoftOneDrive;
        return this;
    }
}