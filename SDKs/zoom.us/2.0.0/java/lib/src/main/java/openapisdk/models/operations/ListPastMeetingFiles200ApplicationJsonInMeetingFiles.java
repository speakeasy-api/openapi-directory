package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPastMeetingFiles200ApplicationJsonInMeetingFiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_url")
    public String downloadUrl;
    public ListPastMeetingFiles200ApplicationJsonInMeetingFiles withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_name")
    public String fileName;
    public ListPastMeetingFiles200ApplicationJsonInMeetingFiles withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_size")
    public Long fileSize;
    public ListPastMeetingFiles200ApplicationJsonInMeetingFiles withFileSize(Long fileSize) {
        this.fileSize = fileSize;
        return this;
    }
}