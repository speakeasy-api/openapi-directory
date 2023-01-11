package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPastWebinarFiles200ApplicationJsonInMeetingFiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_url")
    public String downloadUrl;
    public ListPastWebinarFiles200ApplicationJsonInMeetingFiles withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_name")
    public String fileName;
    public ListPastWebinarFiles200ApplicationJsonInMeetingFiles withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_size")
    public Long fileSize;
    public ListPastWebinarFiles200ApplicationJsonInMeetingFiles withFileSize(Long fileSize) {
        this.fileSize = fileSize;
        return this;
    }
}