package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignSipTrunksMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=sip_trunks,json")
    public AssignSipTrunksMultipartFormDataSipTrunks[] sipTrunks;
    public AssignSipTrunksMultipartFormData1 withSipTrunks(AssignSipTrunksMultipartFormDataSipTrunks[] sipTrunks) {
        this.sipTrunks = sipTrunks;
        return this;
    }
}