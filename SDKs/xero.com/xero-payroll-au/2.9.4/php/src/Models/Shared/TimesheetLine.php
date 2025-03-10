<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class TimesheetLine
{
    /**
     * The Xero identifier for an Earnings Rate
     * 
     * @var ?string $earningsRateID
     */
	#[\JMS\Serializer\Annotation\SerializedName('EarningsRateID')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $earningsRateID = null;
    
    /**
     * The number of units on a timesheet line
     * 
     * @var ?array<float> $numberOfUnits
     */
	#[\JMS\Serializer\Annotation\SerializedName('NumberOfUnits')]
    #[\JMS\Serializer\Annotation\Type('array<float>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $numberOfUnits = null;
    
    /**
     * The Xero identifier for a Tracking Category. The TrackingOptionID must belong to the TrackingCategory selected as TimesheetCategories under Payroll Settings.
     * 
     * @var ?string $trackingItemID
     */
	#[\JMS\Serializer\Annotation\SerializedName('TrackingItemID')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $trackingItemID = null;
    
    /**
     * Last modified timestamp
     * 
     * @var ?string $updatedDateUTC
     */
	#[\JMS\Serializer\Annotation\SerializedName('UpdatedDateUTC')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $updatedDateUTC = null;
    
	public function __construct()
	{
		$this->earningsRateID = null;
		$this->numberOfUnits = null;
		$this->trackingItemID = null;
		$this->updatedDateUTC = null;
	}
}
