package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGroupSettingsMultipartFormData1Profile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_storage_location")
    public UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation recordingStorageLocation;
    public UpdateGroupSettingsMultipartFormData1Profile withRecordingStorageLocation(UpdateGroupSettingsMultipartFormData1ProfileRecordingStorageLocation recordingStorageLocation) {
        this.recordingStorageLocation = recordingStorageLocation;
        return this;
    }
}