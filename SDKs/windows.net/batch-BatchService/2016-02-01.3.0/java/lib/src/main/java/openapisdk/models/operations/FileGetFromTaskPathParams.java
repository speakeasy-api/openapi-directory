package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileGetFromTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileName")
    public String fileName;
    public FileGetFromTaskPathParams withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public FileGetFromTaskPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;
    public FileGetFromTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}