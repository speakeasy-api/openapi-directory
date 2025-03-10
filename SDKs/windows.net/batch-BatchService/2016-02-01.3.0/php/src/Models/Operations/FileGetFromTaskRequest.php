<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class FileGetFromTaskRequest
{
    /**
     * Specify this header to perform the operation only if the resource has been modified since the specified date/time.
     * 
     * @var ?string $ifModifiedSince
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=If-Modified-Since')]
    public ?string $ifModifiedSince = null;
    
    /**
     * Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
     * 
     * @var ?string $ifUnmodifiedSince
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=If-Unmodified-Since')]
    public ?string $ifUnmodifiedSince = null;
    
    /**
     * Client API Version.
     * 
     * @var string $apiVersion
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=api-version')]
    public string $apiVersion;
    
    /**
     * The caller-generated request identity, in the form of a GUID with no decoration such as curly braces, e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
     * 
     * @var ?string $clientRequestId
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=client-request-id')]
    public ?string $clientRequestId = null;
    
    /**
     * The path to the task file that you want to get the content of.
     * 
     * @var string $fileName
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=fileName')]
    public string $fileName;
    
    /**
     * The id of the job that contains the task.
     * 
     * @var string $jobId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=jobId')]
    public string $jobId;
    
    /**
     * The time the request was issued. If not specified, this header will be automatically populated with the current system clock time.
     * 
     * @var ?string $ocpDate
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=ocp-date')]
    public ?string $ocpDate = null;
    
    /**
     * The byte range to be retrieved. The default is to retrieve the entire file. The format is startRange-endRange.
     * 
     * @var ?string $ocpRange
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=ocp-range')]
    public ?string $ocpRange = null;
    
    /**
     * Whether the server should return the client-request-id identifier in the response.
     * 
     * @var ?bool $returnClientRequestId
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=return-client-request-id')]
    public ?bool $returnClientRequestId = null;
    
    /**
     * The id of the task whose file you want to retrieve.
     * 
     * @var string $taskId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=taskId')]
    public string $taskId;
    
    /**
     * The maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
     * 
     * @var ?int $timeout
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=timeout')]
    public ?int $timeout = null;
    
	public function __construct()
	{
		$this->ifModifiedSince = null;
		$this->ifUnmodifiedSince = null;
		$this->apiVersion = "";
		$this->clientRequestId = null;
		$this->fileName = "";
		$this->jobId = "";
		$this->ocpDate = null;
		$this->ocpRange = null;
		$this->returnClientRequestId = null;
		$this->taskId = "";
		$this->timeout = null;
	}
}
