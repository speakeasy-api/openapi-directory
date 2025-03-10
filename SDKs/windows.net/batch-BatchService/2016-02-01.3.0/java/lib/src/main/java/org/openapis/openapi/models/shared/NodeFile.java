/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NodeFile - Information about a file or directory on a compute node.
 */
public class NodeFile {
    /**
     * Whether the object represents a directory.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDirectory")
    public Boolean isDirectory;

    public NodeFile withIsDirectory(Boolean isDirectory) {
        this.isDirectory = isDirectory;
        return this;
    }
    
    /**
     * The file path.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public NodeFile withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * The properties of a file on a compute node.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public FileProperties properties;

    public NodeFile withProperties(FileProperties properties) {
        this.properties = properties;
        return this;
    }
    
    /**
     * The URL of the file.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;

    public NodeFile withUrl(String url) {
        this.url = url;
        return this;
    }
    
    public NodeFile(){}
}
