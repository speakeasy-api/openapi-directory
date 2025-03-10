/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetContacts1Request {
    /**
     * task's internal identifier
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=taskId")
    public String taskId;

    public GetContacts1Request withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
    
    public GetContacts1Request(@JsonProperty("taskId") String taskId) {
        this.taskId = taskId;
  }
}
