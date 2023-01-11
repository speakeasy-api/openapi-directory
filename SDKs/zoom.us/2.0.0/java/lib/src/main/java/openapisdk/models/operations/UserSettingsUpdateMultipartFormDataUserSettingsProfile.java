package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettingsUpdateMultipartFormDataUserSettingsProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_storage_location")
    public UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation recordingStorageLocation;
    public UserSettingsUpdateMultipartFormDataUserSettingsProfile withRecordingStorageLocation(UserSettingsUpdateMultipartFormDataUserSettingsProfileRecordingStorageLocation recordingStorageLocation) {
        this.recordingStorageLocation = recordingStorageLocation;
        return this;
    }
}