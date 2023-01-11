package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountSettings200ApplicationJsonAccountSettingsProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_storage_location")
    public AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation recordingStorageLocation;
    public AccountSettings200ApplicationJsonAccountSettingsProfile withRecordingStorageLocation(AccountSettings200ApplicationJsonAccountSettingsProfileRecordingStorageLocation recordingStorageLocation) {
        this.recordingStorageLocation = recordingStorageLocation;
        return this;
    }
}