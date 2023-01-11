package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_storage_location")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation recordingStorageLocation;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfile withRecordingStorageLocation(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsProfileRecordingStorageLocation recordingStorageLocation) {
        this.recordingStorageLocation = recordingStorageLocation;
        return this;
    }
}