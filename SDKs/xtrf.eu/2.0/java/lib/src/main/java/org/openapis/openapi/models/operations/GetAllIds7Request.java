/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetAllIds7Request {
    /**
     * only quotes modified since this timestamp
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedSince")
    public Long updatedSince;

    public GetAllIds7Request withUpdatedSince(Long updatedSince) {
        this.updatedSince = updatedSince;
        return this;
    }
    
    public GetAllIds7Request(){}
}
