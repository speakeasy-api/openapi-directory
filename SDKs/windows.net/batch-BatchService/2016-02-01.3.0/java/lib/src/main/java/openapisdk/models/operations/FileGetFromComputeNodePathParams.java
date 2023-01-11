package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileGetFromComputeNodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileName")
    public String fileName;
    public FileGetFromComputeNodePathParams withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public FileGetFromComputeNodePathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public FileGetFromComputeNodePathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}