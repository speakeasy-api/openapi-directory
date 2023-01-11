package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetColoredPathwayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=color")
    public Object[] color;
    public GetGetColoredPathwayQueryParams withColor(Object[] color) {
        this.color = color;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fileType")
    public String fileType;
    public GetGetColoredPathwayQueryParams withFileType(String fileType) {
        this.fileType = fileType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetGetColoredPathwayFormatEnum format;
    public GetGetColoredPathwayQueryParams withFormat(GetGetColoredPathwayFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=graphId")
    public Object[] graphId;
    public GetGetColoredPathwayQueryParams withGraphId(Object[] graphId) {
        this.graphId = graphId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwId")
    public String pwId;
    public GetGetColoredPathwayQueryParams withPwId(String pwId) {
        this.pwId = pwId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=revision")
    public String revision;
    public GetGetColoredPathwayQueryParams withRevision(String revision) {
        this.revision = revision;
        return this;
    }
}