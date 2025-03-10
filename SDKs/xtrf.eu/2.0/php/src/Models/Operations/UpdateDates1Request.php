<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UpdateDates1Request
{
    /**
     * Updated dates of a given project..
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\ProjectDatesDTO $projectDatesDTO
     */
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\ProjectDatesDTO $projectDatesDTO;
    
    /**
     * project's internal identifier
     * 
     * @var string $projectId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=projectId')]
    public string $projectId;
    
	public function __construct()
	{
		$this->projectDatesDTO = new \OpenAPI\OpenAPI\Models\Shared\ProjectDatesDTO();
		$this->projectId = "";
	}
}
