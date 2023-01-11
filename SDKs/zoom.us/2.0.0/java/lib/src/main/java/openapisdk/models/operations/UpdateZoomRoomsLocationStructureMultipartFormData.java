package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateZoomRoomsLocationStructureMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=structures,json")
    public String[] structures;
    public UpdateZoomRoomsLocationStructureMultipartFormData withStructures(String[] structures) {
        this.structures = structures;
        return this;
    }
}