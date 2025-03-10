<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CloudJobListResult - Response to a CloudJobOperation.List or ListFromJobSchedule request.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CloudJobListResult
{
    /**
     * The URL to get the next set of results.
     * 
     * @var ?string $odataNextLink
     */
	#[\JMS\Serializer\Annotation\SerializedName('odata.nextLink')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $odataNextLink = null;
    
    /**
     * The list of jobs.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\CloudJob> $value
     */
	#[\JMS\Serializer\Annotation\SerializedName('value')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\CloudJob>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $value = null;
    
	public function __construct()
	{
		$this->odataNextLink = null;
		$this->value = null;
	}
}
