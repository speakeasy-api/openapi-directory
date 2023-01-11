package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordingSettingsUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RecordingSettingsUpdateRecordingSettings recordingSettings;
    public RecordingSettingsUpdateRequests withRecordingSettings(RecordingSettingsUpdateRecordingSettings recordingSettings) {
        this.recordingSettings = recordingSettings;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public RecordingSettingsUpdateRecordingSettings recordingSettings1;
    public RecordingSettingsUpdateRequests withRecordingSettings1(RecordingSettingsUpdateRecordingSettings recordingSettings1) {
        this.recordingSettings1 = recordingSettings1;
        return this;
    }
}