<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * JobSchedulePatchParameter - Parameters for a CloudJobScheduleOperations.Patch request.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class JobSchedulePatchParameter
{
    /**
     * Specifies details of the jobs to be created on a schedule.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\JobSpecification $jobSpecification
     */
	#[\JMS\Serializer\Annotation\SerializedName('jobSpecification')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\JobSpecification')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?JobSpecification $jobSpecification = null;
    
    /**
     * A list of name-value pairs associated with the job schedule as metadata.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\MetadataItem> $metadata
     */
	#[\JMS\Serializer\Annotation\SerializedName('metadata')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\MetadataItem>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $metadata = null;
    
    /**
     * The schedule according to which jobs will be created
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Schedule $schedule
     */
	#[\JMS\Serializer\Annotation\SerializedName('schedule')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Schedule')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Schedule $schedule = null;
    
	public function __construct()
	{
		$this->jobSpecification = null;
		$this->metadata = null;
		$this->schedule = null;
	}
}
