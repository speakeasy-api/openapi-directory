package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileDeleteFromTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileName")
    public String fileName;
    public FileDeleteFromTaskPathParams withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public FileDeleteFromTaskPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public FileDeleteFromTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}