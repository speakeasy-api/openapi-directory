package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportCloudRecording200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording_storage")
    public Object[] cloudRecordingStorage;
    public ReportCloudRecording200ApplicationJson withCloudRecordingStorage(Object[] cloudRecordingStorage) {
        this.cloudRecordingStorage = cloudRecordingStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public LocalDate from;
    public ReportCloudRecording200ApplicationJson withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public LocalDate to;
    public ReportCloudRecording200ApplicationJson withTo(LocalDate to) {
        this.to = to;
        return this;
    }
}