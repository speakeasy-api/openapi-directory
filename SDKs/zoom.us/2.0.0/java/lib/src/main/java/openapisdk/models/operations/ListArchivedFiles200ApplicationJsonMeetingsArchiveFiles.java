package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_url")
    public String downloadUrl;
    public ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_extension")
    public String fileExtension;
    public ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles withFileExtension(String fileExtension) {
        this.fileExtension = fileExtension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_size")
    public Long fileSize;
    public ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles withFileSize(Long fileSize) {
        this.fileSize = fileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_type")
    public String fileType;
    public ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles withFileType(String fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_type")
    public String recordingType;
    public ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles withRecordingType(String recordingType) {
        this.recordingType = recordingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles withStatus(String status) {
        this.status = status;
        return this;
    }
}