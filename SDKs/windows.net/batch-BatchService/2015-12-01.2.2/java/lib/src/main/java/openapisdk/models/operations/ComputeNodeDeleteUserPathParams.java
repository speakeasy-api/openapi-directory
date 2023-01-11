package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComputeNodeDeleteUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public ComputeNodeDeleteUserPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public ComputeNodeDeleteUserPathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userName")
    public String userName;
    public ComputeNodeDeleteUserPathParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}